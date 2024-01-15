alter table "public"."orders_items" add constraint "orders_items_product_id_order_id_key" unique ("product_id", "order_id");
