import Vue from 'vue'

Vue.filter('currency', function (value) {
    return 'R$ ' + value.toLocaleString()
  })