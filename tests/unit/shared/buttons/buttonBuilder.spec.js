import { shallowMount } from '@vue/test-utils';
import ButtonBuilder from '@/shared/buttons/ButtonBuilder.vue';

describe('ButtonBuilder', () => {

    const wrapper = shallowMount(ButtonBuilder, {
        props: {
            type: 'submit',
            buttonText: 'test',
            customClass: { 'btn test-btn': true },
        }
    });

    it('should render the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should props type, buttonText and customClass', () => {
        expect(wrapper.props()).toEqual({
            type: 'submit',
            buttonText: 'test',
            customClass: { 'btn test-btn': true },
            disabled: false,
            isSubmitting: false,
        });
    });

});