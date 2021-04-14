import { mount, createLocalVue } from "@vue/test-utils";
import Loader from "@/components/loader/Loader";

const localVue = createLocalVue();

describe('unit tests for Loader component', () => {
    it('should match the snapshot', () => {
        const wrapper = mount(Loader, { localVue });
        expect(wrapper.html()).toMatchSnapshot();
    });
});
