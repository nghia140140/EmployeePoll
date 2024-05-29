import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children, authReducer }) => {
  console.log("authReducer", authReducer);
  return !authReducer ? <Navigate to="/" replace /> : children;
};

const mapStateToProps = ({ authReducer }) => ({
  authReducer: authReducer,
});

export default connect(mapStateToProps)(Protected);
