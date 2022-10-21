import AlertMessage from '@/shared/alert-message/AlertMessage.vue';
import { shallowMount } from '@vue/test-utils';
import { config } from "@vue/test-utils"
config.global.mocks = {
  $t: (msg) => msg
}
describe('AlertMessage.vue', () => {
  
  const propsData = {
    message: {
      value: 'test',
      msgType: 'success'
    }
  };
  const wrapper = shallowMount(AlertMessage, { propsData } );

  it('Should match whit snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should props message', () => {
    expect(wrapper.props()).toEqual(propsData);
  });

  
});

