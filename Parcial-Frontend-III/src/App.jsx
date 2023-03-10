import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'

function App() {
	const [data, setData] = useState({
		userName: '',
		day: '',
	})
	const [validData, setValidData] = useState(false)
	const [showErrorMsg, setShowErrorMsg] = useState(false)

	const submitHandler = (e) => {
		e.preventDefault()
		if (
			data.userName.length >= 3 &&
			data.userName === data.userName.trim() &&
			data.day.length >= 6
		) {
			setValidData(true)
			setShowErrorMsg(false)
		} else {
			setValidData(false)
			setShowErrorMsg(true)
		}
	}

	const onChangeHandler = (e, prop) => {
		setValidData(false)
		setData({ ...data, [prop]: e.target.value })
	}

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					onChange={(e) => onChangeHandler(e, 'userName')}
					placeholder="Escribe tu nombre"
				/>
				<input
					type="text"
					onChange={(e) => onChangeHandler(e, 'day')}
					placeholder="Escribe tu dia favorito"
				/>
				<button type="submit">Enviar</button>
			</form>
			{showErrorMsg && (
				<div>Por favor chequea que la información sea correcta</div>
			)}
			{validData && <Card data={data} />}
		</>
	)
}

export default App
