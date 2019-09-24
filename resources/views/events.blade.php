<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Events</title>
    </head>
    <body>
        <h2>Events</h2>
        <div class="" id="events-app">
            <button type="button" v-on:click="buttonClicked();" name="button">Click Me</button>
            <div class="" v-on:mouseover="elementHovered();">
                <h4>Hover Over This</h4>
                <h4>Hover Over This</h4>
                <h4>Hover Over This</h4>
                <h4>Hover Over This</h4>
            </div>
        </div>

        <script type="text/javascript" src="/js/app.js" ></script>
        <script type="text/javascript" src="/js/vue.js" ></script>
    </body>
</html>
