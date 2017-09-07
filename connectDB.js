var selectDB = function(port, databaseName){
	if(!port){
		port = 27017;
	}
	if(!databaseName){
		databaseName = 'test_1';
	}
	db = connect("localhost:"+ port+ "/"+ databaseName);

	return db;
}
