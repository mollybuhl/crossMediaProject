<?php

    function startTimer($requestData, $users){
        $userId = $requestData["userId"];
        $password = $requestData["password"];
        checkCredentials($userId, $password, $users);

        for($i = 0; $i < count($users); $i++){
            $storedUserId = $users[$i]["id"];
            $storedUsername = $users[$i]["username"];
            $storedPassword = $users[$i]["password"];

            if($storedUserId == $userId && $storedPassword == $password) {
                
                

                $startTime = $requestData["startTime"];
                $users[$i]["startTime"] = $startTime;

                putInUsersJSON($users);
                $message = ["message" => "Time updated"];
                sendJSON($message);
            }
        }
    }

   


?>