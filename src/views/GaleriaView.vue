<template>
    <div>
        <p>Galeria</p>
        <div id="imagenesDiv">
            <div v-for="imagen in imagenes" :key="imagen.index">
                <!-- <p>{{imagen}}</p> -->
                <CardImage :imagen="imagen"/>
            </div>
        </div>
    </div>
</template>
<script>
import CardImage from '@/components/galeria/CardImage.vue';
export default {
    name: 'GaleriaView',
    components: {
        CardImage,
    },
    data() {
        return {
            imagenes: [
                'https://c4.wallpaperflare.com/wallpaper/702/297/121/4k-2018-dua-lipa-wallpaper-preview.jpg',
                'https://rare-gallery.com/mocahbig/1325169-SingerDua-Lipa-4k-Ultra-HD-Wallpaper.jpg',
                'https://external-preview.redd.it/dua-lipa-is-teaming-with-versace-on-a-new-fashion-line-v0-Xw-W24aZqUcgP5dmCbmt2Iambt_uIPBSQ7GlNBvcoC4.jpg?auto=webp&s=e3a56d832fd025d6986b536e5ec8ede002f73b57',
                'https://pbs.twimg.com/media/E2bMnnSWUAEUsW9?format=jpg&name=large',
                'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fc23f0d64-0060-11ee-91d8-175820cfdf88.jpg?crop=1500%2C1000%2C0%2C0',
            ]
        }
    },
    methods: {

    }
}
</script>
<style scoped>
#imagenesDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>