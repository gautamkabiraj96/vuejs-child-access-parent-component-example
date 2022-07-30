import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component("vehicle", {
  data() {
    return {
      name: "Vehicle component"
    };
  },
  template: `  
  <div>
  <h2>Vehicle section</h2>
  <p><slot></slot></p>   
  </div>
  `
});

Vue.component("car", {
  template: `<p>Car inside {{parentName}}</p>`,
  computed: {
    parentName() {
      return this.$parent.name;
    }
  }
});

Vue.component("motorcycle", {
  template: `<p>Motorcycle inside {{parentName}}</p>`,
  computed: {
    parentName() {
      return this.$parent.name;
    }
  }
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
