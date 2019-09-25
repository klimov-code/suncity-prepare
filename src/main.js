import Vue from "vue";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

window.Pusher = Pusher;

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "fakekey",
  cluster: "123",
  wsHost: "docker.vkreview.ru",
  wsPort: 6001
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
