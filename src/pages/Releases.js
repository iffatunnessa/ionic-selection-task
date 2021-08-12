import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IonContent, IonHeader, IonLabel, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import ReleaseGrid from '../components/ReleaseGrid/ReleaseGrid';

const Releases = () => {
    const { name, repoName } = useParams();
    const [releaseData, setReleaseData] = useState([]);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/repos/mozilla/${repoName}/releases`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReleaseData(data);
            })
    }, [repoName])

    setTimeout(() => {
        setShowLoading(false);
    }, 4000);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="ion-text-capitalize" color="light" >{name} - Releases</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h2 className="ion-padding-start ion-text-capitalize">{repoName}</h2>
                {
                    releaseData.length > 0 ?
                        releaseData.map(item => <ReleaseGrid item={item} />)
                        :
                        showLoading ?
                            <div className="ion-text-center ion-padding-top">
                                <IonSpinner color="medium" name="lines" />
                            </div>
                            : <div className="ion-text-center ion-padding-top">
                                <p>No Data Found!</p>
                            </div>

                }
            </IonContent>
        </IonPage>
    );
};

export default Releases;