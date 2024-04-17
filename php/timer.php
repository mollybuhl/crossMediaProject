<?php

    function updateTime($requestData, $users){
        $userId = $requestData["userId"];
        $password = $requestData["password"];
        checkCredentials($userId, $password, $users);

        for($i = 0; $i < count($users); $i++){
            $storedUserId = $users[$i]["id"];
            $storedUsername = $users[$i]["username"];
            $storedPassword = $users[$i]["password"];

            if($storedUserId == $userId && $storedPassword == $password) {
                
                $time = $requestData["time"];
                $users[$i]["time"] = $time;

                putInUsersJSON($users);
                $message = ["message" => "Time updated"];
                sendJSON($message);
            }
        }
    }


?>