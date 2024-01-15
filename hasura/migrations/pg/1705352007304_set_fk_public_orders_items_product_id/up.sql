alter table "public"."orders_items"
  add constraint "orders_items_product_id_fkey"
  foreign key ("product_id")
  references "public"."products"
  ("id") on update no action on delete cascade;
