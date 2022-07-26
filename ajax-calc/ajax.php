<?php
    $first = $_POST['x'];
    $opr = $_POST['oprt'];
    $second = $_POST['y'];

    switch($opr){
        case "+": print ($first + $second); break;
        case "-": print ($first - $second); break;
        case "*": print ($first * $second); break;
        case "/": print ($first / $second); break;
    }


?>
