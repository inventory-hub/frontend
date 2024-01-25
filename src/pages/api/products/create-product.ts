import { type NextApiHandler } from "next";
import { gql } from "graphql-request";
import { customAlphabet } from "nanoid";
import sharp from "sharp";

import { graphqlRequest } from "~/server/graphql";
import {
  type InsertProductMutation,
  type InsertProductMutationVariables,
  type CreateProductInput,
  type CreateProductOutput,
} from "~/generated/graphql";
import { type GraphQLErrors } from "~/server/graphql";
import { blobContainerClient } from "~/server/azure";
import { withAuth } from "~/server/auth";

const CDN_PREFIX = "https://cdn.inventory-hub.space/uploads/";
const NO_IMAGE_URL = `${CDN_PREFIX}placeholder.jpg`;

const nanoId = customAlphabet("123456789", 6);

const INSERT_PRODUCT_MUTATION = gql`
  mutation InsertProduct($product: products_insert_input!) {
    insert_products_one(object: $product) {
      id
    }
  }
`;

const getHashName = (productName: string) =>
  productName
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .concat("-", nanoId());

const handler: NextApiHandler<CreateProductOutput | GraphQLErrors> = async (
  req,
  res
) => {
  if (req.method !== "POST") {
    res.status(405).json({ errors: [{ message: "Method not allowed" }] });
    return;
  }
  const { name, category_id, description, initial_count, image_base64 } = req
    .body.input.product as CreateProductInput;

  const hash_name = getHashName(name);

  const imageUrl = image_base64
    ? `${CDN_PREFIX}${hash_name}.webp`
    : NO_IMAGE_URL;

  if (image_base64) {
    const [, base64Raw] = image_base64.replace(/^data:/, "").split(";");
    const base64 = base64Raw.replace(/^base64,/, "");
    const imageBuffer = Buffer.from(base64, "base64");
    const resizedImageBuffer = await sharp(imageBuffer)
      .resize({
        width: 256,
        height: 256,
        fit: "cover",
      })
      .webp()
      .toBuffer();
    await blobContainerClient.uploadBlockBlob(
      `${hash_name}.webp`,
      resizedImageBuffer,
      resizedImageBuffer.length,
      {
        blobHTTPHeaders: {
          blobContentType: "image/webp",
        },
      }
    );

    console.log("Uploaded image to Azure Blob Storage");
  }

  const response = await graphqlRequest<
    InsertProductMutation,
    InsertProductMutationVariables
  >(INSERT_PRODUCT_MUTATION, {
    product: {
      name,
      category_id,
      description,
      imageUrl,
      hash_name,
      quantity: initial_count,
    },
  });

  const id = response.insert_products_one?.id!;
  res.status(200).json({ id });
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb",
    },
  },
};

export default withAuth()(handler);
