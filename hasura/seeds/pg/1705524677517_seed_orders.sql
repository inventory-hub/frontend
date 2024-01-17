SET check_function_bodies = false;
INSERT INTO public.orders (id, created_at, updated_at, state, client_name) VALUES 
    ('e2716fce-fe1f-4f74-a4d9-6f33fb6cf7f1', '2024-01-17 20:42:01.332132+00', '2024-01-17 20:42:01.332132+00', 'Draft', 'Self'),
    ('cc0a8585-60b5-4629-ba0a-5e32ff445bc4', '2024-01-17 20:42:39.171715+00', '2024-01-17 20:42:39.171715+00', 'Cancelled', 'Efes'),
    ('aecfb45c-682b-4dc2-8160-92c13aa06713', '2024-01-17 20:42:54.718403+00', '2024-01-17 20:42:54.718403+00', 'AwaitingApproval', 'Efes'),
    ('cd613efe-7293-4102-980e-e53e8db21dca', '2024-01-17 20:43:11.894443+00', '2024-01-17 20:43:11.894443+00', 'Completed', 'FAF ONG');

INSERT INTO public.orders_items (id, product_id, order_id, count) VALUES 
    ('8d3c53d5-6070-43c3-b01f-857ab61c1a89', '57e691b3-ba2e-4ead-99d1-2db7e9f60584', 'e2716fce-fe1f-4f74-a4d9-6f33fb6cf7f1', 1),
    ('99965ca4-00a7-40f1-b809-38042fe70ef5', 'ee3deb33-f17d-4482-a188-e93085ab0dfa', 'e2716fce-fe1f-4f74-a4d9-6f33fb6cf7f1', 20),
    ('3aa6b8f4-7aee-4bc0-bb2c-337f4f074823', 'ee3deb33-f17d-4482-a188-e93085ab0dfa', 'cc0a8585-60b5-4629-ba0a-5e32ff445bc4', 20),
    ('ea93a776-6bb3-43b7-aebd-02ab26dda4b3', '2fff7f19-1fd7-4362-8c87-4529c62e4459', 'aecfb45c-682b-4dc2-8160-92c13aa06713', 2),
    ('d7fcb29b-6e79-4504-ab8f-cf6b9d627e70', '9cafb865-5e93-4d55-91a1-5c707b02853e', 'cd613efe-7293-4102-980e-e53e8db21dca', 25),
    ('346d76a3-0119-4f86-b692-b19cd54d4d53', '150090e0-00ab-47a2-8e88-1f58b0951005', 'cd613efe-7293-4102-980e-e53e8db21dca', 25);
