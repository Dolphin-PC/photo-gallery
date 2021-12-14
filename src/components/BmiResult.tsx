import { IonCard, IonCol, IonRow } from '@ionic/react'
import React from 'react'

const BmiResult: React.FC<{
    result : number;
}> = ({
    result
}) => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <h5 className='ion-text-center'>내 비만도 측정 결과는...</h5>
                    <h2 className='ion-text-center'>{result.toFixed(2)}</h2>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default BmiResult
