<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Edit Payment Information - PayDude™</title>
		<link rel="stylesheet" href="css/styles.css" />
	</head>
	<body>
		<header>
			<h1>PayDude™</h1>
		</header>
		<main>
			<h2>Account Information and Settings Updated</h2>
<?php
    /* All form elements must be checked - that required information is present and that all form data
    is in the correct format. Security checks must also be made before database queries are made */

	$fname = $_GET["fname"]; //$ is string i think
	$lname = $_GET["lname"];
	// STEP 18: Set a variable to capture the last name from the submitted form, using the GET array and the lname value
	
	$alert = $_GET["alert"];

	echo('<p>Thank you, '.$fname.' '.$lname.'!</p>'); //builds html stuff
	// STEP 19: Update the above paragraph to now include the last name

	echo('<p>The Alert Settings you have chosen include the following notifications:</p>
	<ul>');
		foreach($alert as $item)
		{
			echo('<li>'.$item.'</li>'); //li is list item
		}
	echo('</ul>');
?>
		</main>
        <footer>
            <p><small>©PayDude Inc. All rights reserved</small></p>
        </footer>
	</body>
</html>
