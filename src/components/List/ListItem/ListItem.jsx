import React from 'react'
import Button from '../../Button/Button'
import './style.scss'

export default function ListItem({ item, index, handleActivate, handleDelete }) {
	const { icon, type, active } = item

	return (
		<li key={index} className={active ? 'active' : ''}>{icon} {type}
			<Button handleClick={handleActivate} tittle={!active ? 'Activate' : 'Deactivate'} />
			<Button handleClick={handleDelete} tittle={'Delete'} />
		</li>
	);
}