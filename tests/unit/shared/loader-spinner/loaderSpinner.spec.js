import LoaderSpinner from '@/shared/loader-spinner/LoaderSpinner.vue';
import { shallowMount } from '@vue/test-utils';

describe('LoaderSpinner.vue', () => {

    const wrapper = shallowMount(LoaderSpinner, {
        props: {
            size: '20px',
            color: 'red'
        }
    });
  it('Should match whit snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should props size and color', () => {
    expect(wrapper.props()).toEqual({
        size: '20px',
        color: 'red'
    });
  });

});