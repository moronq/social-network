import React, { FC, useState } from 'react'
import { ProfileType, ProfileTypeStatus } from '../models/profile'
import Button from './common/Button/Button'
import ProfileStatus from './ProfileStatus'

type PropsType = {
  profileInfo: ProfileType & ProfileTypeStatus
  userId: string
}

const ProfileInfo: FC<PropsType> = ({ profileInfo, userId }) => {
  const [details, setDetails] = useState(false)

  const showDetails = () => {
    setDetails(true)
  }
  const hideDetails = () => {
    setDetails(false)
  }
  return (
    <div className="border border-slate-300 grow flex flex-col rounded-lg p-2 bg-slate-100">
      <p className="text-xl">{profileInfo.fullName}</p>
      <ProfileStatus userId={userId} status={profileInfo.status} />
      {!details ? (
        <Button onClick={showDetails}>Show details</Button>
      ) : (
        <>
          <ul>
            <li>{profileInfo.aboutMe}</li>
            {profileInfo.lookingForAJob && <li>Looking for a job</li>}
            <li>{profileInfo.lookingForAJobDescription}</li>
          </ul>
          <Button onClick={hideDetails}>Hide</Button>
        </>
      )}
    </div>
  )
}

export default ProfileInfo
