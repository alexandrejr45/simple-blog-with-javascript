import './css/normalize.css'
import './css/style.css';
import './css/formulario.css'

import { verifyFirebaseConfiguration, firebaseConnect} from './js/firebase-config';

firebaseConnect();
verifyFirebaseConfiguration();