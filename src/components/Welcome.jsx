import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div>
            <Link to='/game'>Start New Game</Link>
        </div>
    )
}
