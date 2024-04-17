<?php 

function profile($requestData, $users){
    // Get the method used for the request, then check to see if it's allowed with a custom funciton (checkMethod).
    $requestMethod = $_SERVER["REQUEST_METHOD"];
    $allowed = ["POST"];
    checkMethod($requestMethod, $allowed);

    $profileSetting = $requestData["profileSetting"];
    switch($profileSetting){
        case "profilePicture":
            changeProfilePic($requestData, $users);
            break;
        case "password":
            
            break;
        case "deleteAccount":
            break;
            
    }
}

function changeProfilePic($requestData, $users){
    $userId = $requestData["userId"];
    $username = $requestData["username"];
    $password = $requestData["password"];

    for($i = 0; $i < count($users); $i++){
        $storedUserId = $users[$i]["id"];
        $storedUsername = $users[$i]["username"];
        $storedPassword = $users[$i]["password"];

        if($storedUserId == $userId && $storedUsername == $username && $storedPassword == $password) {
            
            $profilePic = $requestData["profilePic"];
            $users[$i]["profilePic"] = $profilePic;

            //$users = json_encode($users, JSON_PRETTY_PRINT);
            //file_put_contents($filename, $usersArrayJSON);
            putInUsersJSON($users);
            $message = ["message" => "Your password was successfully changed"];
            sendJSON($message);
        }
    }
}


?>