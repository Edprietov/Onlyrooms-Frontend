<template>
  <div id="app">
    <div class="header">
      <h1>OnlyRooms</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="registrarse" v-if="is_auth">Registrese</button>
        <button v-on:click="iniciarSesion" v-if="is_auth">Inicie Sesión</button>
        <button v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ul class="navbar-nav ml-md-auto">
        <li class="nav-item" id="">
          <a href="https://web.whatsapp.com/" class="mx-2">
            <img
              src="@/assets/whatsapp.svg"
              alt="whatsapp"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li class="nav-item" id="">
          <a href="https://facebook.com/" class="mx-2">
            <img
              src="@/assets/facebook.svg"
              alt="facebook"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li class="nav-item" id="">
          <a href="https://twitter.com/" class="mx-2">
            <img
              src="@/assets/gorjeo.svg"
              alt="twitter"
              height="30"
              width="30"
            />
          </a>
        </li>
        <li class="nav-item" id="">
          <a href="https://instagram.com/" class="mx-2">
            <img
              src="@/assets/instagram.svg"
              alt="instagram"
              height="30"
              width="30"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  methods: {
    init: function () {
      if (this.$route.name != "user") {
        let username = localStorage.getItem("current_username");
        this.$router.push({ name: "user", params: { username: username } });
      }
    },

    getBalance: function () {
      if (this.$route.name != "user_balance") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "user_balance",
          params: { username: username },
        });
      }
    },

    registrarse: function () {
      if (this.$route.name != "registrar_usuario") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "registrar_usuario",
          params: { username: username },
        });
      }
    },

        iniciarSesion: function () {
      if (this.$route.name != "autenticar_usuario") {
        let username = localStorage.getItem("current_username");
        this.$router.push({
          name: "autenticar_usuario",
        });
      }
    },
  },

  beforeCreate: function () {
    localStorage.setItem("current_username", "");
    localStorage.setItem("isAuth", false);

    this.$router.push({ name: "user", params: { username: "camilo24" } });
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  background-color: #283747;
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
}
.header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
}
.footer li {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: right;
}
</style>