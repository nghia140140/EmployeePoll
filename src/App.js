import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/login";
import Home from "./components/home";
import LeaderBoard from "./components/leaderBoard";
import New from "./components/new";
import Menu from "./components/menu";
import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getQuestions, getUsers } from "./redux/middleware/thunk";
import QuestionDetail from "./components/detailQuestion";
import Protected from "./components/protected";

function App({ authReducer }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getQuestions());
  }, []);

  return (
    <div>
      {!!authReducer && <Menu />}
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/question/:id"
          element={
            <Protected>
              <QuestionDetail />
            </Protected>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <Protected>
              <LeaderBoard />
            </Protected>
          }
        />
        <Route
          path="/add"
          element={
            <Protected>
              <New />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authReducer }) => ({
  authReducer: authReducer,
});

export default connect(mapStateToProps)(App);
