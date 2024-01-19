
CREATE TABLE "public"."draft_users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "email" text NOT NULL, "first_name" text NOT NULL, "last_name" text NOT NULL, "role" text NOT NULL, "invitation_token" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("role") REFERENCES "public"."roles"("role") ON UPDATE restrict ON DELETE restrict, UNIQUE ("email"));COMMENT ON TABLE "public"."draft_users" IS E'users invited to the platform';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

alter table "public"."users" add column "first_name" text
 not null;

alter table "public"."users" add column "last_name" text
 not null;

CREATE OR REPLACE FUNCTION public.get_full_name(user_row users)
RETURNS TEXT AS $$
  SELECT user_row.first_name || ' ' || user_row.last_name
$$ LANGUAGE sql STABLE;
