CREATE TABLE "public"."category" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("name"), CONSTRAINT "chk_category_name_2plus_chars" CHECK (length(name) >= 2));COMMENT ON TABLE "public"."category" IS E'the categories for the products';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
