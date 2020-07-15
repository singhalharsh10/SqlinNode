 #Using MySQl

 Start the MySQL service(from Task Manager)

 ##Log in to MySQL as root

Without Root (from terminal)

...shell
mysql -u root
mysql>
...

with root password{
....shell
mysql -u root -p

It will then demand password 
Enter Pssword:

mysql>
...}

# WE should not use root as it has power to do  anything. When we creating new application always make new database


# Create DB,User,Grant Access
..sql commands
CREATE DATABASE mytestdb;

CREATE USER 'myuser'@'localhost'  IDENTIFIED BY 'mypass'; //mypass is password here

USE mytestdb;

 GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;
....

# Login using New User
..shell
mysql -u myuser -p

Enter password: mypass(mypass is password of myuser as specified in above command)

 mysql>
 .....



After this ->use mytestdb


# For using with NODEjs
use npm install mysql2



