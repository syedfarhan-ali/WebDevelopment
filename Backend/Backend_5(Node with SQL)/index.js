const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const mysql = require("mysql2");
const port = 8080;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "app",
  password: "root",
});
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');
const { connect } = require("http2");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];

// let getRandomUser = () => {
// 	return [
// 	  faker.string.uuid(),
// 	  faker.internet.username(),
// 	  faker.internet.email(),
// 	  faker.internet.password(),
// 	];
//   };

// for (let i = 0; i < 100; i++){
// 	data.push(getRandomUser());
// }

//   try {
//     connection.query(q, [data], (error, results) => {
//       if (error) throw error;
//       console.log(results);
//     });
//   } catch (err) {
//     console.log(err);
//   }

// connection.end();

//home route
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";
  try {
    connection.query(q, (error, results) => {
      if (error) throw error;
      let count = results[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

//Show route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (error, users) => {
      if (error) throw error;
      // console.log(users);
      res.render("show.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

//Edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

//Update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { pass: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (error, result) => {
      if (error) throw error;
      let user = result[0];
      if (formPass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error occured");
  }
});

//ADD - add a new user to database post request
app.get("/user/add", (req, res) => {
	res.render("add.ejs");
});

app.post("/user/add",(req,res) => {
	let Id = uuidv4();
	let { pass: formPass, user: newUser, email: email  } = req.body;
	let q = `INSERT INTO user (id,username,email,password) VALUES ('${Id}','${newUser}','${email}','${formPass}')`;

	try{
		connection.query(q, (err,result) => {
			if(err) throw err;

			res.redirect("/user");
		});
	}catch(err){
		res.send("some error occured during add");
	}

});

//DELETE - if they enterned correct email and password
app.get("/user/:id/delete",(req,res) => {
	let {id} = req.params;
	let q = `SELECT * FROM user WHERE id = '${id}'`;

	try{
		connection.query(q,(err,result) => {
			if(err) throw err;
			let user = result[0];
			res.render("delete.ejs",{user});
		});
	}catch(err){
		res.send("some error occured");
	}
});

app.delete("/user/:id/",(req,res) => {
	let {id} = req.params;
	let {password} = req.body;
	let q = `SELECT * FROM user WHERE id = '${id}'`;

	try{
		connection.query(q,(err,result) =>{
			if(err) throw err;
			let user = result[0];

			if(user.password != password){
				res.send("wrong password");
			}else{
				let q2 = `DELETE FROM user WHERE id = '${id}'`;
				connection.query(q2,(err,result) => {
					if(err) throw err;
					else{
						console.log(result);
						console.log("deleted");
						res.redirect("/user");
					}
				});
			}
		});
	}catch(err){
		res.send("some error occured with db");
	}
});

app.listen(port, () => {
  console.log("server is listening to port ", port);
});
