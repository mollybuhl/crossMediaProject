
// Function to render charracter page based on the carracter that was clicked
async function renderCharracterPage(charracter) {

    let charracterText;
    let characterMovie;
    let characterTraits;
    let characterAttribute;
    let className;

    //Define carracter text based on charracter selected
    switch (charracter) {
        case "Kapten Krok":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Peter Pan";
            characterTraits = "Stolt, listig, och besatt av Peter Pan";
            characterAttribute = "Lila Sjörövarhatt, röd kappa, och en krok till hand";
            className = "kaptenKrok";
            break;
        case "Cruella de Vil":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "De 101 dalmatinerna";
            characterTraits = "Extravagant, empatilös, hänsynslös och skoningslös";
            characterAttribute = "Vit pälsjacka och cigarettmunstycke";
            className = "cruellaDeVil";
            break;
        case "Musse":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Disneys fronfigur";
            characterTraits = "Positiv, intelligent, modig";
            characterAttribute = "Vita handskar, röda byxor och gula skor";
            className = "musse";
            break;
        case "Ursulla":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Lilla sjöjungfrun";
            characterTraits = "Manipulativ, bedräglig, själviskt";
            characterAttribute = "Svart lila klänning, blå lila hud, och ett snäckskal till halsband";
            className = "ursulla";
            break;
        case "Hades":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Hercules";
            characterTraits = "Självsäker, Hämndlysten, Härskare";
            characterAttribute = "Stor, lång och mörkklädd, Brinnande hår, och dödens gud";
            className = "hades";
            break;
        case "Darla":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Hitta nemo";
            characterTraits = "Obekymrad, bortskämd, och ovarsam";
            characterAttribute = "Tandställning, lila tröja med text “rock n roll, girl";
            className = "darla";
            break;
        case "Törnrosa":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Törnrosa";
            characterTraits = "Ödmjuk, optimistisk, och romantisk";
            characterAttribute = "Rosa/Blå klänning, Blond/ljushårig prinsessa, Tiara eller diadem på huvudet";
            className = "törnrosa";
            break;
        case "Snövit":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Snövit och de sju dvärgarna";
            characterTraits = "Godtrogen, oskyldig, vänlig, god";
            characterAttribute = "Blå och guldig klänning och sjunger och kvittrar ofta"
            className = "snövit";
            break;
        case "Hattmakaren":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Alice i Underlandet";
            characterTraits = "Galen, excentrisk, lekfull";
            characterAttribute = "Hatt, Kaffepanna, färgglad";
            className = "hattmakaren";
            break;
        case "Prins John":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Robin Hood";
            characterTraits = "Girig, snål, arrogant, feg, manipulativ";
            characterAttribute = "Röd kunglig kappa och krona"
            className = "prinsJohn";
            break;
        case "Hjärter Dam":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Alice i underlandet";
            characterTraits = "Temperamentsfull, oberäknelig, och masochist.";
            characterAttribute = "Krona, röd och svart klänning, och rosor."
            className = "hjärterDam";
            break;
        case "Head Chef":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Ratatouille";
            characterTraits = "Hård, oförsonlig, förakt, och stolt";
            characterAttribute = "Liten man, elakt flin, kockkläder, och svart hår"
            className = "headChef";
            break;
    }

    // Get charracter class name
    let words = charracter.split(' ');

    // Convert the first word to lowercase
    let characterClass = words[0].toLowerCase();

    // For the remaining words, capitalize the first letter and concatenate
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        // Capitalize the first letter of the word and concatenate it
        characterClass += word.charAt(0).toUpperCase() + word.slice(1);
    }

    main.classList.remove("controlQuestion");
    main.classList.remove("mainMap");
    main.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btnBack">
        <mask id="mask0_248_1065" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_248_1065)">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
        </g>
    </svg>

    <div class="characterTopWrapper">
        <div class="charracterImage ${characterClass}"></div>
        <h2>${charracter}</h2>
    </div>

    <div class="characterShortDescription">
        <div class="characterMovie">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <mask id="mask0_259_1236" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <rect width="34" height="34" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_259_1236)">
                    <path d="M13.458 21.9583L23.3747 15.5833L13.458 9.20833V21.9583ZM11.333 29.75V26.9167H5.66634C4.88717 26.9167 4.22016 26.6392 3.6653 26.0844C3.11044 25.5295 2.83301 24.8625 2.83301 24.0833V7.08333C2.83301 6.30417 3.11044 5.63715 3.6653 5.08229C4.22016 4.52743 4.88717 4.25 5.66634 4.25H28.333C29.1122 4.25 29.7792 4.52743 30.3341 5.08229C30.8889 5.63715 31.1663 6.30417 31.1663 7.08333V24.0833C31.1663 24.8625 30.8889 25.5295 30.3341 26.0844C29.7792 26.6392 29.1122 26.9167 28.333 26.9167H22.6663V29.75H11.333Z" fill="white"/>
                </g>
            </svg>
            <p>${characterMovie}</p>
        </div>
        <div class="charactrTraits">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <mask id="mask0_385_82" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
        <rect width="33.2609" height="34" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_385_82)">
        <path d="M16.63 15.5C15.1504 15.5 13.8837 14.9125 12.8301 13.7375C11.7764 12.5625 11.2496 11.15 11.2496 9.5C11.2496 7.85 11.7764 6.4375 12.8301 5.2625C13.8837 4.0875 15.1504 3.5 16.63 3.5C18.1096 3.5 19.3763 4.0875 20.4299 5.2625C21.4836 6.4375 22.0104 7.85 22.0104 9.5C22.0104 11.15 21.4836 12.5625 20.4299 13.7375C19.3763 14.9125 18.1096 15.5 16.63 15.5ZM5.86914 27.5V23.3C5.86914 22.45 6.0653 21.6687 6.45763 20.9562C6.84995 20.2437 7.37118 19.7 8.02131 19.325C9.41126 18.55 10.8236 17.9688 12.2584 17.5812C13.6932 17.1937 15.1504 17 16.63 17C18.1096 17 19.5668 17.1937 21.0016 17.5812C22.4364 17.9688 23.8488 18.55 25.2387 19.325C25.8888 19.7 26.4101 20.2437 26.8024 20.9562C27.1947 21.6687 27.3909 22.45 27.3909 23.3V27.5H5.86914Z" fill="white"/>
        </g>
        </svg>
            <p>${characterTraits}</p>
        </div>
        <div class="characterAttribute">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <mask id="mask0_259_1254" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <rect width="34" height="34" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_259_1254)">
                    <path d="M27.7667 29.75L18.8417 20.825C18.1333 21.3917 17.3187 21.8403 16.3979 22.1708C15.4771 22.5014 14.4972 22.6667 13.4583 22.6667C10.8847 22.6667 8.7066 21.7753 6.92396 19.9927C5.14132 18.2101 4.25 16.0319 4.25 13.4583C4.25 10.8847 5.14132 8.7066 6.92396 6.92396C8.7066 5.14132 10.8847 4.25 13.4583 4.25C16.0319 4.25 18.2101 5.14132 19.9927 6.92396C21.7753 8.7066 22.6667 10.8847 22.6667 13.4583C22.6667 14.4972 22.5014 15.4771 22.1708 16.3979C21.8403 17.3187 21.3917 18.1333 20.825 18.8417L29.75 27.7667L27.7667 29.75ZM13.4583 19.8333C15.2292 19.8333 16.7344 19.2135 17.974 17.974C19.2135 16.7344 19.8333 15.2292 19.8333 13.4583C19.8333 11.6875 19.2135 10.1823 17.974 8.94271C16.7344 7.70312 15.2292 7.08333 13.4583 7.08333C11.6875 7.08333 10.1823 7.70312 8.94271 8.94271C7.70312 10.1823 7.08333 11.6875 7.08333 13.4583C7.08333 15.2292 7.70312 16.7344 8.94271 17.974C10.1823 19.2135 11.6875 19.8333 13.4583 19.8333Z" fill="white"/>
                </g>
            </svg>
            <p>${characterAttribute}</p>
        </div>
    </div>

    <div class="buttons">
        <button class="notSuspect">Ej Misstänkt</button>
        <button class="suspect">Misstänkt</button>
    </div>

    <p class="readableText">${charracterText}</p>
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

    main.querySelector(".btnBack").addEventListener("click", renderMap);

    let userID = Number(window.localStorage.getItem("userId"));
    let userPassword = window.localStorage.getItem("userPassword");

    // Get info of already suspect or not suspect
    try {
        let request = new Request(`php/api.php?userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
        let response = await fetch(request);
        let resource = await response.json();

        if (!response.ok) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        } else {
            let suspectCharacters = resource.suspectCharacters;
            let notSuspectCharacters = resource.notSuspectCharacters;

            suspectCharacters.forEach(arrayCharacter => {
                if (arrayCharacter === className) {
                    main.querySelector(".suspect").classList.add("selected");
                }
            })

            notSuspectCharacters.forEach(arrayCharacter => {
                if (arrayCharacter === className) {
                    main.querySelector(".notSuspect").classList.add("selected");
                }
            })
        }
    } catch (error) {
        let message = "Något gick fel, försök igen senare";
        informUser(message);
        return;
    }

    // Mark as not suspect
    main.querySelector(".notSuspect").addEventListener("click", async e => {

        let element = main.querySelector(".notSuspect");
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        } else {
            // Save character as not suspect
            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    password: userPassword,
                    action: "updateSuspect",
                    notSuspectCharacter: characterClass
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
                    // Render character board
                    renderCharracterboard();
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            };
        }

    });

    // Mark as suspect
    main.querySelector(".suspect").addEventListener("click", async e => {

        let element = main.querySelector(".suspect");
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        } else {
            // Save character as suspect
            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    password: userPassword,
                    action: "updateSuspect",
                    suspectCharacter: characterClass
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
                    // Render character board
                    renderCharracterboard();
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            }
        }
    });

    let audio;
    switch (characterClass) {
        case "kaptenKrok":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "cruellaDeVil":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "musse":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "ursulla":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "hades":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "darla":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "törnrosa":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "snövit":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "headChef":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "hattmakaren":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "hjärterDam":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
        case "prinsJohn":
            audio = new Audio("../media/testMusic.mp3"); //placeholder audio
            break;
    }

    main.querySelector(".btnPlayAudio").addEventListener("click", e => {
        main.querySelector(".btnPlayAudio").classList.add("hidden");
        main.querySelector(".btnPauseAudio").classList.remove("hidden");
        audio.play();

    })

    main.querySelector(".btnPauseAudio").addEventListener("click", e => {
        main.querySelector(".btnPlayAudio").classList.remove("hidden");
        main.querySelector(".btnPauseAudio").classList.add("hidden");
        audio.pause()
    })
}