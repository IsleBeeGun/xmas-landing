import '../styles/xmas-main.scss';
import './modal';
//import './snowfall';
import './popupNotify';
import './dropdownSelector';
import { handleFormByID } from './forms-logic';
import zenScroll from 'zenscroll';

// Setup forms
const callbackForm = handleFormByID('callback-form');
//const formMobile = handleFormByID('form-mobile');

// Setup scroll
zenScroll.setup(null, 0); // setting top offset to zero
