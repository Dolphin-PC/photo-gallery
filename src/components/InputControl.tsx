import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import React from 'react'

const InputControl:React.FC<{
    selectedValue : 'mkg' | 'ftlbs';
    onSelectedValue: (vluae : 'mkg'|'ftlbs') => void;
}> = (props) => {
    const inputChangeHanlder = (event : CustomEvent) => {
        props.onSelectedValue(event.detail.value);
    }


    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHanlder}>
            <IonSegmentButton value="mkg">
                <IonLabel>m/Kg</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value='ftlbs'>
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    )
}

export default InputControl
