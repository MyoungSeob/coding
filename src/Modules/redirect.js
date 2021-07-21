import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const Redirects = () =>{

    return (
        <Route>
            <Redirect to={{
                pathname : '/home'
            }} />
        </Route>
    )
}

export default Redirects;