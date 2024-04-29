<?php

    require_once "api.php";

    function checkMethod($usedMethod, $allowedMethods){
        if(!in_array($usedMethod, $allowedMethods)){
            $message = ["message" => "Allowed methods: $allowedMethods"];
            sendJSON($message, 405);
        }
    }

    function sendJSON($message, $statusCode = 200){
        header("Content-Type: application/json");
        http_response_code($statusCode);
        $json = json_encode($message);
        echo $json;
        exit();
    }

    function checkCredentials($userID, $userPassword, $users){
        $userFound = false;
        foreach($users as $user){
            if($user["id"] == $userID){
                $userFound = true;
                if($user["password"] != $userPassword){
                    $message = ["message" => "Fel lösenord"];
                    sendJSON($message, 400);
                }
            }
        }
        if(!$userFound){
            $message = ["message" => "Användare hittas inte."];
            sendJSON($message, 404);
        }
    }

    function putInUsersJSON($newData){
        $filename = __DIR__ . "/users.json";
        file_put_contents($filename, json_encode($newData, JSON_PRETTY_PRINT));
    }

    function getUserInfo($userID, $users){

        $loggedInUserLimitedAcces;

        foreach($users as $user){
            if($user["id"] == $userID){
                $loggedInUser = $user;
                $loggedInUserLimitedAcces = ["id" => $user["id"], "username" => $user["username"], "startTime" => $user["startTime"],"profilePic" => $user["profilePic"], "unlockedCharacters" => $user["unlockedCharacters"], "suspectCharacters" => $user["suspectCharacters"], "notSuspectCharacters" => $user["notSuspectCharacters"]];
            }
        }

        sendJSON($loggedInUserLimitedAcces);
    }

    function getAllUsersTime($users){
        $usersTime = [];

        foreach($users as $userIndex => $user){
            if(!in_array($user["id"], $usersTime)){
                $usersTime[] = ["id" => $user["id"], "username" => $user["username"],"profilePic" => $user["profilePic"], "finishingTime" => $user["finishingTime"]];
            }
        } 
        
        sendJSON($usersTime);
    }


?>