
let main = document.querySelector("main");

if (localStorage.getItem("loggedIn") === "true") {
    renderMap();
} else if(localStorage.getItem("visited") != "true"){
    renderDownloadInstructions();
    window.localStorage.setItem("visited", "true");
}else{
    renderStartpage();
}

function renderDownloadInstructions(){
    main.innerHTML = `
    <h2 class="downloadInstructions">Innan du börjar spela</h2>
    <p class="downloadInstructions">För att din spel-upplevelse ska bli så bra som möjligt behöver du ladda ner hemsidan som en app. Följ instruktionerna nedan:</p>
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
    <button>Redo att börja spela</button>
    `;
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
                <mask id="mask0_273_7" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="34"
                    height="34">
                    <rect width="34" height="34" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_273_7)">
                    <path
                        d="M12.75 29.75H7.08333C6.30417 29.75 5.63715 29.4726 5.08229 28.9177C4.52743 28.3628 4.25 27.6958 4.25 26.9167V17C4.25 15.2292 4.58646 13.5705 5.25938 12.024C5.93229 10.4774 6.84132 9.1316 7.98646 7.98646C9.1316 6.84132 10.4774 5.93229 12.024 5.25938C13.5705 4.58646 15.2292 4.25 17 4.25C18.7708 4.25 20.4295 4.58646 21.976 5.25938C23.5226 5.93229 24.8684 6.84132 26.0135 7.98646C27.1587 9.1316 28.0677 10.4774 28.7406 12.024C29.4135 13.5705 29.75 15.2292 29.75 17V26.9167C29.75 27.6958 29.4726 28.3628 28.9177 28.9177C28.3628 29.4726 27.6958 29.75 26.9167 29.75H21.25V18.4167H26.9167V17C26.9167 14.2375 25.9545 11.8941 24.0302 9.96979C22.1059 8.04549 19.7625 7.08333 17 7.08333C14.2375 7.08333 11.8941 8.04549 9.96979 9.96979C8.04549 11.8941 7.08333 14.2375 7.08333 17V18.4167H12.75V29.75ZM9.91667 21.25H7.08333V26.9167H9.91667V21.25ZM24.0833 21.25V26.9167H26.9167V21.25H24.0833Z"
                        fill="white" />
                </g>
            </svg>
            <h3>Hörlurar</h3>
        </div>
        <p>Använd gärna hörlurar för att få en bättre upplevelse</p>
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
            <h3>Play</h3>
        </div>
        <p>Lyssna noggrant på de olika ljudspåren som introducerar karaktärerna och händelserna</p>
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
            <h3>Misstänk</h3>
        </div>
        <p>Ni kan misstänka personer på platsen och hålla koll på vem som verkar mest suspekt</p>
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
        <p>Använd dina detektivfärdigheter och samla bevis för att identifiera den skyldige.</p>
    </section>
</div>
    <button id="btnStartPlaying">Start</button>
    </section>
    `;

    main.querySelector("#btnStartPlaying").addEventListener("click", e => {
        renderIntroductionpage(firstTime)
    })
}



