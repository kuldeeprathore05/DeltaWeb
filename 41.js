//01 Where Clause
//To define some conditions
//SELECT col1,col2 FROM table_name
//WHERE conditions;


//02 Operators In Where
//Arithematic Operators : + - * / %
//Comparison Operators : = != > >= < <=
//Logical Operators : AND , OR , NOT , IN , BETWEEN , ALL , LIKE ,ANY
//Bitwise Operators : &(Bitwise AND), |(Bitwise OR)

//03 Frequently Used Operators
//AND (to check fr oth conditions to be true)
//OR (to check for one conditions to be true)
//BETWEEN (selects for a given range)      //WHERE followers BETWEEN 40 and 50;    // unka data aa jaega jinke followes 40 -50 ke bich hia
//IN (matches any values in the list)      //WHERE name IN ("adam","rahul");      //apan ek like bana lete hai like adam rahul ,,, ab is list mein se jo table mein hoga uska data aa jaega
//NOT (to negate the given condition)      // NOT ko we can use like not in ya not between ,,, to unko chod ke data aa jaega apne pass



//04 Limit Clause
//Sets an upper limit on number of (tuples) rows to be returned
//SELECT col1,col2 FROM table_name
//LIMIT number;
//Eg
// SELECT * FROM user 
// LIMIT 8 ;     //ya pe user table mein hazar logo ka data hoga fir bhi 8 ka hi dikhga bcoz limit 8 set kri
//Eg
// select name,followers FROM student
// WHERE age >12
//LIMIT 10 ;       //agar hazaro ki age 12 se jyda hai lekin apan ko sirf esse 10 logo ka data chiye isiliye limit 10 likh diya




//05 Order by Clause 
//To sort ascending(ASC) or desecnding order(DESC)
//SELECT col1,col2 FROM table_name
//ORDER BY col_name(s) ASC;            //agar followers ke basis pr data ko sort krna chahte hai to uss columb ka name like do ,, aur ASC DESC choose kr lo ,,, if not choose by default Ascending order mein sort hote hai



//06 Aggregate Functions
//Aggreate functions perform  calculation on a set of value , and return a single value.
//-COUNT()   -MAX()    -MIN()      -SUM()      -AVG()
//Eg
//SELECT max(followers) FROM student;
//Eg
//SELECT count(age) FROM student WHERE age =14 ;     //Waha vo student ka count ayega jiske age 14 hai
//Eg
//SELECT avg(age) FROM student;      //sbki age ka average
//Eg
//SELECT sum(followers) FROM student      //sbake followers ka total sum



//07 Group by Clause
//Group rows that have the same values into summary rows.\
//It collects data from multiple records and group the result by one or more column.
//Generally we use group by with some aggregation function.
//Eg
//SELECT age , count(age)    // yaha pe different age aur unke count aa jaenge ,,, agr age nhi likte to sirf count atta ,,, count(age)  nhi likhte to different ages atti ,, yaha max(followers) esse likha to uss age group ke max followers aa jaenge ,,, jo colname group by mein nhi likha usko iss line mein sirf aggregate function ke sath use kr skte hai,,, yaha esee nhi name likh diya ki bhai names bhi aa jaenge usse age group ke ,nhi name ko group by ke sath nhi likha to sirf aggregate funtuon mein use krnege;
//FROM student
//GROUP BY age;



//08 Having Clause
//Similar to Where i.e. applies some condition on rows.
//But it is used when we want to apply any condition after grouping.
//-WHERE is for the table , HAVING is for a group.
//-Grouping is necessary for HAVING.

//SELECT col1,col2
//FROM table_name
//GROUP BY col_name
//HAVING condition;

//Eg
//SELECT age , count(age)    
//FROM student
//GROUP BY age
//HAVING followers>50;
//isme vo age group aur unke count show honge jinke followers 50 se jyda hai..




//09 General Order
//SELECT columns(s)
//FROM table_name
//WHERE condition
//GROUP BY column(s)
//HAVING conditon
//ORDER BY column(s)ASC;


//10 UPADTE Table
//Update(to update existing rows)
//UPDATE table_name
//SET col1=val1 , col2=val2
//WHERE condition;
//Eg
// UPDATE student
// SET followers =100
// WHERE age =24;
//Eg
//UPADTE student 
//SET age = age+1 ;      //sbli age 1 saal badd jaegi
//SQL hume direct update nhi krne deta isiliye pele given below line ko excecute kro fir update ko execute kr lena
// SET SQL_SAFE_UPDATES =0;

//11 DELETE Table
//Delete(to delete existing rows)
//DELETE FROM table_name
//WHERE condition;          //agar where nhi likha to puri table delete ho jati hai



//12 ALTER Table
//Alter(to change the  schema[column])
//ADD Column
//ALTER TABLE table_name
//ADD COLUMN col_name datatype constraint;

//DROP Column
//ALTER TABLE table_name
//DROP COLUMN col_name;

//RENAME Table
//ALTER TABLE table_name
//RENAME TO new_table_name;

//CHANGE Column(rename)
//ALTER TABLE table_name
//CHANGE COLUMN col_name new_name new_datatype new_constraint;

//MODIFY Column(modify datatype/constraint)
//ALTER TABLE table_name
//MODIFY  col_name new-datatype new_constraint;



//13 TRUNCATE Table
//Truncate(to delete table's data)    //table rhegi but data khali ho jaegi
//TRUNCATE TABLE table_name;


