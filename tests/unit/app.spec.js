import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/components/app/App";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('unit tests for App component', () => {
    let store;
    let actions;

    beforeEach(() => {
        actions = {
            getData: jest.fn(),
        };

       store = new Vuex.Store({ actions });
    });

    it('should match the snapshot', () => {
        const wrapper = mount(App, { store, localVue });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
