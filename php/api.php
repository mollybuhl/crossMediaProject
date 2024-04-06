<?php
    ini_set("display_errors", 1); 
    
    require_once "functions.php";
    require_once "login.php";
    require_once "register.php";

    $requestMethod = $_SERVER["REQUEST_METHOD"];
    if($requestMethod === "GET"){
        $requestData = $_GET;
    }else{
        $requestJSON = file_get_contents("php://input");
        $requestData = json_decode($requestJSON, true);
    } 

    $filenameUsers = __DIR__."/users.json";
    $users = [];
    if(!file_exists($filenameUsers)){
        $json = json_encode($users, JSON_PRETTY_PRINT);
        file_put_contents($filenameUsers, $json);
    }else{
        $usersData = file_get_contents($filenameUsers);
        $users = json_decode($usersData, true);
    }

    $action = $requestData["action"];
    switch($action){
        case "register":
            register($requestData, $users);
            break;
        case "login":
            login($requestData, $users);
    }
?>