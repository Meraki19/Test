
# Payment History Application

The application is meant to display the payment history details of a customer.This is a sample project.



## Features

- Displays list of payment history on page load
- Load more option provided using a button to load previous payment history details
- Filter functionality if kept on displays pending payments
- Responsive with all devices (table responsive without horizontal scroll or view chaned)



## Tech Stack

**Client:** React, React Bootstrap




## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd Test
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get data on intial load

```http
  GET /api/payments
```

#### Pagination

```http
  GET /api/payments?pageIndex=
```

| Query Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `pageIndex`| `string` | **Required** to fetch load more data |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASEURL`



## Running Tests

To run tests, run the following command

```bash
  npm run test
```

