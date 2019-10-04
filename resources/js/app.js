
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     data: {
//         firstName: 'Matt',
//         lastName: 'Larose'
//     }
// });
// const eventsapp = new Vue({
//     el: '#events-app',
//     data: {
//     },
//     methods:{
//         buttonClicked(){
//             alert('Clicked');
//         },
//         elementHovered(){
//             alert('Hovered');
//         }
//     }
// });
//
// const vforapp = new Vue({
//     el: '#vfor-app',
//     data: {
//         aSong:'',
//         anArtist:'',
//         songs:[
//             {"track":"Old Town Road", "artist":"Lil Nas"},
//             {"track":"Some Song", "artist":"some artist"},
//             {"track":"Another Song", "artist":"some other artist"},
//             {"track":"AND Another Song","artist":"another artist"},
//         ],
//     },
//     methods:{
//         buttonClicked(){
//             var song = {"track": this.aSong, "artist": this.anArtist}
//             this.songs.push(song);
//         },
//         removeClicked(){
//             this.songs.pop();
//
//         },
//         emptyClicked(){
//            // this.songs.splice(0, this.songs.length);
//            // or alternatively...
//            this.songs = [];
//         }
//     }
// });
// Vue.component('record',{
//     template: `<div class="box">
//             <h2>This is a Tweet</h2>
//             <p><slot></slot></p>
//         </div>`
// });
// new Vue({
//     el: '#imagebinding',
//     data:{
//         imgUrl:'',
//         pictureofcat: "/img/cat.png",
//         hasBorder: false
//     },
//     methods:{
//         changeImage(){
//             this.pictureofcat = this.imgUrl
//         },
//         giveBorder(){
//             if (this.hasBorder == true) {
//                 this.hasBorder = false;
//             }
//             else {
//                 this.hasBorder = true;
//             }
//         }
//     }
// });

Vue.component('playlist', {
    template: `
    <div>
        Title:<input name="title" v-model="newSong.title">
        Artist: <input name="artist" v-model="newSong.artist">
        <button class="btn btn-sm"type="button" @click="buttonClicked()" name="button">Add Song</button>
        <ul class="list-group">
            <li v-for="(song, index) in playlist"><br>
                <p class=" " :class="{'highlight' : song.favorite }">Title: {{song.title}}</p>
                <small>Artist: {{song.artist}}</small><br>
                <button class="btn btn-sm btn-danger" type="button" @click="removeClicked(index)" name="button">Remove Song</button>
                <button class="btn btn-sm" :class="{ 'btn-dark' : !song.favorite , 'btn-success' : song.favorite }" type="button" @click="toggleFavorite(index)" name="button">Favorite</button>
            </li>
        </ul>
    </div>
    `,
    data(){
        return{
            newSong:{
                title:" ",
                artist:" "
            },
            playlist:[
                {
                    artist:"Lil Nas",
                    title:"Old Town Road",
                    favorite:false

                },
                {
                    artist:"Lizzo",
                    title:"That lizzo Song",
                    favorite:false
                },
                {
                    artist:"Shawn Mendes & Camilla Cabello",
                    title:"Call me Senorita",
                    favorite:false

                }
            ]
        }
    },
    methods:{
        buttonClicked(){
            this.playlist.push({
                title: this.newSong.title,
                artist: this.newSong.artist
            });
            this.newSong.title = " ";
            this.newSong.artist = " ";
        },
        removeClicked(index){
            this.$delete(this.playlist, index);
        },
        toggleFavorite(index){
           this.playlist[index].favorite =  !this.playlist[index].favorite;
        }
    }
});
const playlist = new Vue({
    el: '#playlist',
    data: {
        aSong:'',
        anArtist:'',
        songs:[
            {"track":"Old Town Road", "artist":"Lil Nas"},
            {"track":"Some Song", "artist":"some artist"},
            {"track":"Another Song", "artist":"some other artist"},
            {"track":"AND Another Song","artist":"another artist"},
        ],
    }
});
