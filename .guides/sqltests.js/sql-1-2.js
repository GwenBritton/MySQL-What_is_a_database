var sqltest = require('./sqltests-fw.js');
var workspace = sqltest.workspaceDirectory;

/*
	Challenge tasks
	tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Use the people database",
		"USE people;"
	],
	[
		"Display the surname column from the 'names' table.",
		"SELECT surname FROM names;"
	],
	[
		"Query only the 'name' and 'id' columns of the 'names' table and sort the results by descending order.",
		"SELECT name,id FROM names ORDER BY id DESC;"
	]
];

/*
	Init test
	sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sqlchallenges/sql-1-1.sql', 'people', tasks);