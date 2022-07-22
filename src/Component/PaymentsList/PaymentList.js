
import React, { useEffect, useRef, useState } from "react";
import { Table, Button, Form, Alert } from 'react-bootstrap'
import useFetch from "../../CustomHooks/useFetch";
import { filterPaymenBytStatus } from "../../Helper/filterList"

import CustomSpinner from "../Spinner/Spinner";
import PaymentItem from '../PaymentItem/PaymentItem'


function PaymentList() {

    console.log('Display payment list component running..');
    const [location, setLocation] = useState(process.env.REACT_APP_BASEURL)
    const { resultData: paymentLists, metaData, loading, error } = useFetch(location);
    const [fullPaymentList, setFullPaymentList] = useState([]);
    const filterOn = useRef(false);

    useEffect(() => {
        setFullPaymentList(paymentLists)
        if (filterOn.current) {
            setFullPaymentList(filterPaymenBytStatus(paymentLists, 'P'))
            console.log(paymentLists)
        }
    }, [paymentLists])

    function loadMorePaymentListHandler() {
        setLocation(process.env.REACT_APP_BASEURL + "?pageIndex22=" + metaData.nextPageIndex);
    }

    function paymentStatusFilterHandler(e) {
        filterOn.current = e.target.checked
        //setting aria-checked attribute
        let checked = e.target.getAttribute('aria-checked') === "true"
        e.target.setAttribute("aria-checked", String(!checked));

        if (e.target.checked) {
            setFullPaymentList(filterPaymenBytStatus(fullPaymentList, 'P'))
        } else {
            setFullPaymentList(paymentLists)
        }
    }
    return (

        <div data-testid="paymentlist" className="payment-history-container">
            {error ? <Alert variant="danger" className="mt-4 text-center" >
                <Alert.Heading >Something went wrong !!</Alert.Heading>
            </Alert> :
                <div data-testid="paymentlist" className="payment-list-container">
                    <h3 className="my-3 text-uppercase">Payment History</h3>
                    <div className="mb-3 filter-section">
                        <h5>Filter by:</h5>
                        <Form.Check tabIndex="1" aria-checked="false" role="switch"
                         aria-labelledby="status" type="switch" id="custom-switch" 
                         label="Status" onClick={paymentStatusFilterHandler} />
                    </div>
                    {loading ? (<CustomSpinner loadingtext="Getting payment info" />) :

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
                                {fullPaymentList.map((paymentitem, i) => {
                                    return <PaymentItem key={i} paymentitem={paymentitem} />
                                })
                                }
                            </tbody>
                        </Table>
                    }
                    <Button data-testid="loadmorebtn"
                        tabIndex="3" disabled={!metaData.hasMoreElements}
                        onClick={loadMorePaymentListHandler}>Load more</Button>
                </div>
            }
        </div>
    )
}
export default PaymentList;