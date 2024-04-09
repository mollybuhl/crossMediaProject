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

function renderMap(){
    main.classList.add("mainMap");
    main.innerHTML=`
    <div class="pin hoock"></div>
    <div class="pin cruella"></div>
    <div class="pin princeJohn"></div>
    <div class="pin ursulla"></div>
    `;

    let charracters = ["Hoock", "Cruella", "Prince John", "Ursulla"];

    main.querySelectorAll(".pin").forEach(pin =>

        pin.addEventListener("click", e => {

            if(pin.classList.contains("selected")){
                pin.classList.remove("selected");
                document.querySelector(".popUp").remove();
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
               
    
                for (let i = 0; i < classList.length; i++) {
                    switch (classList[i]) {
                        case "hoock":
                            selectedCharracter = "Hoock";
                            break;
                        case "cruella":
                            selectedCharracter = "Cruella";
                            break;
                        case "princeJohn":
                            selectedCharracter = "Prince John";
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
                document.querySelector(".btnTalkToCharracter").addEventListener("click", e =>{
                    
                    main.classList.remove("mainMap");
                    main.innerHTML = `
                    <h2>Vilken färg är dörren? (blå)</h2>
                    <input>Svar</input>
                    <button class="btnUnlock">Lås upp</button>
                    `;
                
                    let input = main.querySelector("input");

                    main.querySelector(".btnUnlock").addEventListener("click", e =>{
                        let answer = input.value;
                        if(answer === "blå"){
                            renderCharracterPage(selectedCharracter)
                        }else{
                            console.log("Wrong answer");
                        }
                    })
                })
            }
        })    
    )
}


function renderCharracterPage(charracter){
    main.classList.remove("mainMap");
    main.innerHTML = `
    <div>
        <div class="charracterImage"></div>
        <div class="charracterInfo">
            <h2>${charracter}</h2>
            <p>Relationship to victim</p>
            <button class="btnPlayAudio"><img src="media/playIcon.svg"></button>
        </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst vestibulum rhoncus est. Vitae tortor condimentum lacinia quis vel eros donec. Tristique et egestas quis ipsum. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Curabitur vitae nunc sed velit dignissim sodales ut. Risus nullam eget felis eget nunc lobortis mattis aliquam. Venenatis a condimentum vitae sapien pellentesque. Mi eget mauris pharetra et ultrices neque ornare aenean euismod.  </p>
    `;
}