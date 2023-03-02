import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import ConfigureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';

const store =ConfigureStore()
console.log("state",store.getState())

store.subscribe(()=>{
  console.log('state updated', store.getState())
})

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<Provider store={store}>
                    <App/>
                </Provider>)



