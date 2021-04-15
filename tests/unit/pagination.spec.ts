import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Pagination from "@/components/pagination/Pagination.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

let pages = [1, 2, 3];

describe('unit tests for Pagination component', () => {
    let store: any;
    let getters: any;

    beforeEach(() => {
        getters = {
            currentPage: () => 1
        };

        store = new Vuex.Store({ getters });
    });

    it('should match the snapshot', () => {
       const wrapper = mount(Pagination, { store, localVue, propsData: { pages } });
       expect(wrapper.html()).toMatchSnapshot();
    });

    it('should correct work computed properties when currentPage = 2', () => {
        getters = {
            currentPage: () => 2
        };

        store = new Vuex.Store({ getters });

        const wrapper = mount(Pagination, { store, localVue, propsData: { pages } });
        const vm = wrapper.vm as any;

        expect(vm.pageCountStart).toEqual(0);
        expect(vm.pageCountEnd).toEqual(4);
        expect(vm.showLeftEllipsis).toBe(false);
        expect(vm.showRightEllipsis).toBe(false);
    });

    it('should correct work computed properties when currentPage = 10', () => {
        pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        getters = {
            currentPage: () => 10
        };

        store = new Vuex.Store({ getters });

        const wrapper = mount(Pagination, { store, localVue, propsData: { pages } });
        const vm = wrapper.vm as any;

        expect(vm.pageCountStart).toEqual(6);
        expect(vm.pageCountEnd).toEqual(10);
        expect(vm.showLeftEllipsis).toBe(true);
        expect(vm.showRightEllipsis).toBe(false);
    });

    it('should called handlerClickChangePage when user click pagination item', () => {
        const wrapper = shallowMount(Pagination, { store, localVue, propsData: { pages }});
        const vm = wrapper.vm as any;

        const spy = spyOn(vm, 'handlerClickChangePage');
        const button = wrapper.findAll('button').at(3);

        button.trigger('click');
        expect(spy).toBeCalled();
    });
});
