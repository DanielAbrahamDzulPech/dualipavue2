<template>
    <div>
        <form action="" @submit.prevent="mostrarUsuario()">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" v-model="user.nombre" :class="{ 'error': $v.user.nombre.$error, 'dirty': $v.user.nombre.$dirty }" />
                <div v-if="submitted && !$v.user.nombre.required">
                    Este campo es requerido
                </div>
                <div v-if="submitted && !$v.user.nombre.minLength">
                    Este campo debe tener mas caracteres {{$v.user.nombre.$params.minLength.min}}
                </div>
            </div>
            <div class="form-group">
                <label for="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" v-model="user.apellidos" />
                <div v-if="submitted && !$v.user.apellidos.required">
                    Este campo es requerido
                </div>
                <div v-if="submitted && !$v.user.apellidos.minLength">
                    Este campo debe tener mas de {{$v.user.apellidos.$params.minLength.min}} caracteres
                </div>
            </div>
            <div class="form-group">
                <label for="bio">Biografia:</label>
                <textarea name="bio" v-model="user.bio"></textarea>
                <div v-if="submitted && !$v.user.bio.required">
                    Este campo es requerido
                </div>
                <div v-if="submitted && !$v.user.bio.minLength">
                    Este campo debe tener mas de {{$v.user.bio.$params.minLength.min}} caracteres
                </div>
                <div v-if="submitted && !$v.user.bio.maxLength">
                    Este campo debe tener menos de {{$v.user.bio.$params.maxLength.max}} caracteres
                </div>
            </div>
            <div class="form-group radibuttons">
                <input type="radio" name="genero" value="hombre" checked v-model="user.genero">Hombre
                <input type="radio" name="genero" value="mujer" v-model="user.genero">Mujer
                <input type="radio" name="genero" value="otro" v-model="user.genero">Otro
            </div>

            <input type="submit" value="Enviar" class="btn btn-success">
        </form>

        <div class="datos" v-if="user.nombre && user.apellidos">
            <h3>{{ user.nombre + ' ' + user.apellidos }}</h3>
        </div>
    </div>
</template>
<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import maxLength from 'vuelidate/lib/validators/maxLength';
// import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
// const { required, minLength } = require('vuelidate/lib/validators')
export default {
    name: "Formulario",
    components: {

    },
    validations: {
        user: {
            nombre: {
                required,
                minLength: minLength(5)
            },
            apellidos: {
                required,
                minLength: minLength(5)
            },
            bio: {
                required,
                minLength: minLength(20),
                maxLength: maxLength(30),
            },
        },
    },
    data() {
        return {
            submitted: false,
            user: {
                nombre: "",
                apellidos: "",
                genero: '',
            }
        }
    },
    methods: {
        mostrarUsuario() {
            console.log(this.user);
            this.submitted = true;

            // Indicar que se a tocado la validacion - se han tocado esos campos a validar
            this.$v.$touch();
            if(this.$v.$invalid) {
                return false;
            }

            alert("Validación pasada");
        },
        status(validation) {
            console.log(validation)
            return {
                error: this.$v.$error,
                dirty: this.$v.$dirty
            }
        },
    },
}
</script>
<style scoped>
input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}

.dirty {
  border-color: #5A5;
  background: #EFE;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  border-color: red;
  background: #FDD;
}

.error:focus {
  outline-color: #F99;
}
</style>