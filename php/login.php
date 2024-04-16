<?php

    function login($requestData, $users){
        $loginUsername = $requestData["username"];
        $loginPassword = $requestData["password"];
        
        for($i = 0; $i < count($users); $i++) {
            $user = $users[$i];
            $arrayUsername = $users[$i]["username"];
            $arrayPassword = $users[$i]["password"];
        
            if($loginUsername == $arrayUsername && $loginPassword == $arrayPassword) {
                $userID = $user["id"];

                sendJSON($user);
            } 
        }
        
        $errorMessage = ["message" => "Wrong username or password"];
        sendJSON($errorMessage, 404);
    }

?>