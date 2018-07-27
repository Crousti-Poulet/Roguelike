"use strict";
import Vue from 'vue';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footervue from './components/Footervue';

var home = new Vue({
  el: "#app",
  components: {
    Home
  }
});

let layout = new Vue({
  el: '#header',
  components: {Navbar}
});

let footervue = new Vue({
  el: "#footertest",
  components: {Footervue}
});