import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
declare const __DEV__: string;
console.log('>>>> TEST', __DEV__)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
