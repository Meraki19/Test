import React from 'react'
const PaymentItem = (props) => {
    return (
        <tr >
            <td>
                {props.paymentitem.paymentDate}
            </td>
            <td>
                &#163;  {props.paymentitem.paymentAmount}
            </td>
            <td>
                {props.paymentitem.paymentType}
            </td>
            <td className={props.paymentitem.paymentStatus === 'C' ? 'text-danger' : 'text-body' &&
                props.paymentitem.paymentStatus === 'A' ? 'text-success' : 'text-body'}>
                {
                    props.paymentitem.paymentStatus === 'P' && 'Pending' ||
                    props.paymentitem.paymentStatus === 'A' && 'Approved' ||
                    props.paymentitem.paymentStatus === 'C' && 'Cancelled'
                }
            </td>
            <td>
                <p>{props.paymentitem.toAccaunt.accountName}</p>
                <p>{props.paymentitem.toAccaunt.sortCode}</p>
                <p>{props.paymentitem.toAccaunt.accountNumber}</p>
            </td>
            <td>
                <p>{props.paymentitem.fromAccount.accountName}</p>
                <p>{props.paymentitem.fromAccount.sortCode}</p>
                <p>{props.paymentitem.fromAccount.accountNumber}</p>
            </td>
        </tr>
    )
}
export default PaymentItem;