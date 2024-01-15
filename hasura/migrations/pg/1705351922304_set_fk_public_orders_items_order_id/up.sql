alter table "public"."orders_items"
  add constraint "orders_items_order_id_fkey"
  foreign key ("order_id")
  references "public"."orders"
  ("id") on update no action on delete cascade;
