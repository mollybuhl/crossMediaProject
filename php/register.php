<?php
    require_once "api.php";

    function register($requestData, $users){

        // Get the method used for the request, then check to see if it's allowed with a custom funciton (checkMethod).
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $allowed = ["POST"];
        checkMethod($requestMethod, $allowed);

        $username = $requestData["username"];
        $password = $requestData["password"];
        $confirmPassword = $requestData["confirmPassword"];
        $profilePic = $requestData["profilePic"];

        // Check if the given username or password is shorter than 3 characters. If so, send a message with status 400(Bad request).
        if(strlen($username) < 3 or strlen($password) < 3){
            $message = ["message" => "Användarnamn och lösenord måste minst vara minst 3 karaktärer."];
            sendJSON($message, 400); 
        }
        if(strlen($username) > 15){
            $message = ["message" => "Användarnamet kan endast ha 15 karaktärer"];
            sendJSON($message, 400);
        }
        if($password != $confirmPassword){
            $message = ["message" => "Fel bekräftat lösenord"];
            sendJSON($message, 400);
        }
        if($profilePic == "none"){
            $message = ["message" => "Välj en profilbild"];
            sendJSON($message, 400);
        }

        // Check if the given username is already used by another user. If so, send a message with status 409(Conflict).
        foreach($users as $user){
            if($user["username"] == $username){
                $message = ["message" => "Användarnamnet används redan"];
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
            "profilePic" => $profilePic,
            "startTime" => 0,
            "finishingTime" => "Not finished",
            "unlockedCharacters" => [],
            "suspectCharacters" => [],
            "notSuspectCharacters" => [],
            "correctGuess" => false
        ];
        
        $users[] = $newUser;

        // Encode $users and save it in $filename, then send the username of the created user.
        putInUsersJSON($users);
        sendJSON($newUser, 200);

    }
    
    
?>