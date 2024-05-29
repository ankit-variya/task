# task

follow instruction step-by-step

npm install (installing dependancy for project)

create database (db name = 'my_test') in mysql

knex migrate:latest (run migration for db)

npm start (for running server)

endpoints: 
=============
insert = URL - http://localhost:3000/users method = post, body = { "name": "demo5", "email": "demo512@gmail.com" }
list = URL - http://localhost:3000/users method = get,
userById = URL - http://localhost:3000/users/(passId) methos - get
update = URL - http://localhost:3000/users/(passId) method = put body = { "name": "abc", "email": "abc12@gamail.com }
delete = URL - http://localhost:3000/users/(passId) method - delete

#make changes in report.js file add your gmail credential = auth: { user: 'add your mail', pass: 'generate app password' # if you don't idea how to generate then follow https://www.youtube.com/watch?v=nuD6qNAurVM }

const mailOptions = { from: 'add your mail', #add your mail to: 'add admin mail', #get daily report on this mail subject: 'Daily New Users Summary', text: New users added today: ${userEmails} };
