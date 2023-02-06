import { IonButtons, IonContent, IonHeader, IonImg, IonMenuButton, IonPage } from '@ionic/react';
import './History.css';
import imageConsultCep from '../../assets/consultarcep.png';
import { useContext } from 'react';
import { SearchCepsContext} from '../../providers/SearchCeps';
import {format} from 'date-fns';

const History: React.FC = () => {
  const {SearchCeps} = useContext(SearchCepsContext)
  
  return (
    <IonPage>
      <IonHeader>
        <div id='container-header'>
          <IonButtons slot='start' id='container-icon'>
            <IonMenuButton id='button-menu'></IonMenuButton>
          </IonButtons>
          <IonImg src={imageConsultCep} alt="logo-consultar-cep" />
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <table>
          <thead>
            <tr>
              <th>CEP</th>
              <th>Dia</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {SearchCeps.ceps.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.cep}</td>
                  <td>{format(item.date, "dd/MM/yyyy")}</td>
                  <td>{format(item.date, "HH:mm")}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </IonContent>
    </IonPage>
  );
};

export default History;