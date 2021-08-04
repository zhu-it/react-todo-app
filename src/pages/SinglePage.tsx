import { useParams } from 'react-router-dom';

interface IAbout {
	slug: string;
	title: string;
	description: string;
}

const SinglePage = () => {
	const aboutData = [
		{
			slug: 'about-app',
			title: 'O aplikacji',
			description:
				'W tej aplikacji możesz dodawać, usuwać, zapisywać i edytować elementy. Aby edytować elementy, po prostu kliknij je dwukrotnie. Po zakończeniu naciśnij klawisz Enter, aby zapisać. Ta aplikacja zachowa Twoje dane w lokalnej pamięci przeglądarki. Niezależnie od tego, czy przeładujesz, zamkniesz aplikację, czy ją ponownie otworzysz, nadal masz dostęp do swoich zadań do wykonania.',
		},
		{
			slug: 'about-author',
			title: 'O autorze',
			description: 'Ta aplikacja została stworzona przez Kamila Juchniewicz, programistę m.in. webowego, IOT, Data Mining i specjalistę ERP.',
		},
	];

	const { slug } = useParams<IAbout>();
	const aboutContent: IAbout | undefined = aboutData.find((item) => item.slug === slug);
	const { title, description } = aboutContent!;

	return (
		<div className="main__content">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default SinglePage;
