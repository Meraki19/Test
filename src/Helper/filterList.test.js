
import { PAYMENTLIST_MOCK_NO_PENDING, PAYMENTLIST_MOCK_PENDING } from '../MockData/PaymentListFilter_Mock'
import { filterPaymenBytStatus } from './filterList';
require('jest-fetch-mock').enableMocks();

test('filter payment by status pending', () => {
    expect(filterPaymenBytStatus(PAYMENTLIST_MOCK_PENDING, 'P').length).toBe(1)
})

test('filter payment by status pending', () => {
    expect(filterPaymenBytStatus(PAYMENTLIST_MOCK_NO_PENDING, 'P').length).toBe(0)
})