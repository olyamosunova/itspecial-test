import { mount, createLocalVue } from "@vue/test-utils";
import Main from "/src/src/components/main/Main";

const localVue = createLocalVue();
const data = null;
const chosenUser = null;

describe('unit tests for Main component', () => {
    it('should match the snapshot', () => {
        const wrapper = mount(Main, { localVue });
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should initialize correctly', () => {
        const wrapper = mount(Main, {
            localVue,
            stubs: {
                FormFilter: true,
                Loader: true
            }
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(wrapper.is(Main)).toBeTruthy();
        expect(wrapper.vm.data).toEqual(data);
        expect(wrapper.vm.chosenUser).toEqual(chosenUser);

    })
});
