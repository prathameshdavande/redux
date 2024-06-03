import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// function BalanceDisplay() {
//   const balance = useSelector((store) => store.account.balance);
//   return <div className="balance">{formatCurrency(balance)}</div>;
// }

// old way of connecting redux to components using connect API
function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);