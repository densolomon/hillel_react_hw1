import React from 'react'
import { animals } from './data/mockData'
import List from "./components/List/List";

export default function App() {
	return (
		<>
			<List list={animals} />
		</>
	)
}