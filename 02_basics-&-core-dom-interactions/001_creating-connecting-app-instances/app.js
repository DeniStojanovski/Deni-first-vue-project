// passing an object to createApp, has to be data function, always return object
const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
    };
  },
});
// mount wants a string, and css selector which we wanna control
app.mount('#user-goal');
