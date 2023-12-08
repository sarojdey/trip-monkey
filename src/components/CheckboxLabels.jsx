import "../styles/checkbox.css";

const CheckboxLabels = ({
  list,
  handleDelete,
  handleChecked,
  handleSortOptionChange,
  sortOption,
}) => {
  return (
    <>
      <div className="container">
        <div>
          <div className="filter">
            <label htmlFor="sortBy">Sort by:</label>
            <select
              id="sortBy"
              name="sortBy"
              onChange={handleSortOptionChange}
              value={sortOption}
            >
              <option value="option1">Input time</option>
              <option value="option2">Item Name</option>
              <option value="option3">Packing Status</option>
            </select>

            <button onClick={handleDelete}>Delete</button>
          </div>
          <div className="scrollbar" id="scrollbar6">
            <div>
              <p>Your list:</p>
            </div>
            {list.map((i, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={`checkbox-${index}`}
                    value={i.item}
                    checked={i.packed}
                    onChange={() => handleChecked(index)}
                  />
                  <label htmlFor={`checkbox-${index}`}>
                    {i.quantity}x {i.item}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxLabels;
