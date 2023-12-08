import "./styles/App.css";
import Header from "./components/Header.JSX";
import Footer from "./components/Footer";
import Contents from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [quantity, setQuantity] = useState();
  const [item, setItem] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [packedItems, setPackedItems] = useState(0);
  const [sortOption, setSortOption] = useState("option1");

  const handleSortOptionChange = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
  };

  useEffect(() => {
    handleSort();
  }, [totalItems]);
  useEffect(() => {
    handleSort();
  }, [sortOption]);

  const handleSort = () => {
    let sortedList = [...list];

    switch (sortOption) {
      case "option1":
        sortedList.sort((a, b) => a.time - b.time);
        break;
      case "option2":
        sortedList.sort((a, b) => {
          return a.item.localeCompare(b.item);
        });
        break;
      case "option3":
        sortedList.sort((a, b) =>
          a.packed === b.packed ? 0 : a.packed ? -1 : 1
        );
        break;
      default:
        break;
    }

    console.log(sortedList);
    setList(sortedList);
  };

  const handleDelete = () => {
    setList([]);

    setTotalItems(0);
    setPackedItems(0);
  };
  const handelAdd = () => {
    const newInfo = {
      quantity: quantity,
      item: item,
      packed: false,
      time: new Date(),
    };
    console.log(newInfo);
    console.log(list.concat(newInfo));
    setList(list.concat(newInfo));

    setQuantity(0);
    setItem("");
    setTotalItems(totalItems + 1);
  };

  const handleChecked = (index) => {
    const newList = [...list];
    newList[index].packed = !newList[index].packed;
    console.log(newList);
    setList(newList);
    setPackedItems(newList.filter((item) => item.packed).length);
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
          handleDelete={handleDelete}
          handleChecked={handleChecked}
          handleSortOptionChange={handleSortOptionChange}
          sortOption={sortOption}
        />
        <Footer totalItems={totalItems} packedItems={packedItems} list={list} />
      </div>
    </>
  );
}

export default App;
