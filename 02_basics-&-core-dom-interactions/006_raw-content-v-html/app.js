// passing an object to createApp, has to be data function, always return object
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: 'Master the course and learn Vue!',
      // courseGoalB: '<h2>Master the course and learn Vue!</h2>',
      vueLink: 'https://vuejs.org/',
    };
  },
  // methods must use, inside use whatever, but must be functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});
// mount wants a string, and css selector which we wanna control
app.mount('#user-goal');
