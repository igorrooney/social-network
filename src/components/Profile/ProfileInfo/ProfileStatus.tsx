import React, { useState, useEffect, FC, ChangeEvent } from 'react'

type PropsType = {
  status: string
  isOwner: boolean
  setNewStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: FC<PropsType> = ({ status, isOwner, setNewStatus }) => {
  const [editMode, setEditMode] = useState(false)
  const [currentStatus, setCurrentStatus] = useState(status)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setCurrentStatus(status)
  }, [status])

  const changeEditMode = async () => {
    if (isOwner) {
      setEditMode(prev => !prev)
      if (editMode) {
        setIsLoading(true)
        await setNewStatus(currentStatus)
        setCurrentStatus(status)
        setIsLoading(false)
      }
    }

  }
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(e.target.value)
  }

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
            value={currentStatus}
          />
        ) : (
           isLoading ? <span>Loading...</span> : <span onDoubleClick={changeEditMode}>{currentStatus}</span>
        )}
      </div>
    </div>
  )
}

export default ProfileStatusWithHooks
