import React from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add, settings, share, arrowForward, logoLinkedin, arrowForwardSharp, arrowUpCircle, logoGithub, logoFacebook, logoInstagram } from 'ionicons/icons';

const Contact: React.FC = () => {
  return (
    <div style={{padding: "20px", color: "black"}}>
      <IonIcon ios={arrowForwardSharp} md={arrowForward} class="animate__animated animate__backInLeft" style={{ }}/>
        {/*-- fab placed in the center of the content with a list on each side --*/}
        <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowUpCircle} color="dark"/>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton href="https://www.linkedin.com/in/carson-fischl-850b1a100/"><IonIcon icon={logoLinkedin} /></IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton href="https://www.facebook.com/carsonfischl/"><IonIcon icon={logoFacebook} /></IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton href="https://www.instagram.com/carson6f/"><IonIcon icon={logoInstagram} /></IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton href="https://github.com/carsonfischl"><IonIcon icon={logoGithub} /></IonFabButton>
          </IonFabList>
        </IonFab>
        </div>
  );
};

export default Contact;