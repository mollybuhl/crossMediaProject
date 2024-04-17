<?php
    ini_set("display_errors", 1); 
    
    require_once "functions.php";
    require_once "login.php";
    require_once "register.php";
    require_once "profile.php";
    require_once "timer.php";

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
            break;
        case "getUserInfo":
            $userID = $requestData["userID"];
            $userPassword = $requestData["userPassword"];
            checkCredentials($userID, $userPassword, $users);

            getUserInfo($userID, $users);
            break;
        case "profile":
            profile($requestData, $users);
            break;
        case "updateTime":
            updateTime($requestData, $users);
            break;
    }
?>