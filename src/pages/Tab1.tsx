import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { useRef } from "react";

const Tab1 : React.FC = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  

  return (
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

          <IonRow>
            <IonCol>
              <IonButton>
                <IonIcon name="calculator-outline"/>
                계산하기
              </IonButton>

              <IonButton>
                <IonIcon slot="start" name="refresh-outline"/>
                리셋
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
