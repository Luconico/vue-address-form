import { getCleanFormValues } from '@/modules/forms/helpers/form-utils';


describe('Form utils - getCleanFormValues', () => {
    it('should return an empty object if the fields are not active', () => {
        const fields = {
            name: {
                active: false,
                value: 'John'
            },
            surname: {
                active: false,
                value: 'Doe'
            }
        };

        const result = getCleanFormValues(fields);

        expect(result).toEqual({});
    });

    it('should return an object with the active fields value', () => {
        const fields = {
            name: {
                active: true,
                value: 'John'
            },
            surname: {
                active: false,
                value: 'Doe'
            }
        };

        const result = getCleanFormValues(fields);

        expect(result).toEqual({ name: 'John' });
    });
});