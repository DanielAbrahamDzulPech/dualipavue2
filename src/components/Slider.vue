<template>
    <div id="slider" :class="{
        'slider-big': home,
        'slider-small': !home,
    }">
        <img src="" alt="">
        <h2>{{ texto }}</h2>
        <router-link to="/home" v-if="home">Ir al inicio</router-link>
    </div>
</template>
<script>
export default {
    name: 'Slider',
    props: ['texto', 'home'],
}
</script>
<style scoped>
#slider {
    position: relative;
    background-color: red;
    color: #fff;
    /* height: 350px; */
}

.slider-big {
    height: 350px;
}

.slider-small {
    height: 150px;
}

#slider > h2 {
    position: absolute;
    left: 50%;
    bottom: 50%;
    /* translate: ; */
}
</style>