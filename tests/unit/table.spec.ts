import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Table from "@/components/table/Table.vue";

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

describe('unit tests for Table component', () => {
    let actions: any;
    let getters: any;
    let store: any;

    beforeEach(() => {
        actions = {
            changeCurrentPage: jest.fn(),
            getChosenUser: jest.fn()
        };

        getters = {
            data: () => data,
            perPage: () => 10,
            currentPage: () => 1
        };

        store = new Vuex.Store({
            actions,
            getters
        });
    });

    it('should match the snapshot', () => {
       const wrapper = mount(Table, { store, localVue });
       expect(wrapper.html()).toMatchSnapshot();
    });

    it('should right calculate computed properties', () => {
        getters = {
            data: () => data,
            perPage: () => 20,
            currentPage: () => 1
        };

        store = new Vuex.Store({
            actions,
            getters
        });

        const wrapper = mount(Table, { store, localVue });
        const vm = wrapper.vm as any;

        expect(vm.pagesCount).toBe(1);
        expect(vm.pages).toHaveLength(1);
    });

    it('should to be call dispatch changeCurrentPage when user click pagination', () => {
        const wrapper = mount(Table, { store, localVue });
        const vm = wrapper.vm as any;

        const parameters = {
            type: '',
            page: 1
        };

       vm.onClickChangePage(parameters);
       expect(actions.changeCurrentPage).toBeCalled();
    });

    it('click on table row to choose a user', () => {
        const wrapper = mount(Table, { store, localVue });
        const vm = wrapper.vm as any;
        const spy = spyOn(vm, 'onClickChooseUser');

        wrapper.find('tbody tr').trigger('click');
        expect(spy).toBeCalled();
    });
});
