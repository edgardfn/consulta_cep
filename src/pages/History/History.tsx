import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage } from '@ionic/react';
import './History.css';
import imageConsultCep from '../../assets/consultarcep.png';
import { useContext } from 'react';
import { SearchCepsContext} from '../../providers/SearchCeps';

const History: React.FC = () => {
  const {SearchCeps} = useContext(SearchCepsContext)
  
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
        <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Data</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>13184-674</td>
              <td>06/02/2023</td>
              <td>03:30</td>
            </tr>
          </tbody>
        </table>
      </IonContent>
    </IonPage>
  );
};

export default History;