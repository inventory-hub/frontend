
alter table "public"."accounts" add column "salt" text
 null;

alter table "public"."accounts" add column "password_hash" text
 null;

CREATE TABLE "public"."roles" ("role" text NOT NULL, PRIMARY KEY ("role") );COMMENT ON TABLE "public"."roles" IS E'enum table';

insert into "public"."roles"
values
    ('admin'),
    ('manager'),
    ('user'),
    ('readonly_user')
;


alter table "public"."users" add column "role" text
 not null default 'user';

alter table "public"."users"
  add constraint "users_role_fkey"
  foreign key ("role")
  references "public"."roles"
  ("role") on update restrict on delete restrict;
