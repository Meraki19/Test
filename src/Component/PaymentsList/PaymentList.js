
import React, { useEffect, useRef, useState } from "react";

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PaymentItem from '../PaymentItem/PaymentItem'

import useFetch from "../../CustomHooks/useFetch";
import {filterPaymenBytStatus} from "../../Helper/filterList"

function PaymentList() {
    
    console.log('Display payment list component running..');
    const [location, setLocation] = useState(process.env.REACT_APP_BASEURL)
    const {resultData: paymentLists, metaData, loading, error } = useFetch(location);
    const [fullPaymentList, setFullPaymentList] = useState([]);
    const filterOn = useRef(false);

    useEffect(() => {
        setFullPaymentList(paymentLists)
        if (filterOn.current) {
            setFullPaymentList(filterPaymenBytStatus(paymentLists,'P'))
            console.log(paymentLists)
        }
    }, [paymentLists])

    function loadMorePaymentListHandler() {
        setLocation(process.env.REACT_APP_BASEURL+"?pageIndex=" + metaData.nextPageIndex);
    }

    function paymentStatusFilterHandler(e) {
        filterOn.current = e.target.checked
        //setting aria-checked attribute
        let checked=e.target.getAttribute('aria-checked')==="true"
        e.target.setAttribute("aria-checked", String(!checked));

        if (e.target.checked) {
            setFullPaymentList(filterPaymenBytStatus(fullPaymentList,'P'))
        } else {
            setFullPaymentList(paymentLists)
        }
    }
    return (
        <div data-testid="paymentlist" className="payment-history-list">
            <h3 className="my-3 text-uppercase">Payment History</h3>
            {!error && <div className="mb-3 filter-section">
                <h5>Filter by:</h5>
                <Form.Check tabIndex="1" aria-checked="false" role="switch" aria-labelledby="status"
                    type="switch" id="custom-switch" label="Status" onClick={paymentStatusFilterHandler} />
            </div>}
            {loading ? (<span>Getting payment info ..</span>) :
                <Table hover variant="light" tabIndex="2">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>To </th>
                            <th>From </th>
                        </tr>
                    </thead>
                    <tbody>
                        {fullPaymentList.map((paymentitem,i) => {
                            return <PaymentItem key={i} paymentitem={paymentitem} />
                        })
                        }
                    </tbody>
                </Table>
            }
            {!error && <Button data-testid="loadmorebtn"
                tabIndex="3" disabled={!metaData.hasMoreElements}
                onClick={loadMorePaymentListHandler}>Load more</Button>}
        </div>
    )
}
export default PaymentList;