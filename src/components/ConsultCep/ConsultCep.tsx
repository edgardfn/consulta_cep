import { ChangeEvent, useContext, useState } from 'react';
import './ConsultCep.css';
import axios from 'axios';
import { useIonAlert, useIonLoading } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import {locateOutline, copyOutline} from 'ionicons/icons';
import {Clipboard} from '@capacitor/clipboard';
import { SearchCepsContext } from '../../providers/SearchCeps';

interface ConsultCepProps { }

interface ResponseApiData {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
}

const ConsultCep: React.FC<ConsultCepProps> = () => {
  const [cep, SetCep] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [addres, setAddress] = useState<string>('')

  const { createNewSearchCep } = useContext(SearchCepsContext)

  const [presentAlert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const isCepEmpty = cep.length < 9;

 
  const handleCopyAddresToTransferArea = async () => {
    present({
      message: 'Copiando...',
    })
    await Clipboard.write({
      string: addres
    });
    dismiss()
  };

  const maskCEP = (value:string) => {
    return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
  };
  const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const cepWithMask = maskCEP(event.target.value);
    SetCep(cepWithMask);
  }

  const mountAddress = (response:ResponseApiData) => {
    let stringAddress = `${response.logradouro}, ${response.bairro}, ${response.localidade}/${response.uf}, ${response.cep}`
    setAddress(stringAddress)
    createNewSearchCep(response.cep)
    SetCep('')
  }  
  const handleCepSearch = (event:any) => {
    present({
      message: 'Aguarde...',
    })
    setAddress('')
    event.preventDefault() 
    const formattedStringWithoutCharacter = cep.replace('-', '');

    axios.get(`https://viacep.com.br/ws/${formattedStringWithoutCharacter}/json/`).then((response) => {
      console.log(response.data);
      if('erro' in response.data) {
        dismiss()
        presentAlert({
          header: 'Alerta',
          subHeader: 'Favor Verificar',
          message: 'Não Encontrado !',
          buttons: ['OK'],
        })
      } else {
        mountAddress(response.data)
        dismiss()
      }
      
    }).catch(error => {
      setError(error.message);
      dismiss()
    })
  }
  if(error !== '') {
    presentAlert({
      header: 'Alerta',
      subHeader: 'Favor Verificar',
      message: error,
      buttons: ['OK'],
    })
  }

  const showContainerSearchAddress = addres !== ''

  return (
    <div className='consultCepContainer'>
      <form onSubmit={handleCepSearch}>
        <strong>
          <IonIcon icon={locateOutline}></IonIcon>
          Digite aqui o CEP:
        </strong>
        <label>
            <input 
              name="cep" 
              value={cep} 
              onChange={handleCepChange}
            />
        </label>
        
        <button type="submit" 
          value="Submit" 
          id='button-submit' 
          disabled={isCepEmpty}
        >
          Consultar
        </button>
      </form>

      <div className='container-search-address'>
        {showContainerSearchAddress ? 
          <>
            <div className='container-address-text'>
              {addres}
            </div> 
            <div className='container-icon-copy'>
              <IonIcon id='icon-copy-data' icon={copyOutline} size='large' onClick={handleCopyAddresToTransferArea}></IonIcon>
            </div>
          </>
          : null
        }
      </div>
    </div>
  );
};

export default ConsultCep;