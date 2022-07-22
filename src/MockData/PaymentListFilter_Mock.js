 const PAYMENTLIST_MOCK_PENDING=[{
    paymentAmount: "120.00",
    paymentCurrency: "GBP",
    paymentType: "CHAPS",
    paymentDate: "15-Jun-2020",
    paymentStatus: "W", // ( A=Approved, C=Cancelled, P=Pending Approval)
    toAccount: {
    accountName: "",
    sortCode: "341234",
    accountNumber: "125365",
    },
    fromAccount: {
    accountName: "",
    sortCode: "341234",
    accountNumber: "125365",
    },
    },
    {
        paymentAmount: "120.00",
        paymentCurrency: "GBP",
        paymentType: "CHAPS",
        paymentDate: "15-Jun-2020",
        paymentStatus: "P", // ( A=Approved, C=Cancelled, P=Pending Approval)
        toAccount: {
        accountName: "",
        sortCode: "341234",
        accountNumber: "125365",
        },
        fromAccount: {
        accountName: "",
        sortCode: "341234",
        accountNumber: "125365",
        },
        },
]

 const PAYMENTLIST_MOCK_NO_PENDING=[{
    paymentAmount: "120.00",
    paymentCurrency: "GBP",
    paymentType: "CHAPS",
    paymentDate: "15-Jun-2020",
    paymentStatus: "W", // ( A=Approved, C=Cancelled, P=Pending Approval)
    toAccount: {
    accountName: "",
    sortCode: "341234",
    accountNumber: "125365",
    },
    fromAccount: {
    accountName: "",
    sortCode: "341234",
    accountNumber: "125365",
    },
    },
    {
        paymentAmount: "120.00",
        paymentCurrency: "GBP",
        paymentType: "CHAPS",
        paymentDate: "15-Jun-2020",
        paymentStatus: "W", // ( A=Approved, C=Cancelled, P=Pending Approval)
        toAccount: {
        accountName: "",
        sortCode: "341234",
        accountNumber: "125365",
        },
        fromAccount: {
        accountName: "",
        sortCode: "341234",
        accountNumber: "125365",
        },
        },
]

export {PAYMENTLIST_MOCK_PENDING,PAYMENTLIST_MOCK_NO_PENDING}

