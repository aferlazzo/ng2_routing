<?php

// check to see if variables were received via the \$_GET global variable
if (isset($_GET['drivername'])) {
	$drivername = isset($_GET['drivername']) ? urldecode($_GET['drivername']) : '';
	//print("<p>line ".__LINE__." add_endpoint.php sees \$_GET['drivername'] as |".$drivername."|</p>\n\r");
} else {
	http_response_code(403);
	exit("Exiting delete_endpoint.php because the drivername was not received.");
}



/*
 * delete_driver.php takes input from the uri $_GET for fields to delete a row
 * from the existing 'driver' table
 */


/*
 * A constructor is a function that is executed after the object (in this case, the class) has been
 * initialized (its memory allocated, instance properties copied etc.). Its purpose is to put the
 * object in a valid state.
 */
class MyDB extends SQLite3 {
	function __construct() {
		$this->open('../driver.db');
	}
}

/*
 * this statement actually open an existing by way of using the "new" keyword because
 * it is creating a new instance of the MyDB class. The construct function is called
 * once the MyDB class is instantiated, which opens an existing database or created one
 * if it doesn't exist.
 */

$db = new MyDB();

/*
 * verifyDatabaseIsOpen works with a sqlite database, which allows a
 */

function verifyDatabaseIsOpen($db){
	if (!$db) {
		http_response_code(403);
		exit($db->lastErrorMsg());
	}
}


/*
 * Here we create a SQL delete statement from the data received when this script began.
 * Next, we try to run it against the open database.
 */
function deleteDriver($db, $drivername) {
	//print("<p>line ".__LINE__." \$drivername: $drivername</p>\n\r");

	//sqlite has no limit clause on delete itself, so use this:
	$sql  = "DELETE FROM driver WHERE drivername = '" . $drivername . "'";

	// execute the SQLite3 command and capture the return code
	//$ret = $db->exec($sql);
	//if(!$ret) {
	//	$ret = $db->lastErrorMsg();
	//}

	$ret = $db->query($sql);

	// returns TRUE if the query succeeded, FALSE on failure
	//return($ret);
	if ($ret == true) {
		$json = '{"response" : "true"}';
	} else {
		$json= '{"response" : "false"}';
	}

	return($json);
}

verifyDatabaseIsOpen($db);

$ret = deleteDriver($db, $drivername);

// close the database
$db->close();

// include a Status Code in the http reply header
//print("<p>SQLite ADD returned message: $ret</p>");


// Note that if any of the debug messages are uncommented and print then the http_response_code doesn't work
http_response_code(200);
exit($ret);
?>