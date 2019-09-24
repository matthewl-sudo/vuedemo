<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Data-Binding</title>
    </head>
    <body>
        <h2>Data Binding</h2>
        <div class="" id="app">
            <input type="text" name="person" v-model="firstName">
            <input type="text" name="person" v-model="lastName">
            <br><br>
            <div class="">
                My name is @{{firstName}} @{{lastName}}
            </div>
        </div>

        <script type="text/javascript" src="/js/app.js" ></script>
        <script type="text/javascript" src="/js/vue.js" ></script>
    </body>
</html>
