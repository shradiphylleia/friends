import React from 'react'
import Explore from './Explore'
import './explore.css'
import Sidebar from './Sidebar'


function ExplorePage() {
  return (
    <>
    <div className="ExploreMenu">
    <Sidebar/>
    <Explore/>
    </div>
    </>
  )
}

export default ExplorePage