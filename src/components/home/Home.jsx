import { useState } from 'react';

// ESTO SI ES BUENA PRACTICA
const Home = () => {
	// Desde la libreria recomiendan poner todo aquello que podemos modificar en un useState por separado.
	const [mensaje, setMensaje] = useState('Hola Mundo');
	const [numero, setNumero] = useState(3);
	const [nombres, setNombres] = useState(['luis']);

	const handleClick = () => {
		// Automáticamente me cambia el número pero el mensaje me lo deja intacto
		setNumero(5);
	};

	const addName = () => {
		// setNombres([...nombres, 'rocio'])
		setNombres([...nombres, 'rocio']);
	};

	return (
		<>
			<h2>useState Example</h2>

			<p>{mensaje}</p>
			<p>{numero}</p>

			<button onClick={handleClick}>Pulsa</button>

			<button onClick={addName}>Agregar nombre</button>
			<ul>
				{nombres.map(nombre => (
					// hay un fallo por la key pero no hay problema para el ejemplo
					<li>{nombre}</li>
				))}
			</ul>
		</>
	);
};

// ESTO NO ES BUENA PRACTICA
// const Home = () => {

//     // mensaje -> valor actual
//     // setMensaje -> cambia el valor de mensaje y vuevle a renderizar
//     // const [mensaje, setMensaje] = useState('Hola Mundo');

//     // Aquí estamos almacendo un objeto con 2 propiedades, mensaje y numero
//     const [state, setState] = useState({ mensaje: 'Hola Mundo', numero: 3});

//     const HandleClick = () => {
//         // Me borra el mensaje y sólo me deja la propiedad número ya que como sólo he puesto
//         // número, cuando renderiza sólo coge lo que yo le he puesto aqui.
//         setState({ numero: 5 });

//         // Para que salga todo tendría que hacer algo así, recuperar el mensaje y poner el nuevo número.
//         setState({mensaje: state.mensaje,
//                    numero: 5 });
//     };

//     return (
//         <>
//             <h2>useState Example</h2>
//             {/* <p>{mensaje}</p> -> Devuelve por pantalla 'Hola Mundo */}

//             {/* Accedo a las propiedades mensaje y numero */}
//             <p>{state.mensaje}</p>
//             <p>{state.numero}</p>

//             <button onClick={HandleClick}>Pulsa</button>
//         </>
//     );
// };

export default Home;
