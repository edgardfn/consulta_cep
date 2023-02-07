import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, listCircleOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import History from '../History/History';
import Home from '../Home/Home';
import './Menu.css';

const Menu: React.FC = () => {
    const paths = [
        {name: 'Consultar CEP', url: '/app/home', icon: homeOutline},
        {name: 'Histórico', url: '/app/history', icon: listCircleOutline}
    ]
    return (
        <IonPage>
            <IonSplitPane contentId='main'>
                <IonMenu contentId='main'>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem lines='none' routerLink={item.url} routerDirection="none">
                                    <IonIcon icon={item.icon} slot='start'></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id='main'>
                    <Route exact path='/app/home' component={Home} />
                    <Route exact path='/app/history' component={History} />
                    <Route exact path='/app'>
                        <Redirect to='/app/home' />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    
    );
};

export default Menu;