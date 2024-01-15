<style>
.slider{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.slides{
    width: 500%;
    height: 100%;
    display: flex;
}

.slides input{
    display: none;
}

.slide{
    width: 20%;
    transition: 1s;
}

.slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.navigation-manual{
    position: absolute;
    width: 100%;
    margin-top: -40px;
    display: flex;
    justify-content: center;
}

.manual-btn{
    border: 2px solid #cda45e;;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;

}

.manual-btn:not(:last-child){
    margin-right: 40px;

}

.manual-btn:hover{
    background: #cda45e;;
}

#radio1:checked ~ .first{
    margin-left: 0;
}

#radio2:checked ~ .first{
    margin-left: -20%;
}

#radio3:checked ~ .first{
    margin-left: -40%;
}

#radio4:checked ~ .first{
    margin-left: -60%;
}

.weekly-movies-section{
    padding: 0;
}

.navigation-auto{
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 660px;
}

.navigation-auto div{
    border: 2px solid #cda45e;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;

}

.navigation-auto div:not(:last-child){
    margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1{
    background: #cda45e;
}

#radio2:checked ~ .navigation-auto .auto-btn2{
    background: #cda45e;
}

#radio3:checked ~ .navigation-auto .auto-btn3{
    background: #cda45e;
}

#radio4:checked ~ .navigation-auto .auto-btn4{
    background: #cda45e;
}

</style>

<template>
    <section class="weekly-movies-section">
        <div class="slider">
            <div class="slides">

                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">

                <div class="slide first">
                    <img src="../assets/img/movie4.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="../assets/img/home.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="../assets/img/movie2.jpg" alt="">
                </div>
                <div class="slide">
                    <img src="../assets/img/avatar2.jpeg" alt="">
                </div>

                <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div>
            </div>

            <div class="navigation-manual">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>

        </div>
    </section>
</template>

<!-- <script type="text/javascript">
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

</script> -->

<script type="text/javascript">
    document.addEventListener('DOMContentLoaded', function() {
        var counter = 1;
        setInterval(function(){
            var element = document.getElementById('radio' + counter);
            if (element){
                element.checked = true;
            }            
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);
    });
</script>
