CREATE TABLE categories (
    id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

ALTER TABLE blogs
ADD categoryid INT,
ADD FOREIGN KEY (categoryid) REFERENCES categories (id);

INSERT INTO categories (name)
VALUES ('News'), ('Video'), ('Gaming');
    
UPDATE blogs
SET categoryid = 1
WHERE id BETWEEN 1 AND 7;


