/*
 *
 * Main JQuery Scripting for IAT381 Week 10 Demo
 * by Stanley Lai
 * http://www.stanleylai.sg
 *
 */
 
 $(document).ready(function() {
 
 	var $button = $("#button-demo a.button");
 	var $demo = $("#button-demo div.demo");
 	
 	$($button).click(function() {
 		$($demo).toggleClass("on");
 		
 		if ($($demo).hasClass("on"))
 			{
 				$($button).text("Button is ON");
 			}
 		else
 			{
 				$($button).text("Button is OFF");
 			}
 	});
 $("#tabs-demo").tabs();
 
 });