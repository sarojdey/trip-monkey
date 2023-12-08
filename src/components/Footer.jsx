import "../styles/footer.css";
const Footer = ({ totalItems, packedItems, list }) => {
  if (list.length > 0) {
    return (
      <div className="footer">
        <p>
          Total items in your list is {totalItems} and you have packed{" "}
          {packedItems}
        </p>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <p>Get packing!!</p>
      </div>
    );
  }
};

export default Footer;
