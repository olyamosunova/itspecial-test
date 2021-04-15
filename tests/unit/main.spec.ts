import { mount, createLocalVue } from "@vue/test-utils";
import Main from "@/components/main/Main.vue";
import Table from "@/components/table/Table.vue";
import Loader from "@/components/loader/Loader.vue";
import Vuex from "vuex";

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

describe('unit tests for Main component', () => {
    let actions: any;
    let getters: any;
    let store: any;

    beforeEach(() => {
        actions = {
            getData: jest.fn(),
        };

        getters = {
            data: () => data,
            chosenUser: () => data[0]
        };

        store = new Vuex.Store({
            actions,
            getters
        });
    });

    it('should match the snapshot', () => {
        actions = {
            getData: jest.fn(),
        };

        getters = {
            data: () => data,
            chosenUser: () => data[0]
        };

        store = new Vuex.Store({
            actions,
            getters
        });

        const wrapper = mount(Main, { store, localVue });
        expect(wrapper.html()).toMatchSnapshot();
    });

    it ('should be a Table when data is', () => {
        const wrapper = mount(Main, { store, localVue });
        const table = wrapper.findComponent(Table);
        expect(table.is(Table)).toBe(true)
    });

    it ('should be a Loader when data is empty', () => {
        actions = {
            getData: jest.fn(),
        };

        getters = {
            data: () => null,
            chosenUser: () => null
        };

        store = new Vuex.Store({
            actions,
            getters
        });

        const wrapper = mount(Main, { store, localVue });
        const loader = wrapper.findComponent(Loader);
        expect(loader.is(Loader)).toBe(true);
    });
});
