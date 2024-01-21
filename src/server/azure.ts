import { QueueClient } from "@azure/storage-queue";
const CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING!;

export const queueClient = new QueueClient(
  CONNECTION_STRING,
  "invitation-messages"
);
