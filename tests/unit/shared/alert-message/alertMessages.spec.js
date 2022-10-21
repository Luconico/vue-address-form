import AlertMessages from '@/shared/alert-message/AlertMessages.vue';
import { mount } from '@vue/test-utils';
import { config } from "@vue/test-utils"
import i18n from '@/shared/locales/i18n';
describe('AlertMessage.vue', () => {

    const propsData = {
        messages: [
            {
                value: 'test1',
                msgType: 'success'
            },
            {
                value: 'test2',
                msgType: 'error'
            }
        ]
    };
    const wrapper = mount(AlertMessages, {
        propsData,
        global: {
            plugins: [i18n]
        }
    });

    it('Should match whit snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('Should props message', () => {
        expect(wrapper.props()).toEqual(propsData);
    });

    it('Should render the component', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should have two alert messages', () => {
        expect(wrapper.findAll('.alert-container').length).toBe(2);
    });
    
    it('Should have correct msgType', () => {
        expect(wrapper.findAll('.alert-container').at(0).classes()).toContain('alert--success');
        expect(wrapper.findAll('.alert-container').at(1).classes()).toContain('alert--error');
    });

    it('Should have correct message', () => {
        expect(wrapper.findAll('.alert-container').at(0).text()).toContain('test1');
        expect(wrapper.findAll('.alert-container').at(1).text()).toContain('test2');
    });

});

