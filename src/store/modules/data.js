import axios from "axios";

const url = `http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}`;

export default {
  state: {
      data: null,
      filteredData: null,
      chosenUser: null,
  },
  mutations: {
      setData(state, data) {
          state.data = data;
      },
      setFilteredData(state, data) {
          state.filteredData = data;
      },
      setChosenUser(state, user) {
          state.chosenUser = user;
      },
  },
  actions: {
    getData({commit}) {
      axios(url)
          .then(res => {
              commit('setData', res.data);
          })
          .catch(err => {
              console.error(err)
          });
    },
      filterData({state, commit}, value) {
        const newData = state.data.filter(item => {
            const firstName = item.firstName.toLowerCase();
            const lastName = item.lastName.toLowerCase();
            const email = item.email.toLowerCase();
            const phone = item.phone.toLowerCase();
            const description = item.description.toLowerCase();
            const adress = `${item.city}, ${item.streetAddress},
                            ${item.zip}, ${item.state}`.toLowerCase();

            return firstName.includes(value.toLowerCase()) ||
                lastName.includes(value.toLowerCase()) ||
                email.includes(value.toLowerCase()) ||
                phone.includes(value.toLowerCase()) ||
                description.includes(value.toLowerCase()) ||
                adress.includes(value.toLowerCase());
        });


        commit('setFilteredData', newData);
      },
      clearFilterInput({commit}) {
          commit('setFilteredData', null);
      },
      getChosenUser({state, commit}, userId) {
        const idx = state.data.findIndex(item => item.id === userId);

        if (idx >= 0) {
            const user = state.data[idx];
            commit('setChosenUser', user);
        }
      }
  },
  getters: {
      data(state) {
          return state.filteredData ? state.filteredData : state.data;
      },
      chosenUser(state) {
          return state.chosenUser;
      }
  }
}
