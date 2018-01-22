import React from 'react';
import Utility from '../../hoc/Utility';

const layout = (props) => (
    <Utility>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Utility>

);

export default layout;