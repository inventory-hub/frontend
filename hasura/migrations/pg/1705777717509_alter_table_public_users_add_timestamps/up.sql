
alter table "public"."users" add column "created_at" timestamptz
 null default now();

alter table "public"."users" add column "deleted_at" timestamptz
 null;
