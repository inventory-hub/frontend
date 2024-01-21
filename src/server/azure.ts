import { QueueClient } from "@azure/storage-queue";
import { BlobServiceClient } from "@azure/storage-blob";
const CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING!;

export const queueClient = new QueueClient(
  CONNECTION_STRING,
  "invitation-messages"
);

export const blobServiceClient =
  BlobServiceClient.fromConnectionString(CONNECTION_STRING);
export const blobContainerClient =
  blobServiceClient.getContainerClient("uploads");
