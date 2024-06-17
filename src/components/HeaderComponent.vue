<template>
  <div class="headerMain">
    <div class="header__div">
      <h2>
        {{ texto }}
      </h2>
      <i id="boton_buger" @click="getBugerMenu()" class="fa-solid fa-bars"></i>
    </div>
    <nav class="main-nav">
      <ul id="main-menu" class="main-menu" :class="bugerEstilo">
        <li class="main-menu__item">
          <router-link class="main-menu__link" to="/home" active-class="active"
            >Inicio</router-link
          >
        </li>
        <li class="main-menu__item">
          <router-link
            class="main-menu__link"
            to="/galeria"
            active-class="active"
            >Galeria</router-link
          >
        </li>
        <li class="main-menu__item">
          <a class="main-menu__link" href="" active-class="active">Quien es</a>
        </li>
        <li class="main-menu__item">
          <router-link
            class="main-menu__link"
            to="/acercade"
            active-class="active"
            >A cerca de</router-link
          >
        </li>
        <li class="main-menu__item">
          <router-link class="main-menu__link" to="/canciones"
            >Canciones / videos</router-link
          >
        </li>
        <li class="main-menu__item">
          <router-link class="main-menu__link" to="/pagina/yuliana lara"
            >Prueba Yuli</router-link
          >
        </li>
        <li class="main-menu__item">
          <router-link
            class="main-menu__link"
            :to="{ name: 'pagina', params: { id: 'Georgina Gomez Parametro' } }"
            >Prueba Geo</router-link
          >
        </li>
        <li class="main-menu__item">
          <router-link class="main-menu__link" :to="{ name: 'formulario' }"
            >Formulario</router-link
          >
        </li>
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
      bugerEstilo: "",
      activoBuger: false,
    };
  },
  methods: {
    getBugerMenu() {
      let activarBurger = !this.activoBuger;
      if (activarBurger) {
        this.activoBuger = true;
        return (this.bugerEstilo = "main-menu--show");
      } else {
        this.activoBuger = false;
        return (this.bugerEstilo = "");
      }
    },
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.headerMain {
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  /* background-color: rebeccapurple; */
  color: #fff;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
}

.header__div {
  background-color: rebeccapurple;
  width: 20%;
  /* position: relative; */
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

#boton_buger {
  display: none;
  position: absolute;
  top: 18px;
  right: 24px;
  font-size: 25px;
  cursor: pointer;
}

.main-menu {
  transition: transform 0.3s;
  transform: translateY(0);
  background-color: rebeccapurple;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .main-nav {
    width: 100%;
  }
  .headerMain {
    flex-direction: row;
    /* height: max-content; */
  }
  #main-menu {
    flex-direction: column;
    padding: 0;
    padding: 20px 10px;
  }

  .main-menu {
    transform: translateY(-100vh);
  }

  .headerMain {
    /* position: relative; */
  }
  #boton_buger {
    display: initial;
  }
  .header__div {
    background-color: rebeccapurple;
    width: 100%;
    position: relative;
  }
}
.main-menu--show {
  transform: translateY(0);
}
</style>
