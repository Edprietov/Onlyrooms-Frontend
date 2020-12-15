<template>
  <div class="row">
    <div class="col-7">
      <br />
      <!-- primer carta-->
      <div class="col-8">
        <div class="card text-center">
          <div class="card-header">
            <strong>Inicie sesión para realizar su reserva!</strong>
          </div>
            <br />
          <div class="card-body">
            <form @submit="enviarForma">
              <div class="row">
                <div class="col-4">
                  <strong>Username:</strong>
                </div>
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control"
                    @change="comprobarFormato"
                    v-model="username"
                    required
                  />
                </div>
              </div>
              <br />



              <div class="row">
                <div class="col-4">
                  <strong>Contraseña:</strong>
                </div>
                <div class="col-8">
                  <input
                    type="password"
                    class="form-control"
                    @change="comprobarContrasena"
                    v-model="contrasena"
                    required
                  />
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-12">
                  <div class="text-right">
                    <button class="btn btn-danger mr-4">Cancelar</button>
                    <button
                      class="btn btn-success"
                      id="Aceptar"
                      @click="enviarForma">
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <br />
            <div class="alert alert-danger" id="error-contraseña">
              Las contraseñas no coinciden, por favor vuelve a revisar.
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
    <!-- Segunda carta-->
  </div>
</template>

<script>
export default {
  name: "User",
  data: function () {
    return {
      username: "",
    };
  },
  methods: {
    comprobarContrasena() {
      if (this.contrasena != this.contrasena2) {
        document.getElementById("error-contraseña").style.display = "block";
        document.getElementById("Aceptar").disabled = true;
      } else {
        document.getElementById("error-contraseña").style.display = "none";
        document.getElementById("Aceptar").disabled = false;
      }
    },
  },
};
</script>

<style>
#User {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
#User h2 {
  font-size: 50px;
  color: #283747;
}
#User span {
  color: crimson;
  font-weight: bold;
}
</style>
