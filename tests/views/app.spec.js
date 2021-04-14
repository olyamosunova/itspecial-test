import { mount } from "@vue/test-utils";
import App from "/src/components/app/App";
import Main from "/src/components/main/Main";

describe('unit tests for App', () => {
    it('should match the snapshot', () => {
        const wrapper = mount(Main);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it ('renders a div', () => {
        const wrapper = mount(App);
        expect(wrapper.contains('div')).toBeTruthy();
    });
});
