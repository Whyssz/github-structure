import { type FC } from 'react';
import { AppLinkTheme } from 'shared/config/themeConfig/theme.config';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<div className={classNames(styles.navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.PRIMARY} to='/'>
					Home
				</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} to='/about'>
					About
				</AppLink>
			</div>
		</div>
	);
};
