import React, {useState} from 'react'
import ListItem from './ListItem/ListItem'

export default function List({list: startList = []}) {
	const [list, setList] = useState(startList);

	const handleActivate = (index) => {
		setList((prevState) =>
			prevState.map((item, indexPrev) => {
				if (indexPrev === index) {
					item.active = item.active ? false : true;
				}
				return item;
			})
		)
	};

	const handleDelete = (index) => {
		setList((prevState) => prevState.filter((item, indexPrev) => indexPrev !== index))
	}

	return list.length ? (
		<ul>
			{list.map((item, index) => (
				<ListItem
					item={item}
					index={index}
					handleActivate={() => handleActivate(index)}
					handleDelete={() => handleDelete(index)}
				/>
			))}
		</ul>
	) : null;
}