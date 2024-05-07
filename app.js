const music = new Audio('1.mp3');

var lyrics1 = `Someone said that we were never soulmate <br>
That's why they call it heartbreak <br>
So this dance is the last date <br>
And that one kiss feels amazing <br>
And my one wish is your loving <br>
But I know you couldn't give it <br>
And you leave without a reason <br>
So it leaves me feeling beaten <br><br>

You know what it means when you said you ain't my friend <br>
And I know that it's true but I end up in dead end <br><br>

You said you wanna go now then baby come on <br>
I thought you was so good til you show this song <br>
And if you really love me, then why we're you gone <br>
Cuz I know you miss me, it took you this long <br><br>

How did I leave you <br>
How did I leave you <br>
How did I leave you <br>
La la la day <br><br>

How did I leave you<br>
How did I leave you<br>
How did I leave you<br>
La la la day<br>
`;




var songMeaning1 = 
`<b><ul>Best Wishes</b></ul> <br> <br> I was initially inspired by Love Rosie, especially the wedding scene. 
Its truly heartbreaking but bittersweet for Rosie confess to someone she loves knowing he was getting married to someone else.
But in the end, they end up together. 
This song is not that.
This song is not about unrequited love.  <br> <br>

<i><b>Best Wishes</i></b> captures all the memory and emotions one feels in a snapshot of a single event - being at a wedding where she’s not the bride. 
In the beginning, there might be jealousy and regret lingering in the beginning. 
She’s wearing the same dress when they were together to the wedding <i>(My dress is satin gold). </i> She sprayed his favorite perfume <i>(My hair is scented rose)</i>. 
Does she still want him back? <br> <br>

However it is already revealed through imagery that he proposed to her before and she rejected him, thus maybe she didn’t want to marry him then, but does that mean she wants to marry him now? <br> <br>

Towards the end, there’s a significant emotional shift. She didn’t want to marry him now either. The song is about letting go, accepting the lost but continuing to heal and hope. So maybe its more of a tragic melancholic Love Rosie. <br><br>
<p style="color:red;">-Shirly</p>
`;

// create Array 

const songs = [
    { 
        id:'1',
        songName:` Come On... (ft.Torin) <br>
        <div class="subtitle">Come on</div>`,
        poster: "img/1.jpg",
        lyrics: lyrics1,
        songMeaning: songMeaning1

    },
    {
          id:'2',
        songName:`VOLCANO <br>
        <div class="subtitle">ANTI SOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `SURFIN <br><div class="subtitle"> ANTI SOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg",
    },
    {
        id:"4",
        songName: `broken hearts <br><div class="subtitle">broken hears</div>`,
        poster: "img/4.jpg",
    },
    {
        id:'5',
        songName:` STARGAZING <br>
        <div class="subtitle">ANTI SOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },
    {
        id:"6",
        songName: `NIGHT SHIFT <br><div class="subtitle">ANTI SOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg",
    },
    {
        id:'7',
        songName:` cool girls <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/A.jpg"
    },
    {
        id:'8',
        songName:` love you forever <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/A.jpg"
    },
    {
        id:'9',
        songName:` early morning talks <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/A.jpg"
    },
    {
        id:'10',
        songName:`best wishes <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/A.jpg",
        songMeaning: songMeaning1
    }, 

    {
        id:'12',
        songName:` can you? <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/A.jpg"
    },
    {
        id:'13',
        songName:` blade runner<br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/A.jpg"
    },

    {
        id:"14",
        songName: `other side <br><div class="subtitle">3AM</div>`,
        poster: "img/AA.jpg",
    },

    {
        id:"15",
        songName: `lonely <br><div class="subtitle">3AM</div>`,
        poster: "img/AA.jpg",
    },
    {
        id:'16',
        songName:` high speed chasing <br>
        <div class="subtitle"> 3AM </div>`,
        poster: "img/AA.jpg"
    },
    {
        id:'10',
        songName:` early morning talking <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/AA.jpg"
    },
    {
        id:'20',
        songName:` tripping on acid <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/AA.jpg"
    },
    {
        id:'20',
        songName:` missing girl <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/AA.jpg"
    },
    {
        id:'20',
        songName:` last words <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/AA.jpg"
    },
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/AA.jpg"
    },    
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },    
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },    
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },    
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },    
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },    
    {
        id:'21',
        songName:` COMING HOME <br>
        <div class="subtitle">ANTISOCIAL SOCIAL CLUB</div>`,
        poster: "img/2.jpg"
    },    
    {
        id:'11',
        songName:` best wishes <br>
        <div class="subtitle">alce in love</div>`,
        poster: "img/3.jpg"
    }

]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
     }
} )

//POPUP FOR LYRICS
document.getElementById('lyricsButton').addEventListener('click', function() {
    let currentSong = songs[0];
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';
    lyricsContainer.innerHTML = currentSong.lyrics;
});



//POPUP FOR LYRICS
document.getElementById('songsButton').addEventListener('click', function() {
    let currentSong = songs[0];
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'red';
    lyricsContainer.innerHTML = currentSong.songMeaning;
});


let playy = document.getElementById('playy');

playy.addEventListener('click', ()=> {
    music.play();
})


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
})

document.getElementById('exitButton').addEventListener('click', function() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})