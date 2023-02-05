import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ConsultCep from '../../components/ConsultCep/ConsultCep';
import './Home.css';
import imageConsultCep from '../../assets/consultarcep.png';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <div className='container-header'>
          <img src={imageConsultCep} alt="logo-consultar-cep" />
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <ConsultCep />
      </IonContent>
    </IonPage>
  );
};

export default Home;
