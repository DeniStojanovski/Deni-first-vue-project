const app = Vue.createApp({
  data() {
    return {
      myName: 'Denka the Reaper',
      myAge: 28,
      imgLink:
        'https://media.istockphoto.com/id/473431064/photo/golden-retriever-dog.jpg?s=612x612&w=0&k=20&c=oeVnMXjDJ7f-HnsXVpbUyojfARBMfHIXfuqWBQvkmAQ=',
    };
  },
  methods: {
    calcAge() {
      return this.myAge + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});
app.mount('#assignment');
