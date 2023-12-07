import "./styles/App.css";
import Header from "./components/Header.JSX";
import Footer from "./components/Footer";
import Contents from "./components/Content";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState("");

  const handelAdd = () => {
    const newInfo = { quantity: quantity, item: item, packed: false };
    console.log(newInfo);
    console.log(list.concat(newInfo));
    setList(list.concat(newInfo));
 
  };
  const handleChangeQ = (e) => {
    const newInfo = e.target.value;
    console.log(newInfo);
    setQuantity(newInfo);
  };
  const handleChangeI = (e) => {
    const newInfo = e.target.value;
    console.log(newInfo);
    setItem(newInfo);
  };
  return (
    <>
      <div className="application">
        <Header />
        <Contents
          onAdd={handelAdd}
          valueQ={quantity}
          valueI={item}
          onInfoChange={handleChangeI}
          onQuantityChange={handleChangeQ}
          list={list}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
