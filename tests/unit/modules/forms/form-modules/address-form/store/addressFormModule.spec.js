import { createStore } from 'vuex';
import addressFormModule from '@/modules/forms/form-modules/address-form/store/index.js';

const createVuesStore = () => {
    return createStore({
        modules: {
            addressFormModule,
        },
    });
};

describe('AddressFormModule', () => {
    let store;
    beforeEach(() => {
        store = createVuesStore();
    });

    it('Initial state', () => {
        const { selectOptions, isValid, isFetching, addressForm, formValues } = store.state.addressFormModule;
        expect(selectOptions).toEqual([{}]);
        expect(isValid).toBe(false);
        expect(isFetching).toBe(false);
        expect(addressForm).toEqual({
            fields: {
                address: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                zipCode: {
                    value: '',
                    validations: ['required', 'minLength:5', 'maxLength:5'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                city: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                },
                province: {
                    value: '',
                    validations: [],
                    active: false,
                    valid: false,
                    type: 'select',
                    validationFunction: null,
                    mask: null,
                },
                moreInfo: {
                    value: '',
                    validations: [],
                    active: true,
                    valid: false,
                    type: 'textarea',
                    validationFunction: null,
                    mask: null,
                },
            }
        });
        expect(formValues).toEqual({ fields: {} });
    });

    // Mutations

    it('setIsValid', () => {
        store.commit('addressFormModule/setIsValid', { isValid: true, field: 'address' });
        expect(store.state.addressFormModule.addressForm.fields.address.valid).toBe(true);

        store.commit('addressFormModule/setIsValid', { isValid: false, field: 'zipCode' });
        expect(store.state.addressFormModule.addressForm.fields.zipCode.valid).toBe(false);

        expect(store.state.addressFormModule.isValid).toBe(false);

        store.commit('addressFormModule/setIsValid', { isValid: true, field: 'city' });
        expect(store.state.addressFormModule.addressForm.fields.city.valid).toBe(true);

        store.commit('addressFormModule/setIsValid', { isValid: true, field: 'zipCode' });
        expect(store.state.addressFormModule.addressForm.fields.zipCode.valid).toBe(true);

        store.commit('addressFormModule/setIsValid', { isValid: true, field: 'province' });
        expect(store.state.addressFormModule.addressForm.fields.province.valid).toBe(true);

        expect(store.state.addressFormModule.isValid).toBe(true);
    });

    it('setIsFetching', () => {
        store.commit('addressFormModule/setFetching', { isFetching: true });
        expect(store.state.addressFormModule.isFetching).toBe(true);
    });


});