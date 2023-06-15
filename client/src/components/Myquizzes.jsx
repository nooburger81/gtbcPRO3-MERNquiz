import React from 'react'
import { Link } from 'react-scroll'

const Myquizzes = () => {
  return (
    <div>
        Myquizzes
        <button>
            <Link to='page' smooth={true} duration={500}>
                Click
                </Link>
                </button>
    </div>
  )
}

export default Myquizzes