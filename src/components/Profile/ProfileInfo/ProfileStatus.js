import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      props.setNewStatus(status);
      setStatus(props.status);
    }
  };
  const onStatusChange = e => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <div>
        <b>Status:</b>
        {editMode ? (
          <input
            onChange={onStatusChange}
            onBlur={changeEditMode}
            autoFocus
            type="text"
            value={status}
          />
        ) : (
          <span onDoubleClick={changeEditMode}>{status || '-----'}</span>
        )}
      </div>
    </div>
  );
};

export default ProfileStatusWithHooks;
