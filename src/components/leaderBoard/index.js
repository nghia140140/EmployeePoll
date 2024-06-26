import { connect } from "react-redux";
import React from "react";
import "./leaderBoard.css";

const LeaderBoard = ({ userReducer }) => {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {userReducer?.map((user) => (
            <tr key={user?.id}>
              <td className="group-user">
                <div>
                  <div className="user-img">
                    <img src={user?.avatarURL}></img>
                  </div>
                  <div className="user-info">
                    <p className="username">{user?.name}</p>
                    <span>{user?.id}</span>
                  </div>
                </div>
              </td>
              <td>{Object.values(user?.answers)?.length}</td>
              <td>{user?.questions?.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  userReducer: Object.values(userReducer)
    ?.map((user) => user)
    ?.sort((a, b) => Object.values(b?.answers)?.length - Object.values(a?.answers)?.length),
});

export default connect(mapStateToProps)(LeaderBoard);
