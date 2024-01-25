import { useState, useEffect } from "react"; //react hooks 
import { BrowserRouter, Route, Routes } from "react-router-dom"; //nav handling
import "./App.css"; //import local CSS for styles

// importing the built components for use
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

// initializing state for isLoading to true and snacks to an empty array
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  // useEffect to fetch snacks from API when component mounts - setSnacks to snacks (array will no longer be empty) and isLoading to false - we call getSnacks() outside of the useEffect 
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  // if data takes minute to load we display msg6
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  // BrowserRouter to wrap app for client side routing - render the NavBar component - Routes to define routes and their corresponding components (Home SnackMenu Snack *(catch all) **need to add DrinkMenu and drink)
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} />} />
            <Route
              path="/snacks"
              element={<Menu snacks={snacks} title="Snacks" />}
            />
            <Route
              path="/snacks/:id"
              element={<Snack items={snacks} cantFind="/snacks" />}
            />
            <Route
              path="*"
              element={<p>Hmmm. I can't seem to find what you want.</p>}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

// export App for use elsewhere (index.js)
export default App;
