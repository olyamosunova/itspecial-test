import axios from "axios";
import { SORT_TYPE } from "@/const";

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
      setData(state: any, data: Array<object>) {
          state.data = data;
      },
      setFilteredData(state: any, data: Array<object>) {
          state.filteredData = data;
      },
      setChosenUser(state: any, user: object) {
          state.chosenUser = user;
      },
      setSortedData(state: any, data: Array<object>) {
          state.sortedData = data;
      },
      setActiveSortBy(state: any, value: string) {
          state.activeSortBy = value;
      },
  },
  actions: {
    getData({commit}: any) {
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
      filterData({state, commit}: any, value: string) {
        const newData = state.data.filter((item: object) => {
            let { firstName, lastName, email, phone }: any = item;

            firstName = firstName.toLowerCase();
            lastName = lastName.toLowerCase();
            email = email.toLowerCase();
            phone = phone.toLowerCase();

            return firstName.includes(value.toLowerCase()) ||
                lastName.includes(value.toLowerCase()) ||
                email.includes(value.toLowerCase()) ||
                phone.includes(value.toLowerCase());
        });


        commit('setFilteredData', newData);
      },
      clearFilterInput({commit}: any) {
          commit('setFilteredData', null);
      },
      getChosenUser({state, commit}: any, userId: number) {
        const idx = state.data.findIndex(({id}: any) => id === userId);

        if (idx >= 0) {
            const user = state.data[idx];
            commit('setChosenUser', user);
        }
      },
      sortingData({state, commit}: any, {sortBy, sortType}: any) {
          commit('setActiveSortBy', sortBy);

          const sortedData = state.data.slice().sort((a: any, b: any) => {
              const itemA = typeof a === 'string' ? a.toLowerCase() : a;
              const itemB = typeof a === 'string' ? b.toLowerCase() : b;

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
      data(state: any) {
          return state.filteredData ? state.filteredData : state.sortedData;
      },
      chosenUser(state: any) {
          return state.chosenUser;
      },
      activeSortBy(state: any) {
         return state.activeSortBy;
      }
  }
}
