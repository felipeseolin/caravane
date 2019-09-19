import React from 'react';

import Routes from './routes';
import './config/StatusBarConfig';
import {createAppContainer} from "react-navigation";

const App = () => createAppContainer(Routes);

export default App;
