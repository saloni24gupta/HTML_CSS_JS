import React from 'react'

function NewProject() {
  return (
    <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <p><label htmlFor="">Title</label>
            <input type="text" />
            </p>
        </div>
        <div>
            <p><label htmlFor="">Description</label>
            <input type="text" />
            </p>
        </div>
        <div>
            <p><label htmlFor="">Due Date</label>
            <input type="text" />
            </p>
        </div>
    </div>

  )
}

export default NewProject