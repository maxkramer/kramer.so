import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss';

import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitterSquare, faGithubSquare, faLinkedinIn, faFlickr} from '@fortawesome/fontawesome-free-brands';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';

library.add(faTwitterSquare, faGithubSquare, faLinkedinIn, faFlickr, faEnvelopeSquare);

const element = document.getElementById('content');
ReactDOM.render(<App />, element);
