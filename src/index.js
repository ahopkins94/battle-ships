import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BoatLocationForm } from './components/boatLocationForm';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((<BrowserRouter>
                  <BoatLocationForm />
                </BrowserRouter>), document.getElementById('root'));
