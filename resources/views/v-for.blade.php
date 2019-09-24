<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>V-For</title>
    </head>
    <body>
        <h2>V-For</h2>
        <h5>My Playlist</h5>
        <div class="" id="vfor-app">
            Song: <input type="aSong" name="aSong" v-model="aSong">
            Artist: <input type="anArtist" name="artist" v-model="anArtist">
            <br>
            <br>
            <button type="button" v-on:click="buttonClicked" name="button">Add Song</button>
            <button type="button" v-on:click="removeClicked" name="button">Remove Song</button>

            <ul>
                <li v-for="song in songs"> <strong>Song: </strong>@{{song.track}}, <strong>Artist: </strong>@{{song.artist}}</li>
            </ul>
            <button type="button" v-on:click="emptyClicked()" name="button">Remove Song</button>

        </div>

        <script type="text/javascript" src="/js/app.js" ></script>
        <script type="text/javascript" src="/js/vue.js" ></script>
    </body>
</html>
