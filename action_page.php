<?php
	echo "Hello world!";
	// define variables and set to empty values
	$nameErr = $emailErr = $nameErr  = "";
	$Name = $Email  = $Message  = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	  if (empty($_POST["name"])) {
	    $nameErr = "Name is required";
	  } else {
	    $name = test_input($_POST["name"]);
	    // check if name only contains letters and whitespace
	    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
	      $nameErr = "Only letters and white space allowed"; 
	    }
	  }
	  
	  if (empty($_POST["Email"])) {
	    $emailErr = "Email is required";
	  } else {
	    $Email = test_input($_POST["Email"]);
	    // check if e-mail address is well-formed
	    if (!filter_var($Email, FILTER_VALIDATE_EMAIL)) {
	      $emailErr = "Invalid email format"; 
	    }
	  }

	  if (empty($_POST["Message"])) {
	    $Message = "";
	  } else {
	    $Message = test_input($_POST["Message"]);
	  }

	}
	  //Email information
	  $admin_email = "trevor.j.colby.19@dartmouth.edu";
	  $subject = 'Dartmouth Life: Message'; 
	  $Message = $_REQUEST['Message'];
	  
	  //send email
	  mail($admin_email, "$subject", $Message, "From:" . $Email);
	  
	  //Email response
	  echo "Thank you for contacting us!";

	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
?>
