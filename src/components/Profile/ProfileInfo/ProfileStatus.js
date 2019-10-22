import React, { Component } from 'react';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: ''
  };

  componentDidMount() {
    this.setState({ status: this.props.status });
  }

  setEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
    if (this.state.editMode) {
      //this.props.setNewStatus(this.state.status, this.props.userId);
    }
  };

  onChangeStatus = e => {
    this.setState({ status: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.editMode ? (
            <input
              onBlur={this.setEditMode}
              onChange={this.onChangeStatus}
              autoFocus
              type="text"
              value={this.state.status}
            />
          ) : (
            <span onDoubleClick={this.setEditMode}>{this.props.status}</span>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
