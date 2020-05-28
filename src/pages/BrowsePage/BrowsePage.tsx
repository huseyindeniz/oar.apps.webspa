import React, { useState, useEffect } from 'react';

import { Catalog } from '../../models/Catalog/Catalog';

const BrowsePage: React.FC = (props): JSX.Element => {

    const [list, setList] = useState<Catalog[] | null>();

    useEffect(() => {
        console.log(props);
        //
    }, []);

    return (
        <p>Browse Page Content</p>
    );
}

export default BrowsePage;