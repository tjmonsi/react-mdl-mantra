import {createApp} from 'mantra-core';
import {initContext} from './configs/context';
import reactMdl from './modules/react-mdl';
const context = initContext();
const app = createApp(context);
app.loadModule(reactMdl);
app.init();
