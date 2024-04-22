<?php

function unlockCharacter($requestData, $users){

    // Get the method used for the request, then check to see if it's allowed with a custom funciton (checkMethod).
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $allowed = ["POST"];
    checkMethod($requestMethod, $allowed);

    $userId = $requestData["userId"];
    $password = $requestData["password"];

    for($i = 0; $i < count($users); $i++){
        $storedUserId = $users[$i]["id"];
        $storedPassword = $users[$i]["password"];

        if($storedUserId == $userId && $storedPassword == $password) {
            
            $newUnlockedCharacter = $requestData["character"];
            $users[$i]["unlockedCharacters"][] = $newUnlockedCharacter;

            putInUsersJSON($users);
            $message = ["message" => "Character unlocked"];
            sendJSON($message);
        }
    }

}

function checkForUnlockedCharacter($requestData, $users){

}
?>