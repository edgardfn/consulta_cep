import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage } from '@ionic/react';
import ConsultCep from '../../components/ConsultCep/ConsultCep';
import './Home.css';
import imageConsultCep from '../../assets/consultarcep.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <div id='container-header'>
          <IonButtons slot='start' id='container-icon'>
            <IonMenuButton id='button-menu' autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonImg src={imageConsultCep} alt="logo-consultar-cep" />
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <ConsultCep />
      </IonContent>
    </IonPage>
  );
};

export default Home;
