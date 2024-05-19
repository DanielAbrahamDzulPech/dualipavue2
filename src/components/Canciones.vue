<template>
    <div>
        <h1>Canciones Dua Lipa</h1>
        <div id="canciones">
            <!-- <article class="article-item" v-for="cancion in canciones" :key="cancion.titulo">
                <div>
                    <img :src="cancion.image" :alt="cancion.titulo" :title="cancion.titulo">
                </div>
                <h2>
                    {{ cancion.titulo }}
                </h2>
                <span class="date" :class="{
                    yeargreen: cancion.year >= 2024,
                    yearred: cancion.year < 2024,
                }">
                    {{ cancion.year }}
                </span>
            </article> -->

            <!--esto es parte de los componentes separados-->
            <div v-for="cancion in canciones" :key="cancion.titulo">
                <Cancion :cancion="cancion" @favorita="haLlegadoLaCancionFavorita"/>
                <!-- <Cancion :cancion="cancion" v-on:favorita="haLlegadoLaCancionFavorita"/> -->
            </div>
        </div>
        <div class="favorita" v-if="favorita">
            <h2>{{ favorita.titulo }}</h2>
        </div>
        
        <pre>
            {{ fav }}
        </pre>
    </div>
</template>
<script>
import Cancion from './Cancion.vue';
export default {
    name: 'Canciones',
    components: {
        Cancion,
    },
    data() {
        return {
            canciones: [
                {
                    titulo: 'Houdini',
                    year: 2023,
                    image: "https://e-cdn-images.dzcdn.net/images/cover/12c05200e9097af48e0ad4fc259cee25/500x500-000000-80-0-0.jpg",
                },
                {
                    titulo: 'Training Season',
                    year: 2024,
                    image: "https://e-cdn-images.dzcdn.net/images/cover/d2d717350a1f2fcc7ef9fb01eb84163f/500x500-000000-80-0-0.jpg",
                },
                {
                    titulo: 'Dance The Night (From Barbie The Album)',
                    year: 2023,
                    image: "https://e-cdn-images.dzcdn.net/images/cover/67bbf9fc8e49fc8d373c91963061572b/500x500-000000-80-0-0.jpg",
                }
            ],
            favorita: null,
            fav: [],
        }
    },
    methods: {
        haLlegadoLaCancionFavorita(favorita) {
            // console.log(favorita);
            // alert('Se ha ejecutado el evento en el padre');
            this.favorita = favorita;
            
            this.fav.push(favorita.titulo);
            // if(favorita.estatus == false) {
            //     for(let fav1 in this.fav) {
            //         this.fav.pop(fav1);
            //         if(fav1 == favorita.micancion.titulo) {
            //             console.log(fav1);
            //         }
            //     }
            // } else {
            //     this.fav.push(favorita.micancion.titulo);
            // }
        }
    }
}
</script>
<style scoped>
@import '../assets/css/canciones/canciones.css';
</style>