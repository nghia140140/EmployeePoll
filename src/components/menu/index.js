import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/auth";
import "./menu.css";

const Menu = ({ authReducer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <nav className="menu">
      <div>
        <Link to="/home" className="item">
          <span className="link-item">Home</span>
        </Link>
        <Link to="/leader-board" className="item">
          <span className="link-item">Leaderboard</span>
        </Link>
        <Link to="/new" className="item">
          <span className="link-item">New</span>
        </Link>
      </div>
      <div className="group-user-nav">
        <img className="avatar-img" src={authReducer?.avatarURL} />
        <span className="id-user">{authReducer?.id}</span>
        <button onClick={handleLogout} className="">
          Logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authReducer }) => ({
  authReducer: authReducer,
});

export default connect(mapStateToProps)(Menu);
