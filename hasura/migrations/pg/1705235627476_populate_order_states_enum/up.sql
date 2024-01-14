INSERT INTO "public"."order_states"("state", "description")
VALUES 
    (E'Draft', E'Order not ready for approval'),
    (E'AwaitingApproval', E'Order can be approved by a higher up'),
    (E'Cancelled', E'Cancelled order kept for history'),
    (E'Completed', E'Completed order kept for history')
;
