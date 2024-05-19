<template>
    <article class="article-item">
        <div>
            <img :src="cancion.image" :alt="cancion.titulo" :title="cancion.titulo">
        </div>
        <h2>
            {{ cancion.titulo }}
        </h2>
        <!-- :class="'laclase'" -->
        <span class="date" :class="{
            yeargreen: cancion.year >= 2024,
            yearred: cancion.year < 2024,
        }">
            {{ cancion.year }}
        </span>

        <input id="seleccionarCancion" type="button" value="Marcar como favorita" :class="{ selectCancion: estatusSeleccionado, notSelectCancion: !estatusSeleccionado }" @click="pasarFavoritaAlPadre(cancion)"/>
    </article>
</template>
<script>
export default {
    name: 'Cancion',
    props: ['cancion'],
    mounted() {
        console.log(this.cancion);
    },
    data() {
        return {
            estatusSeleccionado : false,
        }
    },
    methods: {
        pasarFavoritaAlPadre(cancion) {
            if(this.estatusSeleccionado) {
                this.estatusSeleccionado = false;
            } else {
                this.estatusSeleccionado = true;
            }
            // console.log(cancion);
            // alert("Boton Pulsado");
            //creamos un evento podemos pasarle u objeto como valor
            this.$emit('favorita',cancion);
            
            // let objpara = { micancion: cancion, estatus: this.estatusSeleccionado };
            // this.$emit('favorita',objpara);
        },
        // desmarcarFavorito(cancion) {
        //     this.estatusSeleccionado = false;
        // },
    },
}
</script>
<style scoped>
#seleccionarCancion {
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
.selectCancion {
    background-color: green;
}

.notSelectCancion {
    background-color: red;
}
</style>