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
				$pizzaCount = $_GET["pizzaCount"];
				$size = $_GET["size"];

				$toppings = $_GET["toppings[]"];

				echo('<p>Thank you, '.$name'! Your '.$pizzaCount' '.$size' pizza(s) are in the oven! (not really, we microwave)</p>'); //echo builds html stuff

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
           	<p><small>© AWESOME PIZZA!!! You filled out this form so you consented to recieving pizza.</small></p>
        </footer>
	</body>
</html>
