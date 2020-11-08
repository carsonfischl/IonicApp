import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { arrowForward, arrowForwardSharp } from 'ionicons/icons';
import watch from  './watch.jpg';
import coin from './coin.jpg';
import running from './running.jpg';
import lifting from './lifting.jpg';
import hiking from './hiking.jpg';


const Hobbies: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonContent style={{}}>
    <div style={{padding: "20px", color: "black"}}>
      <IonIcon ios={arrowForwardSharp} md={arrowForward} class="animate__animated animate__backInLeft" style={{ }}/>
      <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={hiking} />
            <IonCardTitle style={{textAlign:"center"}}>Hiking</IonCardTitle>
            <IonCardSubtitle>Since the beginning of the 2020 COVID-19 pandemic, I have engaged in extensive hiking around the greater Ottawa/Outouais region. Hiking recommendations are always appreciated! </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
      <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={running} />
            <IonCardTitle style={{textAlign:"center"}}>Running</IonCardTitle>
            <IonCardSubtitle>Ran the 2019 Toronto Waterfront Marathon and am looking to pursue other races in the future.</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={lifting} />
            <IonCardTitle style={{textAlign:"center"}}>Weightlifting</IonCardTitle>
            <IonCardSubtitle>Max lifts: <br></br><br></br>
            DL: 475 lbs (215 kg) <br></br>
            Squat: 405 lbs (184 kg) <br></br>
            Bench: 275 lbs (125 kg) <br></br>
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={coin} />
            <IonCardTitle style={{textAlign:"center"}}>Numismatics</IonCardTitle>
            <IonCardSubtitle><i>noun - The study or collection of coins, paper currency, and medals.</i> <br></br> <br></br>
            While my collection is diverse, I am particularly interested in coins from mid to late antiquity and the early modern era.
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
        <IonCard className="animate__animated animate__backInRight" class="translucent">
          <IonCardHeader>
          <IonImg src={watch} />
            <IonCardTitle style={{textAlign:"center"}}>Horology</IonCardTitle>
            <IonCardSubtitle><i>noun - The art of making clocks and watches. </i> <br></br> <br></br>
            I am greatly fascinated by the technical and artistic design of clocks, wristwatches and pocketwatches, particularly chronograph complications.
            </IonCardSubtitle>
          </IonCardHeader>
        </IonCard>
    </div>
    </IonContent>
  );
};

export default Hobbies;