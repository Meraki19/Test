function filterPaymenBytStatus(data,status) {
    if (data != undefined) {
        return data.filter(item => item.paymentStatus === status);
    }
}

export { filterPaymenBytStatus }