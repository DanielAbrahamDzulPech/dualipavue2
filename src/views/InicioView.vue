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
        <div>
            <h2>Reactividad</h2>
            <input type="text" name="input1" id="input1" v-model="nombre">
            Mi nombre es: <strong>{{ nombre }}</strong>
            <pre>
                {{ $data }}
            </pre>

            <h2>Directivas condicionales </h2>
            <input type="number" name="edad1" id="edad1" v-model="edad">
            Mi edad es: <strong>{{ edad }}</strong>

            <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65">
                ¡¡ ERES MAYOR DE EDAD !!
            </p>

            <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
                ¡¡ ERES AVANZADA EDAD !!
            </p>

            <!-- <p class="alert-danger-provisional" v-if="!edad || edad < 18"> -->
            <p class="alert-danger-provisional" v-else>
                ¡¡ ERES MENOR DE EDAD !!
            </p>

            <h2>Directiva iterativa</h2>
            <ol>
                <li v-for="cancion in canciones" :key="cancion">
                    {{ cancion }}
                </li>
            </ol>
        </div>
    </main>
</template>
<script>
export default {
    name: 'InicioView',
    data() {
        return {
            nombre: '',
            edad: 18,
            fecha: '17 de mayo de 2024',
            autor: 'Daniel Pech',
            artista: 'Dua Lipa',
            titulo: 'Moda',
            descripcion: 'Dua Lipa brilla con dos vestidos transparentes de encaje metalizado en los ACM Awards 2024',
            imagenPrincipal: 'https://media.vogue.mx/photos/66476db8875a8fc544b34ed1/2:3/w_1920,c_limit/dua-lipa-vestido-azul-transparente-acm-awards-2024.jpg',
            canciones: ['Dance The Night', 'Levitating', 'Training Season', 'Houdini', 'One Kiss'],
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

.alert-danger-provisional {
    color: red;
    font-weight: bold;
}
.alert-success-provisional {
    color: green;
    font-weight: bold;
}
.alert-purple-provisional {
    color: purple;
    font-weight: bold;
}
</style>