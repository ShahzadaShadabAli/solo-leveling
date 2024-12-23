import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout";
import Home from "./Home";
import "./bootstrap.min.css"
import Login, { handleLoginSubmit } from "./authentication/Login";
import SignUp, { handleRegisterSubmit } from "./authentication/SignUp";
import BasicText from "./BasicText";
import Dashboard from "./dashboard/Dashboard";
import Main from "./dashboard/fight/Main";
import Start from "./Start";
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route element={<Start />}>
     <Route element={<Layout />}>
      <Route element={<Home />}>
      <Route path="/" element={<BasicText />} />
        <Route path="login" action={handleLoginSubmit} element={<Login />}/>
        <Route path="signup" action={handleRegisterSubmit} element={<SignUp />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Route>
      <Route path="/fight/:stage" element={<Main />}/>
   </Route>
  )
)

function App() {
  return (    
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
