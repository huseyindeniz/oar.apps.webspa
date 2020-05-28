import React, { useState, useEffect } from 'react';

import { Catalog, CatalogList } from '../../models/Catalog/Catalog';

const BrowsePage: React.FC<CatalogList> = (props): JSX.Element => {

    const [list, setList] = useState<Catalog[] | null>();

    useEffect(() => {
        console.log(props.data);
        setList(props.data);
    }, [props.data]);

    return (
        <p>Browse Page Content</p>
    );
}

export default BrowsePage;