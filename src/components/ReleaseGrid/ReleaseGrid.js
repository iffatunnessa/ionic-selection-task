import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonLabel } from '@ionic/react';
import React from 'react';

const ReleaseGrid = ({ item }) => {
    const { created_at, id, tag_name } = item;
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle color="dark">Version : {tag_name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonLabel color="dark" >ID : {id}</IonLabel><br />
                <IonLabel color="dark">Created at : {created_at.slice(0, 10)}</IonLabel><br />
            </IonCardContent>
        </IonCard>
    );
};

export default ReleaseGrid;