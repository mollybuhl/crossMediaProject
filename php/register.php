<?php
    require_once "api.php";

    function register($requestData, $users){

        // Get the method used for the request, then check to see if it's allowed with a custom funciton (checkMethod).
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $allowed = ["POST"];
        checkMethod($requestMethod, $allowed);

        $username = $requestData["username"];
        $password = $requestData["password"];

        // Check if the given username or password is shorter than 3 characters. If so, send a message with status 400(Bad request).
        if(strlen($username) < 3 or strlen($password) < 3){
            $message = ["message" => "Both the username and password must be 3 characters or longer. Please try again."];
            sendJSON($message, 400); 
        }
        if(strlen($username) > 10){
            $message = ["message" => "Sorry, the username can only have 10 characters"];
            sendJSON($message, 400);
        }

        // Check if the given username is already used by another user. If so, send a message with status 409(Conflict).
        foreach($users as $user){
            if($user["username"] == $username){
                $message = ["message" => "Username is taken. Please try another"];
                sendJSON($message, 409);
            }
        }

        // Add unique ID to new user
        $highestID = 0;
        foreach($users as $user){
            if($user["id"] > $highestID){
                $highestID = $user["id"];
            }
        }
        
        // Associative array of the newly created user that is added to the array $users.
        $newUser = [
            "id" => $highestID + 1,
            "username" => $username,
            "password" => $password,
        ];
        
        $users[] = $newUser;

        // Encode $users and save it in $filename, then send the username of the created user.
        putInUsersJSON($users);
        sendJSON($newUser["username"], 200);

    }
    
    
?>