import { type NextApiHandler } from "next";
import { gql } from "graphql-request";

import { withAuth } from "~/server/auth";
import { type GraphQLErrors, graphqlRequest } from "~/server/graphql";
import {
  type CompleteOrderOutput,
  type CompleteOrderInput,
  Roles_Enum,
  type GetOrderItemsServerQuery,
  type GetOrderItemsServerQueryVariables,
  type UpdateProductQuantityServerMutation,
  type UpdateProductQuantityServerMutationVariables,
  type Products_Updates,
} from "~/generated/graphql";

const GET_ORDER_ITEMS_SERVER_QUERY = gql`
  query GetOrderItemsServer($id: uuid!) {
    order: orders_by_pk(id: $id) {
      id
      orders_items {
        count
        product {
          id
          quantity
        }
      }
    }
  }
`;

const UPDATE_PRODUCT_QUANTITY_SERVER_MUTATION = gql`
  mutation UpdateProductQuantityServer(
    $order_id: uuid!
    $product_updates: [products_updates!]!
  ) {
    update_products_many(updates: $product_updates) {
      affected_rows
    }
    update_orders_by_pk(
      pk_columns: { id: $order_id }
      _set: { state: Completed }
    ) {
      id
    }
  }
`;

const handler: NextApiHandler<CompleteOrderOutput | GraphQLErrors> = async (
  req,
  res
) => {
  const { id } = req.body.input.data as CompleteOrderInput;
  const { order } = await graphqlRequest<
    GetOrderItemsServerQuery,
    GetOrderItemsServerQueryVariables
  >(GET_ORDER_ITEMS_SERVER_QUERY, {
    id,
  });
  if (!order) {
    return res.status(404).json({ errors: [{ message: "Order not found" }] });
  }

  const updatedCountProducts = order.orders_items.map((orderItem) => {
    const { product } = orderItem;
    return {
      id: product.id,
      quantity: product.quantity - orderItem.count,
    };
  });

  const hasNotEnoughStock = updatedCountProducts.some(
    (product) => product.quantity < 0
  );
  if (hasNotEnoughStock) {
    return res.status(400).json({
      errors: [{ message: "Some products are understocked" }],
    });
  }

  const productUpdates: Products_Updates[] = updatedCountProducts.map(
    (product) => ({
      _set: { quantity: product.quantity },
      where: { id: { _eq: product.id } },
    })
  );

  await graphqlRequest<
    UpdateProductQuantityServerMutation,
    UpdateProductQuantityServerMutationVariables
  >(UPDATE_PRODUCT_QUANTITY_SERVER_MUTATION, {
    order_id: id,
    product_updates: productUpdates,
  });

  res.status(200).json({ id });
};

export default withAuth([Roles_Enum.Admin, Roles_Enum.Manager])(handler);
