function renderIntroductionpage(){
    main.innerHTML = `
    <h1>Det har skett ett mord</h1>
    <button class="btnPlayAudio"></button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. </p>
    <button class="btnNextPage">Nästa</button>
    `;

    let audio = new Audio("../media/testMusic.mp3");

    main.querySelector(".btnNextPage").addEventListener("click", renderMap);
    main.querySelector(".btnPlayAudio").addEventListener("click", e => {

        if(main.querySelector(".btnPlayAudio").classList.contains("btnPauseAudio")){
            main.querySelector(".btnPlayAudio").classList.remove("btnPauseAudio");
            audio.pause()
        }else{
            main.querySelector(".btnPlayAudio").classList.add("btnPauseAudio");
            audio.play();
        }
    })
}

function startTimer(){
    console.log("Starting timer");
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds()
}

function renderMap(){

    //Start game timer
    startTimer();

    //Map structure
    main.classList.add("mainMap");
    main.innerHTML=`
    <button class="logOutBtn">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
        <mask id="mask0_108_37" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
        <rect width="35" height="35" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_108_37)">
        <path d="M17.6667 17.5C16.0625 17.5 14.6892 16.9288 13.5469 15.7864C12.4045 14.6441 11.8333 13.2708 11.8333 11.6666C11.8333 10.0625 12.4045 8.68922 13.5469 7.54685C14.6892 6.40449 16.0625 5.83331 17.6667 5.83331C19.2708 5.83331 20.6441 6.40449 21.7865 7.54685C22.9288 8.68922 23.5 10.0625 23.5 11.6666C23.5 13.2708 22.9288 14.6441 21.7865 15.7864C20.6441 16.9288 19.2708 17.5 17.6667 17.5ZM6 29.1666V25.0833C6 24.2569 6.21267 23.4974 6.63802 22.8047C7.06337 22.112 7.62847 21.5833 8.33333 21.2187C9.84028 20.4653 11.3715 19.9002 12.9271 19.5234C14.4826 19.1467 16.0625 18.9583 17.6667 18.9583C19.2708 18.9583 20.8507 19.1467 22.4062 19.5234C23.9618 19.9002 25.4931 20.4653 27 21.2187C27.7049 21.5833 28.27 22.112 28.6953 22.8047C29.1207 23.4974 29.3333 24.2569 29.3333 25.0833V29.1666H6ZM8.91667 26.25H26.4167V25.0833C26.4167 24.816 26.3498 24.5729 26.2161 24.3541C26.0825 24.1354 25.9062 23.9653 25.6875 23.8437C24.375 23.1875 23.0503 22.6953 21.7135 22.3672C20.3767 22.039 19.0278 21.875 17.6667 21.875C16.3056 21.875 14.9566 22.039 13.6198 22.3672C12.283 22.6953 10.9583 23.1875 9.64583 23.8437C9.42708 23.9653 9.25087 24.1354 9.11719 24.3541C8.98351 24.5729 8.91667 24.816 8.91667 25.0833V26.25ZM17.6667 14.5833C18.4688 14.5833 19.1554 14.2977 19.7266 13.7265C20.2977 13.1554 20.5833 12.4687 20.5833 11.6666C20.5833 10.8646 20.2977 10.1779 19.7266 9.60675C19.1554 9.03557 18.4688 8.74998 17.6667 8.74998C16.8646 8.74998 16.178 9.03557 15.6068 9.60675C15.0356 10.1779 14.75 10.8646 14.75 11.6666C14.75 12.4687 15.0356 13.1554 15.6068 13.7265C16.178 14.2977 16.8646 14.5833 17.6667 14.5833Z" fill="#1C1B1F" fill-opacity="0.47"/>
        </g>
        </svg>
    </button>
    
   
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 32 43" fill="none" class="pin hoock">
    <path d="M32 16.125C32 23.4652 22.25 36.5332 17.975 41.925C16.95 43.21 15.05 43.21 14.025 41.925C9.75 36.5332 0 23.4652 0 16.125C0 7.22266 7.16667 0 16 0C24.8333 0 32 7.22266 32 16.125Z" fill="black"/>
    </svg>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 32 43" fill="none" class="pin cruella">
    <path d="M32 16.125C32 23.4652 22.25 36.5332 17.975 41.925C16.95 43.21 15.05 43.21 14.025 41.925C9.75 36.5332 0 23.4652 0 16.125C0 7.22266 7.16667 0 16 0C24.8333 0 32 7.22266 32 16.125Z" fill="black"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 32 43" fill="none" class="pin musse">
    <path d="M32 16.125C32 23.4652 22.25 36.5332 17.975 41.925C16.95 43.21 15.05 43.21 14.025 41.925C9.75 36.5332 0 23.4652 0 16.125C0 7.22266 7.16667 0 16 0C24.8333 0 32 7.22266 32 16.125Z" fill="black"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="43" viewBox="0 0 32 43" fill="none" class="pin ursulla">
    <path d="M32 16.125C32 23.4652 22.25 36.5332 17.975 41.925C16.95 43.21 15.05 43.21 14.025 41.925C9.75 36.5332 0 23.4652 0 16.125C0 7.22266 7.16667 0 16 0C24.8333 0 32 7.22266 32 16.125Z" fill="black"/>
    </svg>

    <div class="navbar">
        <div class="charracterChart">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_22" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_22)">
            <path d="M12.5 45.8334V36.8751C10.5208 35.0695 8.98438 32.9601 7.89063 30.547C6.79688 28.1338 6.25 25.5904 6.25 22.9167C6.25 17.7084 8.07292 13.2813 11.7188 9.6355C15.3646 5.98966 19.7917 4.16675 25 4.16675C29.3403 4.16675 33.1858 5.44279 36.5365 7.99487C39.8872 10.547 42.066 13.8716 43.0729 17.9688L45.7813 28.6459C45.9549 29.3056 45.8333 29.9046 45.4167 30.4428C45 30.981 44.4444 31.2501 43.75 31.2501H39.5833V37.5001C39.5833 38.6459 39.1754 39.6268 38.3594 40.4428C37.5434 41.2588 36.5625 41.6667 35.4167 41.6667H31.25V45.8334H27.0833V37.5001H35.4167V27.0834H41.0417L39.0625 19.0105C38.2639 15.8508 36.5625 13.2813 33.9583 11.3022C31.3542 9.323 28.3681 8.33341 25 8.33341C20.9722 8.33341 17.5347 9.73966 14.6875 12.5522C11.8403 15.3647 10.4167 18.7848 10.4167 22.8126C10.4167 24.8959 10.842 26.8751 11.6927 28.7501C12.5434 30.6251 13.75 32.2917 15.3125 33.7501L16.6667 35.0001V45.8334H12.5ZM25 33.3334C25.5903 33.3334 26.0851 33.1338 26.4844 32.7345C26.8837 32.3352 27.0833 31.8404 27.0833 31.2501C27.0833 30.6598 26.8837 30.165 26.4844 29.7657C26.0851 29.3664 25.5903 29.1667 25 29.1667C24.4097 29.1667 23.9149 29.3664 23.5156 29.7657C23.1163 30.165 22.9167 30.6598 22.9167 31.2501C22.9167 31.8404 23.1163 32.3352 23.5156 32.7345C23.9149 33.1338 24.4097 33.3334 25 33.3334ZM23.4375 26.6667H26.6146C26.6146 25.7987 26.7274 25.0956 26.9531 24.5574C27.1788 24.0192 27.6389 23.3681 28.3333 22.6042C28.9583 21.9098 29.566 21.2067 30.1563 20.4949C30.7465 19.7831 31.0417 18.8542 31.0417 17.7084C31.0417 16.2501 30.4774 15.0174 29.349 14.0105C28.2205 13.0036 26.8229 12.5001 25.1563 12.5001C23.7674 12.5001 22.5087 12.8994 21.3802 13.698C20.2517 14.4966 19.4618 15.5383 19.0104 16.823L21.875 18.0209C22.1181 17.257 22.5434 16.6407 23.151 16.172C23.7587 15.7032 24.4271 15.4688 25.1563 15.4688C25.9201 15.4688 26.5538 15.6772 27.0573 16.0938C27.5608 16.5105 27.8125 17.0487 27.8125 17.7084C27.8125 18.4376 27.5955 19.0886 27.1615 19.6615C26.7274 20.2345 26.2153 20.8161 25.625 21.4063C24.9306 22.1355 24.3924 22.8647 24.0104 23.5938C23.6285 24.323 23.4375 25.3473 23.4375 26.6667Z" fill="#1C1B1F" fill-opacity="0.57"/>
            </g>
            </svg>
        </div>
        <div class="map">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_19" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_19)">
            <path d="M25.0002 25C26.146 25 27.1269 24.592 27.9429 23.776C28.7588 22.96 29.1668 21.9791 29.1668 20.8333C29.1668 19.6875 28.7588 18.7066 27.9429 17.8906C27.1269 17.0746 26.146 16.6666 25.0002 16.6666C23.8543 16.6666 22.8734 17.0746 22.0575 17.8906C21.2415 18.7066 20.8335 19.6875 20.8335 20.8333C20.8335 21.9791 21.2415 22.96 22.0575 23.776C22.8734 24.592 23.8543 25 25.0002 25ZM25.0002 45.8333C19.4099 41.0764 15.2345 36.6579 12.4741 32.5781C9.7137 28.4982 8.3335 24.7222 8.3335 21.25C8.3335 16.0416 10.0088 11.8923 13.3595 8.80204C16.7102 5.71177 20.5904 4.16663 25.0002 4.16663C29.4099 4.16663 33.2901 5.71177 36.6408 8.80204C39.9915 11.8923 41.6668 16.0416 41.6668 21.25C41.6668 24.7222 40.2866 28.4982 37.5262 32.5781C34.7658 36.6579 30.5904 41.0764 25.0002 45.8333Z" fill="#E34A4A"/>
            </g>
            </svg>
        </div>
        <div class="leaderboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_25" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_25)">
            <path d="M24.9998 41.6666C27.604 41.6666 29.8175 40.7552 31.6405 38.9323C33.4634 37.1093 34.3748 34.8958 34.3748 32.2916C34.3748 29.6875 33.4634 27.4739 31.6405 25.651C29.8175 23.8281 27.604 22.9166 24.9998 22.9166C22.3957 22.9166 20.1821 23.8281 18.3592 25.651C16.5363 27.4739 15.6248 29.6875 15.6248 32.2916C15.6248 34.8958 16.5363 37.1093 18.3592 38.9323C20.1821 40.7552 22.3957 41.6666 24.9998 41.6666ZM18.9061 20.2083C19.6005 19.8264 20.3384 19.5225 21.1196 19.2968C21.9009 19.0711 22.6908 18.9236 23.4894 18.8541L18.229 8.33329H13.0207L18.9061 20.2083ZM31.0936 20.2083L37.0311 8.33329H31.7707L27.3436 17.1875L28.3332 19.1666C28.8193 19.3055 29.288 19.4531 29.7394 19.6093C30.1908 19.7656 30.6422 19.9652 31.0936 20.2083ZM13.3332 39.1666C12.7429 38.1597 12.2828 37.0746 11.953 35.9114C11.6231 34.7482 11.4582 33.5416 11.4582 32.2916C11.4582 31.0416 11.6231 29.835 11.953 28.6718C12.2828 27.5086 12.7429 26.4236 13.3332 25.4166C11.8748 25.9027 10.6769 26.7621 9.73942 27.9948C8.80192 29.2274 8.33317 30.6597 8.33317 32.2916C8.33317 33.9236 8.80192 35.3559 9.73942 36.5885C10.6769 37.8211 11.8748 38.6805 13.3332 39.1666ZM36.6665 39.1666C38.1248 38.6805 39.3228 37.8211 40.2603 36.5885C41.1978 35.3559 41.6665 33.9236 41.6665 32.2916C41.6665 30.6597 41.1978 29.2274 40.2603 27.9948C39.3228 26.7621 38.1248 25.9027 36.6665 25.4166C37.2568 26.4236 37.7169 27.5086 38.0467 28.6718C38.3766 29.835 38.5415 31.0416 38.5415 32.2916C38.5415 33.5416 38.3766 34.7482 38.0467 35.9114C37.7169 37.0746 37.2568 38.1597 36.6665 39.1666ZM24.9998 45.8333C23.611 45.8333 22.2828 45.6336 21.0155 45.2343C19.7481 44.835 18.5762 44.2882 17.4998 43.5937C17.1873 43.6632 16.8748 43.7066 16.5623 43.7239C16.2498 43.7413 15.92 43.75 15.5728 43.75C12.413 43.75 9.72206 42.6389 7.49984 40.4166C5.27762 38.1944 4.1665 35.5034 4.1665 32.3437C4.1665 29.3229 5.17345 26.7361 7.18734 24.5833C9.20123 22.4305 11.6839 21.2326 14.6353 20.9895L6.24984 4.16663H20.8332L24.9998 12.5L29.1665 4.16663H43.7498L35.4165 20.8854C38.3679 21.1632 40.8419 22.3784 42.8384 24.5312C44.8349 26.684 45.8332 29.2708 45.8332 32.2916C45.8332 35.4861 44.7221 38.1944 42.4998 40.4166C40.2776 42.6389 37.5693 43.75 34.3748 43.75C34.0623 43.75 33.7412 43.7413 33.4113 43.7239C33.0814 43.7066 32.7603 43.6632 32.4478 43.5937C31.3714 44.2882 30.2082 44.835 28.9582 45.2343C27.7082 45.6336 26.3887 45.8333 24.9998 45.8333ZM21.1457 38.0208L22.604 33.2812L18.7498 30.5208H23.4894L24.9998 25.5208L26.5103 30.5208H31.2498L27.3957 33.2812L28.854 38.0208L24.9998 35.1041L21.1457 38.0208Z" fill="#1C1B1F" fill-opacity="0.57"/>
            </g>
            </svg>
        </div>
    </div>
    `;

    //When selecting a pin, display charracter pop up
    main.querySelectorAll(".pin").forEach(pin =>
        pin.addEventListener("click", e => {

            //Hide navbar
            main.querySelector(".navbar").classList.add("hidden");

            //If pin is already selected unselect, otherwise display charracter pop up
            if(pin.classList.contains("selected")){

                pin.classList.remove("selected");
                document.querySelector(".popUp").remove();
                main.querySelector(".navbar").classList.remove("hidden");

            }else{
                if(document.querySelector(".popUp")){
                    document.querySelector(".popUp").remove();
                }

                main.querySelectorAll(".pin.selected").forEach(selectedPin => {
                    selectedPin.classList.remove("selected");
                });

                pin.classList.add("selected");
                let classList = pin.classList;
                let selectedCharracter;
               
                //Find selected charracter
                for (let i = 0; i < classList.length; i++) {
                    switch (classList[i]) {
                        case "hoock":
                            selectedCharracter = "Hoock";
                            break;
                        case "cruella":
                            selectedCharracter = "Cruella";
                            break;
                        case "musse":
                            selectedCharracter = "Musse";
                            break;
                        case "ursulla":
                            selectedCharracter = "Ursulla";
                            break;
                    }
                }
                
                let popUp = document.createElement("div");
                popUp.classList.add("popUp");
    
                popUp.innerHTML = `
                    <div>
                        <div class="charracterImage"></div>
                        <div class="charracterInfo">
                            <h3>${selectedCharracter}</h3>
                            <p>1000 1000</p>
                        </div>
                    </div>
                    <button class="btnTalkToCharracter">Talk to ${selectedCharracter}</button>
                `;
    
                main.appendChild(popUp);

                //Display controll question when clicking "talk to charracter"
                document.querySelector(".btnTalkToCharracter").addEventListener("click", e =>{
                    
                    //Check if controll questio has already been answered 

                    //If controll question has not been answered before
                    renderControlQuestion(selectedCharracter);

                    //If controll question has already been answered before

                    
                })
            }
        })    
    )

    //Navbar
    main.querySelector(".leaderboard").addEventListener("click", renderLeaderboard);
    main.querySelector(".charracterChart").addEventListener("click", renderCharracterboard);

    // Logout
    main.querySelector(".logOutBtn").addEventListener("click", e => {
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        renderLogin();
    })
}

//Function to render controll questions before player get the information from a charracter
function renderControlQuestion(charracter){

    main.classList.remove("mainMap");

    let typeOfQuestion;
    let question;
    let answer;

    switch (charracter) {
        case "Hoock":
            typeOfQuestion = "word";
            question = "Vilket namn har det mystiska djuret med en sydvästlig riktning? (pegasus)";
            answer = "pegasus";
            break;
        case "Cruella":
            typeOfQuestion = "crossword";
            question = ["bro","bänk","soptunna"]
            answer = "blå";
            break;
        case "Musse":
            typeOfQuestion = "number";
            question = "Hur många x kan du se här inne på gården? (9)";
            answer = "9";
            break;
        case "Ursulla":
            typeOfQuestion = "word";
            question = "Vilken färg har dörren? (blå)";
            answer = "blå";
            break;
    }

    if(typeOfQuestion === "number"){

        main.innerHTML = `
        <h2>${question}</h2>
        <input type="number">Svar</input>
        <button class="btnUnlock">Lås upp</button>
        `;
    }else if(typeOfQuestion === "word"){
        main.innerHTML = `
        <h2>${question}</h2>
        <input>Svar</input>
        <button class="btnUnlock">Lås upp</button>
        `;
    }else if(typeOfQuestion === "crossword"){
        main.innerHTML = `
        <h2>${question}</h2>
        
        <button class="btnUnlock">Lås upp</button>
        `;
    }
   
                
    let input = main.querySelector("input");

    main.querySelector(".btnUnlock").addEventListener("click", e =>{
        let userAnswer = input.value;
        console.log(userAnswer, answer);
        if(userAnswer === answer){
            renderCharracterPage(charracter)
        }else{
            console.log("Wrong answer");
        }
    })

}


function renderCharracterPage(charracter){

    let charracterText;
    //Define carracter text based on charracter selected
    switch (charracter) {
        case "Hoock":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            break;
        case "Cruella":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            break;
        case "Musse":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            break;
        case "Ursulla":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            break;
    }

    main.classList.remove("mainMap");
    main.innerHTML = `
    <div>
        <div class="charracterImage"></div>
        <div class="charracterInfo">
            <h2>${charracter}</h2>
            <button>Misstänkt</button>
            <button class="btnPlayAudio"></button>
        </div>
    </div>
    <p>${charracterText} </p>
    <button class="guessMurderer">Mördare</button>
    `;

    main.querySelector(".guessMurderer").addEventListener("click", e => {
        let confirmPopup = document.createElement("div");
        confirmPopup.classList.add("popupBackground");
        confirmPopup.innerHTML = `
        <div class="confirmPopup">
            <p>Är du säker på att ${charracter} är mördaren?</p>
            <div>
                <button class="btnContinuePlaying">Fortsätt spela</button>
                <button class="btnGuidedMurderer">Ja</button>
            </div>
        </div>
        `;

        main.appendChild(confirmPopup);

        main.querySelector(".btnContinuePlaying").addEventListener("click", e => {
            confirmPopup.remove();
        })
        main.querySelector(".btnGuidedMurderer").addEventListener("click", e => {
            console.log("guessing murderer");
        })
    })
}

function renderLeaderboard(){

    main.classList.remove("mainMap");
    main.innerHTML = `
    <h1>Leaderboard</h1>
    <div class="leaders"></div>
    <div class="scoreboard"></div>

    <div class="navbar">
        <div class="charracterChart">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_22" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_22)">
            <path d="M12.5 45.8334V36.8751C10.5208 35.0695 8.98438 32.9601 7.89063 30.547C6.79688 28.1338 6.25 25.5904 6.25 22.9167C6.25 17.7084 8.07292 13.2813 11.7188 9.6355C15.3646 5.98966 19.7917 4.16675 25 4.16675C29.3403 4.16675 33.1858 5.44279 36.5365 7.99487C39.8872 10.547 42.066 13.8716 43.0729 17.9688L45.7813 28.6459C45.9549 29.3056 45.8333 29.9046 45.4167 30.4428C45 30.981 44.4444 31.2501 43.75 31.2501H39.5833V37.5001C39.5833 38.6459 39.1754 39.6268 38.3594 40.4428C37.5434 41.2588 36.5625 41.6667 35.4167 41.6667H31.25V45.8334H27.0833V37.5001H35.4167V27.0834H41.0417L39.0625 19.0105C38.2639 15.8508 36.5625 13.2813 33.9583 11.3022C31.3542 9.323 28.3681 8.33341 25 8.33341C20.9722 8.33341 17.5347 9.73966 14.6875 12.5522C11.8403 15.3647 10.4167 18.7848 10.4167 22.8126C10.4167 24.8959 10.842 26.8751 11.6927 28.7501C12.5434 30.6251 13.75 32.2917 15.3125 33.7501L16.6667 35.0001V45.8334H12.5ZM25 33.3334C25.5903 33.3334 26.0851 33.1338 26.4844 32.7345C26.8837 32.3352 27.0833 31.8404 27.0833 31.2501C27.0833 30.6598 26.8837 30.165 26.4844 29.7657C26.0851 29.3664 25.5903 29.1667 25 29.1667C24.4097 29.1667 23.9149 29.3664 23.5156 29.7657C23.1163 30.165 22.9167 30.6598 22.9167 31.2501C22.9167 31.8404 23.1163 32.3352 23.5156 32.7345C23.9149 33.1338 24.4097 33.3334 25 33.3334ZM23.4375 26.6667H26.6146C26.6146 25.7987 26.7274 25.0956 26.9531 24.5574C27.1788 24.0192 27.6389 23.3681 28.3333 22.6042C28.9583 21.9098 29.566 21.2067 30.1563 20.4949C30.7465 19.7831 31.0417 18.8542 31.0417 17.7084C31.0417 16.2501 30.4774 15.0174 29.349 14.0105C28.2205 13.0036 26.8229 12.5001 25.1563 12.5001C23.7674 12.5001 22.5087 12.8994 21.3802 13.698C20.2517 14.4966 19.4618 15.5383 19.0104 16.823L21.875 18.0209C22.1181 17.257 22.5434 16.6407 23.151 16.172C23.7587 15.7032 24.4271 15.4688 25.1563 15.4688C25.9201 15.4688 26.5538 15.6772 27.0573 16.0938C27.5608 16.5105 27.8125 17.0487 27.8125 17.7084C27.8125 18.4376 27.5955 19.0886 27.1615 19.6615C26.7274 20.2345 26.2153 20.8161 25.625 21.4063C24.9306 22.1355 24.3924 22.8647 24.0104 23.5938C23.6285 24.323 23.4375 25.3473 23.4375 26.6667Z" fill="#1C1B1F" fill-opacity="0.57"/>
            </g>
            </svg>
        </div>
        <div class="map">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_19" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_19)">
            <path d="M25.0002 25C26.146 25 27.1269 24.592 27.9429 23.776C28.7588 22.96 29.1668 21.9791 29.1668 20.8333C29.1668 19.6875 28.7588 18.7066 27.9429 17.8906C27.1269 17.0746 26.146 16.6666 25.0002 16.6666C23.8543 16.6666 22.8734 17.0746 22.0575 17.8906C21.2415 18.7066 20.8335 19.6875 20.8335 20.8333C20.8335 21.9791 21.2415 22.96 22.0575 23.776C22.8734 24.592 23.8543 25 25.0002 25ZM25.0002 45.8333C19.4099 41.0764 15.2345 36.6579 12.4741 32.5781C9.7137 28.4982 8.3335 24.7222 8.3335 21.25C8.3335 16.0416 10.0088 11.8923 13.3595 8.80204C16.7102 5.71177 20.5904 4.16663 25.0002 4.16663C29.4099 4.16663 33.2901 5.71177 36.6408 8.80204C39.9915 11.8923 41.6668 16.0416 41.6668 21.25C41.6668 24.7222 40.2866 28.4982 37.5262 32.5781C34.7658 36.6579 30.5904 41.0764 25.0002 45.8333Z" fill="#E34A4A"/>
            </g>
            </svg>
        </div>
        <div class="leaderboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_25" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_25)">
            <path d="M24.9998 41.6666C27.604 41.6666 29.8175 40.7552 31.6405 38.9323C33.4634 37.1093 34.3748 34.8958 34.3748 32.2916C34.3748 29.6875 33.4634 27.4739 31.6405 25.651C29.8175 23.8281 27.604 22.9166 24.9998 22.9166C22.3957 22.9166 20.1821 23.8281 18.3592 25.651C16.5363 27.4739 15.6248 29.6875 15.6248 32.2916C15.6248 34.8958 16.5363 37.1093 18.3592 38.9323C20.1821 40.7552 22.3957 41.6666 24.9998 41.6666ZM18.9061 20.2083C19.6005 19.8264 20.3384 19.5225 21.1196 19.2968C21.9009 19.0711 22.6908 18.9236 23.4894 18.8541L18.229 8.33329H13.0207L18.9061 20.2083ZM31.0936 20.2083L37.0311 8.33329H31.7707L27.3436 17.1875L28.3332 19.1666C28.8193 19.3055 29.288 19.4531 29.7394 19.6093C30.1908 19.7656 30.6422 19.9652 31.0936 20.2083ZM13.3332 39.1666C12.7429 38.1597 12.2828 37.0746 11.953 35.9114C11.6231 34.7482 11.4582 33.5416 11.4582 32.2916C11.4582 31.0416 11.6231 29.835 11.953 28.6718C12.2828 27.5086 12.7429 26.4236 13.3332 25.4166C11.8748 25.9027 10.6769 26.7621 9.73942 27.9948C8.80192 29.2274 8.33317 30.6597 8.33317 32.2916C8.33317 33.9236 8.80192 35.3559 9.73942 36.5885C10.6769 37.8211 11.8748 38.6805 13.3332 39.1666ZM36.6665 39.1666C38.1248 38.6805 39.3228 37.8211 40.2603 36.5885C41.1978 35.3559 41.6665 33.9236 41.6665 32.2916C41.6665 30.6597 41.1978 29.2274 40.2603 27.9948C39.3228 26.7621 38.1248 25.9027 36.6665 25.4166C37.2568 26.4236 37.7169 27.5086 38.0467 28.6718C38.3766 29.835 38.5415 31.0416 38.5415 32.2916C38.5415 33.5416 38.3766 34.7482 38.0467 35.9114C37.7169 37.0746 37.2568 38.1597 36.6665 39.1666ZM24.9998 45.8333C23.611 45.8333 22.2828 45.6336 21.0155 45.2343C19.7481 44.835 18.5762 44.2882 17.4998 43.5937C17.1873 43.6632 16.8748 43.7066 16.5623 43.7239C16.2498 43.7413 15.92 43.75 15.5728 43.75C12.413 43.75 9.72206 42.6389 7.49984 40.4166C5.27762 38.1944 4.1665 35.5034 4.1665 32.3437C4.1665 29.3229 5.17345 26.7361 7.18734 24.5833C9.20123 22.4305 11.6839 21.2326 14.6353 20.9895L6.24984 4.16663H20.8332L24.9998 12.5L29.1665 4.16663H43.7498L35.4165 20.8854C38.3679 21.1632 40.8419 22.3784 42.8384 24.5312C44.8349 26.684 45.8332 29.2708 45.8332 32.2916C45.8332 35.4861 44.7221 38.1944 42.4998 40.4166C40.2776 42.6389 37.5693 43.75 34.3748 43.75C34.0623 43.75 33.7412 43.7413 33.4113 43.7239C33.0814 43.7066 32.7603 43.6632 32.4478 43.5937C31.3714 44.2882 30.2082 44.835 28.9582 45.2343C27.7082 45.6336 26.3887 45.8333 24.9998 45.8333ZM21.1457 38.0208L22.604 33.2812L18.7498 30.5208H23.4894L24.9998 25.5208L26.5103 30.5208H31.2498L27.3957 33.2812L28.854 38.0208L24.9998 35.1041L21.1457 38.0208Z" fill="#1C1B1F" fill-opacity="0.57"/>
            </g>
            </svg>
        </div>
    </div>
    `;

    main.querySelector(".leaderboard").addEventListener("click", renderLeaderboard);
    main.querySelector(".map").addEventListener("click", renderMap);

}

function renderCharracterboard(){
    main.classList.remove("mainMap");

    main.innerHTML = `
    <h1>Charracters!</h1>
    <div class="charracters"></div>

    <div class="navbar">
        <div class="charracterChart">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_22" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_22)">
            <path d="M12.5 45.8334V36.8751C10.5208 35.0695 8.98438 32.9601 7.89063 30.547C6.79688 28.1338 6.25 25.5904 6.25 22.9167C6.25 17.7084 8.07292 13.2813 11.7188 9.6355C15.3646 5.98966 19.7917 4.16675 25 4.16675C29.3403 4.16675 33.1858 5.44279 36.5365 7.99487C39.8872 10.547 42.066 13.8716 43.0729 17.9688L45.7813 28.6459C45.9549 29.3056 45.8333 29.9046 45.4167 30.4428C45 30.981 44.4444 31.2501 43.75 31.2501H39.5833V37.5001C39.5833 38.6459 39.1754 39.6268 38.3594 40.4428C37.5434 41.2588 36.5625 41.6667 35.4167 41.6667H31.25V45.8334H27.0833V37.5001H35.4167V27.0834H41.0417L39.0625 19.0105C38.2639 15.8508 36.5625 13.2813 33.9583 11.3022C31.3542 9.323 28.3681 8.33341 25 8.33341C20.9722 8.33341 17.5347 9.73966 14.6875 12.5522C11.8403 15.3647 10.4167 18.7848 10.4167 22.8126C10.4167 24.8959 10.842 26.8751 11.6927 28.7501C12.5434 30.6251 13.75 32.2917 15.3125 33.7501L16.6667 35.0001V45.8334H12.5ZM25 33.3334C25.5903 33.3334 26.0851 33.1338 26.4844 32.7345C26.8837 32.3352 27.0833 31.8404 27.0833 31.2501C27.0833 30.6598 26.8837 30.165 26.4844 29.7657C26.0851 29.3664 25.5903 29.1667 25 29.1667C24.4097 29.1667 23.9149 29.3664 23.5156 29.7657C23.1163 30.165 22.9167 30.6598 22.9167 31.2501C22.9167 31.8404 23.1163 32.3352 23.5156 32.7345C23.9149 33.1338 24.4097 33.3334 25 33.3334ZM23.4375 26.6667H26.6146C26.6146 25.7987 26.7274 25.0956 26.9531 24.5574C27.1788 24.0192 27.6389 23.3681 28.3333 22.6042C28.9583 21.9098 29.566 21.2067 30.1563 20.4949C30.7465 19.7831 31.0417 18.8542 31.0417 17.7084C31.0417 16.2501 30.4774 15.0174 29.349 14.0105C28.2205 13.0036 26.8229 12.5001 25.1563 12.5001C23.7674 12.5001 22.5087 12.8994 21.3802 13.698C20.2517 14.4966 19.4618 15.5383 19.0104 16.823L21.875 18.0209C22.1181 17.257 22.5434 16.6407 23.151 16.172C23.7587 15.7032 24.4271 15.4688 25.1563 15.4688C25.9201 15.4688 26.5538 15.6772 27.0573 16.0938C27.5608 16.5105 27.8125 17.0487 27.8125 17.7084C27.8125 18.4376 27.5955 19.0886 27.1615 19.6615C26.7274 20.2345 26.2153 20.8161 25.625 21.4063C24.9306 22.1355 24.3924 22.8647 24.0104 23.5938C23.6285 24.323 23.4375 25.3473 23.4375 26.6667Z" fill="#1C1B1F" fill-opacity="0.57"/>
            </g>
            </svg>
        </div>
        <div class="map">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_19" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_19)">
            <path d="M25.0002 25C26.146 25 27.1269 24.592 27.9429 23.776C28.7588 22.96 29.1668 21.9791 29.1668 20.8333C29.1668 19.6875 28.7588 18.7066 27.9429 17.8906C27.1269 17.0746 26.146 16.6666 25.0002 16.6666C23.8543 16.6666 22.8734 17.0746 22.0575 17.8906C21.2415 18.7066 20.8335 19.6875 20.8335 20.8333C20.8335 21.9791 21.2415 22.96 22.0575 23.776C22.8734 24.592 23.8543 25 25.0002 25ZM25.0002 45.8333C19.4099 41.0764 15.2345 36.6579 12.4741 32.5781C9.7137 28.4982 8.3335 24.7222 8.3335 21.25C8.3335 16.0416 10.0088 11.8923 13.3595 8.80204C16.7102 5.71177 20.5904 4.16663 25.0002 4.16663C29.4099 4.16663 33.2901 5.71177 36.6408 8.80204C39.9915 11.8923 41.6668 16.0416 41.6668 21.25C41.6668 24.7222 40.2866 28.4982 37.5262 32.5781C34.7658 36.6579 30.5904 41.0764 25.0002 45.8333Z" fill="#E34A4A"/>
            </g>
            </svg>
        </div>
        <div class="leaderboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_108_25" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_108_25)">
            <path d="M24.9998 41.6666C27.604 41.6666 29.8175 40.7552 31.6405 38.9323C33.4634 37.1093 34.3748 34.8958 34.3748 32.2916C34.3748 29.6875 33.4634 27.4739 31.6405 25.651C29.8175 23.8281 27.604 22.9166 24.9998 22.9166C22.3957 22.9166 20.1821 23.8281 18.3592 25.651C16.5363 27.4739 15.6248 29.6875 15.6248 32.2916C15.6248 34.8958 16.5363 37.1093 18.3592 38.9323C20.1821 40.7552 22.3957 41.6666 24.9998 41.6666ZM18.9061 20.2083C19.6005 19.8264 20.3384 19.5225 21.1196 19.2968C21.9009 19.0711 22.6908 18.9236 23.4894 18.8541L18.229 8.33329H13.0207L18.9061 20.2083ZM31.0936 20.2083L37.0311 8.33329H31.7707L27.3436 17.1875L28.3332 19.1666C28.8193 19.3055 29.288 19.4531 29.7394 19.6093C30.1908 19.7656 30.6422 19.9652 31.0936 20.2083ZM13.3332 39.1666C12.7429 38.1597 12.2828 37.0746 11.953 35.9114C11.6231 34.7482 11.4582 33.5416 11.4582 32.2916C11.4582 31.0416 11.6231 29.835 11.953 28.6718C12.2828 27.5086 12.7429 26.4236 13.3332 25.4166C11.8748 25.9027 10.6769 26.7621 9.73942 27.9948C8.80192 29.2274 8.33317 30.6597 8.33317 32.2916C8.33317 33.9236 8.80192 35.3559 9.73942 36.5885C10.6769 37.8211 11.8748 38.6805 13.3332 39.1666ZM36.6665 39.1666C38.1248 38.6805 39.3228 37.8211 40.2603 36.5885C41.1978 35.3559 41.6665 33.9236 41.6665 32.2916C41.6665 30.6597 41.1978 29.2274 40.2603 27.9948C39.3228 26.7621 38.1248 25.9027 36.6665 25.4166C37.2568 26.4236 37.7169 27.5086 38.0467 28.6718C38.3766 29.835 38.5415 31.0416 38.5415 32.2916C38.5415 33.5416 38.3766 34.7482 38.0467 35.9114C37.7169 37.0746 37.2568 38.1597 36.6665 39.1666ZM24.9998 45.8333C23.611 45.8333 22.2828 45.6336 21.0155 45.2343C19.7481 44.835 18.5762 44.2882 17.4998 43.5937C17.1873 43.6632 16.8748 43.7066 16.5623 43.7239C16.2498 43.7413 15.92 43.75 15.5728 43.75C12.413 43.75 9.72206 42.6389 7.49984 40.4166C5.27762 38.1944 4.1665 35.5034 4.1665 32.3437C4.1665 29.3229 5.17345 26.7361 7.18734 24.5833C9.20123 22.4305 11.6839 21.2326 14.6353 20.9895L6.24984 4.16663H20.8332L24.9998 12.5L29.1665 4.16663H43.7498L35.4165 20.8854C38.3679 21.1632 40.8419 22.3784 42.8384 24.5312C44.8349 26.684 45.8332 29.2708 45.8332 32.2916C45.8332 35.4861 44.7221 38.1944 42.4998 40.4166C40.2776 42.6389 37.5693 43.75 34.3748 43.75C34.0623 43.75 33.7412 43.7413 33.4113 43.7239C33.0814 43.7066 32.7603 43.6632 32.4478 43.5937C31.3714 44.2882 30.2082 44.835 28.9582 45.2343C27.7082 45.6336 26.3887 45.8333 24.9998 45.8333ZM21.1457 38.0208L22.604 33.2812L18.7498 30.5208H23.4894L24.9998 25.5208L26.5103 30.5208H31.2498L27.3957 33.2812L28.854 38.0208L24.9998 35.1041L21.1457 38.0208Z" fill="#1C1B1F" fill-opacity="0.57"/>
            </g>
            </svg>
        </div>
    </div>
    `;

    main.querySelector(".leaderboard").addEventListener("click", renderLeaderboard);
    main.querySelector(".map").addEventListener("click", renderMap);

}