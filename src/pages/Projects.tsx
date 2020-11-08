import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonList, IonButton, IonImg } from '@ionic/react';
import { arrowForward, arrowForwardSharp } from 'ionicons/icons';
import weather from './weather.jpg';
import Candev from './candev.png';
import camsite from './camsite.jpg';
import reactive from './reactive.png';
import ouch from './ouch.jpg';

const Projects: React.FC = () => {

  return (
    <IonContent style={{}}>
    <div style={{padding: "20px", color: "black"}}>
      <IonIcon ios={arrowForwardSharp} md={arrowForward} class="animate__animated animate__backInLeft" style={{ }}/>
      <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={camsite} />
          <IonCardSubtitle style={{textAlign:"center"}}>August 2020 - Ottawa, ON</IonCardSubtitle>
            <IonCardTitle style={{textAlign:"center"}}>camfischl.space</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{textAlign:"center"}}>
          A basic Angular 9 app made for a local geologist.
              <IonButton fill="clear" href="https://www.camfischl.space">Details</IonButton>
      </IonCardContent>
        </IonCard>
      <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={weather} />
          <IonCardSubtitle style={{textAlign:"center"}}>January 2020 - Ottawa, ON</IonCardSubtitle>
            <IonCardTitle style={{textAlign:"center"}}>WeatherMe-LTE</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{textAlign:"center"}}>
          A mobile weather station with thermometer, altimeter, hygrometer & barometer. <br></br>
              <IonButton fill="clear" href="https://devpost.com/software/weatherme-lte">Details</IonButton>
      </IonCardContent>
        </IonCard>
        <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={Candev} />
          <IonCardSubtitle style={{textAlign:"center"}}>January 2020 - Ottawa, ON</IonCardSubtitle>
            <IonCardTitle style={{textAlign:"center"}}>CanDev 2020</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{textAlign:"center"}}>Designed a basic data scraper for CSPS Excel spreadsheets which outputed the data to a web interface.</IonCardContent>
        </IonCard>
        <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={ouch} />
          <IonCardSubtitle style={{textAlign:"center"}}>February 2020 - Ottawa, ON</IonCardSubtitle>
            <IonCardTitle style={{textAlign:"center"}}>Ouch! Deslouch</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{textAlign:"center"}}>
          A program that prompts users to stop slouching behind their computer screen while working.
              <IonButton fill="clear" href="https://devpost.com/software/ouch-deslouch">Details</IonButton>
      </IonCardContent>
        </IonCard>
        <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={reactive} />
          <IonCardSubtitle style={{textAlign:"center"}}>February 2019 - Ottawa, ON</IonCardSubtitle>
            <IonCardTitle style={{textAlign:"center"}}>Reactive Genetics</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{textAlign:"center"}}>
          Biopython BLASTs a given FASTQ file against the NCBI human reference genome and tells the user whether or not they are "positive" or "negative" for genetic disease.
              <IonButton fill="clear" href="https://devpost.com/software/reactive-genetics">Details</IonButton>
      </IonCardContent>
        </IonCard>
    </div>
    </IonContent>
  );
};

export default Projects;
