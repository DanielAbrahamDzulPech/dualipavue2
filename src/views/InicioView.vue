<template>
    <main>
        <div id="contenedorPrincipal">
            <div class="descripcionDua">
                <img :src="imagenPrincipal" :alt="titulo">
            </div>
            <div class="contenedorInformacion">
                <h1>{{ artista }}</h1>
                <h2>{{ titulo }}</h2>
                <p>{{ descripcion }}</p>
                <span>Por {{ autor }}</span>
                <br>
                <small>{{ fecha }}</small>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'InicioView',
    data() {
        return {
            fecha: '17 de mayo de 2024',
            autor: 'Daniel Pech',
            artista: 'Dua Lipa',
            titulo: 'Moda',
            descripcion: 'Dua Lipa brilla con dos vestidos transparentes de encaje metalizado en los ACM Awards 2024',
            imagenPrincipal: 'https://media.vogue.mx/photos/66476db8875a8fc544b34ed1/2:3/w_1920,c_limit/dua-lipa-vestido-azul-transparente-acm-awards-2024.jpg',
        }
    },
    methods: {

    }
}
</script>
<style scoped>
#contenedorPrincipal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 580px;
}

@media(max-width: 800px) {
    #contenedorPrincipal {
        grid-template-columns: repeat(1,1fr);
    }
}

.descripcionDua {
    height: inherit;
}

.descripcionDua > img {
    height: 100%;
}

.contenedorInformacion {
    margin: auto;
}
</style>