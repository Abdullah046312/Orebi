import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop/Shop";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element= {<Home />}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
  </Route>
))

function App() {
  

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
