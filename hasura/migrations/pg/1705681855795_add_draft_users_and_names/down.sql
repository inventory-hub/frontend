
DROP FUNCTION public.get_full_name(users);

alter table "public"."users" drop column "first_name"

alter table "public"."users" drop column "last_name"

DROP TABLE "public"."draft_users";
