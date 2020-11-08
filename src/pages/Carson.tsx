import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { arrowForwardSharp, arrowForward } from 'ionicons/icons';

const Homepage: React.FC = () => {

  return (
    <div style={{padding: "20px", color: "black"}}>
      <IonIcon ios={arrowForwardSharp} md={arrowForward} class="animate__animated animate__backInLeft" style={{ }}/>
      <h1 className="animate__animated animate__backInLeft">Carson S. Fischl</h1>
      <h6 className="animate__animated animate__backInLeft" style={{ transition: "300ms"}}>Cool. Dynamic. <br></br>Interesting.</h6>
    </div>
  );
};

export default Homepage;