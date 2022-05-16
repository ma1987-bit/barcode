<?php
 
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
 $conn = mysqli_connect('localhost','root','','barcode_react');
 
 $data = json_decode(file_get_contents("php://input"));
 
//  echo $barcode_name;
//  echo $barcode_num;
//  exit;
 
  
 $select = "SELECT * FROM barcode";
  
 $query = mysqli_query($conn,$select);
 
  //$output = []; //OR  $output = array(); 
   
   while($row=mysqli_fetch_assoc($query))
    {
        $output = array(  
          "ProductName" => $row['product_name'],    
          "ProductNumber" => $row['product_num']   
        ); 
    }
 
    echo json_encode($output);
    ?>