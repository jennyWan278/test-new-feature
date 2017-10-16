/**
 * Created by SamMFFL on 2017/10/16.
 */

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import CoreLayout from './Layout';
import HelloWorld from 'src/views/HelloWorld';

export default () => (
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={HelloWorld}/>
    </Route>
);