const music = new Audio('audio/come-on.mp3');

// Track currently playing song slug (name-based identifier)
let currentSongSlug = 'come-on';

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

// Collections-based song structure
const collections = {
    "antisocial-social-club": {
        name: "Antisocial Social Club",
        poster: "img/AntiSocialClub.jpg",
        songs: [
            { slug: "come-on", title: "Come on", subtitle: "Antisocial Social Club ft. Torin!", audioFile: "come-on.mp3" },
            { slug: "volcano", title: "Volcano", subtitle: "Antisocial Social Club", audioFile: "volcano.mp3" },
            { slug: "night-shift", title: "Night Shift", subtitle: "Antisocial Social Club", audioFile: "night-shift.mp3" },
            { slug: "stargazing", title: "Stargazing", subtitle: "Antisocial Social Club", audioFile: "stargazing.mp3" },
            { slug: "surfin", title: "Surfin", subtitle: "Antisocial Social Club", audioFile: "surfin.mp3" },
            { slug: "sunbeam", title: "Sunbeam", subtitle: "Antisocial Social Club", audioFile: "sunbeam.mp3" },
            { slug: "broken-heart", title: "Broken Heart", subtitle: "Antisocial Social Club", audioFile: "broken-heart.mp3" },
            { slug: "iris-city", title: "Iris City", subtitle: "Antisocial Social Club", audioFile: "iris-city.mp3" },
            { slug: "high-speed-chasing", title: "High speed Chasing", subtitle: "Antisocial Social Club", audioFile: "high-speed-chasing.mp3" }
        ]
    },
    "alice-in-love": {
        name: "alice in love",
        poster: "img/Alice in Love.jpg",
        songs: [
            { slug: "love-you-forever", title: "love you forever", subtitle: "alice in love", audioFile: "love-you-forever.mp3" },
            { slug: "early-morning-talking", title: "early morning talking", subtitle: "alice in love", audioFile: "early-morning-talking.mp3" },
            { slug: "best-wishes", title: "best wishes", subtitle: "alice in love", audioFile: "best-wishes.mp3" },
            { slug: "cherry-blossom", title: "cherry blossom", subtitle: "alice in love", audioFile: "cherry-blossom.mp3" },
            { slug: "blade-runner", title: "blade runner", subtitle: "alice in love", audioFile: "blade-runner.mp3" },
            { slug: "wes-street", title: "wes street", subtitle: "alice in love", audioFile: "wes-street.mp3" },
            { slug: "can-you", title: "can you", subtitle: "alice in love", audioFile: "can-you.mp3" },
            { slug: "cool-girls", title: "cool girls", subtitle: "alice in love", audioFile: "cool-girls.mp3" },
            { slug: "alice-in-love", title: "alice in love", subtitle: "alice in love", audioFile: "alice-in-love.mp3" },
            { slug: "honey-boy", title: "honey boy", subtitle: "alice in love", audioFile: "honey-boy.mp3" }
        ]
    },
    "3am": {
        name: "3AM",
        poster: "img/3Am.jpg",
        songs: [
            { slug: "lonely", title: "LONELY", subtitle: "3AM", audioFile: "lonely.mp3" },
            { slug: "tripping-on-acid", title: "TRIPPING ON ACID", subtitle: "3AM", audioFile: "tripping-on-acid.mp3" },
            { slug: "not-coming-home", title: "NOT COMING HOME", subtitle: "3AM", audioFile: "not-coming-home.mp3" },
            { slug: "hands-low", title: "HANDS LOW", subtitle: "3AM", audioFile: "hands-low.mp3" },
            { slug: "last-words", title: "LAST WORDS", subtitle: "3AM", audioFile: "last-words.mp3" },
            { slug: "missing-girl", title: "MISSING GIRL", subtitle: "3AM", audioFile: "missing-girl.mp3" },
            { slug: "ozone", title: "OZONE", subtitle: "3AM [Chase Atlantic]", audioFile: "ozone.mp3" },
            { slug: "i-know", title: "I KNOW", subtitle: "3AM", audioFile: "i-know.mp3" }
        ]
    }
};

// Flatten songs into a single array for backwards compatibility with existing code
// Process in the order they appear in the HTML: alice-in-love, 3am, antisocial-social-club
const songs = [];
let songId = 1;
const collectionOrder = ['alice-in-love', '3am', 'antisocial-social-club'];
for (const collectionSlug of collectionOrder) {
    const collection = collections[collectionSlug];
    for (const song of collection.songs) {
        songs.push({
            id: String(songId++),
            slug: song.slug,
            songName: `${song.title} <br><div class="subtitle">${song.subtitle}</div>`,
            poster: collection.poster,
            audioFile: song.audioFile,
            collection: collectionSlug
        });
    }
}

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

//POPUP FOR LYRICS (Desktop sidebar button)
document.getElementById('lyricsButton').addEventListener('click', async function() {
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';

    // Load lyrics from file based on current song slug
    const lyricsText = await loadTextFile(`lyrics/${currentSongSlug}.txt`);
    if (lyricsText) {
        lyricsContainer.innerHTML = lyricsText;
    } else {
        lyricsContainer.innerHTML = 'Lyrics not available for this song.';
    }
});

//POPUP FOR LYRICS (Mobile player button)
document.getElementById('lyricsButtonMobile').addEventListener('click', async function() {
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';

    // Load lyrics from file based on current song slug
    const lyricsText = await loadTextFile(`lyrics/${currentSongSlug}.txt`);
    if (lyricsText) {
        lyricsContainer.innerHTML = lyricsText;
    } else {
        lyricsContainer.innerHTML = 'Lyrics not available for this song.';
    }
});

//POPUP FOR SONG MEANING (Desktop sidebar button)
document.getElementById('songsButton').addEventListener('click', async function() {
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';

    // Load song meaning from file based on current song slug
    const meaningText = await loadTextFile(`Meanings/${currentSongSlug}.txt`);
    if (meaningText) {
        lyricsContainer.innerHTML = meaningText;
    } else {
        lyricsContainer.innerHTML = 'Song meaning not available for this song.';
    }
});

//POPUP FOR SONG MEANING (Mobile player button)
document.getElementById('songsButtonMobile').addEventListener('click', async function() {
    let popup = document.getElementById('popup');
    let lyricsContainer = document.getElementById('lyricsContainer');
    popup.style.display = 'block';
    popup.style.backgroundColor = 'DarkPurple';
    popup.style.color = 'white';

    // Load song meaning from file based on current song slug
    const meaningText = await loadTextFile(`Meanings/${currentSongSlug}.txt`);
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
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');

        // Get the song info including audio file
        let song_info = songs.filter((ele)=>{
            return ele.id == index;
        })

        if (song_info.length > 0) {
            let {songName, poster, audioFile, slug} = song_info[0];
            currentSongSlug = slug; // Update current song slug for lyrics/meanings
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
    // Auto-advance to next song
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    // Get the song info including audio file
    let song_info = songs.filter((ele)=>{
        return ele.id == index;
    })

    if (song_info.length > 0) {
        let {songName, poster, audioFile, slug} = song_info[0];
        currentSongSlug = slug; // Update current song slug for lyrics/meanings
        music.src = `audio/${audioFile}`;
        poster_master_play.src = poster;
        title.innerHTML = songName;

        // Auto-play the next song
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }

    makeAllPlays();

    // Update the UI to show current playing song
    let currentPlayButton = document.getElementById(`${index}`);
    if (currentPlayButton) {
        currentPlayButton.classList.remove('bi-play-circle-fill');
        currentPlayButton.classList.add('bi-pause-circle-fill');
    }

    makeAllBackgrounds();
    let songItems = Array.from(document.getElementsByClassName('songItem'));
    if (songItems[index-1]) {
        songItems[index-1].style.background = "rgb(105, 105, 170, .1)";
    }
})

document.getElementById('exitButton').addEventListener('click', function() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

// Set volume to 100% on page load
music.volume = 1.0;
vol.value = 100;
vol_bar.style.width = '100%';
vol_dot.style.left = '100%';
vol_icon.classList.add('bi-volume-up-fill');

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

    // Get the song info including audio file
    let song_info = songs.filter((ele)=>{
        return ele.id == index;
    })

    if (song_info.length > 0) {
        let {songName, poster, audioFile, slug} = song_info[0];
        currentSongSlug = slug; // Update current song slug for lyrics/meanings
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

    // Get the song info including audio file
    let song_info = songs.filter((ele)=>{
        return ele.id == index;
    })

    if (song_info.length > 0) {
        let {songName, poster, audioFile, slug} = song_info[0];
        currentSongSlug = slug; // Update current song slug for lyrics/meanings
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

// Hamburger Menu Toggle for Mobile
const hamburger = document.getElementById('hamburger');
const sideMenu = document.querySelector('.side_menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const isClickInsideMenu = sideMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger && sideMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        sideMenu.classList.remove('active');
    }
});

// Close sidebar when clicking on a song in the menu (mobile)
const menuSongItems = document.querySelectorAll('.side_menu .menu_song li');
menuSongItems.forEach(item => {
    item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            sideMenu.classList.remove('active');
        }
    });
});

// Dynamically populate collection sections
function populateCollections() {
    // Alice In Love collection
    const aliceInLoveContainer = document.getElementById('pop_song_1');
    const aliceInLoveSongs = collections['alice-in-love'].songs;
    const aliceInLovePoster = collections['alice-in-love'].poster;

    aliceInLoveSongs.forEach((song, index) => {
        const songItem = songs.find(s => s.slug === song.slug);
        aliceInLoveContainer.innerHTML += `
            <li class="songItem">
                <div class="img_play">
                    <img src="${aliceInLovePoster}" alt="alice">
                    <i class="bi playListPlay bi-play-circle-fill" id="${songItem.id}"></i>
                </div>
                <h5>${song.title}
                    <br>
                    <div class="subtitle">${song.subtitle}</div>
                </h5>
            </li>
        `;
    });

    // 3AM collection
    const threAmContainer = document.getElementById('pop_song_2');
    const threAmSongs = collections['3am'].songs;
    const threAmPoster = collections['3am'].poster;

    threAmSongs.forEach((song, index) => {
        const songItem = songs.find(s => s.slug === song.slug);
        threAmContainer.innerHTML += `
            <li class="songItem">
                <div class="img_play">
                    <img src="${threAmPoster}" alt="3am">
                    <i class="bi playListPlay bi-play-circle-fill" id="${songItem.id}"></i>
                </div>
                <h5>${song.title}
                    <br>
                    <div class="subtitle">${song.subtitle}</div>
                </h5>
            </li>
        `;
    });

    // Antisocial Social Club collection
    const antisocialContainer = document.getElementById('pop_song_3');
    const antisocialSongs = collections['antisocial-social-club'].songs;
    const antisocialPoster = collections['antisocial-social-club'].poster;

    antisocialSongs.forEach((song, index) => {
        const songItem = songs.find(s => s.slug === song.slug);
        antisocialContainer.innerHTML += `
            <li class="songItem">
                <div class="img_play">
                    <img src="${antisocialPoster}" alt="antisocial">
                    <i class="bi playListPlay bi-play-circle-fill" id="${songItem.id}"></i>
                </div>
                <h5>${song.title}
                    <br>
                    <div class="subtitle">${song.subtitle}</div>
                </h5>
            </li>
        `;
    });

    // Re-attach event listeners to the newly created play buttons
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{
            index = e.target.id;
            makeAllPlays();
            e.target.classList.remove('bi-play-circle-fill');
            e.target.classList.add('bi-pause-circle-fill');

            // Get the song info including audio file
            let song_info = songs.filter((ele)=>{
                return ele.id == index;
            })

            if (song_info.length > 0) {
                let {songName, poster, audioFile, slug} = song_info[0];
                currentSongSlug = slug; // Update current song slug for lyrics/meanings
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
}

// Populate collections when page loads
populateCollections();