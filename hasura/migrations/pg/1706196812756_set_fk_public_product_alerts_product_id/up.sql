alter table "public"."product_alerts"
  add constraint "product_alerts_product_id_fkey"
  foreign key ("product_id")
  references "public"."products"
  ("id") on update cascade on delete cascade;
