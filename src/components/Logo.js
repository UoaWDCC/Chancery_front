import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LogoIcon from '../icons/Chancery_logo.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	logo: {
		width: '5vw',
		maxWidth: '60px',
		borderRadius: 7
	},
	logoDiv: {
		height: 60,
		borderRadius: 7,
		marginTop: 10,
		marginLeft: 10
	},
	logoText: {
		textTransform: 'uppercase',
		fontSize: '3vw',
		fontWeight: 'bold'
	},

	button: {
		'&:hover': {
			borderWidth: '3px',
			backgroundColor: 'transparent',
			color: '#ffffff'
		}
	}
}));

function Logo() {
	const classes = useStyles();

	return (
		<Link to={'/'} style={{ textDecoration: 'none' }}>
			<Button
				className={classes.button}
				startIcon={<img src={LogoIcon} className={classes.logo} alt="Logo" />}
				disableRipple
			>
				<Typography className={classes.logoText} color={'primary'}>
					Chancery
				</Typography>
			</Button>
		</Link>
	);
}

export default Logo;
