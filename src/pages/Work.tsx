import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { arrowForward, arrowForwardSharp } from 'ionicons/icons';
import hospital from './hospital.jpg';

const Work: React.FC = () => {

  return (
    <div style={{padding: "20px", color: "black"}}>
      <IonIcon ios={arrowForwardSharp} md={arrowForward} class="animate__animated animate__backInLeft" style={{ }}/>
      <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={hospital} />
          <IonCardSubtitle style={{textAlign:"center"}}>Ottawa Hospital Research Institute</IonCardSubtitle>
            <IonCardTitle style={{textAlign:"center"}}>Bioinformatics Intern</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Designed a pipeline for bulk RNA-seq data for analysis by fusion callers. <br></br> <br></br>
          Assisted in presenting an RNA-seq seminar to academics.
          </IonCardContent>
        </IonCard>
    </div>
  );
};

export default Work;