import React from 'react'

const Card = ({ data }) => {
	return (
		<>
			<div>Nombre: {data.userName}</div>
			<div>Dia favorito: {data.day}</div>
		</>
	)
}

export default Card
