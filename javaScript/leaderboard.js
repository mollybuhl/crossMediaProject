/*
    To Do: 
    - Mark current player on leaderboard if they have finished
    - Display first player in the middle, bigger
    - Display player nr

*/

// Function to render the leaderboard and display all finished players game time
async function renderLeaderboard() {

    main.classList.remove("mainMap");
    main.innerHTML = `
    <h2>Topplista</h2>
    <div class="leaders"></div>
    <div class="scoreboard"></div>


    <div class="navbar">
        <div class="charracterChart">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <mask id="mask0_248_907" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
        <rect width="40" height="40" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_248_907)">
        <path d="M9 39.7332V32.5666C7.41667 31.1221 6.1875 29.4346 5.3125 27.5041C4.4375 25.5735 4 23.5388 4 21.3999C4 17.2332 5.45833 13.6916 8.375 10.7749C11.2917 7.85824 14.8333 6.3999 19 6.3999C22.4722 6.3999 25.5486 7.42074 28.2292 9.4624C30.9097 11.5041 32.6528 14.1638 33.4583 17.4416L35.625 25.9832C35.7639 26.511 35.6667 26.9902 35.3333 27.4207C35 27.8513 34.5556 28.0666 34 28.0666H30.6667V33.0666C30.6667 33.9832 30.3403 34.768 29.6875 35.4207C29.0347 36.0735 28.25 36.3999 27.3333 36.3999H24V39.7332H20.6667V33.0666H27.3333V24.7332H31.8333L30.25 18.2749C29.6111 15.7471 28.25 13.6916 26.1667 12.1082C24.0833 10.5249 21.6944 9.73324 19 9.73324C15.7778 9.73324 13.0278 10.8582 10.75 13.1082C8.47222 15.3582 7.33333 18.0943 7.33333 21.3166C7.33333 22.9832 7.67361 24.5666 8.35417 26.0666C9.03472 27.5666 10 28.8999 11.25 30.0666L12.3333 31.0666V39.7332H9ZM19 29.7332C19.4722 29.7332 19.8681 29.5735 20.1875 29.2541C20.5069 28.9346 20.6667 28.5388 20.6667 28.0666C20.6667 27.5943 20.5069 27.1985 20.1875 26.8791C19.8681 26.5596 19.4722 26.3999 19 26.3999C18.5278 26.3999 18.1319 26.5596 17.8125 26.8791C17.4931 27.1985 17.3333 27.5943 17.3333 28.0666C17.3333 28.5388 17.4931 28.9346 17.8125 29.2541C18.1319 29.5735 18.5278 29.7332 19 29.7332ZM17.75 24.3999H20.2917C20.2917 23.7055 20.3819 23.143 20.5625 22.7124C20.7431 22.2818 21.1111 21.761 21.6667 21.1499C22.1667 20.5943 22.6528 20.0318 23.125 19.4624C23.5972 18.893 23.8333 18.1499 23.8333 17.2332C23.8333 16.0666 23.3819 15.0805 22.4792 14.2749C21.5764 13.4693 20.4583 13.0666 19.125 13.0666C18.0139 13.0666 17.0069 13.386 16.1042 14.0249C15.2014 14.6638 14.5694 15.4971 14.2083 16.5249L16.5 17.4832C16.6944 16.8721 17.0347 16.3791 17.5208 16.0041C18.0069 15.6291 18.5417 15.4416 19.125 15.4416C19.7361 15.4416 20.2431 15.6082 20.6458 15.9416C21.0486 16.2749 21.25 16.7055 21.25 17.2332C21.25 17.8166 21.0764 18.3374 20.7292 18.7957C20.3819 19.2541 19.9722 19.7193 19.5 20.1916C18.9444 20.7749 18.5139 21.3582 18.2083 21.9416C17.9028 22.5249 17.75 23.3443 17.75 24.3999Z" fill="#F4F4F4" fill-opacity="0.98"/>
        </g>
        </svg>
        </div>
        <div class="map">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37" fill="none">
        <mask id="mask0_248_910" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="37">
        <path d="M0 0.199951H40V37H0V0.199951Z" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_248_910)">
        <path d="M19.9998 20.2001C20.9165 20.2001 21.7012 19.8737 22.354 19.2209C23.0068 18.5682 23.3332 17.7834 23.3332 16.8668C23.3332 15.9501 23.0068 15.1654 22.354 14.5126C21.7012 13.8598 20.9165 13.5334 19.9998 13.5334C19.0832 13.5334 18.2984 13.8598 17.6457 14.5126C16.9929 15.1654 16.6665 15.9501 16.6665 16.8668C16.6665 17.7834 16.9929 18.5682 17.6457 19.2209C18.2984 19.8737 19.0832 20.2001 19.9998 20.2001ZM19.9998 32.4501C23.3887 29.339 25.9026 26.5126 27.5415 23.9709C29.1804 21.4293 29.9998 19.1723 29.9998 17.2001C29.9998 14.1723 29.0346 11.6932 27.104 9.76261C25.1734 7.83206 22.8054 6.86678 19.9998 6.86678C17.1943 6.86678 14.8262 7.83206 12.8957 9.76261C10.9651 11.6932 9.99984 14.1723 9.99984 17.2001C9.99984 19.1723 10.8193 21.4293 12.4582 23.9709C14.0971 26.5126 16.6109 29.339 19.9998 32.4501ZM19.9998 36.8668C15.5276 33.0612 12.1873 29.5265 9.979 26.2626C7.77067 22.9987 6.6665 19.9779 6.6665 17.2001C6.6665 13.0334 8.00678 9.714 10.6873 7.24178C13.3679 4.76956 16.4721 3.53345 19.9998 3.53345C23.5276 3.53345 26.6318 4.76956 29.3123 7.24178C31.9929 9.714 33.3332 13.0334 33.3332 17.2001C33.3332 19.9779 32.229 22.9987 30.0207 26.2626C27.8123 29.5265 24.4721 33.0612 19.9998 36.8668Z" fill="#E34A4A"/>
        </g>
        </svg>
        </div>
        <div class="leaderboard">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none">
        <mask id="mask0_248_913" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="35">
        <path d="M0 0.199951H40V35H20.4H0V0.199951Z" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_248_913)">
        <path d="M12.8207 34.3667V31.8667H18.7502V26.1552C17.3356 25.871 16.0856 25.2759 15.0002 24.3699C13.9147 23.4639 13.1433 22.3346 12.686 20.9821C10.763 20.7534 9.14014 19.9372 7.8175 18.5334C6.49483 17.1295 5.8335 15.4629 5.8335 13.5334V11.8667C5.8335 11.1851 6.07976 10.5981 6.57229 10.1056C7.06479 9.61305 7.65184 9.36678 8.33345 9.36678H12.2117V6.03345H27.7885V9.36678H31.6668C32.3484 9.36678 32.9355 9.61305 33.428 10.1056C33.9205 10.5981 34.1668 11.1851 34.1668 11.8667V13.5334C34.1668 15.4629 33.5054 17.1295 32.1827 18.5334C30.8601 19.9372 29.2373 20.7534 27.3142 20.9821C26.8569 22.3346 26.0856 23.4639 25.0001 24.3699C23.9146 25.2759 22.6646 25.871 21.2501 26.1552V31.8667H27.1795V34.3667H12.8207ZM12.2117 18.2962V11.8667H8.33345V13.5334C8.33345 14.6958 8.69777 15.7166 9.42641 16.5959C10.1551 17.4752 11.0835 18.042 12.2117 18.2962ZM20.0001 23.7578C21.4638 23.7578 22.7058 23.2476 23.7261 22.2273C24.7464 21.207 25.2565 19.965 25.2565 18.5014V8.53341H14.7437V18.5014C14.7437 19.965 15.2539 21.207 16.2742 22.2273C17.2944 23.2476 18.5364 23.7578 20.0001 23.7578ZM27.7885 18.2962C28.9168 18.042 29.8452 17.4752 30.5738 16.5959C31.3025 15.7166 31.6668 14.6958 31.6668 13.5334V11.8667H27.7885V18.2962Z" fill="#F4F4F4" fill-opacity="0.94"/>
        </g>
        </svg>
        </div>
    `;

    // Fetch all users information
    let userID = Number(window.localStorage.getItem("userId"));
    let userPassword = window.localStorage.getItem("userPassword");
    let usersData;

    try {
        let request = new Request(`php/api.php?action=feed&userID=${userID}&userPassword=${userPassword}&action=getAllUsers`);
        let response = await fetch(request);
        let resource = await response.json();

        if(!response.ok){
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        }else{
            usersData = resource;
        }
    } catch (error) {
        let message = "Något gick fel, försök igen senare";
        informUser(message);
        return;
    }

    // Sort all players acording to finishing time
    let finishedUsers = usersData.filter(user => user['finishingTime'] !== "Not finished");
    finishedUsers.sort((a, b) => {
        // Convert finishing time strings to Date objects for comparison
        let timeA = new Date('1970-01-01T' + a['finishingTime']);
        let timeB = new Date('1970-01-01T' + b['finishingTime']);
        return timeA - timeB;
    });

    let topThree = finishedUsers.slice(0, 3);
    let restOfPlayers = finishedUsers.slice(3);

    // Display the three leading players at the top
    let leaders = document.querySelector(".leaders");
    topThree.forEach((player, index) => {
        let palcement = index + 1;

        let playerDiv = document.createElement("div");
        playerDiv.innerHTML = `
        <p class="leaderNumber">${palcement}</p>
        <div class="playerProfilePic"></div>
        <p>${player.username}</p>
        <p class="secondaryText">${player.finishingTime}</p>
        `;

        leaders.appendChild(playerDiv);
        playerDiv.querySelector(".playerProfilePic").classList.add(`${player.profilePic}`)

    });

    // Display the rest of all finished players
    let scoreboard = document.querySelector(".scoreboard");
    let placement = 4;
    restOfPlayers.forEach(player => {

        let playerDiv = document.createElement("div");
        playerDiv.innerHTML = `
        <p class="leaderNumber">${placement}</p>
        <div>
            <div class="playerProfilePic"></div>
            <p>${player.username}</p>
        </div>
        <p class="secondaryText">${player.finishingTime}</p>
        `;

        scoreboard.appendChild(playerDiv);
        playerDiv.querySelector(".playerProfilePic").classList.add(`${player.profilePic}`)
        placement++;
    })

    // Navbar
    main.querySelector(".leaderboard").addEventListener("click", renderLeaderboard);
    main.querySelector(".map").addEventListener("click", renderMap);
}