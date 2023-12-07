import "./checkbox.css";

const CheckboxLabels = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="filter">
            <input type="text" placeholder="Sort by" />
            <button>Delet item</button>
          </div>
          <div className="scrollbar" id="scrollbar6">
            <div>
              <p>Your list:</p>
            </div>
            {/* <div>
              <input type="checkbox" id="" name="" value="Bike" />
              <label for=""> I have a bike</label>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxLabels;
