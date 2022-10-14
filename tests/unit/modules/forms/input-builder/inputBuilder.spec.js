
import { shallowMount, mount } from '@vue/test-utils';
import { config } from "@vue/test-utils"
import InputBuilder from '@/modules/forms/input-builder/InputBuilder.vue';
import i18n from '@/shared/locales/i18n';
import store from '@/store';
const maska = jest.fn()

describe('InputBuilder.vue', () => {


  const wrapper = mount(InputBuilder, {
    props: {
      type: 'text',
      label: 'test',
      name: 'test',
      modelValue: 'test',
      placeholder: 'test',
      required: true,
      disabled: false,
      customClass: ['test'],
      validationFunction: 'nifSpain',
      options: null,
      mask: 'AAAA',
      pattern: 'AAAA',
      validations: ['required', 'minLength:3', 'maxLength:5'],
      options: {
        select: 'test',
        translate: false,
        options: [
          { value: 'Test' },
          { value: 'Lorem' }
        ]
      }
    },
    global: {
      plugins: [i18n, store],
      directives: {
        maska
      }
    }
  });

  const input = wrapper.find('input');

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should match whit snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the component with the correct props', () => {
    expect(wrapper.props()).toEqual({
      type: 'text',
      label: 'test',
      name: 'test',
      modelValue: 'test',
      placeholder: 'test',
      required: true,
      disabled: false,
      customClass: ['test'],
      validationFunction: 'nifSpain',
      options: null,
      mask: 'AAAA',
      pattern: 'AAAA',
      validations: ['required', 'minLength:3', 'maxLength:5'],
      options: {
        select: 'test',
        translate: false,
        options: [
          { value: 'Test' },
          { value: 'Lorem' }
        ]
      }
    });
  });


  it('should change isFocus varible when input is focus after 100 miliseconds', done => {
    input.trigger('focus');
    expect(wrapper.vm.isFocus).toBe(false);
    setTimeout(() => {
      expect(wrapper.vm.isFocus).toBe(true);
      done();
    }, 101);
  });


  it('should errorMessage have a value', done => {
    input.trigger('blur');
    expect(wrapper.vm.isFocus).toBe(true);
    expect(wrapper.vm.errorMessage).toBeFalsy();
    setTimeout(() => {
      expect(wrapper.vm.isFocus).toBe(false);
      expect(wrapper.vm.errorMessage).toBeTruthy();
      done();
    }, 101);
  });

  it('should filteredValue has a value', async () => {
    await input.trigger('focus');
    await input.setValue('Lor');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    console.log(wrapper.vm.modelValue);
    console.log(wrapper.vm.filteredValues)
    expect(wrapper.vm.filteredValues).toBeTruthy();
  });




});
