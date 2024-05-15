
let main = document.querySelector("main");

if (localStorage.getItem("loggedIn") === "true") {
    renderMap();
} else if (localStorage.getItem("visited") != "true") {
    renderDownloadInstructions();
    window.localStorage.setItem("visited", "true");
} else {
    renderStartpage();
}

function renderDownloadInstructions() {
    main.innerHTML = `
    <h2 class="downloadInstructions">Innan du börjar spela</h2>
    <p class="downloadInstructions">För att din spel-upplevelse ska bli så bra som möjligt är det väldigt viktigt att du laddar ner hemsidan som en app. Gör du inte detta riskerar spelet att inte fungera. Följ instruktionerna nedan:</p>
    <h3 class="downloadInstructions">Safari <div class="safari"></div>/Chrome <div class="chrome"></div></h3>
    <ul class="downloadInstructions">
        <li>1. Klicka på <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
        <g clip-path="url(#clip0_606_40)">
          <path d="M9.35759 0.367188C8.88326 -0.121094 8.11295 -0.121094 7.63862 0.367188L2.78147 5.36719C2.30714 5.85547 2.30714 6.64844 2.78147 7.13672C3.2558 7.625 4.02612 7.625 4.50045 7.13672L7.28571 4.26953V12.5C7.28571 13.1914 7.82835 13.75 8.5 13.75C9.17165 13.75 9.71429 13.1914 9.71429 12.5V4.26953L12.4996 7.13672C12.9739 7.625 13.7442 7.625 14.2185 7.13672C14.6929 6.64844 14.6929 5.85547 14.2185 5.36719L9.36138 0.367188H9.35759ZM2.42857 13.75C2.42857 13.0586 1.88594 12.5 1.21429 12.5C0.542634 12.5 0 13.0586 0 13.75V16.25C0 18.3203 1.6317 20 3.64286 20H13.3571C15.3683 20 17 18.3203 17 16.25V13.75C17 13.0586 16.4574 12.5 15.7857 12.5C15.1141 12.5 14.5714 13.0586 14.5714 13.75V16.25C14.5714 16.9414 14.0288 17.5 13.3571 17.5H3.64286C2.97121 17.5 2.42857 16.9414 2.42857 16.25V13.75Z" fill="#E8E8E8"/>
        </g>
        <defs>
          <clipPath id="clip0_606_40">
            <rect width="17" height="20" fill="white"/>
          </clipPath>
        </defs>
      </svg> ikonen</li>
        <li>2. Lägg till på hemskärmen</li>
        <li>3. Lägg till</li>
        <li>4. Klicka in på appen via ikonen på hemskärmen</li>
    </ul>
    <button class="startPlaying">Redo att börja spela</button>
    `;

    main.querySelector(".startPlaying").addEventListener("click", renderStartpage);
}

function renderStartpage() {
    main.innerHTML = `
    <section id="startPageContainer">
        <div id="startPageHeader">
            <h1 id="happily">Happily</h1>
            <h1 id="never"><span>N</span>ever</h1>
            <h1 id="after">After</h1>
        </div>
        <div id="startPageBtns">
            <button class="btnNewGame">Skapa konto</button>
            <button class="btnResumeGame">Logga in</button>
        </div>
    </section>
    `;

    main.querySelector(".btnNewGame").addEventListener("click", renderRegister)
    main.querySelector(".btnResumeGame").addEventListener("click", renderLogin)
}

function renderInstructionpage(firstTime = true) {

    main.classList.remove("mainMap");
    main.innerHTML = `
    <section class="infoBackground">
    <h2 class="instructionHeader">Hur man spelar</h2>
    <div class="instructionContainer">
    <section>
        <div class="headerInstruction">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <mask id="mask0_613_109" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <rect width="34" height="34" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_613_109)">
                    <path d="M0 25.5V23.2687C0 22.2535 0.519444 21.4271 1.55833 20.7896C2.59722 20.1521 3.96667 19.8333 5.66667 19.8333C5.97361 19.8333 6.26875 19.8392 6.55208 19.851C6.83542 19.8628 7.10694 19.8924 7.36667 19.9396C7.03611 20.4354 6.78819 20.9549 6.62292 21.4979C6.45764 22.041 6.375 22.6076 6.375 23.1979V25.5H0ZM8.5 25.5V23.1979C8.5 22.4424 8.7066 21.7517 9.11979 21.126C9.53299 20.5003 10.1174 19.9514 10.8729 19.4792C11.6285 19.0069 12.5316 18.6528 13.5823 18.4167C14.633 18.1806 15.7722 18.0625 17 18.0625C18.2514 18.0625 19.4024 18.1806 20.4531 18.4167C21.5038 18.6528 22.4069 19.0069 23.1625 19.4792C23.9181 19.9514 24.4965 20.5003 24.8979 21.126C25.2993 21.7517 25.5 22.4424 25.5 23.1979V25.5H8.5ZM27.625 25.5V23.1979C27.625 22.584 27.5483 22.0056 27.3948 21.4625C27.2413 20.9194 27.0111 20.4118 26.7042 19.9396C26.9639 19.8924 27.2295 19.8628 27.501 19.851C27.7726 19.8392 28.05 19.8333 28.3333 19.8333C30.0333 19.8333 31.4028 20.1462 32.4417 20.7719C33.4806 21.3976 34 22.2299 34 23.2687V25.5H27.625ZM5.66667 18.4167C4.8875 18.4167 4.22049 18.1392 3.66563 17.5844C3.11076 17.0295 2.83333 16.3625 2.83333 15.5833C2.83333 14.7806 3.11076 14.1076 3.66563 13.5646C4.22049 13.0215 4.8875 12.75 5.66667 12.75C6.46944 12.75 7.14236 13.0215 7.68542 13.5646C8.22847 14.1076 8.5 14.7806 8.5 15.5833C8.5 16.3625 8.22847 17.0295 7.68542 17.5844C7.14236 18.1392 6.46944 18.4167 5.66667 18.4167ZM28.3333 18.4167C27.5542 18.4167 26.8872 18.1392 26.3323 17.5844C25.7774 17.0295 25.5 16.3625 25.5 15.5833C25.5 14.7806 25.7774 14.1076 26.3323 13.5646C26.8872 13.0215 27.5542 12.75 28.3333 12.75C29.1361 12.75 29.809 13.0215 30.3521 13.5646C30.8951 14.1076 31.1667 14.7806 31.1667 15.5833C31.1667 16.3625 30.8951 17.0295 30.3521 17.5844C29.809 18.1392 29.1361 18.4167 28.3333 18.4167ZM17 17C15.8194 17 14.816 16.5868 13.9896 15.7604C13.1632 14.934 12.75 13.9306 12.75 12.75C12.75 11.5458 13.1632 10.5365 13.9896 9.72187C14.816 8.90729 15.8194 8.5 17 8.5C18.2042 8.5 19.2135 8.90729 20.0281 9.72187C20.8427 10.5365 21.25 11.5458 21.25 12.75C21.25 13.9306 20.8427 14.934 20.0281 15.7604C19.2135 16.5868 18.2042 17 17 17Z" fill="white"/>
                </g>
            </svg>
            <h3>Spela</h3>
        </div>
        <p>Du kan spela både ensam eller tillsammans med andra.</p>
    </section>
    <section>
        <div class="headerInstruction">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <mask id="mask0_613_113" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                <rect width="40" height="40" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_613_113)">
                <path d="M20.0003 20.0002C20.917 20.0002 21.7017 19.6738 22.3545 19.021C23.0073 18.3682 23.3337 17.5835 23.3337 16.6668C23.3337 15.7502 23.0073 14.9654 22.3545 14.3127C21.7017 13.6599 20.917 13.3335 20.0003 13.3335C19.0837 13.3335 18.2989 13.6599 17.6462 14.3127C16.9934 14.9654 16.667 15.7502 16.667 16.6668C16.667 17.5835 16.9934 18.3682 17.6462 19.021C18.2989 19.6738 19.0837 20.0002 20.0003 20.0002ZM20.0003 36.6668C15.5281 32.8613 12.1878 29.3266 9.97949 26.0627C7.77116 22.7988 6.66699 19.7779 6.66699 17.0002C6.66699 12.8335 8.00727 9.51405 10.6878 7.04183C13.3684 4.56961 16.4725 3.3335 20.0003 3.3335C23.5281 3.3335 26.6323 4.56961 29.3128 7.04183C31.9934 9.51405 33.3337 12.8335 33.3337 17.0002C33.3337 19.7779 32.2295 22.7988 30.0212 26.0627C27.8128 29.3266 24.4725 32.8613 20.0003 36.6668Z" fill="white"/>
            </g>
            </svg>
            <h3>Utforska Slottsparken</h3>
        </div>
        <p>Klicka på de utsatta markörerna på kartan för att veta var du ska gå.</p>
    </section>
    <section>
        <div class="headerInstruction">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
            <mask id="mask0_281_40" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="38" height="38">
            <rect width="38" height="38" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_281_40)">
            <path d="M15.042 26.1248L26.1253 18.9998L15.042 11.8748V26.1248ZM19.0003 34.8332C16.81 34.8332 14.7517 34.4175 12.8253 33.5863C10.8989 32.755 9.22324 31.6269 7.79824 30.2019C6.37324 28.7769 5.24512 27.1012 4.41387 25.1748C3.58262 23.2484 3.16699 21.1901 3.16699 18.9998C3.16699 16.8096 3.58262 14.7512 4.41387 12.8248C5.24512 10.8984 6.37324 9.22275 7.79824 7.79775C9.22324 6.37275 10.8989 5.24463 12.8253 4.41338C14.7517 3.58213 16.81 3.1665 19.0003 3.1665C21.1906 3.1665 23.2489 3.58213 25.1753 4.41338C27.1017 5.24463 28.7774 6.37275 30.2024 7.79775C31.6274 9.22275 32.7555 10.8984 33.5868 12.8248C34.418 14.7512 34.8337 16.8096 34.8337 18.9998C34.8337 21.1901 34.418 23.2484 33.5868 25.1748C32.7555 27.1012 31.6274 28.7769 30.2024 30.2019C28.7774 31.6269 27.1017 32.755 25.1753 33.5863C23.2489 34.4175 21.1906 34.8332 19.0003 34.8332Z" fill="white"/>
            </g>
            </svg>
            <h3>Lyssna på karaktärerna</h3>
        </div>
        <p>Gå runt och prata med de olika karaktärerna i parken. Du kan både lyssna och läsa.</p>
    </section>
    <section>
        <div class="headerInstruction">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <mask id="mask0_281_7" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
        <rect width="34" height="34" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_281_7)">
        <path d="M9.06683 26.9166L7.0835 24.9333L15.0168 16.9999L7.0835 9.06659L9.06683 7.08325L17.0002 15.0166L24.9335 7.08325L26.9168 9.06659L18.9835 16.9999L26.9168 24.9333L24.9335 26.9166L17.0002 18.9833L9.06683 26.9166Z" fill="white"/>
        </g>
        </svg>
            <h3>Misstänk folk</h3>
        </div>
        <p>Bevara dina misstankar. Använd karaktärstavlan för att hålla koll.</p>
    </section>
    <section>
        <div class="headerInstruction">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <mask id="mask0_281_20" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                    <rect width="34" height="34" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_281_20)">
                    <path d="M27.7667 29.75L18.8417 20.825C18.1333 21.3917 17.3187 21.8403 16.3979 22.1708C15.4771 22.5014 14.4972 22.6667 13.4583 22.6667C10.8847 22.6667 8.7066 21.7753 6.92396 19.9927C5.14132 18.2101 4.25 16.0319 4.25 13.4583C4.25 10.8847 5.14132 8.7066 6.92396 6.92396C8.7066 5.14132 10.8847 4.25 13.4583 4.25C16.0319 4.25 18.2101 5.14132 19.9927 6.92396C21.7753 8.7066 22.6667 10.8847 22.6667 13.4583C22.6667 14.4972 22.5014 15.4771 22.1708 16.3979C21.8403 17.3187 21.3917 18.1333 20.825 18.8417L29.75 27.7667L27.7667 29.75ZM13.4583 19.8333C15.2292 19.8333 16.7344 19.2135 17.974 17.974C19.2135 16.7344 19.8333 15.2292 19.8333 13.4583C19.8333 11.6875 19.2135 10.1823 17.974 8.94271C16.7344 7.70312 15.2292 7.08333 13.4583 7.08333C11.6875 7.08333 10.1823 7.70312 8.94271 8.94271C7.70312 10.1823 7.08333 11.6875 7.08333 13.4583C7.08333 15.2292 7.70312 16.7344 8.94271 17.974C10.1823 19.2135 11.6875 19.8333 13.4583 19.8333Z" fill="white"/>
                </g>
            </svg>
            <h3>Hitta mördaren</h3>
        </div>
        <p>Vem är mördaren? Du har som uppgift att lista ut detta. Kom ihåg att spelet går på tid!</p>
    </section>
</div>
    <button id="btnStartPlaying">Start</button>
    </section>
    `;

    main.querySelector("#btnStartPlaying").addEventListener("click", e => {
        renderIntroductionpage(firstTime)
    })
}



