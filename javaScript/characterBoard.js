
// Function to render character board and dislay marked suspects
async function renderCharracterboard() {
    main.classList.remove("mainMap");

    main.innerHTML = `
    <div class="boardOfCharracters">
        <div class="musse character">
            <img src="media/musse.png" alt="musse">
        </div>
        <div class="ursulla character">
            <img src="media/ursulla.png" alt="ursulla">
        </div>
        <div class="cruellaDeVil character">
            <img src="media/cruellaDeVil.png" alt="cruellaDeVil">
        </div>
        <div class="hades character">
            <img src="media/hades.png" alt="hades">
        </div>
        <div class="darla character">
            <img src="media/darla.png" alt="darla">
        </div>
        <div class="kaptenKrok character">
            <img src="media/kaptenKrok.png" alt="kaptenkrok">
        </div>
        <div class="snovit character">
            <img src="media/snovit.png" alt="snövit">
        </div>
        <div class="tornrosa character">
            <img src="media/tornrosa.png" alt="törnrosa">
        </div>
        <div class="hattmakaren character">
            <img src="media/hattmakaren.png" alt="hattmakaren">
        </div>
        <div class="prinsJohn character">
            <img src="media/prinsJohn.png" alt="prinsjohn">
        </div>
        <div class="hjarterDam character">
            <img src="media/hjarterDam.png" alt="hjärterdam">
        </div>
        <div class="skinner character">
        <img src="media/skinner.png" alt="headchef">
        </div>
    </div>

    <div class="navbar">
    <div class="charracterChart">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <mask id="mask0_248_907" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                <rect width="40" height="40" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_248_907)">
                <path d="M9 39.7332V32.5666C7.41667 31.1221 6.1875 29.4346 5.3125 27.5041C4.4375 25.5735 4 23.5388 4 21.3999C4 17.2332 5.45833 13.6916 8.375 10.7749C11.2917 7.85824 14.8333 6.3999 19 6.3999C22.4722 6.3999 25.5486 7.42074 28.2292 9.4624C30.9097 11.5041 32.6528 14.1638 33.4583 17.4416L35.625 25.9832C35.7639 26.511 35.6667 26.9902 35.3333 27.4207C35 27.8513 34.5556 28.0666 34 28.0666H30.6667V33.0666C30.6667 33.9832 30.3403 34.768 29.6875 35.4207C29.0347 36.0735 28.25 36.3999 27.3333 36.3999H24V39.7332H20.6667V33.0666H27.3333V24.7332H31.8333L30.25 18.2749C29.6111 15.7471 28.25 13.6916 26.1667 12.1082C24.0833 10.5249 21.6944 9.73324 19 9.73324C15.7778 9.73324 13.0278 10.8582 10.75 13.1082C8.47222 15.3582 7.33333 18.0943 7.33333 21.3166C7.33333 22.9832 7.67361 24.5666 8.35417 26.0666C9.03472 27.5666 10 28.8999 11.25 30.0666L12.3333 31.0666V39.7332H9ZM19 29.7332C19.4722 29.7332 19.8681 29.5735 20.1875 29.2541C20.5069 28.9346 20.6667 28.5388 20.6667 28.0666C20.6667 27.5943 20.5069 27.1985 20.1875 26.8791C19.8681 26.5596 19.4722 26.3999 19 26.3999C18.5278 26.3999 18.1319 26.5596 17.8125 26.8791C17.4931 27.1985 17.3333 27.5943 17.3333 28.0666C17.3333 28.5388 17.4931 28.9346 17.8125 29.2541C18.1319 29.5735 18.5278 29.7332 19 29.7332ZM17.75 24.3999H20.2917C20.2917 23.7055 20.3819 23.143 20.5625 22.7124C20.7431 22.2818 21.1111 21.761 21.6667 21.1499C22.1667 20.5943 22.6528 20.0318 23.125 19.4624C23.5972 18.893 23.8333 18.1499 23.8333 17.2332C23.8333 16.0666 23.3819 15.0805 22.4792 14.2749C21.5764 13.4693 20.4583 13.0666 19.125 13.0666C18.0139 13.0666 17.0069 13.386 16.1042 14.0249C15.2014 14.6638 14.5694 15.4971 14.2083 16.5249L16.5 17.4832C16.6944 16.8721 17.0347 16.3791 17.5208 16.0041C18.0069 15.6291 18.5417 15.4416 19.125 15.4416C19.7361 15.4416 20.2431 15.6082 20.6458 15.9416C21.0486 16.2749 21.25 16.7055 21.25 17.2332C21.25 17.8166 21.0764 18.3374 20.7292 18.7957C20.3819 19.2541 19.9722 19.7193 19.5 20.1916C18.9444 20.7749 18.5139 21.3582 18.2083 21.9416C17.9028 22.5249 17.75 23.3443 17.75 24.3999Z" fill="#E34A4A" fill-opacity="0.98"/>
            </g>
        </svg>
    </div>
    <div class="map">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37" fill="none">
            <mask id="mask0_248_910" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="37">
                <path d="M0 0.199951H40V37H0V0.199951Z" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_248_910)">
                <path d="M19.9998 20.2001C20.9165 20.2001 21.7012 19.8737 22.354 19.2209C23.0068 18.5682 23.3332 17.7834 23.3332 16.8668C23.3332 15.9501 23.0068 15.1654 22.354 14.5126C21.7012 13.8598 20.9165 13.5334 19.9998 13.5334C19.0832 13.5334 18.2984 13.8598 17.6457 14.5126C16.9929 15.1654 16.6665 15.9501 16.6665 16.8668C16.6665 17.7834 16.9929 18.5682 17.6457 19.2209C18.2984 19.8737 19.0832 20.2001 19.9998 20.2001ZM19.9998 32.4501C23.3887 29.339 25.9026 26.5126 27.5415 23.9709C29.1804 21.4293 29.9998 19.1723 29.9998 17.2001C29.9998 14.1723 29.0346 11.6932 27.104 9.76261C25.1734 7.83206 22.8054 6.86678 19.9998 6.86678C17.1943 6.86678 14.8262 7.83206 12.8957 9.76261C10.9651 11.6932 9.99984 14.1723 9.99984 17.2001C9.99984 19.1723 10.8193 21.4293 12.4582 23.9709C14.0971 26.5126 16.6109 29.339 19.9998 32.4501ZM19.9998 36.8668C15.5276 33.0612 12.1873 29.5265 9.979 26.2626C7.77067 22.9987 6.6665 19.9779 6.6665 17.2001C6.6665 13.0334 8.00678 9.714 10.6873 7.24178C13.3679 4.76956 16.4721 3.53345 19.9998 3.53345C23.5276 3.53345 26.6318 4.76956 29.3123 7.24178C31.9929 9.714 33.3332 13.0334 33.3332 17.2001C33.3332 19.9779 32.229 22.9987 30.0207 26.2626C27.8123 29.5265 24.4721 33.0612 19.9998 36.8668Z" fill="#F4F4F4" fill-opacity="0.94"/>
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
</div>
    `;

    // Check for suspect and not suspect marked by user
    let userID = Number(window.localStorage.getItem("userId"));
    let userPassword = window.localStorage.getItem("userPassword");

    let suspectCharacters;
    let notSuspectCharacters;

    try {
        let request = new Request(`php/api.php?userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
        let response = await fetch(request);
        let resource = await response.json();

        if (!response.ok) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        } else {
            suspectCharacters = resource.suspectCharacters;
            notSuspectCharacters = resource.notSuspectCharacters;
        }
    } catch (error) {
        let message = "Något gick fel, försök igen senare";
        informUser(message);
        return;
    }

    // Mark all not suspect characters as not suspect
    notSuspectCharacters.forEach(character => {
        let characterDiv = main.querySelector(`.boardOfCharracters > .${character}`);
        console.log(characterDiv);
        characterDiv.classList.add("notSuspect");
    });

    // Mark all suspect characters as suspect
    suspectCharacters.forEach(character => {
        let characterDiv = main.querySelector(`.boardOfCharracters > .${character}`);
        characterDiv.classList.add("suspect");

        let suspectBanner = document.createElement("div");
        suspectBanner.innerHTML = `<p>Misstänkt</p>`;
        characterDiv.appendChild(suspectBanner);
    })

    // Ask to guess murderer when clicking on character
    main.querySelectorAll(".boardOfCharracters > div").forEach(div => {
        div.addEventListener("click", e => {

            let character = div.classList[0];

            let popup = document.createElement("div");
            popup.classList.add("guessMurderContainer");
            popup.innerHTML = `
                <div class="guessMurderPopup">
                    <p>Är du säker på att du vill gissa på</p>
                    <h3>${character}?</h3>
                    <button>JA</button>
                <div>

            `;

            main.appendChild(popup);

            document.querySelector(".guessMurderContainer").addEventListener("click", event => {
                if (event.target.classList.contains("guessMurderContainer")) {
                    renderCharracterboard();
                }
            });

            popup.querySelector("button").addEventListener("click", e => {

                if (character === "musse") {

                    // stop timer and display story
                    renderStorySolution(true);
                } else {

                    // Inform incorrect guess
                    renderIncorrectGuess(character);
                }
            })
        })
    })

    // Navbar
    main.querySelector(".leaderboard").addEventListener("click", renderLeaderboard);
    main.querySelector(".map").addEventListener("click", renderMap);

}

function renderIncorrectGuess(character) {
    main.classList.add("murderGuess");
    main.innerHTML = `
    <div class="titleMurderWrapper">
        <h2 class="yellow">${character}</h2>
        <h3>är</h3>
        <h2 class="red">inte mördaren</h2>
    </div>
    <div class="bottomWrapper">
        <p>Vill du fortsätta spela spelet eller avsluta spelet och lyssna på vad som faktiskt hänt?</p>
        <div class="buttons">
            <button class="keepPlaying">Fortsätt spela</button>
            <button class="listenToStory">Lösningen</button>
        </div>
    </div>
    `;

    main.querySelector(".keepPlaying").addEventListener("click", renderMap);
    main.querySelector(".listenToStory").addEventListener("click", e => {
        renderStorySolution();
    });
}

// Function to display and handle correct or incorrect guess of who is the murderer
async function renderStorySolution(correctAnswer = false) {

    //Save finishing time if player guessed correctly
    if (correctAnswer) {

        // Fetch player info
        let userID = Number(window.localStorage.getItem("userId"));
        let userPassword = window.localStorage.getItem("userPassword");
        let startTime;

        try {
            let request = new Request(`php/api.php?userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
            let response = await fetch(request);
            let resource = await response.json();

            if (!response.ok) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            } else {
                startTime = resource.startTime;
            }
        } catch (error) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        }

        let startDate = new Date(startTime);
        let currentDate = new Date();
        const timeDifference = currentDate - startDate;

        // Convert milliseconds to hours, minutes, and seconds
        const totalSeconds = Math.floor(timeDifference / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Save finishing time for user
        let requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                userId: userID,
                password: userPassword,
                finishingTime: formattedTime,
                action: "finishTimer"
            })
        };

        try {
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if (!response.ok) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            } else {

            }

        } catch (error) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        }

        main.classList.remove("murderGuess");
        main.classList.add("murderReveal");
        main.innerHTML = `
        <h2 class="yellow">Grattis!</h2>
        <h3>Du hittade mördaren</h3>
        <div class="musseImage"></div>
        <h2 class="red">Musse Pigg</h2>
        <button class="btnListenToStory">Lyssna på vad som hände</button>
        `;

    }else{

        // Fetch player info
        let userID = Number(window.localStorage.getItem("userId"));
        let userPassword = window.localStorage.getItem("userPassword");

        // Register game ended for user
        let requestOptions = {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                userId: userID,
                password: userPassword,
                finishingTime: "Spel Avslutat",
                action: "finishTimer"
            })
        };

        try {
            let request = new Request("php/api.php", requestOptions);
            const response = await fetch(request);
            let resource = await response.json();

            if (!response.ok) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            } else {

            }

        } catch (error) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        }

        main.classList.remove("murderGuess");
        main.classList.add("murderReveal");
        main.innerHTML = `
        <h2 class="yellow">Mördaren</h2>
        <h3>är</h3>
        <div class="musseImage"></div>
        <h2 class="red">Musse Pigg</h2>
        <button class="btnListenToStory">Lyssna på vad som hände</button>
        `;
    }

    main.querySelector("button").addEventListener("click", renderStory); 
      
}

function renderStory(){
    main.classList.remove("murderReveal");
    main.classList.add("story");
    main.innerHTML = `
    <h2 class="yellow">Detta har hänt</h2>

    <p>Walt Disney har under en längre tid suttit och funderat över vilka karaktärer som skall vara inkluderade i årets nöjesfält. Den 18 maj skall han hålla en presentation om vilka karaktärer som skall delta och han känner stor vånda för uppdraget. Han väljer ut de som han anser passa bäst för de olika platserna och kommer fram till ett dussin karaktärer som som skulle passa. Mötet äger rum och var och en av karaktärerna ropas upp en efter en. När listan är slut så utbrister ett sorl av glädje och förtvivlan. <span>Musse</span> stiger fram och tilltalar <span>Walt</span>. Varför finns inte jag med på listan? Jag var den som fick dig att bli den du är idag? Vad får jag, ingenting? <span>Walt</span> svarar, denna gång så finns det inte plats för dig, du har inget att säga till om i denna fråga. <span>Musse</span> ser svart i blicken och säger: Detta skall du få sota för. Han klampar ut ur rummet och stänger dörren med ett smäll. 
    </p>

    <p>Walt Disney bebor sig i slottet för att vara med på öppningsdagen och 
    natten till den 19 maj vaknade <span>Walt</span> med ett ryck. Tanken om vad som hände på mötet och <span>Musses</span> ilska väcker oro i honom. Kanske hade han varit för hård mot sin gamla vän? Tankarna snurrar runt i hans huvud när han plötsligt hör ett svagt skrapande ljud utanför sin dörr. Med hjärtat bultande av både rädsla och förvånad går <span>Walt</span> försiktigt mot dörren och öppnar den på glänt. Utanför står <span>Musse</span>, vars vanligtvis glada ansikte är nu mörkt av vrede och besvikelse. <span>"Walt"</span>, börjar <span>Musse</span>, "jag kan inte låta dig bara skjuta bort mig på det här viset. Jag var med dig från början, jag stöttade dig när ingen annan gjorde det. Jag är en del av ditt arv, av allt du har byggt upp." Walt kände en knut i magen när han såg <span>Musse</span> så upprörd. Han inser att han kanske hade varit för fokuserad på att välja karaktärer som skulle vara populära och glömt bort vänskapen som en gång varit så viktig för honom.
    </p>

    <p>"Jag är ledsen, <span>Musse</span>," sa Walt med en sänkt röst. "Du har alltid varit en av de viktigaste karaktärerna i mitt liv men samtidigt så är barnen inte längre lika intresserad av dig längre som de är de andra karaktärerna. Men kom in, låt oss prata." <span>Musse</span> tvekade först men gick sedan in i <span>Walts</span> rum. De båda satte sig ner och för att prata. <span>Musse</span> såg lite förstrött på <span>Walt</span> , men han gav inga tecken på att göra något förhastat. “Ja, det var ett slag i magen", sa <span>Musse</span> med en bitterhet i rösten. “Jag kan inte förstå att du ändå inte vill ha mig med, du har byggt upp hela din karriär runt mig och du vill inte ens ha mig alls”. <span>Walt</span> blev irriterad. “Du måste förstå att detta inte handlar om dig, utan pengarna. Du kan inte gå runt och ta illa upp över en sådan petitess.” <span>Musse</span> log elakt och var obehagligt lugn. “Okej, är det så du vill ha det?" Jag är lite törstig, finns det möjlighet att få dricka te?” <span>Walt</span> reste sig upp och gick till det lilla bordet som var placerat vid dörrens högra sida. Där är ett bord ställt med en tebryggare och lite tepåsar för <span>Walts</span> sömnproblematik och i detta fall skulle det vara trevligt att dela på en kopp för att lugna ner den intensiva känslan som hängde i luften. Det <span>Walt</span> inte märkte var att medan han höll på att förbereda téet så lirkade <span>Musse</span> fram en liten tepåse som han sedan gömde i sin innerficka på den strukna kavaj han bar. “Jag kan fortsätta”, sa <span>Musse</span> menande. "Jag har inte varit så diplomatisk, så det minsta jag kan göra är att hjälpa till med téet". <span>Walt</span> såg på <span>Musse</span>. “Visst, absolut jag föredrar den med vanilj, och då får du ta vad du vill”, sa <span>Walt</span>. <span>Musse</span> bryggde teet och la ned påsarna som han hade i sin innerficka. De satte sig tillrätta i varsin fåtölj och <span>Musse</span> gav <span>Walt</span> den förgiftade koppen. “Skål” sa <span>Musse</span>. “För ännu en bedrift som kommer att sätta ditt namn på kartan ännu en gång”. De höjde kopparna, och kort därefter hördes en tung duns. 
    </p>

    <p>När solen gick upp över slottet den 19 maj hittades Walt Disney död på golvet i sitt eget rum. Slottet är i oro och förvirring och Disney karaktärerna sörjer Walts död.</p>

    <p class="lastParagraph">Du använde ledtrådarna som förde dig till rätt person, Musse Pigg. Du ringer till polisen och uppger all information som du har samlat in. Polisen är lite fundersamma över alla bevis du har samlat in, men de tackar för din insats och skall kolla närmare på ärendet. En dag senare så står det i Disney Bladet att mördaren hittats och att det är en anonym detektiv som har löst mordet och att Musse Pigg nu är bakom lås och bom. 
    Grattis! Du har nu äran att leva lyckligt i alla dina dagar.
    </p>

    <button>Leaderboard</button>

    <div class="playBtnBackground">
        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none" class="btnPlayAudio">
            <circle cx="35.1191" cy="35.1191" r="35.1191" fill="#D9D9D9"/>
            <path d="M44.2295 32.7816C45.5628 33.5514 45.5628 35.4759 44.2295 36.2457L31.1562 43.7936C29.8228 44.5634 28.1562 43.6011 28.1562 42.0615L28.1562 26.9658C28.1562 25.4262 29.8228 24.4639 31.1562 25.2337L44.2295 32.7816Z" fill="#001937"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="71" viewBox="0 0 71 71" fill="none" class="btnPauseAudio hidden">
            <circle cx="35.1191" cy="35.1191" r="34.1191" fill="#000E1E" stroke="#D9D9D9" stroke-width="2"/>
            <mask id="mask0_385_154" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="21" y="21" width="29" height="29">
                <rect x="21" y="21" width="29" height="29" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_385_154)">
                <path d="M37.9167 43.9584V27.0417H42.75V43.9584H37.9167ZM28.25 43.9584V27.0417H33.0833V43.9584H28.25Z" fill="#D9D9D9"/>
            </g>
        </svg>
    </div>
    `;

    main.querySelector("button").addEventListener("click", renderLeaderboard);
}