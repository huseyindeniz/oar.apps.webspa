import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        backgroundColor: "#efefef",
        fontSize: "0.6rem"
    },
});

const Footer: React.FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>{'\u00A9'} Copyright, 2020<br />
            Used tech stack in this web site: React(with Hooks), Typescript, Material-UI. Developed by Hüseyin Deniz KIVRAK.</p>
        </div>
    );
};

export default Footer;
