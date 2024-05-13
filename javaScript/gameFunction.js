
// Function to render introduction page when player enters the game for the first time
function renderIntroductionpage(firstTime = true) {
    main.innerHTML = `
    <section class="infoBackground">
        <h2>Det har skett ett mord!</h2>
        <p> I många år har du besökt nöjesparken i Slottsparken. Festivalen förekommer vart 5:e år och i år, 2024, är det äntligen dags igen.</p>
        <p>Du är väldigt förväntansfull på grund av att det inte är vilken festival som helst utan den här baserad på dina favoritfigurer från Disney-filmerna, Walt Disney's egna universum. Till skillnad från de tecknade filmerna är det en festival där varje karaktär har sitt eget stånd. Detta har varit ett mysigt evenemang som pågått i flera år och attraherar stora som små.</p>
        <p>Dagen innan öppningsdagen läser du på nyheterna: “Walt Disney har blivit mördad inne på Malmö slott, festivalen är inställd” Du kan inte fatta vad som hänt. Varför skulle Walt bli mördad just dagen innan öppningsdagen och vad händer egentligen inne på festivalområdet? Du tar tag i denna mystiska händelse och vill ta reda på sanningen. Vad hände egentligen?!</p>
        <p class="readableText"><span>Skynda dig till Musse som befinner sig på Malmö slott! </span></p>
        <button class="btnNextPage">Nästa</button>
    </section>
    `;

    main.querySelector(".btnNextPage").addEventListener("click", e => {
        if (firstTime) {
            startTimer();
        }
        renderMap();
    });

}

// Function to render the map and main view of the game, as well as handle action on map
async function renderMap() {

    //Get player info
    let userID = Number(window.localStorage.getItem("userId"));
    let userPassword = window.localStorage.getItem("userPassword");
    let profilePic;
    let unlockedCharacters;
    let finishingTime;

    try {
        let request = new Request(`php/api.php?userID=${userID}&userPassword=${userPassword}&action=getUserInfo`);
        let response = await fetch(request);
        let resource = await response.json();

        if (!response.ok) {
            let message = "Något gick fel, försök igen senare";
            informUser(message);
            return;
        } else {
            profilePic = resource.profilePic;
            unlockedCharacters = resource.unlockedCharacters;
            finishingTime = resource.finishingTime;
        }
    } catch (error) {
        let message = "Något gick fel, försök igen senare";
        informUser(message);
        return;
    }

    //Map structure
    main.classList.remove("controlQuestion");
    main.classList.add("mainMap");
    main.innerHTML = `
    <div class="topbar">
        <div>
            <button class="btnProfile"></button>
            <p class="timer"></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" class="infoIcon">
            <path d="M12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25ZM10.5469 16.4062H11.7188V13.2812H10.5469C9.89746 13.2812 9.375 12.7588 9.375 12.1094C9.375 11.46 9.89746 10.9375 10.5469 10.9375H12.8906C13.54 10.9375 14.0625 11.46 14.0625 12.1094V16.4062H14.4531C15.1025 16.4062 15.625 16.9287 15.625 17.5781C15.625 18.2275 15.1025 18.75 14.4531 18.75H10.5469C9.89746 18.75 9.375 18.2275 9.375 17.5781C9.375 16.9287 9.89746 16.4062 10.5469 16.4062ZM12.5 6.25C12.9144 6.25 13.3118 6.41462 13.6049 6.70765C13.8979 7.00067 14.0625 7.3981 14.0625 7.8125C14.0625 8.2269 13.8979 8.62433 13.6049 8.91735C13.3118 9.21038 12.9144 9.375 12.5 9.375C12.0856 9.375 11.6882 9.21038 11.3951 8.91735C11.1021 8.62433 10.9375 8.2269 10.9375 7.8125C10.9375 7.3981 11.1021 7.00067 11.3951 6.70765C11.6882 6.41462 12.0856 6.25 12.5 6.25Z" fill="#F3F3F3"/>
        </svg>
    </div>
   
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin kaptenKrok">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin cruellaDeVil">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin musse">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin ursulla">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin prinsJohn">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin hades">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin snovit">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin tornrosa">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin darla">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin hjarterDam">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin hattmakaren">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" class="pin skinner">
    <mask id="mask0_524_319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
    <rect width="40" height="40" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_524_319)">
    <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="#1C1B1F"/>
    </g>
    </svg>

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
    </div>
    `;

    // Add already visitied class to unlocked charracters pin
    main.querySelectorAll(".pin").forEach(pin => {

        let pinCharacter = pin.classList[1];
        let matchedCharacter = unlockedCharacters.find(character => {
            let formatted = formatCharacter(character);
            return formatted === pinCharacter;
        });

        if (matchedCharacter) {
            // If a matching character is found, you can use it here
            pin.classList.add("unlocked");
        }

        // Format selected character name
        function formatCharacter(selectedCharracter) {
            let formattedCharacter = selectedCharracter.trim().toLowerCase();
            // Replace ä with a and ö with o
            formattedCharacter = formattedCharacter.replace(/ä/g, 'a').replace(/ö/g, 'o');
            let words = formattedCharacter.split(' ');

            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }

            formattedCharacter = words.join('');

            formattedCharacter = formattedCharacter.charAt(0).toLowerCase() + formattedCharacter.slice(1);

            return formattedCharacter;
        };
    })


    // Add correct profile pic
    document.querySelector(".btnProfile").classList.add(`${profilePic}`)

    //When selecting a pin, display charracter pop up
    main.querySelectorAll(".pin").forEach(pin =>
        pin.addEventListener("click", e => {

            //Hide navbar
            main.querySelector(".navbar").classList.add("hidden");

            //If pin is already selected unselect, otherwise display charracter pop up
            if (pin.classList.contains("selected")) {

                pin.classList.remove("selected");
                document.querySelector(".popUp").remove();
                main.querySelector(".navbar").classList.remove("hidden");

            } else {
                if (document.querySelector(".popUp")) {
                    document.querySelector(".popUp").remove();
                }

                main.querySelectorAll(".pin.selected").forEach(selectedPin => {
                    selectedPin.classList.remove("selected");
                });

                pin.classList.add("selected");
                let classList = pin.classList;

                let selectedCharracter;
                let coordinates;
                let locationDescription;

                //Find selected charracter
                for (let i = 0; i < classList.length; i++) {
                    switch (classList[i]) {
                        case "kaptenKrok":
                            selectedCharracter = "Kapten Krok";
                            coordinates = " 55.601263, 12.987155";
                            locationDescription = "Linnéplatsen";
                            break;
                        case "cruellaDeVil":
                            selectedCharracter = "Cruella de Vil";
                            coordinates = " 55.600699, 12.985931";
                            locationDescription = "Lusthuset Linnéplatsen";
                            break;
                        case "musse":
                            selectedCharracter = "Musse";
                            coordinates = " 55.604947, 12.987441";
                            locationDescription = "Malmö slott";
                            break;
                        case "ursulla":
                            selectedCharracter = "Ursulla";
                            coordinates = " 55.603390, 12.988230";
                            locationDescription = "Togepi´s lookout";
                            break;
                        case "hades":
                            selectedCharracter = "Hades";
                            coordinates = " 55.602061, 12.995165";
                            locationDescription = "Gamla kyrkogården";
                            break;
                        case "darla":
                            selectedCharracter = "Darla";
                            coordinates = " 55.604963, 12.983702";
                            locationDescription = "Fiskehoddorna";
                            break;
                        case "tornrosa":
                            selectedCharracter = "Törnrosa";
                            coordinates = " 55.603258, 12.985958";
                            locationDescription = "Slottsmöllan";
                            break;
                        case "snovit":
                            selectedCharracter = "Snövit";
                            coordinates = " 55.604472, 12.992745";
                            locationDescription = "Diana - Naturens väktare";
                            break;
                        case "skinner":
                            selectedCharracter = "Skinner";
                            coordinates = " 55.602030, 12.985432";
                            locationDescription = "Mat och Vin Slottsparken";
                            break;
                        case "hattmakaren":
                            selectedCharracter = "Hattmakaren";
                            coordinates = " 55.603609, 12.989457";
                            locationDescription = "Slottsträdgårdens Kafé";
                            break;
                        case "hjarterDam":
                            selectedCharracter = "Hjärter Dam";
                            coordinates = " 55.603090, 12.991780";
                            locationDescription = "Bakom Casinot";
                            break;
                        case "prinsJohn":
                            selectedCharracter = "Prins John";
                            coordinates = " 55.602586, 12.992805";
                            locationDescription = "Framför Casionot";
                            break;
                    }
                }

                // Format selected character name
                function formatCharacter(selectedCharracter) {
                    let formattedCharacter = selectedCharracter.trim().toLowerCase();
                    // Replace ä with a and ö with o
                    formattedCharacter = formattedCharacter.replace(/ä/g, 'a').replace(/ö/g, 'o');
                    let words = formattedCharacter.split(' ');

                    for (let i = 0; i < words.length; i++) {
                        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                    }

                    formattedCharacter = words.join('');

                    formattedCharacter = formattedCharacter.charAt(0).toLowerCase() + formattedCharacter.slice(1);

                    return formattedCharacter;
                };
                let formattedCharacter = formatCharacter(selectedCharracter);

                let popUp = document.createElement("div");
                popUp.classList.add("popUp");

                popUp.innerHTML = `
                    <div>
                    <img src="media/${formattedCharacter}.png" alt="${selectedCharracter}" class="headshot ${formattedCharacter}">
                        <div class="charracterInfo">
                            <h3>${selectedCharracter}</h3>
                            <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none">
                                        <mask id="mask0_159_189" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                                            <rect width="18.9998" height="19" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_159_189)">
                                            <path d="M9.50027 9.50016C9.93568 9.50016 10.3084 9.34513 10.6185 9.03506C10.9286 8.72499 11.0836 8.35225 11.0836 7.91683C11.0836 7.48141 10.9286 7.10867 10.6185 6.7986C10.3084 6.48853 9.93568 6.3335 9.50027 6.3335C9.06486 6.3335 8.69212 6.48853 8.38205 6.7986C8.07198 7.10867 7.91695 7.48141 7.91695 7.91683C7.91695 8.35225 8.07198 8.72499 8.38205 9.03506C8.69212 9.34513 9.06486 9.50016 9.50027 9.50016ZM9.50027 17.4168C7.37598 15.6092 5.78936 13.9302 4.74042 12.3799C3.69147 10.8295 3.16699 9.39461 3.16699 8.07516C3.16699 6.096 3.80362 4.51926 5.07687 3.34495C6.35012 2.17065 7.82459 1.5835 9.50027 1.5835C11.1759 1.5835 12.6504 2.17065 13.9237 3.34495C15.1969 4.51926 15.8335 6.096 15.8335 8.07516C15.8335 9.39461 15.3091 10.8295 14.2601 12.3799C13.2112 13.9302 11.6246 15.6092 9.50027 17.4168Z" fill="#E34A4A"/>
                                        </g>
                                    </svg>
                                    <p>${coordinates}</p>
                            </div>
                            <p>${locationDescription}</p>
                        </div>
                    </div>
                    <button class="btnTalkToCharracter">Lyssna</button>
                `;

                main.appendChild(popUp);

                // Set pop up to transision into place smoothly
                setTimeout(() => {
                    popUp.classList.add('show');
                }, 100);


                //Display controll question when clicking "talk to charracter"
                document.querySelector(".btnTalkToCharracter").addEventListener("click", e => {
                    clearInterval(timeInterval);

                    //Check if controll question has already been answered
                    // If it has - render character page
                    // If it has not - render control question page 
                    if (unlockedCharacters.includes(selectedCharracter)) {
                        renderCharracterPage(selectedCharracter);
                    } else {
                        renderControlQuestion(selectedCharracter);
                    }
                })
            }
        })
    );

    //Remove charracter popup when clicking on map
    main.addEventListener("click", e => {
        if (!e.target.closest('svg')) {
            // This block of code will execute only if the clicked element or any of its ancestors are not SVG elements
            main.querySelectorAll(".pin").forEach(pin => {
                if (pin.classList.contains("selected")) {
                    pin.classList.remove("selected");
                    document.querySelector(".popUp").remove();
                    main.querySelector(".navbar").classList.remove("hidden");
                }
            });
        }
    });

    let timeInterval;

    if (finishingTime === "Not finished") {
        timeInterval = setInterval(updateTimer, 1000);
    } else {
        main.querySelector(".timer").textContent = `${finishingTime}`;
    }

    // Render instruction when clicking top info button
    main.querySelector(".infoIcon").addEventListener("click", e => {
        clearInterval(timeInterval);
        renderInstructionpage(false)
    })

    //Navbar
    main.querySelector(".leaderboard").addEventListener("click", e => {
        clearInterval(timeInterval);
        renderLeaderboard();
    });
    main.querySelector(".charracterChart").addEventListener("click", e => {
        clearInterval(timeInterval);
        renderCharracterboard();
    });

    main.querySelector(".btnProfile").addEventListener("click", e => {
        clearInterval(timeInterval);
        renderProfilepage();
    })
}

//Function to render controll questions before player get the information from a charracter
function renderControlQuestion(charracter) {

    main.classList.remove("mainMap");
    main.classList.add("controlQuestion");

    let typeOfQuestion;
    let question;
    let answer;
    let underQuestion;

    switch (charracter) {
        case "Kapten Krok":
            typeOfQuestion = "word";
            question = "Vilket namn har det mystiska djuret som befinner sig uppe på statyn?";
            answer = "pegasus";
            break;
        case "Cruella de Vil":
            typeOfQuestion = "word";
            question = "Vilket instrument syns på toppen av lusthuset?";
            answer = "trumpet";
            break;
        case "Musse":
            typeOfQuestion = "number";
            question = "Hur många bollar jonglerar “Gycklaren” med?";
            answer = 5;
            break;
        case "Ursulla":
            typeOfQuestion = "numbers";
            question = "Hur många broar och bänkar kan du se? Titta noga.";
            answer = [3, 8];
            break;
        case "Hades":
            typeOfQuestion = "time";
            question = "Ange vilken tid detta område stängs";
            answer = 2100;
            break;
        case "Darla":
            typeOfQuestion = "word";
            question = "Vilken färg syftar jag på?";
            underQuestion = "Bland många hytter där jag står, sticker jag ut som ett litet får. Bland många röda smälter jag in, längst med vägen tätt intill.";
            answer = "blå";
            break;
        case "Törnrosa":
            typeOfQuestion = "number";
            question = "Ange ett nummer";
            underQuestion = "Där slottet står högt och slut, tittar Disney prinsessorna ofta ut. Med ramar av trä och genomskinligt glas, finns jag under varje tak. Hur många av mig finner du på väderkvarnen?";
            answer = 18;
            break;
        case "Snövit":
            typeOfQuestion = "number";
            question = "Hur många hjortar ser du?";
            answer = 17;
            break;
        case "Skinner":
            typeOfQuestion = "numbers";
            question = "Ange kombinationen";
            underQuestion = "Ange kombinationen av bokstäver och siffror som står på fågelholkarna nära entren till restaurangen (Ange minsta siffran först)."
            answer = ["s11", "s12"];
            break;
        case "Hattmakaren":
            typeOfQuestion = "number";
            question = "Ange priset";
            underQuestion = "Hattmakaren beställer alltid samma sak på Slottsträdgårdens Kafé. Han beställer en kopp svart te, oliver, två Chokladbollar och en glass. Ange priset för hela beställningen."
            answer = 207;
            break;
        case "Hjärter Dam":
            typeOfQuestion = "word";
            question = "Vad finner du på toppen av casinot som Prins John och Hjärter Dam har gemensamt?";
            answer = "krona";
            break;
        case "Prins John":
            typeOfQuestion = "number";
            question = "Ange ett nummer";
            underQuestion = "Räkna flaggstängerna framför kasinot. På rouletten, börja på siffran 26 och gå lika många steg som flagstänger moturs."
            answer = 29;
            break;
    }

    main.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="btnBack">
        <mask id="mask0_219_109" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_219_109)">
            <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="white"/>
        </g>
    </svg>
    <h2>${question}</h2>
    ${underQuestion ? `<p>${underQuestion}</p>` : ''}
    <div class="inputWrapper"></div>
    <button class="btnUnlock">Lås upp</button>
    `;

    // Back to map on click or swipe back
    main.querySelector(".btnBack").addEventListener("click", renderMap);


    let inputWrapper = main.querySelector(".inputWrapper");

    if (typeOfQuestion === "number") {
        inputWrapper.classList.add("number");

        let numDigits = answer.toString().length

        if (numDigits === 1) {
            inputWrapper.classList.add("singleDigit");
            inputWrapper.innerHTML = `
            <input type="number" class="input1" maxlength="1"></input>
            `;
        } else if (numDigits === 2) {
            inputWrapper.innerHTML = `
            <input type="number" class="input1" maxlength="1"></input>
            <input type="number" class="input2" maxlength="1"></input>
            `;

            // Only allow one digit per input
            let input1 = document.querySelector(".input1");
            let input2 = document.querySelector(".input2");

            input1.addEventListener("input", function () {
                // Allow only one digit
                this.value = this.value.replace(/\D/g, '');

                // Move focus to the second input
                if (this.value.length === 1) {
                    input2.focus();
                }
            });

            input2.addEventListener("input", function () {
                // Allow only one digit
                this.value = this.value.replace(/\D/g, '');
            });

        } else if (numDigits === 3) {
            inputWrapper.innerHTML = `
            <input type="number" class="input1" maxlength="1"></input>
            <input type="number" class="input2" maxlength="1"></input>
            <input type="number" class="input3" maxlength="1"></input>
            `;

            // Only allow one digit per input
            let input1 = document.querySelector(".input1");
            let input2 = document.querySelector(".input2");
            let input3 = document.querySelector(".input3");

            input1.addEventListener("input", function () {
                // Allow only one digit
                this.value = this.value.replace(/\D/g, '');

                // Move focus to the second input
                if (this.value.length === 1) {
                    input2.focus();
                }
            });

            input2.addEventListener("input", function () {
                // Allow only one digit
                this.value = this.value.replace(/\D/g, '');
                if (this.value.length === 1) {
                    input3.focus();
                }
            });

            input3.addEventListener("input", function () {
                // Allow only one digit
                this.value = this.value.replace(/\D/g, '');
            });
        }


    } else if (typeOfQuestion === "numbers") {
        inputWrapper.classList.add("numbers");

        if (charracter === "Ursulla") {
            inputWrapper.classList.add("ursulla");

            inputWrapper.innerHTML = `
            <div class="inputBox num1Input">
                <label>Broar:</label>
                <input type="number" class="num1Input1" maxlength="1"></input>
            </div>
            <div class="inputBox num2Input">
                <label>Bänkar:</label>
                <input type="number" class="num2Input1" maxlength="1"></input>
            </div>
            `;
        } else if (charracter === "Skinner") {
            inputWrapper.classList.add("numbers");
            inputWrapper.classList.add("headChef");
            main.querySelector("h2").classList.add("headChef");

            inputWrapper.innerHTML = `
            <label>Kombination 1</label>
            <div class="inputBox num1Input">
                <input type="text" class="num1Input1 num1Input1_1" maxlength="1"></input>
                <input type="number" class="num1Input2 num1Input2_1" maxlength="1"></input>
                <input type="number" class="num1Input3 num1Input3_1" maxlength="1"></input>
            </div>
            <label>Kombination 2</label>
            <div class="inputBox num2Input">
                <input type="text" class="num2Input1" maxlength="1"></input>
                <input type="number" class="num2Input2" maxlength="1"></input>
                <input type="number" class="num2Input3" maxlength="1"></input>
            </div>
            `;


        }

    } else if (typeOfQuestion === "word") {

        inputWrapper.classList.add("word");
        inputWrapper.innerHTML = `
        <input class="input1" id="inputField"></input>
        <label for="inputField" >Skriv in ditt svar här</label>
        `;

        document.querySelector('.input1').addEventListener('input', function () {
            let input = this.value.trim();
            let label = main.querySelector('label[for="inputField"]');

            if (input !== '') {
                label.style.display = 'none';
            } else {
                label.style.display = 'block';
            }
        });

    } else if (typeOfQuestion === "time") {
        inputWrapper.classList.add("time");

        inputWrapper.innerHTML = `
            <input class="input1"></input>
            <input class="input2"></input>
            <p>:</p>
            <input class="input3"></input>
            <input class="input4"></input>
        `;

        // Only allow one digit per input
        let input1 = document.querySelector(".input1");
        let input2 = document.querySelector(".input2");
        let input3 = document.querySelector(".input3");
        let input4 = document.querySelector(".input4");

        input1.addEventListener("input", function () {
            // Allow only one digit
            this.value = this.value.replace(/\D/g, '');

            // Move focus to the second input
            if (this.value.length === 1) {
                input2.focus();
            }
        });

        input2.addEventListener("input", function () {
            // Allow only one digit
            this.value = this.value.replace(/\D/g, '');
            if (this.value.length === 1) {
                input3.focus();
            }
        });

        input3.addEventListener("input", function () {
            // Allow only one digit
            this.value = this.value.replace(/\D/g, '');
            if (this.value.length === 1) {
                input4.focus();
            }
        });

        input4.addEventListener("input", function () {
            // Allow only one digit
            this.value = this.value.replace(/\D/g, '');
        });
    }

    main.querySelector(".btnUnlock").addEventListener("click", async e => {

        let correctAnswer = false;

        if (typeOfQuestion === "word") {
            let userAnswer = main.querySelector(".input1").value;
            let userAnswerLowercase = userAnswer.toLowerCase();
            let userAnswerNoSpace = main.querySelector(".input1").value.trim();

            if (userAnswer === answer || userAnswerLowercase === answer || userAnswerNoSpace === answer) {
                correctAnswer = true;
            }
        } else if (typeOfQuestion === "number") {

            let inputFields = document.querySelectorAll("input");
            let userInput = '';
            inputFields.forEach(input => {
                userInput += input.value;
            });

            let userNumber = parseInt(userInput);

            if (userNumber === answer) {
                correctAnswer = true;
            }

        } else if (typeOfQuestion === "numbers") {

            if (charracter === "Ursulla") {
                let inputFieldNum1 = parseFloat(document.querySelector(".num1Input > input").value);
                let inputFieldNum2 = parseFloat(document.querySelector(".num2Input > input").value);

                if (inputFieldNum1 === answer[0] && inputFieldNum2 === answer[1]) {
                    correctAnswer = true;
                }

            } else if (charracter === "Skinner") {
                let inputValues1 = [];
                document.querySelectorAll('.num1Input > input').forEach(input => {
                    let value = input.value;
                    if (typeof value === 'string') {
                        value = value.toLowerCase();
                    }
                    inputValues1.push(value);
                });
                inputValues1 = inputValues1.join("");

                let inputValues2 = [];
                document.querySelectorAll('.num2Input > input').forEach(input => {
                    let value = input.value;
                    if (typeof value === 'string') {
                        value = value.toLowerCase();
                    }
                    inputValues2.push(value);
                });
                inputValues2 = inputValues2.join("");

                if (inputValues1 === answer[0] && inputValues2 === answer[1]) {
                    correctAnswer = true;
                }
            }
        } else if (typeOfQuestion === "time") {
            let inputFields = document.querySelectorAll("input");
            let userInput = '';
            inputFields.forEach(input => {
                userInput += input.value;
            });

            let userNumber = parseInt(userInput);

            if (userNumber === answer) {
                correctAnswer = true;
            }
        }

        if (correctAnswer) {
            // Save character as unlocked for user
            let userID = Number(window.localStorage.getItem("userId"));
            let userPassword = window.localStorage.getItem("userPassword");

            let requestOptions = {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userId: userID,
                    password: userPassword,
                    action: "unlockCharacter",
                    character: charracter
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
                    // Display character page
                    renderCharracterPage(charracter)
                }

            } catch (error) {
                let message = "Något gick fel, försök igen senare";
                informUser(message);
                return;
            }


        } else {
            // Inform user of wrong answer
            let popupBackground = document.createElement("div");
            popupBackground.classList.add("wrongAnswerPopup");
            popupBackground.innerHTML = `
            <div>
                <h2>Fel Svar</h2>
                <p>Se till att du är på rätt plats och gör ett nytt försök</p>
                <button>OK</button>
            </div>
            `;
            main.appendChild(popupBackground);

            popupBackground.querySelector("button").addEventListener("click", e => {
                popupBackground.remove();
            })
        }
    })

}


function informUser(message) {

    let popupBackground = document.createElement("div");
    popupBackground.classList.add("popupDarkBackground");
    popupBackground.innerHTML = `
    <div>
        <h2>Hoppsan!</h2>
        <p>${message}</p>
        <button>OK</button>
    </div>
    `;

    main.appendChild(popupBackground);

    popupBackground.querySelector("button").addEventListener("click", e => {
        window.localStorage.setItem("loggedIn", "false");
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("password");

        renderStartpage();
    })
}


function updateTimer() {
    let startTime = new Date(window.localStorage.getItem("startTime"));
    let currentTime = new Date();

    let timeDifference = currentTime - startTime;

    let totalSecondsPassed = Math.floor(timeDifference / 1000);
    let hoursPassed = Math.floor(totalSecondsPassed / 3600);
    let minutesPassed = Math.floor((totalSecondsPassed % 3600) / 60);
    let secondsPassed = totalSecondsPassed % 60;

    // Format hours, minutes, and seconds with leading zeros if needed
    let formattedHours = hoursPassed.toString().padStart(2, '0');
    let formattedMinutes = minutesPassed.toString().padStart(2, '0');
    let formattedSeconds = secondsPassed.toString().padStart(2, '0');

    // Display the time passed in the .timer paragraph
    main.querySelector(".timer").textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

async function startTimer() {
    let currentDate = new Date();
    window.localStorage.setItem("startTime", currentDate);

    //Save start time
    let userID = Number(window.localStorage.getItem("userId"));
    let password = window.localStorage.getItem("userPassword");

    let requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            password: password,
            userId: userID,
            action: "startTimer",
            startTime: currentDate
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
}

