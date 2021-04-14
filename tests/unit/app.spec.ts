import { mount, createLocalVue } from "@vue/test-utils";
import App from "@/components/app/App.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('unit tests for App component', () => {
    let store: any;
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
