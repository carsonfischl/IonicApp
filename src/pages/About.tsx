import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonList, IonButton } from '@ionic/react';
import { arrowForward, arrowForwardSharp } from 'ionicons/icons';
import Portrait from './portrait.jpg';
import Portrait2 from './portrait2.jpg';

const About: React.FC = () => {
  return (
    <IonContent>
    <div style={{padding: "20px", color: "black"}}>
      <IonIcon ios={arrowForwardSharp} md={arrowForward} class="animate__animated animate__backInLeft" style={{ }}/>
      <IonCard className="animate__animated animate__backInRight">
          <IonCardContent>
            <b>Hi!</b><br></br> <br></br>
            My name is Carson, I am a fourth year computer science student at Carleton University in Ottawa, Ontario, Canada. I have a previous BSc in Biochemistry.<br></br> <br></br>
            <IonImg src={Portrait} /> <br></br>
            This app is a project to work on my native development skills, made with Ionic and Animations.css. I hope to redo this app in the future as my skills improve, using Flutter, Figma, Rive, and generally improved UI. <br></br> <br></br>
            <IonImg src={Portrait2} /> <br></br> 
            My interests lie primarily in front end development, bioinformatics, and cybersecurity. However, if you have an opportunity, be it a contract, internship, or FOSS, within my immediate skillset or outside of it, please do not hesitate to reach out to me! I am always interested in expanding my skillset and contributing to ambitious endeavours.<br></br><br></br>
            Carson
      </IonCardContent>
        </IonCard>
    </div>
    </IonContent>
  );
};

export default About;