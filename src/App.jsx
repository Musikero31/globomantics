//import { useCallback, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
//import navValues from "./navigation/navValues";
import { BrowserRouter, Route, Routes } from "react-router";
import HouseList from "./components/HouseList";
import House from "./components/House";

function App() {
  // const navigate = useCallback(
  //   (navTo, param) => setNav({current: navTo, param, navigate}),
  //   []
  // )
  // const [nav, setNav] = useState({current: navValues.home, navigate})

  return (
    /*
    <navigationContext.Provider value={nav}>
      <ErrorBoundary fallback="Something went wrong!">
        <Banner>
          <div>Providing houses all over the world!!!!</div>
        </Banner>
        <ComponentPicker currentNavLocation={nav.current}/>
      </ErrorBoundary>
    </navigationContext.Provider>
    */
    <BrowserRouter>
      <Banner>
        <div>Providing houses all over the world!!!!</div>
      </Banner>
      <Routes>
        <Route index element={<HouseList/>}/>
        <Route path="house/:id" element={<House/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
