import musicology from './../img/projects/Musicology.jpg'
import musicologyBig from './../img/projects/Musicology-big.jpg'
import cryptoSever from './../img/projects/crypto-sever.jpg'
import cryptoSeverBig from './../img/projects/crypto-sever-big.jpg'
import psychoArt from './../img/projects/psychoArt.jpg'
import psychoArtBig from './../img/projects/psychoArt-big.jpg'
import cyberpunk from './../img/projects/cyberpunk.jpg'
import cyberpunkBig from './../img/projects/cyberpunk-big.jpg'
import steamLibrary from './../img/projects/steam-library.jpg'
import steamLibraryBig from './../img/projects/steam-library-big.jpg'

const projects = [
	{
		title: 'PsychoArt',
		img: psychoArt,
		imgBig: psychoArtBig,
		skills: 'React, TypeScript, SCSS',
		gitHubLink: 'https://github.com/Grigoriy5544/psycho-art/',
		url: 'https://grigoriy5544.github.io/psycho-art/',
	},
	{
		title: 'Steam Library',
		img: steamLibrary,
		imgBig: steamLibraryBig,
		skills: 'React, React Query, Node js, Express',
		description:
			"If you don't have a steam id, use, for example: 76561199093018035",
		gitHubLink: 'https://github.com/Grigoriy5544/steam_library',
		url: 'https://steam-library.vercel.app',
	},
	{
		title: 'Cyberpunk',
		img: cyberpunk,
		imgBig: cyberpunkBig,
		skills: 'HTML, CSS, JS',
		gitHubLink: 'https://github.com/Grigoriy5544/cyberpunk',
		url: 'https://grigoriy5544.github.io/cyberpunk/',
	},
	{
		title: 'Musicology',
		skills: 'HTML, CSS, JS',
		img: musicology,
		imgBig: musicologyBig,
		gitHubLink: 'https://github.com/Grigoriy5544/Musicology',
		url: 'https://grigoriy5544.github.io/Musicology/',
	},
	{
		title: 'Crypto Sever',
		img: cryptoSever,
		imgBig: cryptoSeverBig,
		skills: 'HTML, CSS, JS',
		gitHubLink: 'https://github.com/Grigoriy5544/crypto-sever',
		url: 'https://grigoriy5544.github.io/crypto-sever/',
	},
]

export { projects }
