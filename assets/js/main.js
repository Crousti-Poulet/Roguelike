import Vue from 'vue';

import Home from './components/Home';

var home = new Vue({
  el: "#app",
  components: {Home},

  data: {
    name: 'Jean-Marie Le Pen'
  }

  
});