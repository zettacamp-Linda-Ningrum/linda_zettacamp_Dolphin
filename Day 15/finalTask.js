// Previous material already covered
// ==> 1) Variable and Data Type (done)
// ==> 2) Expressions and operators (done (||, math operators, ))
// ==> 3) Functions (done)
// ==> 4) Conditional Statement & Loop and Iteration (done (for, while, if-else, ))
// ==> 5) Iterable & Array Function (done (push, reduce, sort, ))
// ==> 6) Object (done)

// create variable to save song lists with song details (using array of object)
let songList = [
  { title: 'Fearless', artist: 'Taylor Swift', genre: 'Pop Country', duration: 240 },
  { title: 'Most Girls', artist: 'Hailee Steinfeld', genre: 'Pop', duration: 205 },
  { title: 'Off My Face', artist: 'Justin Bieber', genre: 'Pop', duration: 156 },
];

// function to group songs based on artists (using reduce of array function)
function groupSongsByArtist(songs) {
  return songs.reduce((groupedByArtist, song) => {
    // on each iteration, a property (song.artist) is accessed on the groupedByArtist object
    groupedByArtist[song.artist] = groupedByArtist[song.artist] || [];
    // if the artist is not in the groupedByArtist object, create an empty array

    // adds songs to the artist array
    groupedByArtist[song.artist].push(song);

    // returns an object containing data that has been grouped by artist
    return groupedByArtist;
  }, {}); // uses an empty object as the initial accumulator value
}

// function to group songs based on genre (using reduce of array function)
function groupSongsByGenre(songs) {
  return songs.reduce((groupedByGenre, song) => {
    // on each iteration, a property (song.genre) is accessed on the groupedByGenre object
    groupedByGenre[song.genre] = groupedByGenre[song.genre] || [];
    // if the genre is not already in the groupedByGenre object, create an empty array

    // adds songs to the genre array
    groupedByGenre[song.genre].push(song);

    // returns an object containing data that has been grouped by genre
    return groupedByGenre;
  }, {}); // uses an empty object as the initial accumulator value
}

// function to group songs with total duration less than 1 hour (non-premium concept)
// function groupSongsByDuration(songs) {
//   let groupedByDuration = { 'Less than 1 Hour': [] }; // create objects to store data based on duration
//   let totalDuration = 0; // initialize the total duration count

//   for (let currentIndex = 0; currentIndex < songs.length; currentIndex++) {
//     let randomIndex = Math.floor(Math.random() * songs.length);
//     totalDuration += songs[currentIndex].duration;
//     if (totalDuration < 3600) {
//       groupedByDuration['Less than 1 Hour'].push({
//         title: songs[randomIndex].title,
//         artist: songs[randomIndex].artist,
//         genre: songs[randomIndex].genre,
//         duration: songs[randomIndex].duration,
//         // randomIndex //for checking the index that has been mixed
//       });
//     }
//   }

//   return groupedByDuration;
// }

//premium concept
function groupSongsByDuration(songs) {
  let groupedByDuration = { 'Less than 1 Hour': [] }; // create objects to store data based on duration
  let totalDuration = 0; // initialize the total duration count
  const selectedSongs = new Set(); // create new Set to track the selected song
  //note: A Set object is a collection data type in JavaScript that allows you to store unique values without duplication

  while (totalDuration < 3600 && selectedSongs.size < songs.length) {
    // this randomIndex value is multiplied by the length of the songs array and rounded to produce a random index of the songs in the array.
    let randomIndex = Math.floor(Math.random() * songs.length);
    // the 'has' method is for checking is there a same song that already include in the Set
    if (!selectedSongs.has(randomIndex)) {
      selectedSongs.add(randomIndex); // the 'add' method is for adding the new song index to the Set
      totalDuration += songs[randomIndex].duration;
      groupedByDuration['Less than 1 Hour'].push({
        title: songs[randomIndex].title,
        artist: songs[randomIndex].artist,
        genre: songs[randomIndex].genre,
        duration: songs[randomIndex].duration,
        // randomIndex //for checking the index that has been mixed
      });
    }
  }

  return groupedByDuration;
}

// adding more songs to songList object using push so no need to change the original object in above
songList.push(
  { title: 'Wrong Direction', artist: 'Hailee Steinfeld', genre: 'Pop', duration: 290 },
  { title: 'Paper Rings', artist: 'Taylor Swift', genre: 'Pop Punk', duration: 222 },
  { title: 'Us', artist: 'James Bay', genre: 'Pop', duration: 192 },
  { title: 'After Our Dawn', artist: 'Taylor Conrod', genre: 'Pop', duration: 202 },
  { title: 'self(less)', artist: 'Taylor Conrod', genre: 'Pop', duration: 252 },
  { title: 'Daydreamin', artist: 'Ariana Grande', genre: 'R&B/Soul', duration: 202 },
  { title: 'Only Then', artist: 'Roy Kim', genre: 'Ballads', duration: 230 },
  { title: 'All of the Stars', artist: 'Ed Sheeran', genre: 'Pop', duration: 292 },
  { title: 'Holding on To You', artist: 'Adam French', genre: 'Alternative/Indie', duration: 212 }
);

// example usage
let songsGroupedByArtist = groupSongsByArtist(songList);
let songsGroupedByGenre = groupSongsByGenre(songList);
let songsLessThan1Hour = groupSongsByDuration(songList);

// to display the results
console.log('');
console.log('Songs Grouped by Artist:', songsGroupedByArtist);
console.log('');
console.log('Songs Grouped by Genre:', songsGroupedByGenre);
console.log('');
console.log('Songs Less than 1 Hour:', songsLessThan1Hour['Less than 1 Hour']);
console.log('');
