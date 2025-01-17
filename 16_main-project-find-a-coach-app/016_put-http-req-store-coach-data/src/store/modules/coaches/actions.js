export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      // id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://vue-coach-store-a9b13-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT', //with POST new entry will be added
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      //error...
    }

    // context.commit('registerCoach', coachData);
    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
