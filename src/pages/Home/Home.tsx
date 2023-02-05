import { IonContent, IonHeader, IonPage } from '@ionic/react';
import ConsultCep from '../../components/ConsultCep/ConsultCep';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        {/* <IonToolbar> */}
          {/* <IonTitle>Consultar CEP</IonTitle> */}
          {/* <div className='container-header'>Consultar CEP</div>
        </IonToolbar> */}
        <div className='container-header'>Consultar CEP</div>
      </IonHeader>
      <IonContent fullscreen>
        <ConsultCep />
      </IonContent>
    </IonPage>
  );
};

export default Home;
