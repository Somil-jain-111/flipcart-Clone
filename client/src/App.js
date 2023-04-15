import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/home/Home";
import { Box } from "@mui/material";
import DetailView from "./component/detailspage/detailview/DetailView";
import Cart from "./component/cart1/cart/Cart";

function App() {
  return (
    <div>
      <Header />

      <Box style={{ marginTop: "54px" }}></Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
