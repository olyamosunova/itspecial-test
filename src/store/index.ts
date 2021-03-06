import Vue from "vue";
import Vuex from "vuex";
import data from "./modules/data";
import pagination from "./modules/pagination";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        data,
        pagination
    }
});
