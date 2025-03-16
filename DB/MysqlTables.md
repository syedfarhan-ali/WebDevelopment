# Table Queries
# Use
USE db_name;


# Insertion
INSERT INTO table_name 
VALUES
(value1row1,value2row1,value3row1),
(value1row2,value2row2,value3row2);

# Show
SHOW TABLES;

# Select 
select & shows data from the db
SELECT col1,col2 FROM table_name;

SELECT * FROM table_name;(to show all)




# Create 
CREATE TABLE table_name(
	column1 datatype constraint,
	column2 datatype constraint,
	column3 datatype constraint
);
# Constraints
NOT NULL - columns cannot have a null value 

UNIQUE - all value in a column are different 

Default - sets the default value of a column

CHECK - it can limit values allowed in a column

ex: salary INT DEFAULT 25000

CONSTRAINT age_check CHECK(age >= 18 AND city="Mumbai")
age_check is name (is optional)
# PRIMARY key Constraint
PRIMARY key - Makes a column unque & not null but used only for one 

ex: CREATE TABLE table_name(
	column1 datatype constraint PRIMARY KEY,
);
ex: CREATE TABLE table_name(
	column1 datatype constraint,
    PRIMARY KEY(id)
);

# FOREIGN key Constraint
FOREIGN key - prevent actions that would destroy links between tables

ex: CREATE TABLE table_name(
	column1 datatype constraint,
    FOREIGN KEY(t1_id) REFERENCES table2_name(t2_id)
);

# Insert
INSERT INTO table_name 
VALUES
(value1row1,value2row1,value3row1),
(value1row2,value2row2,value3row2);

# Update
Update (to update existing rows)

UPDATE tabe_name SET col1 = val1,
col2 = val2 WHERE condition;

# Alter
Alter(to change the schema)

ADD Column
ALTER TABLE table_name ADD COLUMN column_name datatype constraint;

DROP Column
ALTER TABLE table_name DROP COLUMN column_name;

RENAME TABLE
ALTER TABLE table_name RENAME TO new_table_name;

CHANGE Column(rename)
ALTER TABLE table_name CHANGE COLUMN old_name new_name new_datatype new_constraint

MODIFY Column (modify datatype/constraint)
ALTER TABLE table_name MODIFY col_name new_datatype new_constraint;	

# Truncate
Truncate (to delete table's data)
TRUNCATE TABLE table_name;
# Delete
Delete(to delete existing rows)

DELETE FROM table_name WHERE condition;
if you use DELETE without WHERE condition it will delete all rows