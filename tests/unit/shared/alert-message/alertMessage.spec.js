import AlertMessage from '@/shared/alert-message/AlertMessage.vue';
import { shallowMount } from '@vue/test-utils';
import { config } from "@vue/test-utils"
config.global.mocks = {
  $t: (msg) => msg
}
describe('AlertMessage.vue', () => {
  

  it('renders props when passed', () => {
    const propsData = {
      message: {
        value: 'test',
        msgType: 'success'
      }
    };
    const wrapper = shallowMount(AlertMessage, { propsData } );
    expect(wrapper.html()).toMatchSnapshot();
  });
});

