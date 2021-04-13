import axios from "axios";
import {SORT_TYPE} from "../../const";

const url = `http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}`;

export default {
  state: {
      data: null,
      filteredData: null,
      sortedData: null,
      chosenUser: null,
      activeSortBy: null
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
      setSortedData(state, data) {
          state.sortedData = data;
      },
      setActiveSortBy(state, value) {
          state.activeSortBy = value;
      },
  },
  actions: {
    getData({commit}) {
      axios(url)
          .then(res => {
              console.log(res.data);
              commit('setData', res.data);
              commit('setSortedData', res.data);
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
            // const description = item.description.toLowerCase();
            const adress = `${item.adress.city}, ${item.adress.streetAddress},
                            ${item.adress.zip}, ${item.adress.state}`.toLowerCase();

            return firstName.includes(value.toLowerCase()) ||
                lastName.includes(value.toLowerCase()) ||
                email.includes(value.toLowerCase()) ||
                phone.includes(value.toLowerCase()) ||
                // description.includes(value.toLowerCase()) ||
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
      },
      sortingData({state, commit}, {sortBy, sortType}) {
          commit('setActiveSortBy', sortBy);

          const sortedData = state.data.slice().sort((a, b) => {
              let itemA = typeof a === 'string' ? a.toLowerCase() : a;
              let itemB = typeof a === 'string' ? b.toLowerCase() : b;

              switch (sortType) {
                  case SORT_TYPE.INC:
                      if (itemA[sortBy] > itemB[sortBy]) {
                          return  1;
                      } else {
                          return -1;
                      }

                  case SORT_TYPE.DEC:
                      if (itemA[sortBy] > itemB[sortBy]) {
                          return  -1;
                      } else {
                          return 1;
                      }

                  default:
                      return 0;
              }
          });

          commit('setSortedData', sortedData);
      }
  },
  getters: {
      data(state) {
          return state.filteredData ? state.filteredData : state.sortedData;
      },
      chosenUser(state) {
          return state.chosenUser;
      },
      activeSortBy(state) {
         return state.activeSortBy;
      }
  }
}
