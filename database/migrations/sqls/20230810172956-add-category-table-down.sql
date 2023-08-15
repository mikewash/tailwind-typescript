UPDATE blogs
SET categoryid = NULL
WHERE id BETWEEN 1 AND 7;

ALTER TABLE blogs
DROP FOREIGN KEY fk_blogs_categories;

ALTER TABLE blogs
DROP COLUMN categoryid;

DELETE FROM categories WHERE id BETWEEN 1 AND 3;

DROP TABLE categories;