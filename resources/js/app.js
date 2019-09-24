
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

const app = new Vue({
    el: '#app',
    data: {
        firstName: 'Matt',
        lastName: 'Larose'
    }
});
const eventsapp = new Vue({
    el: '#events-app',
    data: {
    },
    methods:{
        buttonClicked(){
            alert('Clicked');
        },
        elementHovered(){
            alert('Hovered');
        }
    }
});

const vforapp = new Vue({
    el: '#vfor-app',
    data: {
        aSong:'',
        anArtist:'',
        songs:[
            {track:"Old Town Road", artist:"Lil Nas"},
            {track:"Some Song", artist:"some artist"},
            {track:"Another Song", artist:"some other artist"},
            {track:"AND Another Song",artist:"another artist"},
        ],
    },
    methods:{
        buttonClicked(){
            // var song = {track}
            this.songs.track.push(this.aSong);
            this.songs.artist.push(this.anArtist);

        },
        removeClicked(){
            this.songs.pop(this.aSong);
            this.songs.pop(this.anArtist);

        },
        emptyClicked(){
           this.songs.splice(0, this.songs.length);
        }
    }
});
