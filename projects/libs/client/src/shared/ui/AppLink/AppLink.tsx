import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { classNames } from 'shared/lib/classNames';
import styles from './AppLink.module.scss';

interface AppLink extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLink> = props => {
	const {
		to,
		className,
		theme = AppLinkTheme.PRIMARY,
		children,
		...rest
	} = props;

	return (
		<Link
			to={to}
			className={classNames(styles.AppLink, {}, [className, styles[theme]])}
			{...rest}
		>
			{children}
		</Link>
	);
};
