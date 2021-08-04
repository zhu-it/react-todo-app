import { Link, Route, useRouteMatch } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
	const { url, path } = useRouteMatch();
	return (
		<div className="about__content">
			<ul className="about__list">
				<li>
					<Link to={`${url}/about-app`}>O nas Aplikacja</Link>
				</li>
				<li>
					<Link to={`${url}/about-author`}>O nas Autor</Link>
				</li>
			</ul>
			<Route path={`${path}/:slug`}>
				<SinglePage />
			</Route>
		</div>
	);
};

export default About;
