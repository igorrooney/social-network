import React, { Component } from 'react';
import { runInThisContext } from 'vm';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  setEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
    if (this.state.editMode) {
      this.props.setNewStatus(this.state.status);
    }
  };

  onStatusChange = e => {
    this.setState({ status: e.target.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.state.editMode ? (
            <input
              onBlur={this.setEditMode}
              onChange={this.onStatusChange}
              autoFocus
              type="text"
              value={this.state.status}
            />
          ) : (
            <span onDoubleClick={this.setEditMode}>
              {this.props.status || '-----'}
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
