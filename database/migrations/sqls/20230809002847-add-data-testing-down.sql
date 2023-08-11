-- Reverting the INSERT INTO blogTagsBridge
DELETE FROM blogTagsBridge WHERE blogid IN (SELECT id FROM blogs WHERE title LIKE 'News:%');

-- Reverting the INSERT INTO blogs
DELETE FROM blogs WHERE title LIKE 'News:%';

-- Reverting the INSERT INTO tags
DELETE FROM tags WHERE name IN ('a', 'b', 'c', 'x', 'y', 'z');

-- Reverting the INSERT INTO users
DELETE FROM users WHERE email = 'johndoe@fakemail.com';