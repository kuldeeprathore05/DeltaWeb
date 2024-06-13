//01 What is Database
//MySQL database se baat krne ke liye SQL ka use krte hai
//Databse  - It is a colection of data in a format that can be easily accessed.
//Why databases? -can store large data
//               -features like security ,scalabiity etc.
//               -easier to  search , insert , update or delete data


//02 SQL v_s NoSQL
//SQL - Relational Database (data stored in Tables)[relation mtlb table]
//      eg: MySQL , Oracle , PostgreSQL etc.
//NoSQL - Non Relational Database (data stored in document/key -val/graphs etc.)
//        eg: MongoDB , Cassandra , Neo4j etc.


//03 What is SQL [Structured Query Language]
//SQL is programming language used to interct with relational databases.
//We can have many tables in one databases and these tables may be related to each other . Aur esse bhot sare database exist krte hai .


//04 What is Table_


//07 Our First Database
//Case insensitive (capital likho ya small dono chhalega)
//semicolon nessecary
//CREATE DATABASE db_name;    //to create a DB
//DROP DATABASE db_name;      //to delete a DB
//USE db_name;                //koi DB ke andar tables banani ya usme work krna hai to
//Jo first flash jesa sign hai usse sab run hoga ,, second falsh wale sign se kisi particular line ko select krke run ke skte hai...


//08 Our First Table
//CREATE TABLE table_name(
//     column_name1 datatype constraint,
//     column_name2 datatype constraint,
//     column_name3 datatype constraint,
// )
//EXample
//CREATE TABLE student(
//     rollno INT ,
//     name VARCHAR(30),
//     age INT
// )
//TO Enter data in table
//INSERT INTO student
//VALUES
// (101,adam,12),
// (103,eve,11);
//SELECT * FROM student;    //to se table


//09 Database Queries
//CREATE DATABASE db_name;
//CREATE DATABASE IF NOT EXISTS db_name;
//DROP DATABASE db_name;
//DROP DATABASE IF NOT EXISTS db_name;
//SHOW DATABASES;
//SHOW TABLES;


//10 CREATE Table - Table Queries
 
//11 What are Contraints
//Rules for data in the table
//NOT NULL          columns cannot have a null value
//UNIQUE            all values in columns are different
//DEFAULT           sets the default value of a column
//CHECK             it can limit the values allowed in a column
//eg.
//salary INT DEFAULT 25000;
//CONSTRAINT CHECK (age>= 18 AND city ="Delhi" )

//12 Key Constraints
//PRIMARY KEY  -makes a column unique & not null but used only for once
//CREATE TABLE temp(
//  id INT ,
//  PRIMARY KEY(id) 
// )
//apan primary ke ek baar hi laga skte hai ,, but esse bhi laga skte hai like PRIMARY KEY (id,name) isme id aur name ka combination alag alag unique rhega puri table mein
//FORIRGN KEY  -prevent actions that would destory links between tables
//CREATE TABLE temp(
//  cust_id INT ,
//  FORIRGN KEY (cust_id) references customer(id) 
// )


//13 Primary_foriegn Keys
//What are Keys  ? == Keys are special columns in the table
//Primary Key -- It is a column (or set of columns) in a table that uniquely identifies each row .(a unique id)
//               There is only 1 PK & it should be NOT null
//FOriegn Key -- A foriegn key is column (or set of columns) in a table that refers to the primary key in another table
//               FKs can have duplicate & null values.
//               There can be multiple FKs

//14 INSERT into Table
//INSERT INTO table_name
//(colnmae1,colname2)l;
//VALUES
//(col1_v1,col2_v1),
//(col1_v2,col2_v2);
//Isko ek line mein bhi likh skte hai
//INSERT INTO table_name (colnmae1,colname2);VALUES (col1_v1,col2_v1), (col1_v2,col2_v2);


//15 SELECT Command
//Selects & Show data from DB
// SELECT col1 , col2 , col3 FROM tble_name;
// SELECT * FROM table_name ;       //to show all
