
// Function to render charracter page based on the carracter that was clicked
function renderCharracterPage(charracter){
    console.log(charracter);

    let charracterText;
    let characterMovie;
    let characterTraits;
    let characterAttribute;

    //Define carracter text based on charracter selected
    switch (charracter) {
        case "Kapten Krok":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Peter Pan";
            characterTraits= "Stolt, listig, och besatt av Peter Pan";
            characterAttribute = "Lila Sjörövarhatt, röd kappa, och en krok till hand";
            break;
        case "Cruella de Vil":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "De 101 dalmatinerna";
            characterTraits= "Extravagant, empatilös, hänsynslös och skoningslös";
            characterAttribute = "Vit pälsjacka och cigarettmunstycke";
            break;
        case "Musse":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Disneys fronfigur";
            characterTraits= "Positiv, intelligent, modig";
            characterAttribute = "Vita handskar, röda byxor och gula skor";
            break;
        case "Ursulla":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Lilla sjöjungfrun";
            characterTraits= "Manipulativ, bedräglig, själviskt";
            characterAttribute = "Svart lila klänning, blå lila hud, och ett snäckskal till halsband";
            break;
        case "Hades":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Hercules";
            characterTraits= "Självsäker, Hämndlysten, Härskare";
            characterAttribute = "Stor, lång och mörkklädd, Brinnande hår, och dödens gud";    
            break;
        case "Darla":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Hitta nemo";
            characterTraits= "Obekymrad, bortskämd, och ovarsam";
            characterAttribute = "Tandställning, lila tröja med text “rock n roll, girl";
            break;
        case "Törnrosa":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Törnrosa";
            characterTraits= "Ödmjuk, optimistisk, och romantisk";
            characterAttribute = "Rosa/Blå klänning, Blond/ljushårig prinsessa, Tiara eller diadem på huvudet";
            break;
        case "Snövit":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Snövit och de sju dvärgarna";
            characterTraits= "Godtrogen, oskyldig, vänlig, god";
            characterAttribute = "Blå och guldig klänning och sjunger och kvittrar ofta"
            break;
        case "Hattmakaren":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Alice i Underlandet";
            characterTraits= "Galen, excentrisk, lekfull";
            characterAttribute = "Hatt, Kaffepanna, färgglad";
            break;
        case "Prins John":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Robin Hood";
            characterTraits= "Girig, snål, arrogant, feg, manipulativ";
            characterAttribute = "Röd kunglig kappa och krona"
            break;
        case "Hjärter Dam":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Alice i underlandet";
            characterTraits= "Temperamentsfull, oberäknelig, och masochist.";
            characterAttribute = "Krona, röd och svart klänning, och rosor."
            break;
        case "Head Chef":
            charracterText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. ";
            characterMovie = "Ratatouille";
            characterTraits= "Hård, oförsonlig, förakt, och stolt";
            characterAttribute = "Liten man, elakt flin, kockkläder, och svart hår"
            break;
    }

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
        <div class="charracterImage"></div>
        <div>
            <h2>${charracter}</h2>
            <button class="btnPlayAudio"></button>
        </div>
    </div>
    <div class="buttons">
        <button class="notSuspect">Ej Misstänkt</button>
        <button class="suspect">Misstänkt</button>
    </div>
    <div class="characterShortDescription">
        <div class="characterMovie">
            <div class="icon"></div>
            <p>${characterMovie}</p>
        </div>
        <div class="charactrTraits">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.0003 12.0001C10.442 12.0001 9.10796 11.4452 7.99824 10.3355C6.88852 9.22578 6.33366 7.89175 6.33366 6.33341C6.33366 4.77508 6.88852 3.44105 7.99824 2.33133C9.10796 1.22161 10.442 0.666748 12.0003 0.666748C13.5587 0.666748 14.8927 1.22161 16.0024 2.33133C17.1121 3.44105 17.667 4.77508 17.667 6.33341C17.667 7.89175 17.1121 9.22578 16.0024 10.3355C14.8927 11.4452 13.5587 12.0001 12.0003 12.0001ZM0.666992 23.3334V19.3667C0.666992 18.564 0.873589 17.8261 1.28678 17.1532C1.69998 16.4803 2.24894 15.9667 2.93366 15.6126C4.39755 14.8806 5.88505 14.3317 7.39616 13.9657C8.90727 13.5997 10.442 13.4167 12.0003 13.4167C13.5587 13.4167 15.0934 13.5997 16.6045 13.9657C18.1156 14.3317 19.6031 14.8806 21.067 15.6126C21.7517 15.9667 22.3007 16.4803 22.7139 17.1532C23.1271 17.8261 23.3337 18.564 23.3337 19.3667V23.3334H0.666992Z" fill="white"/>
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
    <p>${charracterText}</p>
    `;

    main.querySelector(".btnBack").addEventListener("click", renderMap);

    // Mark as not suspect
    main.querySelector(".notSuspect").addEventListener("click", e => {
        // Save character as not suspect

        // Render character board
        renderCharracterboard();
    });

    // Mark as suspect
    main.querySelector(".suspect").addEventListener("click", e => {

        // Save character as suspect

        // Render character board
        renderCharracterboard();
    });
}