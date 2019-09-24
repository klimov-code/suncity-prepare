import Vue from "vue";
import Echo from "laravel-echo";
import io from "socket.io-client";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window.io = io;

window.Echo = new Echo({
  broadcaster: "socket.io",
  host: `${window.location.hostname}:6001`
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
