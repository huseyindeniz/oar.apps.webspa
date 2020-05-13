import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader: React.FC = (): JSX.Element => (
    <Box display="flex" width={'80%'} m="auto" height="200px" justifyContent="center" alignContent="center" marginTop="20px" alignItems="center">
        <CircularProgress color="secondary" />
    </Box>
);

export default Loader;