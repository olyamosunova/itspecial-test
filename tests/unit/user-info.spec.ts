import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import UserInfo from "@/components/user-info/User-info.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const chosenUser = {
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
};

describe('unit tests for UserInfo component', () => {
    let getters;
    let store: any;

    beforeEach(() => {
        getters = {
            chosenUser: () => chosenUser,
        };

        store = new Vuex.Store({
            getters
        });
    });

    it('should match the snapshot', () => {
        const wrapper = mount(UserInfo, { store, localVue });
        expect(wrapper.html()).toMatchSnapshot();
    })
});
