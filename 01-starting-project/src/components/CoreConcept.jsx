import React from 'react'
import { CORE_CONCEPTS } from './data'
function CoreConcept(props) {
  return (
    <li>
<img src={props.image}
 alt="" />
<h3>{props.title}</h3>
<p>{props.description}</p>
    </li>
)}

export default CoreConcept