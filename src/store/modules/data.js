import axios from "axios";

export default {
  state: {
      data: null,
      filteredData: null
  },
  mutations: {
      setData(state, data) {
          state.data = data;
      },
      setFilteredData(state, data) {
          state.filteredData = data;
      }
  },
  actions: {
    getData({commit}) {
      axios(`http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}`)
          .then(res => {
              commit('setData', res.data);
          })
          .catch(err => {
              console.error(err)
          });
    },
      filterData({state, commit}, value) {
        const newData = state.data.filter(item => {
            const firstName = item.firstName;
            const lastName = item.lastName;
            const email = item.email;
            const phone = item.phone;
            const description = item.description;
            const adress = `${item.city}, ${item.streetAddress}, ${item.zip}, ${item.state}`;

            return firstName.includes(value) ||
                lastName.includes(value) ||
                email.includes(value) ||
                phone.includes(value) ||
                description.includes(value) ||
                adress.includes(value);
        });


        commit('setFilteredData', newData);
      },
      clearFilterInput({commit}) {
          commit('setFilteredData', null);
      }
  },
  getters: {
      data(state) {
          return state.filteredData ? state.filteredData : state.data;
      },
  }
}
