const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    enterName() {
      this.confirmedName = this.name;
    },
    alertBtn() {
      alert('You clicked the btn!');
    },
    setInput(event) {
      this.name = event.target.value;
    },
  },
});
app.mount('#assignment');
