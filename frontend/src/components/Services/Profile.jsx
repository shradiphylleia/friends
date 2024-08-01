import React from 'react'

function Profile({className,username,occupation,location}) {
  return (
    <>
    <div className={className}>
    <div className="profile">    
    </div>
    <h2 className='username'>{username}</h2>
    <h2 className='occupation'>{occupation}</h2>
    <h3>{location}</h3>
    </div>
    </>
  )
}

export default Profile
