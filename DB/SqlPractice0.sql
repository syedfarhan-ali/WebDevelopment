CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user(
	id INT,
    age INT,
	name VARCHAR(30) NOT NULL,
	email VARCHAR(50) UNIQUE,
	followers INT DEFAULT 0,
	following INT,
	CONSTRAINT age_check CHECK( age >= 18 ),
	PRIMARY KEY (id)
);

INSERT INTO user
(id,age,name,email)
VALUES
(4,17,"random","rancho@gmail.com");

INSERT INTO user
(id,age,name,email,followers,following)
VALUES
(1,22,"Rancho","rancho@gmail.com",999,3),
(2,20,"Farhan","farhan@gmail.com",1000,4),
(3,21,"Raju","raju@gmail.com",500,30),
(4,19,"Chatur","chatur@gmail.com",9,900),
(5,50,"Virus","virus@gmail.com",10000,4);
SELECT * FROM user;
SELECT name, age, followers FROM user WHERE age + 1 = 21 OR followers > 500;
SELECT name,age,followers FROM user WHERE age BETWEEN 22 AND 50;
SELECT name FROM user WHERE email IN ("rancho@gmail.com","farhan@gmail.com","raju@gmail.com","abc");	
SELECT name,age,email FROM user LIMIT 3;
SELECT name,age FROM user ORDER BY age DESC;
SELECT MAX(followers) FROM user ;
SELECT age,MAX(followers) FROM user GROUP BY age HAVING MAX(followers) > 500 ORDER BY age ASC;

UPDATE user SET followers = 600 WHERE name = "Raju";
SELECT * FROM user;
DELETE FROM user WHERE age = 19;
ALTER TABLE user DROP COLUMN city;
ALTER TABLE user ADD COLUMN city VARCHAR(20) DEFAULT "Delhi";
ALTER TABLE subjects RENAME TO user;
ALTER TABLE user CHANGE COLUMN id rollno INT;
SET SQL_SAFE_UPDATES = 0;

DROP TABLE posts;
DROP TABLE user;
TRUNCATE TABLE user;
SELECT * FROM user;

CREATE TABLE posts(
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO posts
VALUES
(101,"Hello World",3),
(102,"Bye Bye",1),
(103,"Hello bacho",3);
SELECT content,user_id,id FROM posts;

SELECT id,name,age FROM user;
SELECT * FROM user;


