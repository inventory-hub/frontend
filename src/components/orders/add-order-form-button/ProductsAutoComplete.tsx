import { gql } from "graphql-request";
import { type ChangeEventHandler, useMemo, useState, useCallback } from "react";
import { useQuery } from "urql";

import AutoComplete from "~/components/ui/AutoComplete";
import { throttle } from "~/utilities/rate-limiting";
import {
  type SearchProductsQuery,
  type SearchProductsQueryVariables,
} from "~/generated/graphql";

const SEARCH_PRODUCTS_QUERY = gql`
  query SearchProducts($search: String!) {
    products(
      where: {
        _or: [{ name: { _ilike: $search }, hash_name: { _ilike: $search } }]
      }
      limit: 5
    ) {
      id
      name
      hash_name
      imageUrl
      quantity
      orders_items_aggregate(
        where: { order: { state: { _eq: AwaitingApproval } } }
      ) {
        aggregate {
          sum {
            count
          }
        }
      }
    }
    products_aggregate(
      where: { name: { _ilike: $search }, hash_name: { _ilike: $search } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

export type ProductSelection = SearchProductsQuery["products"][number];

type Props = {
  onChange: (value: ProductSelection) => void;
};

const ProductsAutoComplete = ({ onChange }: Props) => {
  const [search, setSearch] = useState("");
  const onInputChange: ChangeEventHandler<HTMLInputElement> = useMemo(
    () => throttle((e) => setSearch(e.target.value), 500),
    []
  );

  const [{ data: productsData }] = useQuery<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >({
    query: SEARCH_PRODUCTS_QUERY,
    variables: {
      search: `%${search}%`,
    },
  });

  const handleChange = useCallback(
    (value: string) => {
      const chosenOption = productsData?.products.find(
        (option) => option.id === value
      );

      if (chosenOption) {
        onChange(chosenOption);
      }
    },
    [onChange, productsData?.products]
  );

  const totalOptions = productsData?.products_aggregate?.aggregate?.count ?? 0;
  const options =
    productsData?.products?.map((product) => ({
      label: product.name,
      value: product.id,
    })) ?? [];

  return (
    <AutoComplete
      w={60}
      options={options}
      onChange={handleChange}
      onInputChange={onInputChange}
      totalOptions={totalOptions}
      isServerFiltered
      placeholder="Search for a product..."
    />
  );
};

export default ProductsAutoComplete;
