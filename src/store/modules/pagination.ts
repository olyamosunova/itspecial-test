export default {
    state: {
        perPage: 25,
        currentPage: 1
    },
    mutations: {
        setCurrentPage(state: any, page: number) {
            state.currentPage = page;
        }
    },
    actions: {
        changeCurrentPage({commit}: any, page: number) {
            commit('setCurrentPage', page);
        }
    },
    getters: {
        perPage(state: any) {
            return state.perPage;
        },
        currentPage(state: any) {
            return state.currentPage;
        }
    }
}
