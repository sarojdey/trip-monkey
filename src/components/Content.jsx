import CheckboxLabels from "./CheckboxLabels";
import "../styles/content.css";

const Contents = ({
  onAdd,
  valueQ,
  valueI,
  onInfoChange,
  onQuantityChange,
  list,
  handleDelete,
  handleChecked,
  handleSortOptionChange,
  sortOption,
}) => {
  return (
    <div className="content">
      <div className="form">
        <p>What do you need for your trip?</p>
        <input
          type="number"
          placeholder="Quantity"
          min="0"
          value={valueQ}
          onChange={onQuantityChange}
        />
        <input
          type="text"
          placeholder="Item name"
          value={valueI}
          onChange={onInfoChange}
        />
        <button onClick={onAdd}>Add</button>
      </div>
      <div className="list">
        <CheckboxLabels
          list={list}
          handleDelete={handleDelete}
          handleChecked={handleChecked}
          handleSortOptionChange={handleSortOptionChange}
          sortOption={sortOption}
        />
      </div>
    </div>
  );
};

export default Contents;
