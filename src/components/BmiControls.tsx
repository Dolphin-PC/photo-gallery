import { IonButton, IonCol, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react'
import React from 'react'

const BmiControls: React.FC<{ 
    calculateBMI: () => void; 
    resetInputs: () => void; 
}> = ({
    calculateBMI,
    resetInputs
}) => {

    return (
        <IonRow>
            <IonCol>
                <IonButton onClick={calculateBMI}>
                    계산하기
                </IonButton>

                <IonButton onClick={resetInputs}>
                    리셋
                </IonButton>
            </IonCol>
        </IonRow>
    )
}

export default BmiControls
