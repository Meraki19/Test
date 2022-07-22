import { render,fireEvent } from "@testing-library/react";
import PaymentList from './PaymentList';


describe(PaymentList,()=>{

    test('shoudl render PaymentList component', () => {
        let { getByTestId } = render(<PaymentList />)
        expect(getByTestId('paymentlist')).toBeInTheDocument
    })

    //Payment status filter
    test('check when page loads filter switch is off ',()=>{
        let { getByRole } = render(<PaymentList />)
        let checkbox=getByRole('switch')
        expect(checkbox.checked).toEqual(false);
    })
    test('check if swithc is toggled to on and off',()=>{
        const {getByRole} = render(<PaymentList />)
        const checkbox = getByRole('switch');
        fireEvent.click(checkbox)      
        expect(checkbox.checked).toEqual(true);
        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(false);
    })

    //load more button
    test('check if button is enabled on initial load', ()=> {
        const {getByTestId} = render(<PaymentList />)
        const loadBtn = getByTestId('loadmorebtn');
        fireEvent.click(loadBtn,{disabled:false})
        expect(loadBtn).toBeEnabled 
    })
    test('check if button is not enabled when no more data to view', ()=> {
        const {getByTestId} = render(<PaymentList />)
        const loadBtn = getByTestId('loadmorebtn');
        fireEvent.click(loadBtn,{disabled:true})
        expect(loadBtn).not.toBeEnabled 
    })

})