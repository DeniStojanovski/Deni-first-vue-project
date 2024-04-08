// passing an object to createApp, has to be data function, always return object
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    };
  },
  // methods must use, inside use whatever, but must be functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    },
  },
});
// mount wants a string, and css selector which we wanna control
app.mount('#user-goal');
