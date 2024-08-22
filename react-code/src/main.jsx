// index.js or App.js
import React from 'react';
import { createRoot } from 'react-dom/client';

const reactElement = React.createElement(
  'h1',
  { className: 'myHeading', id: 'headingId' },
  'I am the injected heading'
);

const root = createRoot(document.getElementById('root'));
root.render(
  reactElement
);
