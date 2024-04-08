const app = Vue.createApp({
  data() {
    return {
      money: 0,
    };
  },
  watch: {
    moneyBag() {
      const that = this;
      setTimeout(function () {
        that.money = 0;
      }, 5000);
    },
  },
  computed: {
    moneyBag() {
      if (this.money < 37) {
        return 'Not there yet';
      } else if (this.money === 37) {
        return this.money;
      } else if (this.money > 37) {
        return 'Too much';
      }
    },
  },
  methods: {
    add(num) {
      this.money = this.money + num;
    },
  },
});
app.mount('#assignment');
