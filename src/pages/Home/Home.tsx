import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ConsultCep from '../../components/ConsultCep/ConsultCep';
import './Home.css';
import imageConsultCep from '../../assets/consultarcep.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar id='container-header'>
          <IonButtons slot='start' id='container-icon'>
            <IonMenuButton id='button-menu' autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>
            <IonImg src={imageConsultCep} alt="logo-consultar-cep" />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ConsultCep />
      </IonContent>
    </IonPage>
  );
};

export default Home;
