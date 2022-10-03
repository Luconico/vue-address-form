
import { shallowMount } from '@vue/test-utils';
import { config } from "@vue/test-utils"
config.global.mocks = {
  $t: (msg) => msg
}
import InputBuilder from '@/modules/forms/input-builder/InputBuilder.vue';

describe('InputBuilder.vue', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(InputBuilder);
    });

    it('renders props when passed', () => {
    });
});
