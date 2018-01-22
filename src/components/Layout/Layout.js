import React from 'react';
import Utility from '../../hoc/Utility';
import classes from './Layout.css'

const layout = (props) => (
    <Utility>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Utility>

);

export default layout;