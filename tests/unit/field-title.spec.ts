import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import FieldTitle from "@/components/field-title/Field-title.vue";

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
    let store: any;

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

    it('change active sort type when user click sort in sortable field', () => {
        field.sortable = true;

        const wrapper = shallowMount(FieldTitle, {
            store,
            localVue,
            propsData: { field }
        });

        expect((wrapper.vm as any).activeSortType).toBe('');
        wrapper.find('th').trigger('click');
        expect((wrapper.vm as any).activeSortType).toBe('inc');
    });

    it('not change active sort type when user click sort in not sortable field', () => {
        field.sortable = false;

        const wrapper = shallowMount(FieldTitle, {
            store,
            localVue,
            propsData: { field }
        });

        expect((wrapper.vm as any).activeSortType).toBe('');
        wrapper.find('th').trigger('click');
        expect((wrapper.vm as any).activeSortType).toBe('');
    });
});
