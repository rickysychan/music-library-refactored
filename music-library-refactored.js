var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

 printPlaylists: function(){
  for(var i in this.playlists){
    let name = this.playlists[i].name;
    let tracks = this.playlists[i].tracks.length;
    console.log(i + ": " + name + ' - ' + tracks);
    }
  },
  printTracks: function () {
  for(var i in this.tracks){
    let name = this.tracks[i].name;
    let artist = this.tracks[i].artist;
    let album = this.tracks[i].album;

console.log(i + ": " + name + ' by ' + artist + " (" + album + ")");
    }
  },
  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  printPlaylist: function (playlistId) {
    for (var i in this.playlists){
      if (i === playlistId) {
      let name = this.playlists[i].name;
      let tracks = this.playlists[i].tracks.length;
      console.log(i + ": " + name + ' - ' + tracks + ' tracks');

      }
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    const pl = this.playlists[playlistId];
      if(pl.tracks.indexOf(trackId) < 0){
        pl.tracks.push(trackId);
    }
  },
  addTrack: function (name, artist, album) {
    let id = uid()
    this.tracks[id] = { id: id, name: name, artist: artist, album: album}
  },
  addPlaylist: function(name) {
    let id = uid()
    this.playlists[id] = {P: id, name: name, tracks: []}
  }
}

library.printPlaylists();
