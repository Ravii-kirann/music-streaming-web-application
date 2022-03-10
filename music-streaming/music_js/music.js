
fetch(`https://muskan-api.herokuapp.com/api/v1/getsongs?artist_id=uGdfg6zGf4s_&type=artist`)
    .then(response => response.json())
    .then(obj => htmlrender(obj))

let recent11
function htmlrender(obj) {


    for (let i = 0; i < 12; i++) {
        let recent =
            ` <div class="recent_container"> 
        
            
            <div class="recent_boxes" data-audio=${obj.data[i].more_info.vlink}>
            <img class="recent_img" src="${obj.data[i].image}">
            </div>
            <div class="recent_text">${obj.data[i].title}</div>

            <div class="overlay">
            <div class="overlay_icon_div">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </div>
            
            </div>

         </div>`


        document.querySelector('.recent_songs').insertAdjacentHTML("afterbegin", recent)

    }


    let recent_play = document.querySelectorAll('.recent_boxes')

    for (let rp of recent_play) {

        rp.addEventListener('mouseover', recent_play_fun)
        function recent_play_fun() {

            this.nextElementSibling.style.display = "none"
            this.firstElementChild.style.transform = "scale(1.5)"
            this.style.transition = "0.5s"
            this.style.backgroundColor = "rgba(236,65,65,0.9)"
            this.firstElementChild.style.opacity = "0.1"
            this.nextElementSibling.nextElementSibling.style.display="block"

        }


        rp.addEventListener('mouseout', recent_play_fun2)
        function recent_play_fun2() 
        {

            this.nextElementSibling.style.display = "block"
            this.firstElementChild.style.transform = "scale(1)"
            this.style.transition = "0.5s"
            this.firstElementChild.style.opacity = "1"
            this.nextElementSibling.nextElementSibling.style.display="none"

        }

        rp.addEventListener("click", () => {
            const mp3 = (rp.getAttribute('data-audio'));
             const audioTag = document.querySelector(".audio-div");
        //     if (audioTag) {
        //         audioTag.remove();
        //     }
        //     const html = ` <audio controls class="audio-div">
        //     <source class="player" src="${mp3}" ></source>
        // </audio>`;
        //     document.querySelector(".player_bottom").insertAdjacentHTML(`afterbegin`, html)
            document.querySelector(".player").setAttribute("src",mp3);
            audioTag.load();
        })
    }

    for (let i = 0; i < 5; i++) {
        
        let rock =
        
            ` <div class="rock_container" > 
        
            <div><ion-icon name="play-outline"></ion-icon></div>
            <div class="rock_boxes" data-audio=${obj.data[i].more_info.vlink}>
            <img class="rock_img" src="${obj.data[i].image}">
            </div>
            <div class="rock_text_div">
            <div class="rock_text">${obj.data[i].title}</div>
            <div class="rock_name">${obj.data[0].more_info.artistMap.artists[0].name}</div>
            </div>
  
         </div>`

        console.log(obj.data[i].more_info.artistMap.artists[0].name)
        document.querySelector('.rock_wrapper').insertAdjacentHTML("afterbegin", rock)
    
    }
    // ROCK

    document.querySelector('.rock').addEventListener('click', rock_fun)
        // console.log(document.querySelector('.wrapper_container').removeChild)
    function rock_fun() 
        {
            
        document.querySelector('.rock_wrapper').style.display = "block"
        }
     let playlist =document.querySelectorAll('.rock_boxes')
     console.log(playlist)
    for(pl of playlist)
    {
     //   console.log(pl)
        
     pl.addEventListener("click",rock_playlist)
        function rock_playlist() 
        {
        console.log(this)
        const mp3 = (this.getAttribute('data-audio'));
            const audioTag = document.querySelector(".audio-div");

        document.querySelector(".player").setAttribute("src",mp3);
        audioTag.load();
        }
    
    }

    // POP

    document.querySelector('.pop').addEventListener('click', pop_fun)



    function pop_fun() {
        
        for (let i = 5; i < 10; i++) {
           
            let pop =
                ` <div class="rock_container"> 
            
            <div><ion-icon name="play-outline"></ion-icon></div>
                <div class="rock_boxes" data-audio=${obj.data[i].more_info.vlink}>
                <img class="rock_img" src="${obj.data[i].image}">
                </div>
                <div class="rock_text_div">
                <div class="rock_text">${obj.data[i].title}</div>
                <div class="rock_name">${obj.data[i].more_info.artistMap.artists[0].name}</div>
                </div>

            </div>`

            document.querySelector('.pop_wrapper').insertAdjacentHTML("afterbegin", pop)
        }
        // document.querySelectorAll('.wrpr').style.display="none";
        var wrappers = document.querySelectorAll('.wrpr');
        for (let wr = 0; wr < wrappers.length; wr++) {
            wrappers[wr].style.display = "none"
        }

        document.querySelector('.pop_wrapper').style.display = "block"
        this.style.transition = "1s ease"

        let playlist =document.querySelectorAll('.rock_boxes')
        for(pl of playlist)
        {
            
            
          pl.addEventListener("click",rock_playlist)
            function rock_playlist() 
            {
            console.log(this)
            const mp3 = (this.getAttribute('data-audio'));
                const audioTag = document.querySelector(".audio-div");

            document.querySelector(".player").setAttribute("src",mp3);
            audioTag.load();
            }
        
        }

    }

    // JAZZ

    document.querySelector('.jazz').addEventListener('click', jazz_fun)



    function jazz_fun() {

        for (let i = 10; i < 15; i++) {
            let jazz =
                ` <div class="rock_container"> 
            
            <div><ion-icon name="play-outline"></ion-icon></div>
                <div class="rock_boxes" data-audio=${obj.data[i].more_info.vlink}>
                <img class="rock_img" src="${obj.data[i].image}">
                </div>
                <div class="rock_text_div">
                <div class="rock_text">${obj.data[i].title}</div>
                <div class="rock_name">${obj.data[i].more_info.artistMap.artists[0].name}</div>
                </div>

            </div>`

            document.querySelector('.jazz_wrapper').insertAdjacentHTML("afterbegin", jazz)
        }

        // document.querySelectorAll('.wrpr').style.display="none";
        var wrappers = document.querySelectorAll('.wrpr');
        for (let wr = 0; wr < wrappers.length; wr++) {
            wrappers[wr].style.display = "none"
        }

        document.querySelector('.jazz_wrapper').style.display = "block"
        this.style.transition = "1s ease"

        let playlist =document.querySelectorAll('.rock_boxes')
        for(pl of playlist)
        {
            
            
          pl.addEventListener("click",rock_playlist)
            function rock_playlist() 
            {
            console.log(this)
            const mp3 = (this.getAttribute('data-audio'));
                const audioTag = document.querySelector(".audio-div");

            document.querySelector(".player").setAttribute("src",mp3);
            audioTag.load();
            }
        
        }

    }

    //CLASSIC

    document.querySelector('.classic').addEventListener('click', classic_fun)

    function classic_fun() {

        for (let i = 15; i < 23; i++) {
            let classic =
                ` <div class="classic_container"> 
            
                <ion-icon class="classic_icon" name="play-outline"></ion-icon>
                <img class="classic_img" src="${obj.data[i].image}" data-audio=${obj.data[i].more_info.vlink}>
                <p class="classic_text">${obj.data[i].title}</p>
                <p class="classic_name">${obj.data[i].more_info.artistMap.artists[0].name}</p>
                

            </div>`

            document.querySelector('.classic_wrapper').insertAdjacentHTML("afterbegin", classic)
        }

        // document.querySelectorAll('.wrpr').style.display="none";
        var wrappers = document.querySelectorAll('.wrpr');
        for (let wr = 0; wr < wrappers.length; wr++) {
            wrappers[wr].style.display = "none"
        }

        document.querySelector('.classic_wrapper').style.display = "block"
        this.style.transition = "1s ease"

        let playlist =document.querySelectorAll('.classic_img')
        for(pl of playlist)
        {
            
            
          pl.addEventListener("click",classic_playlist)
            function classic_playlist() 
            {
            console.log(this)
            const mp3 = (this.getAttribute('data-audio'));
                const audioTag = document.querySelector(".audio-div");

            document.querySelector(".player").setAttribute("src",mp3);
            audioTag.load();
            }
        
        }

    }

    // RETRO

    document.querySelector('.retro').addEventListener('click', retro_fun)



    function retro_fun() {
        for (let i=14; i<19; i++) {
            
            let retro =
                ` <div class="rock_container"> 
            
            <div><ion-icon name="play-outline"></ion-icon></div>
                <div class="rock_boxes" data-audio=${obj.data[i].more_info.vlink}>
                <img class="rock_img" src="${obj.data[i].image}">
                </div>
                <div class="rock_text_div">
                <div class="rock_text">${obj.data[i].title}</div>
                <div class="rock_name">${obj.data[i].more_info.artistMap.artists[0].name}</div>
                </div>

            </div>`

            document.querySelector('.retro_wrapper').insertAdjacentHTML("afterbegin", retro)
        }

        // document.querySelectorAll('.wrpr').style.display="none";
        var wrappers = document.querySelectorAll('.wrpr');
        for (let wr = 0; wr < wrappers.length; wr++) {
            wrappers[wr].style.display = "none"
        }

        document.querySelector('.retro_wrapper').style.display = "block"
        this.style.transition = "1s ease"


        let playlist =document.querySelectorAll('.rock_boxes')
        for(pl of playlist)
        {
            
            
          pl.addEventListener("click",rock_playlist)
            function rock_playlist() 
            {
            console.log(this)
            const mp3 = (this.getAttribute('data-audio'));
                const audioTag = document.querySelector(".audio-div");

            document.querySelector(".player").setAttribute("src",mp3);
            audioTag.load();
            }
        
        }
    }


}

let menu= document.querySelector('.menu_left_icon')
let menu_div = document.querySelector('.menu_bar_div')
let menu_p=document.querySelectorAll('.menu_bar_div p')
menu.addEventListener('click',menu_icon)
function menu_icon()
{
    if(menu.getAttribute("value")==0)
    {
        menu_div.style.width="10%"  
        for(let i=0;i<menu_p.length;i++)
        {
        menu_p[i].style.display="block"
        }
        menu.style.fontSize="2rem"
        menu.setAttribute("value",1)
    }
    else
    {
        menu_div.style.width="4%"  
        for(let i=0;i<menu_p.length;i++)
        {
        menu_p[i].style.display="none"
        }
        menu.style.fontSize="1.5rem"
        menu.setAttribute("value",0)
    }
}