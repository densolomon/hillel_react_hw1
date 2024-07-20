import React from 'react'

export default function Button({ tittle, handleClick }) {
	return <button onClick={handleClick}>{tittle}</button>
}