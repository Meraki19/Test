import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

/*Component imports */
import PaymentList from "./Component/PaymentsList/PaymentList";

/*Component imports */
const App = () => {

  return (
  <div className="container"><PaymentList/>
 </div>)
};

export default App;
