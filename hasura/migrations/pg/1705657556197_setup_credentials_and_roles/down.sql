

alter table "public"."users" drop constraint "users_role_fkey";
alter table "public"."users" drop column "role" 

truncate table "public"."roles"

DROP TABLE "public"."roles";

alter table "public"."accounts" drop column "password_hash"
alter table "public"."accounts" drop column "salt" text

