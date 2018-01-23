import React from 'react';
import Utility from '../../hoc/Utility';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.css';

const layout = (props) => (
    <Utility>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Utility>

);

export default layout;