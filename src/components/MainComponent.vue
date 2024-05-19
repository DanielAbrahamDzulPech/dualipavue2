<template>
    <div>
        <p>component principal de la web</p>
    </div>
</template>
<script>
export default {
    name: 'MainComponent',
    created() {
        console.log('Componente creado!!');
    },
    mounted() {
        console.log('Componente montado');
    },
    updated() {
        console.log('Componente actualizado');
    },
    destroyed() {
        console.log('Componente eliminado!!');
    },
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>