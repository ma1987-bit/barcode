<html>
<head>
<style>
p.inline {display: inline-block;}
span { font-size: 13px;}
</style>
<style type="text/css" media="print">
    @page 
    {
         /* auto is the initial value */
        margin: 0mm;  
		width:176mm;
		height: 500mm;
		/* this affects the margin in the printer settings */

    }
</style>
</head>
<body onload="window.print();">
	<div style="margin-left: 5%">
		<?php
		
		$Object = new DateTime();  /* to print the time */
		$DateAndTime = $Object->format("dmYh");  
		$random_number= mt_rand(1, 100); /* to print the random number */
		
		include 'barcode128.php';
		//$product = $_POST['product'];
		$product_id = $_POST['product_id' ];
		//$rate = $_POST['rate'];

		for($i=1;$i<=$_POST['print_qty'];$i++){
			echo "<p class='inline'><span ></span>".bar128(stripcslashes($DateAndTime-$random_number ))."<span><b> TSR _$product_id </b><span></p>&nbsp&nbsp&nbsp&nbsp";
		}

		?>
	</div>
</body>
</html>