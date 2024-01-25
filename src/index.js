import ReactDOM from "react-dom"; //renders react elements in DOM
import "./index.css"; //import local CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap for CSS styling
import App from "./App"; //import main component
import * as serviceWorker from "./serviceWorker"; //manages progressive web app features

// render the app in the DOM - common pattern
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
