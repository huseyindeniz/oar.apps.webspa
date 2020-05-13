import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const PageTitle: React.FC = (): JSX.Element => {
    const location = useLocation();
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTitle('');
                break;
            case '/search':
                setTitle('Search');
                break;
            case '/browse':
                setTitle('Browse');
                break;
            case '/about':
                setTitle('About');
                break;
            case '/policy':
                setTitle('Policy');
                break;
            case '/contact':
                setTitle('Contact');
                break;
            default:
                setTitle('');
                break;
        }
    }, [location]);

    if (title !== '') {
        return (
            <React.Fragment>
                <Typography variant="h4" color="textPrimary" component="h1">{title}</Typography>
                <Divider />
            </React.Fragment>
        );
    }
    else {
        return (<React.Fragment />);
    }
}

export default PageTitle;
