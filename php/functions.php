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
                    $message = ["message" => "You didn't provide the right details to successfully request this information."];
                    sendJSON($message, 400);
                }
            }
        }
        if(!$userFound){
            $message = ["message" => "No user found."];
            sendJSON($message, 404);
        }
    }

    function putInUsersJSON($newData){
        $filename = __DIR__ . "/users.json";
        file_put_contents($filename, json_encode($newData, JSON_PRETTY_PRINT));
    }


?>