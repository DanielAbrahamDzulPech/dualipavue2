<template>
    <div id="contentImage">
        <!-- <span>
            {{ imagen }}
        </span> -->
        <img :src="imagen" :alt="title">
    </div>
</template>
<script>
export default {
    name: 'CardImage',
    data() {
        return {
            title:'Dua Lipa',
        }
    },
    props: [
        'imagen',
    ],
}
</script>
<style scoped>
img {
    height: 250px;
    width: 100%;
    object-fit: contain;
}
</style>