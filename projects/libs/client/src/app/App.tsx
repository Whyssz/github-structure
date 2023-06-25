import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from './providers/ThemeProvider';

const App: FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div
			className={classNames('app', { hovered: true, red: false }, [
				theme,
				'check',
			])}
		>
			<button onClick={toggleTheme}>Click</button>

			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>

			{/* <AppRouter /> */}
			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<div>Loading</div>}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path='/about'
					element={
						<Suspense fallback={<div>Loading</div>}>
							<AboutPage />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
