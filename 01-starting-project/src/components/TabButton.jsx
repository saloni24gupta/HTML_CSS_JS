import React from 'react'

function TabButton({children, onSelect}) {
  console.log('tab button executing') 
  return (
 <li><button onClick={onSelect}>{children}</button></li>
  )
}

export default TabButton