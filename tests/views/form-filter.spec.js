import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import FormFilter from "/src/components/form-filter/Form-filter";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('FromFilter.vue', () => {
    let actions;
    let store;

    beforeEach(() => {
        actions = {
            filterData: jest.fn(),
        };

        store = new Vuex.Store({
            actions
        })
    });

    it('вызывает действие хранилища "filterData" по нажатию кнопки', () => {
        const wrapper = shallowMount(FormFilter, { store, localVue });
        wrapper.find('form').trigger('submit');
        expect(actions.filterData).toHaveBeenCalled();
    })
})
