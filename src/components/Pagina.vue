<template>
    <div>
        <p>Pagina</p>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar nombre</button>
        <button @click="redirigirAlBlog()">Redirigir</button>
        <h4>{{ nombre }}</h4>
    </div>
</template>
<script>
export default {
    name: 'Pagina',
    created() {
        console.log('Componente creado!!');
    },
    mounted() {
        this.id_desde_url = this.$route.params.id;
        console.log('Componente montado!!');
    },
    updated() {
        console.log('Componente Actualizado!!');
    },
    destroyed() {
        console.log('Componente eliminado!!');
    },
    data() {
        return {
            id_desde_url: null,
            nombre: "Daniel Pech",
        };
    },
    methods: {
        actualizarNombre(){
            this.nombre = 'DANIEL PECH';
            console.log(this.nombre);
        },
        redirigirAlBlog() {
            this.$router.push('/acercade');
            // this.$router.push('/acercade/456');
            // this.$router.push({name: 'pagina', params: {id: 'Redireccion'}});
        },
    }
}
</script>