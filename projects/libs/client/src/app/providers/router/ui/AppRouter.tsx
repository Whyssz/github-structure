import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/reouteConfig/route.config';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{routeConfig.map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};

/* uniq loading	
	<Route
		path='/about'
		element={
			<Suspense fallback={<div>Loading</div>}>
				<AboutPage />
			</Suspense>
		}
	/> 	
*/
