import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex';
import FormFilter from "@/components/form-filter/Form-filter.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const data = [
    {
        id: 261,
        firstName: "Meribeth",
        lastName: "Haglund",
        email: "VDaly@odio.io",
        phone: "(411)804-5726",
        adress: {
            streetAddress: "9749 Ante Ct",
            city: "El Dorado Hills",
            state: "NV",
            zip: "71328"
        },
        description: "aliquam lacus odio magna lacus sed sed lacus sed convallis ipsum sollicitudin libero magna hendrerit tortor magna porta orci sed aliquam sed vitae magna egestas placerat curabitur amet suspendisse lacus sagittis sollicitudin"
    },
    {
        id: 295,
        firstName: "Marcus",
        lastName: "Espinosa",
        email: "LDover@mattis.com",
        phone: "(497)561-3057",
        adress: {
            streetAddress: "5763 Lorem Ln",
            city: "Walnut Creek",
            state: "TX",
            zip: "92471"
        },
        description: "pharetra sed sit eros augue nec risus porttitor morbi sit sit egestas sit sed dolor pretium vitae magna amet sed rutrum vitae mi amet convallis vitae consectetur massa tincidunt quis sapien vel"
    },
    {
        id: 289,
        firstName: "Ravi",
        lastName: "Kramarsky",
        email: "AGerver@sed.ly",
        phone: "(484)242-1514",
        adress: {
            streetAddress: "8851 Placerat St",
            city: "Oakland",
            state: "UT",
            zip: "80078"
        },
        description: "mattis vel sed ante dui nunc in placerat ipsum vitae nunc morbi sed adipiscing ac vel sollicitudin orci pulvinar sed amet dolor massa vitae turpis sit ac et massa augue tortor amet"
    }
];

describe('unit tests for FormFilter component', () => {
    let actions: any;
    let getters: any;
    let store: any;

    beforeEach(() => {
        actions = {
            clearFilterInput: jest.fn(),
            changeCurrentPage: jest.fn(),
            filterData: jest.fn()
        };

        getters = {
            data: () => data,
        };

        store = new Vuex.Store({
            actions,
            getters
        });
    });

    it('should match the snapshot', () => {
        const wrapper = mount(FormFilter, { store, localVue });
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('when title is empty call method clearInput', async () => {
        const wrapper = shallowMount(FormFilter, { store, localVue, data: () => ({ form: { title: 'search text' } }) });
        await wrapper.setData({ form: { title: '' } });
        expect(actions.clearFilterInput).toBeCalled();
    });

    it('should submit form', async () => {
        const wrapper = mount(FormFilter, { store, localVue });

        await wrapper.find("input").setValue("search text");
        await wrapper.find("form").trigger("submit.prevent");

        const vm = wrapper.vm as any;

        expect(vm.form.title).toBe('search text');
        expect(actions.changeCurrentPage).toBeCalled();
        expect(actions.filterData).toBeCalled();
    });
});
