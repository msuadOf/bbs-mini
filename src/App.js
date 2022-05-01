import {Route, Routes, useRoutes} from 'react-router-dom'
import './App.css';
import {routes_list} from "./routes/route-list";
import Index from "./pages/Index";
import SignInSide from "./pages/SignInSlider";

function App() {

    return (


                useRoutes(routes_list)


    )
}

export default App;
