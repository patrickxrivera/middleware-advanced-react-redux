import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users.js';

const userListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
};

const cardStyle = {
  width: '30%',
  minWidth: '300px'
};

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div style={cardStyle} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Cheesecake Factor</p>
        <a className="btn btn-primary" href="#">
          Website
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={userListStyle} className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
