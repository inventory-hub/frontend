SET check_function_bodies = false;
INSERT INTO public.users 
    (id, name, email, "emailVerified", image, role, first_name, last_name, created_at, deleted_at)
VALUES 
    ('00c965bd-2762-44ad-853b-5f620e61ffd0', 'admin_tyrone', 'admin@example.com', NULL, NULL, 'admin', 'Tyrone', 'Admin', '2024-01-20 19:07:46.658023+00', NULL),
    ('a2e30c43-019c-44d8-b6cf-d32ce7b57059', 'joshuaman', 'joshua.man@example.com', NULL, NULL, 'manager', 'Joshua', 'Man', '2024-01-20 20:02:31.592834+00', NULL),
    ('c9e1a0e1-9066-4d62-88c0-fd8550151015', 'david_user', 'david.plebeu@example.com', NULL, NULL, 'user', 'David', 'Plebeu', '2024-01-20 20:09:01.232172+00', NULL)
;

INSERT INTO public.accounts 
    (id, type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, oauth_token_secret, oauth_token, "userId", refresh_token_expires_in, salt, password_hash)
VALUES 
    ('58bd9656-cc14-4829-a279-a4d62a3cc10d', 'credentials', 'credentials', 'd9207280-5792-4ac2-ae62-1e12899ae12d', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '00c965bd-2762-44ad-853b-5f620e61ffd0', NULL, '8fc89ad00ec2f3d764fd302981adf3ca', '7a5a1525435646b187e156f218d0e401c0c95f46acbab36b1552571ab38597dc1425680212ba8da63b99b4145b384aae3cf1801245f4245326c803c8c3b2221d'),
    ('918794fd-532f-4820-b8de-1782627f012c', 'credentials', 'credentials', 'c1e8e998-2f5f-4ee8-a048-0a001d91e609', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'a2e30c43-019c-44d8-b6cf-d32ce7b57059', NULL, '2ad0c7e349a7a84d3f775c3fdf4902ab', 'deeac507ff1ce3d331d0ec524180e62adba89890b5b844f9ef21965dbf4b1e633db583ce1264b8bbb9032ccc24d19e2686eedf57750802e2a8549c60326438c8'),
    ('938245a8-3708-4afd-ab65-d19bfaa64424', 'credentials', 'credentials', '43994f9f-2876-4e8a-b885-ebecba3e600b', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'c9e1a0e1-9066-4d62-88c0-fd8550151015', NULL, 'c16e48e90575bf7efc301fcb4cf92a64', 'c39bad84ad0a7ea2d9d6748ecdd678cacf941dec1afba3b4f72c5ded45eeae4a0fc1be36dd2687fad4a79c297081e92fcdf8b7ddcc30985bcf4dc742200807c7')
;
