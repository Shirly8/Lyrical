const music = new Audio('audio/1 - Come On.mp3');

// Track currently playing song index
let currentSongIndex = 1;

// Function to load text file
async function loadTextFile(filepath) {
    try {
        const response = await fetch(filepath);
        if (response.ok) {
            const text = await response.text();
            return text.trim().replace(/\n/g, '<br>');
        }
    } catch (error) {
        console.log(`Could not load ${filepath}`);
    }
    return '';
}

// create Array

const songs = [
    // Antisocial Social Club songs (First letter uppercase)
    {
        id:'1',
        songName:`Come on <br>
        <div class="subtitle">Antisocial Social Club ft. Torin!</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "1 - Come On.mp3"
    },
    {
        id:'2',
        songName:`Volcano <br>
        <div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "2 - Volcano.mp3"
    },
    {
        id:"3",
        songName: `Night Shift <br><div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "6 - Night Shift.mp3"
    },
    {
        id:"4",
        songName: `Stargazing <br><div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "5 - Stargazing .mp3"
    },
    {
        id:'5',
        songName:`Surfin <br>
        <div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "3 - Surfin.mp3"
    },
    {
        id:"6",
        songName: `Sunbeam <br><div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "22 - Sunbeam.mp3"
    },
    {
        id:'7',
        songName:`Broken Heart <br>
        <div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "4 - Broken Heart.mp3"
    },
    {
        id:'8',
        songName:`Iris City <br>
        <div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "28 - Iris City.mp3"
    },
    {
        id:'9',
        songName:`High speed Chasing <br>
        <div class="subtitle">Antisocial Social Club</div>`,
        poster: "img/AntiSocialClub.jpg",
        audioFile: "26 - High Speed Chasing.mp3"
    },

    // Alice in Love songs (all lowercase)
    {
        id:'10',
        songName:`love you forever <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "9 - Love you forever.mp3"
    },
    {
        id:'11',
        songName:`early morning talking <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "10 - Early Morning Talking.mp3"
    },
    {
        id:'12',
        songName:`best wishes <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "11 - Best Wishes.mp3"
    },
    {
        id:'13',
        songName:`cherry blossom <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "23 - Cherry Blossom.mp3"
    },
    {
        id:"14",
        songName: `blade runner <br><div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "13 - Blade Runner.mp3"
    },
    {
        id:"15",
        songName: `wes street <br><div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "24 - Wes Street.mp3"
    },
    {
        id:'16',
        songName:`can you <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "12 - Can you.mp3"
    },
    {
        id:'24',
        songName:`cool girls <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "7 - Cool Girls.mp3"
    },
    {
        id:'25',
        songName:`alice in love <br>
        <div class="subtitle">alice in love</div>`,
        poster: "img/Alice in Love.jpg",
        audioFile: "8 - Alice in Love.mp3"
    },

    // 3AM songs (ALL UPPERCASE)
    {
        id:'17',
        songName:`LONELY <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/3Am.jpg",
        audioFile: "27 - Lonely.mp3"
    },
    {
        id:'18',
        songName:`TRIPPING ON ACID <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/3Am.jpg",
        audioFile: "17 - Tripping on Acid.mp3.mp3"
    },
    {
        id:'19',
        songName:`NOT COMING HOME <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/3Am.jpg",
        audioFile: "14 - Not Coming Home.mp3"
    },
    {
        id:'20',
        songName:`HANDS LOW <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/3Am.jpg",
        audioFile: "18 - Hands Low.mp3"
    },
    {
        id:'21',
        songName:`LAST WORDS <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/3Am.jpg",
        audioFile: "21 - Last Words.mp3"
    },
    {
        id:'22',
        songName:`MISSING GIRL <br>
        <div class="subtitle">3AM</div>`,
        poster: "img/3Am.jpg",
        audioFile: "19 - Missing Girl.mp3"
    },
    {
        id:'23',
        songName:`OZONE <br>
        <div class="subtitle">3AM [Chase Atlantic]</div>`,
        poster: "img/3Am.jpg",
        audioFile: "25 - Ozone.mp3"
    }
]

// Don't auto-populate - let HTML control what's displayed
// The songs array is just for looking up info by ID


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
document.getElementById('lyricsButton').addEventListener('click', async function() {
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';

    // Load lyrics from file based on current song index
    const lyricsText = await loadTextFile(`lyrics/${currentSongIndex}.txt`);
    if (lyricsText) {
        lyricsContainer.innerHTML = lyricsText;
    } else {
        lyricsContainer.innerHTML = 'Lyrics not available for this song.';
    }
});



//POPUP FOR SONG MEANING
document.getElementById('songsButton').addEventListener('click', async function() {
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';

    // Load song meaning from file based on current song index
    const meaningText = await loadTextFile(`Meanings/${currentSongIndex}.txt`);
    if (meaningText) {
        lyricsContainer.innerHTML = meaningText;
    } else {
        lyricsContainer.innerHTML = 'Song meaning not available for this song.';
    }
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
        currentSongIndex = index; // Update current song index for lyrics/meanings
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');

        // Get the song info including audio file
        let song_info = songs.filter((ele)=>{
            return ele.id == index;
        })

        if (song_info.length > 0) {
            let {songName, poster, audioFile} = song_info[0];
            music.src = `audio/${audioFile}`;
            poster_master_play.src = poster;
            title.innerHTML = songName;
        }

        music.play();
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

// Track if user is currently seeking
let isSeeking = false;

// Prevent progress bar updates while dragging
seek.addEventListener('mousedown', ()=>{
    isSeeking = true;
})

seek.addEventListener('mouseup', ()=>{
    isSeeking = false;
})

// Also handle touch events for mobile
seek.addEventListener('touchstart', ()=>{
    isSeeking = true;
})

seek.addEventListener('touchend', ()=>{
    isSeeking = false;
})

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    // Check if duration is valid
    if (isNaN(music_dur) || music_dur === 0) {
        return;
    }

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

    // Only update progress bar if user is not currently seeking
    if (!isSeeking) {
        let progressbar = parseInt((music.currentTime/music.duration)*100);
        seek.value = progressbar;
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    }
})

// Use 'input' event for real-time seeking while dragging
seek.addEventListener('input', ()=>{
    if (!isNaN(music.duration) && music.duration > 0) {
        music.currentTime = seek.value * music.duration/100;
        // Update visual bar while dragging
        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;
    }
})

// Also support 'change' event for clicking directly on the bar
seek.addEventListener('change', ()=>{
    if (!isNaN(music.duration) && music.duration > 0) {
        music.currentTime = seek.value * music.duration/100;
    }
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
    currentSongIndex = index; // Update current song index for lyrics/meanings

    // Get the song info including audio file
    let song_info = songs.filter((ele)=>{
        return ele.id == index;
    })

    if (song_info.length > 0) {
        let {songName, poster, audioFile} = song_info[0];
        music.src = `audio/${audioFile}`;
        poster_master_play.src = poster;
        title.innerHTML = songName;
    }

    music.play();
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
    currentSongIndex = index; // Update current song index for lyrics/meanings

    // Get the song info including audio file
    let song_info = songs.filter((ele)=>{
        return ele.id == index;
    })

    if (song_info.length > 0) {
        let {songName, poster, audioFile} = song_info[0];
        music.src = `audio/${audioFile}`;
        poster_master_play.src = poster;
        title.innerHTML = songName;
    }

    music.play();
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

})


// Scroll functionality for all three sections with endless scrolling
let left_scroll_1 = document.getElementById('left_scroll_1');
let right_scroll_1 = document.getElementById('right_scroll_1');
let pop_song_1 = document.getElementById('pop_song_1');

left_scroll_1.addEventListener('click', ()=>{
    pop_song_1.scrollLeft -= 330;
    // Endless scroll - if at beginning, jump to end
    if (pop_song_1.scrollLeft <= 0) {
        pop_song_1.scrollLeft = pop_song_1.scrollWidth - pop_song_1.clientWidth;
    }
})
right_scroll_1.addEventListener('click', ()=>{
    pop_song_1.scrollLeft += 330;
    // Endless scroll - if at end, jump to beginning
    if (pop_song_1.scrollLeft >= pop_song_1.scrollWidth - pop_song_1.clientWidth) {
        pop_song_1.scrollLeft = 0;
    }
})

let left_scroll_2 = document.getElementById('left_scroll_2');
let right_scroll_2 = document.getElementById('right_scroll_2');
let pop_song_2 = document.getElementById('pop_song_2');

left_scroll_2.addEventListener('click', ()=>{
    pop_song_2.scrollLeft -= 330;
    // Endless scroll - if at beginning, jump to end
    if (pop_song_2.scrollLeft <= 0) {
        pop_song_2.scrollLeft = pop_song_2.scrollWidth - pop_song_2.clientWidth;
    }
})
right_scroll_2.addEventListener('click', ()=>{
    pop_song_2.scrollLeft += 330;
    // Endless scroll - if at end, jump to beginning
    if (pop_song_2.scrollLeft >= pop_song_2.scrollWidth - pop_song_2.clientWidth) {
        pop_song_2.scrollLeft = 0;
    }
})

let left_scroll_3 = document.getElementById('left_scroll_3');
let right_scroll_3 = document.getElementById('right_scroll_3');
let pop_song_3 = document.getElementById('pop_song_3');

left_scroll_3.addEventListener('click', ()=>{
    pop_song_3.scrollLeft -= 330;
    // Endless scroll - if at beginning, jump to end
    if (pop_song_3.scrollLeft <= 0) {
        pop_song_3.scrollLeft = pop_song_3.scrollWidth - pop_song_3.clientWidth;
    }
})
right_scroll_3.addEventListener('click', ()=>{
    pop_song_3.scrollLeft += 330;
    // Endless scroll - if at end, jump to beginning
    if (pop_song_3.scrollLeft >= pop_song_3.scrollWidth - pop_song_3.clientWidth) {
        pop_song_3.scrollLeft = 0;
    }
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

if (left_scrolls && right_scrolls && item) {
    left_scrolls.addEventListener('click', ()=>{
        item.scrollLeft -= 330;
    })
    right_scrolls.addEventListener('click', ()=>{
        item.scrollLeft += 330;
    })
}

// Tab switching functionality
document.getElementById('musicTab').addEventListener('click', function() {
    // Show music content, hide about me
    document.getElementById('musicContent').style.display = 'block';
    document.getElementById('aboutMeContent').style.display = 'none';

    // Update tab styling
    this.style.color = '#AF5EFF';
    this.style.borderBottom = '3px solid #AF5EFF';
    document.getElementById('aboutTab').style.color = '';
    document.getElementById('aboutTab').style.borderBottom = '';
});

document.getElementById('aboutTab').addEventListener('click', function() {
    // Show about me content, hide music
    document.getElementById('musicContent').style.display = 'none';
    document.getElementById('aboutMeContent').style.display = 'block';

    // Update tab styling
    this.style.color = '#AF5EFF';
    this.style.borderBottom = '3px solid #AF5EFF';
    document.getElementById('musicTab').style.color = '';
    document.getElementById('musicTab').style.borderBottom = '';
});