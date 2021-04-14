import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Pagination from "@/components/pagination/Pagination.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const pages = [1, 2, 3];

describe('unit tests for Pagination component', () => {
    let store: any;
    let getters;

    beforeEach(() => {
        getters = {
            currentPage: () => 1
        };

        store = new Vuex.Store({ getters });
    });

    it('should match the snapshot', () => {
       const wrapper = mount(Pagination, { store, localVue, propsData: { pages } });
       expect(wrapper.html()).toMatchSnapshot();
    });
});
