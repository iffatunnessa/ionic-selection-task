import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { PageCounterContext } from '../../pages/Home';

const Pagination = ({ handleOldState, handleOldPage, currentPage }) => {
    const [pageNumber, setPageNumber] = useContext(PageCounterContext);
    const [prevZero, setPrevZero] = useState(true);
    const [storedPageNo, setStoredPageNo] = useState(pageNumber);
    const handleNextButton = () => {
        setPrevZero(false)
        document.getElementById('prev-btn').setAttribute("disabled", "false");
        if (currentPage < 20) {
            const newPage = currentPage + 1;
            handleOldPage(newPage);
            console.log(pageNumber, currentPage);
        }
        else {
            handleOldState(false);
            const newPageNo = pageNumber + 1;
            setPageNumber(newPageNo);
            setStoredPageNo(pageNumber);
            handleOldState(true);
            handleOldPage(1);
            console.log(pageNumber, currentPage);
            if (pageNumber > 1){
                setPrevZero(false);
            }
        }
    }
    const handlePrevButton = () => {
        console.log(storedPageNo, pageNumber)
        if (currentPage > 1 ) {
            const newPageNo = currentPage - 1;
            handleOldPage(newPageNo);
            console.log(pageNumber, currentPage);
        }
        else {
            handleOldState(false);
            if (pageNumber > 1  ) {
                const newPageNo = pageNumber - 1;
                setPageNumber(newPageNo);
                handleOldState(true);
                handleOldPage(20);
            }
            else if (pageNumber === 1) {
                document.getElementById('prev-btn').setAttribute("disabled", "true");
            }
        }
    }
    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonButton id='prev-btn' color="danger" disabled={prevZero} onClick={() => handlePrevButton()}>Prev</IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol></IonCol>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonButton id='next-btn' color="danger" onClick={() => handleNextButton()}>Next</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Pagination;
