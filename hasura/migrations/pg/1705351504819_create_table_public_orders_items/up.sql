CREATE TABLE "public"."orders_items" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "product_id" uuid NOT NULL, "order_id" uuid NOT NULL, "count" integer NOT NULL, PRIMARY KEY ("id") , CONSTRAINT "chx_order_items_count_positive" CHECK ("count" > 0));COMMENT ON TABLE "public"."orders_items" IS E'product order compound items';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
