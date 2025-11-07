<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Order Recieved!</title>
		<link rel="stylesheet" href="css/styles.css" />
	</head>
	<body>
		<header>
			<h1>AWESOME PIZZA!!!</h1>
		</header>
		<main>
			<h2>Your order has been recieved!</h2>
			<?php
				//all these 

				$name = $_GET["name"]; //$ is string i think
				$pizzaCount = $_GET["pizzaCount"]; //i have no idea why the pizza count isn't parsed when you submit the form--it doesnt even show in the php url EDIT: yes it does now, i dunno what changed
				$size = $_GET["size"];

				$toppings = $_GET["toppings"]; //doesn't need square brackets

				echo('<p>Thank you, '.$name.'! Your '.$pizzaCount.' '.$size.' pizza(s) are in the oven! (not really, we microwave)</p>'); //echo builds html stuff

				echo('<p>Here are the toppings you picked to prove that we are good at making websites:</p>
				<ul>');
					foreach($toppings as $item)
					{
						echo('<li>'.$item.'</li>');
					}
				echo('</ul>');
			?>
		</main>
        <footer>
           	<p><small>© AWESOME PIZZA!!! You filled out this form so you consented to recieving pizza. Zecheriah Ferguson</small></p>
        </footer>
	</body>
</html>
