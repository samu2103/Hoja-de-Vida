import { Photo } from './components/atoms/Photo';
import './styles/app.css';
import myPhoto from './assets/photo.jpeg';
import { EmailIcon } from './components/atoms/EmailIcon';
import { HomeIcon } from './components/atoms/HomeIcon';
import { PhoneIcon } from './components/atoms/PhoneIcon';
import { UniversityIcon } from './components/atoms/UniversityIcon';

function App() {
	return (
		<div className="app">
			<div className="container">
				<div className="flex flex-row my_info_container">
					<Photo image={myPhoto} />
					<div className="flex flex-col flex-1">
						<h1 className="title">Samuel Escobar</h1>
						<p className="subtitle">
							Estudiante de ingeniería de Desarrollo de Software
						</p>
					</div>
				</div>

				<div className="about_me_container">
					<h2 className="title">Sobre mi</h2>
					<p className="subtitle">
						Como una persona comprometida, me considero con una gran
						capacitacion para incursionar en nuevos proyectos aplicando una
						buena actitud positiva y con la habilidad de fluir en un entorno
						colaborativo aplicando el compañerismo.
					</p>

					<div className="flex">
						<div className="flex flex-1 flex-center gap-0_5">
							<UniversityIcon />
							<p>Universidad Politecnica de Chiapas</p>
						</div>
						<div className="flex flex-1 flex-center gap-0_5">
							<EmailIcon />
							<p>samuelalbertoesc123@gmail.com</p>
						</div>
						<div className="flex flex-1 flex-center gap-0_5">
							<PhoneIcon />
							<p>965 106 26 34</p>
						</div>
						<div className="flex flex-1 flex-center gap-0_5">
							<HomeIcon />
							<p>2 Av. Sur 5 - 6 Poniente, Villaflores de Chiapas</p>
						</div>
					</div>
				</div>

				<div className="flex flex-row padding-bottom-5">
					<div className="flex-1">
						<h2 className="title">Tecnologías</h2>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>Java</li>
							<li>C++</li>
							<li>Figma</li>
							<li>MySQL</li>
						</ul>
					</div>
					<div className="flex-1">
						<h2 className="title">Estudios</h2>
						<p>
							<strong>Primaria: </strong>
							Jose vasconcelos Calderon
						</p>
						<p>
							<strong>Secundaria: </strong>
							Escuela secundaria Emilio Rabasa Estebanell
						</p>
						<p>
							<strong>Preparatoria: </strong>
							Escuela preparatoria villaflores
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
