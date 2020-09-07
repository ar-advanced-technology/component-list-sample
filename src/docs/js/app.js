import Vue from 'vue';
import Sandbox from './Sandbox.vue';

Vue.component('sandbox', Sandbox);

new Vue({
  el: '#root',

  data: {
    isMainFull: false
  },

  methods: {
    toggleLayout() {
      this.isMainFull = !this.isMainFull;
    }
  }
});
