import { connect } from "react-redux";
import React from "react";
import "./leaderBoard.css";

const LeaderBoard = ({ userReducer }) => {
  return (
    <div className="container">
      <table>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
        {userReducer?.map((user) => (
          <tr>
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
      </table>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  userReducer: Object.values(userReducer)?.map((user) => user),
});

export default connect(mapStateToProps)(LeaderBoard);
