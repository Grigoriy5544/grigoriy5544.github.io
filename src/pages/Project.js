import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects } from '../helpers/projectsList'

const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>
					<a href={project.url} target='_blank' rel='noreferrer'>
						<img
							src={project.imgBig}
							alt={project.title}
							className='project-details__cover'
						/>
					</a>

					<div className='project-details__skills'>
						<p>{project.skills}</p>
					</div>

					{project?.description && (
						<div className='project-details__desc'>
							<p>{project.description}</p>
						</div>
					)}

					{project.gitHubLink && <BtnGitHub gitHubLink={project.gitHubLink} />}
				</div>
			</div>
		</main>
	)
}

export default Project
