<?php
	
	$uri = $_POST['uri'];
	if ($uri) {

		$data = $_POST['data'];
		$method = $_POST['method'];
		$data_string = $data;                                                                                   

		echo $data_string;
 
		$ch = curl_init($uri);                                                                      
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);                                                                     
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    		'Content-Type: application/json',                                                                                
    		'Content-Length: ' . strlen($data_string))                                                                       
		);                                                                                                                   
 
		$result = curl_exec($ch);
		echo $result;
	}
	


?>
