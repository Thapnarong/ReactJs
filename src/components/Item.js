import PropTypes from "prop-types";
import "./Item.css";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <li className={status}>
      {title}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount).toFixed(2))}
      </span>
    </li>
  );
};

//กำหนด title เป็น string และ amount เป็น number
//.isRequired ต้องใส่ค่าให้ property
Item.protoType = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
