import Menu from './components/Menu';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Work from './pages/Work';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import About from './pages/About';
import Homepage from './pages/Carson';
import Contact from './pages/Contact';

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Redirect from="/" to="/page/Carson S. Fischl" exact />
            <Route path="/page/projects" component={Projects} exact />
            <Route path="/page/work" component={Work} exact />
            <Route path="/page/hobbies" component={Hobbies} exact />
            <Route path="/page/about me" component={About} exact />
            <Route path="/page/Carson S. Fischl" component={Homepage} exact />
            <Route path="/page/Contact" component={Contact} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
