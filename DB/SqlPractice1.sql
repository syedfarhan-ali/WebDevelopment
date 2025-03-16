CREATE DATABASE IF NOT EXISTS college;
USE college;
CREATE TABLE Teacher(
	id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR (30),
    salary INT
    );

INSERT INTO Teacher 
(id,name,subject,salary)
VALUES
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

SELECT * FROM Teacher WHERE salary > 55000;
SELECT * FROM Teacher;
ALTER TABLE Teacher CHANGE COLUMN salary ctc INT;

UPDATE Teacher SET salary = salary + (salary*0.25);
ALTER TABLE Teacher ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";
ALTER TABLE Teacher DROP COLUMN salary;
DROP TABLE Teacher;
