# WHERE clause
To define some conditions

SELECT col1,col2 FROM table_name
WHERE conditions;

# Operators
Arithmetic Operators: +,-,*,/,%(modulus)

Comparison Operators: =,!=,>,>=,<,<=

Logical Operators: AND,OR,NOT,IN,BETWEEN,ALL,LIKE,ANY
    AND(to check for both conditions to be true)
    OR(to check for one of the conditions to be true)
    BETWEEN(selects for a given range)
    IN(matches any value in the list)
    NOT(to negate the given condition)

Bitwise Operators: &(Bitwise AND),| (Bitwise OR)

# LIMIT Clause
sets an upper limit on number of (tuples) rows to be returned
SELECT col1,col2 FROM table_name LIMIT number;

# Order by Clause
To sort in ascending (ASC) or descending order(DESC)

SELECT col1,col2 FROM table_name ORDER BY col_name(s) ASC;

# Aggregate Functions
Aggregate Functions perfom a calculation on a set of values, and return a single value.

COUNT()
MAX()
MIN()
SUM()
AVG()

Example:
    SELECT MAX(value) FROM table_name;
    SELECT MAX(marks) FROM students;

# GROUP BY Clause
Groups rows that have the same values into summary rows.
It collects data from multiple records and groups the result by one or more column.

SELECT col1,col2 FROM table_name GROUP BY col_name(s);

    *Generally we use GROUP BY with some aggregate function.

# Having Clause
Similar to where i.e. applies some condition on rows.
But it is used when we want to apply any condition after grouping.

SELECT col1,col2 FROM table_name GROUP BY col_name(s) HAVING condition;

WHERE is for the table,HAVING is for a group
Grouping is necessary for HAVING
# General Order
SELECT columns(s)
FROM table_name 
WHERE condition 
GROUP BY column(s) 
HAVING condition 
ORDER BY column(s) ASC; 