export default {
    state: {
        perPage: 25,
        currentPage: 1
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        }
    },
    actions: {
        changeCurrentPage({commit}, page) {
            commit('setCurrentPage', page);
        }
    },
    getters: {
        perPage(state) {
            return state.perPage;
        },
        currentPage(state) {
            return state.currentPage;
        }
    }
}
