<template>
    <div class="footerContent">
        <h3><a href="" target="_blank">{{ titulo }}</a></h3>
    </div>
</template>
<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            titulo: 'Desarrollado Por Abraham Pech Dev',
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.footerContent {
    height: 60px;
    color: #fff;
    background-color: #FF0080;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footerContent > h3 {
    text-align: center;
}

.footerContent > h3 > a {
    color: #fff;
    text-decoration: none;
}
</style>