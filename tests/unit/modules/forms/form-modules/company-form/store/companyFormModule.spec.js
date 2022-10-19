import { createStore } from 'vuex';
import companyFormModule from '@/modules/forms/form-modules/company-form/store/index.js';

const createVuesStore = () => {
    return createStore({
        modules: {
            companyFormModule,
        },
    });
};

describe('CompanyFormModule', () => {
    let store;
    beforeEach(() => {
        store = createVuesStore();
    });

    it('Initial state', () => {
        const { selectOptions, isValid, fetching, companyForm, formValues } = store.state.companyFormModule;
        expect(selectOptions).toEqual([{}]);
        expect(isValid).toBe(false);
        expect(fetching).toBe(false);
        expect(companyForm).toEqual({
            fields: {
                companyName: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                    pattern: null,
                },
                cif: {
                    value: '',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: 'nifSpain',
                    mask: 'XXXXXXXX-A*',
                    pattern: '########A',
                }
            }
        });
        expect(formValues).toEqual({ fields: {} });
    });

    // Mutations

    it('setIsValid', () => {
        store.commit('companyFormModule/setIsValid', { isValid: true, field: 'companyName' });
        expect(store.state.companyFormModule.companyForm.fields.companyName.valid).toBe(true);

        store.commit('companyFormModule/setIsValid', { isValid: false, field: 'cif' });
        expect(store.state.companyFormModule.companyForm.fields.cif.valid).toBe(false);

        expect(store.state.companyFormModule.isValid).toBe(false);

        store.commit('companyFormModule/setIsValid', { isValid: true, field: 'cif' });
        expect(store.state.companyFormModule.companyForm.fields.cif.valid).toBe(true);

        expect(store.state.companyFormModule.isValid).toBe(true);
    });


    it('setFormValues', () => {
        store.commit('companyFormModule/setFormValues');
        expect(store.state.companyFormModule.formValues).toEqual({
            fields: {
                companyName: '',
                cif: '',
            }
        });
    });

    it('setForm', () => {
        const newForm = {
            fields: {
                companyName: {
                    value: 'new value',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: null,
                    mask: null,
                    pattern: null,
                },
                cif: {
                    value: 'new value',
                    validations: ['required'],
                    active: true,
                    valid: false,
                    type: 'text',
                    validationFunction: 'nifSpain',
                    mask: 'XXXXXXXX-A*',
                    pattern: '########A',
                }
            }
        };
        store.commit('companyFormModule/setForm', { companyForm: newForm });
        expect(store.state.companyFormModule.companyForm).toEqual(newForm);
    });

    // Getters

    it('formValues', () => {
        expect(store.getters['companyFormModule/formValues']).toEqual({ fields: {} });
    });

    it('isValid', () => {
        expect(store.getters['companyFormModule/isValid']).toBe(false);

        store.commit('companyFormModule/setIsValid', { isValid: true, field: 'cif' });
        expect(store.state.companyFormModule.companyForm.fields.cif.valid).toBe(true);

        expect(store.getters['companyFormModule/isValid']).toBe(false);

        store.commit('companyFormModule/setIsValid', { isValid: true, field: 'companyName' });
        expect(store.state.companyFormModule.companyForm.fields.companyName.valid).toBe(true);

        expect(store.getters['companyFormModule/isValid']).toBe(true);
    });


    // Actions

    it('submitForm', async () => {
        const payload = {
            fields: {
                companyName: '',
                cif: '',
            }
        };
        await store.dispatch('companyFormModule/submit');
        expect(store.state.companyFormModule.formValues).toEqual(payload);
    });
    

});