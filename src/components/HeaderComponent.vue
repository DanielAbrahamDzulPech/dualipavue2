<template>
  <div class="headerMain">
    <h2>
      {{ texto }}
    </h2>
    <nav>
      <ul>
        <li><router-link to="/home" active-class="active">Inicio</router-link></li>
        <li><router-link to="/galeria" active-class="active">Galeria</router-link></li>
        <li><a href="" active-class="active">Quien es</a></li>
        <li><router-link to="/acercade" active-class="active">A cerca de</router-link></li>
        <li><router-link to="/canciones">Canciones / videos</router-link></li>
        <li><router-link to="/pagina/yuliana lara">Prueba Yuli</router-link></li>
        <li><router-link :to="{name: 'pagina', params: { id: 'Georgina Gomez Parametro' }}">Prueba Geo</router-link></li>
        <li><router-link :to="{name: 'formulario'}">Formulario</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      texto: "Bienvenido DuaLipa",
    };
  },
  methods: {},
};
</script>
<style scoped>
.headerMain {
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  background-color: rebeccapurple;
  color: #fff;
  align-items: center;
  justify-content: space-around;
}

.headerMain > nav {
  padding: 0;
}

.headerMain > nav > ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}
.headerMain > nav > ul a {
    color: #fff;
    text-decoration: none;
}

.headerMain .active {
  color: pink;
}
</style>
