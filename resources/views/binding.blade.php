<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>More-Binding</title>
        <style media="screen">
            .bordered{
                border: 1px solid;
                padding: 10px;
                box-shadow: 5px 10px #888888;
            }
            .box{
                min-height: 100px;
                width: 200px;
                border:1px solid #ccc;
                margin-bottom: 5px;
            }
        </style>
    </head>
    <body>
        <h2>More Binding</h2>
        <h5>Image Binding</h5>
        <div class="" id="imagebinding">
            <tweet>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</tweet>
            <tweet></tweet>
            <tweet></tweet>
            Enter Image Url: <input type="text" name="" value="" v-model="imgUrl">
            <button type="button" v-on:click="changeImage()" name="button">Change Image</button>
            <br><br>
            <img :class="{bordered : hasBorder}" :src="pictureofcat" width="500px" alt="">
            <br><br>
            <button type="button" v-on:click="giveBorder()" name="button">Give Border</button>

        </div>

        <script type="text/javascript" src="/js/app.js" ></script>
        <script type="text/javascript" src="/js/vue.js" ></script>
    </body>
</html>
