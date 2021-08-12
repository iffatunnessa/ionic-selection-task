import {  IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonLabel } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeGrid = ({ item }) => {
    const { name, repository } = item;
    const { full_name,  description } = repository;
    const repoName = repository.name;
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle >{name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonLabel >Full Name: {full_name}</IonLabel> <br />
                <IonLabel > {description}</IonLabel> <br />
                <Link to={"/releases/" + name + '/' + repoName}>Releases</Link>
            </IonCardContent>
        </IonCard>
    );
};

export default HomeGrid;