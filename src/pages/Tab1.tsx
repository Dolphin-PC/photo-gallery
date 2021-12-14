import { IonAlert, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import React, { useRef, useState } from "react";
import BmiControls from "../components/BmiControls";
import BmiResult from "../components/BmiResult";
import InputControl from "../components/InputControl";

const Tab1: React.FC = () => {
  const [bmiInfo, setBmiInfo] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'mkg' | 'ftlbs'>('mkg');

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {

    const weightVal = weightInputRef.current!.value;
    const heightVal = heightInputRef.current!.value;

    if (!heightVal || !weightVal || heightVal <= 0 || weightVal <= 0) {
      setError("0 이상의 숫자를 입력하세요.");
      return;
    }


    const bmi = +weightVal / (+heightVal * +heightVal)

    setBmiInfo(bmi);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  }

  const clearError = () => {
    setError('');
  }

  const selectCalcUnitHandler = (selectedVlaue: 'mkg' | 'ftlbs') => {
    setCalcUnits(selectedVlaue)
  }

  return (
    <React.Fragment>
      <IonAlert 
        isOpen  = {!!error} 
        message = {error} 
        buttons = {[{ text: 'OK', handler: clearError }]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>비만도 계산기</IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectedValue={selectCalcUnitHandler}/>
              </IonCol>
            </IonRow>


            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Height</IonLabel>
                  <IonInput ref={heightInputRef}></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Your Weight</IonLabel>
                  <IonInput ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <BmiControls calculateBMI={calculateBMI} resetInputs={resetInputs} />

            {bmiInfo && (
              <BmiResult result={bmiInfo} />
            )}
          </IonGrid>
        </IonContent>
      </IonPage>

    </React.Fragment>
  )
}

export default Tab1
