USE blog_database;

#Changed the users table, adding a 'role' column to determine if it is an author, manager, reader, etc. Default admin.
CREATE TABLE users (
	id INT AUTO_INCREMENT,
    firstName VARCHAR(35) NOT NULL, -- 70 for full name based on the suggested number of characters found in web
    lastName VARCHAR(35) NOT NULL, 
    unsername VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(80) NOT NULL UNIQUE, -- It is case insensitive, but unique
    passwordHash VARCHAR(32) NOT NULL, -- 32 if we use md5 to generate the hashed password
    role VARCHAR(20) NOT NULL,
    PRIMARY KEY (id) -- to uniquely indentify each row
);

#changed TEXT (56,635 char) to MEDIUM TEXT (16,777,215 chars) 
CREATE TABLE blogs (
	id INT AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    content MEDIUMTEXT,                   -- TEXT can handle 16,777,215 maximum characters
    authorid INT NOT NULL,
    created TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (authorid) REFERENCES users (id) -- authorid value corresponds to the id value in the users table
);

CREATE TABLE tags (
	id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL UNIQUE,
    PRIMARY KEY (id)
); 

CREATE INDEX idx_blog_tag ON blogTagsBrindge(blogid,tagid);

CREATE TABLE blogTagsBridge (
	tagid INT NOT NULL,
    blogid INT NOT NULL,
    FOREIGN KEY (tagid) REFERENCES tags (id),
    FOREIGN KEY (blogid) REFERENCES blogs (id),
    PRIMARY KEY (blogid, tagid)
);

CREATE TABLE comments (
	id INT AUTO_INCREMENT,
    blogid INT NOT NULL,
    userid INT NOT NULL,
    content TINYTEXT,           -- 255 Characters       
    created TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (blogid) REFERENCES blogs (id),
    FOREIGN KEY (userid) REFERENCES users (id),
    PRIMARY KEY (id)
    
);
