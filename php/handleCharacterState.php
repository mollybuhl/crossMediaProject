<?php

function updateSuspect($requestData, $users){

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
            
            if(isset($requestData["suspectCharacter"])){
                $suspectedCharacter = $requestData["suspectCharacter"];
                $users[$i]["suspectCharacters"][] = $suspectedCharacter;

                if (in_array($suspectedCharacter, $users[$i]["notSuspectCharacters"])) {

                    $index = array_search($suspectedCharacter, $users[$i]["notSuspectCharacters"]);
                    if ($index !== false) {
                        unset($users[$i]["notSuspectCharacters"][$index]);
                    } 
                } 

            }else if(isset($requestData["notSuspectCharacter"])){
                $notSuspectedCharacter = $requestData["notSuspectCharacter"];
                $users[$i]["notSuspectCharacters"][] = $notSuspectedCharacter;

                if (in_array($notSuspectedCharacter, $users[$i]["suspectCharacters"])) {

                    $index = array_search($notSuspectedCharacter, $users[$i]["suspectCharacters"]);
                    if ($index !== false) {
                        unset($users[$i]["suspectCharacters"][$index]);
                    } 
                } 
            }

            

            putInUsersJSON($users);
            $message = ["message" => "Character added to suspect list"];
            sendJSON($message);
        }
    }
}

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

?>