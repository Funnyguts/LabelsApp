<?php

///debug: build new flag list array if there is post information
if ($_POST) {
    //echo "<span style=\"color:orange\">debug mode: Post data received</span>";
    //print_r(array_keys($_POST));
    
    $querystring='index.html?';
    
    foreach ($_POST as $value)   {
        $querystring = $querystring . $value . "|";
    }
 
  
    echo '
    
    <script type="text/javascript">
<!--
window.location = "' . $querystring .'"
//-->
</script>
    
    ';
    echo $querystring;
    
    /*
    //$flag = array ();
    for($i = 0; $i < count($flag_list); $i++)
    {
        $flag[$flag_list[$i]] = $_POST[$flag_list[$i]];
        //echo $flag['inventory'];
        //echo $flag_string[$i]; //variables
        //echo $flag_list[$i]; //names
       // echo $_POST[$flag_list[$i]];
        //echo $_POST[$flag_string[$i]];
    }
    */
    /*
    $flag = array ();
    for($i = 0; $i < count($flag_list); $i++)
    {
            $flag[$flag_list[$i]] = $flag_string[$i]; //substr($flag_string, $i, ($i+1));
            echo $flag_list[$i] . "<input type=\"text\" name=\"flaglabel\" value=\"".  $flag[$flag_list[$i]] . "\"><br>";
    
    
    }*/
}


?>

