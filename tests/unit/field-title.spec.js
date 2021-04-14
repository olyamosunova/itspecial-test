import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import FieldTitle from "@/components/field-title/Field-title";

const localVue = createLocalVue();
localVue.use(Vuex);

const field = {
    key: 'name',
    label: 'name',
    sortable: false
};

describe('unit tests for FieldTitle component', () => {
    let actions;
    let getters;
    let store;

    beforeEach(() => {
        actions = {
            sortingData: jest.fn()
        };

        getters = {
            activeSortBy: () => 'id',
        };

        store = new Vuex.Store({
            actions,
            getters
        });
    });

    it('should match the snapshot', () => {
        const wrapper = mount(FieldTitle, { store, localVue, propsData: { field } });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
