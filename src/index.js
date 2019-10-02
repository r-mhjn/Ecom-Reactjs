import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./styles/products.scss";
import "./styles/login.scss";
import "./styles/cart.scss";
import 'react-tabs/style/react-tabs.scss';
import './styles/tabs.scss'

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
