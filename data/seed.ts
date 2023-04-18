import { Database } from "sqlite3";
import fs from "fs";

const sqlStr = fs.readFileSync("data/your_db.sql").toString().split(";");

const db = new Database("database", (err) => {
	if (err) {
		return console.error(err.message);
	}

	console.log("Connected to the in-memory SQlite database.");
});

db.serialize(() => {

	db.run("PRAGMA foreign_keys = OFF");
	db.run("BEGIN TRANSACTION");

	sqlStr.forEach((query) => {

		if (query) {
			db.run(query, (err) => {
				if (err) {
					return console.error(err.message);
				}
			});
		}

	});

	db.run("COMMIT");

});

db.close((err) => {
	if (err) {
		return console.error(err.message);
	}

	console.log("Closed the database connection.");
});