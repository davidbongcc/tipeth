const mixin = {
  filters: {
    permalink: function (privateKey) {
      return 'https://tipeth.com/' + privateKey
    }
  },
  methods: {
    reverseArray: function (array) {
      return array.slice().reverse()
    },
    inputSelectAll: function (input) {
      return input.target.setSelectionRange(0, input.target.value.length)
    }
  }
}

export default {
  install (Vue, options) {
    Vue.mixin(mixin)
  }
}
