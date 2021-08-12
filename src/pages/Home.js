import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import { createContext, useEffect, useState } from 'react';
import HomeContent from '../components/HomeContent/HomeContent';
import Pagination from '../components/Page/Pagination'

export const PageCounterContext = createContext();

const Home = () => {
  const [data, setData] = useState();
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [isOldState, setIsOldState] = useState(true);

  // const [oldPageNo, setOldPageNo] = useState(1);
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    fetch(`https://api.github.com/search/code?q=addClass+user:mozilla&page=${pageNumber}&per_page=100`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
        setItems(data.items);
      })
  }, [pageNumber])

  const handleOldPage = currentPageNo => setCurrentPage(currentPageNo);

  const handleOldState = state => setIsOldState(state);

  return (
    <PageCounterContext.Provider value={[pageNumber, setPageNumber]}>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle color="light">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {

            items.length === 0 ?
              <div className="ion-text-center ion-padding-top">
                <IonSpinner color="medium" name="lines" />
              </div>
              : <HomeContent items={currentPost} />
          }
          <Pagination handleOldState={handleOldState}  handleOldPage={handleOldPage} currentPage={currentPage}/>
        </IonContent>
      </IonPage>
    </PageCounterContext.Provider>
  );
};

export default Home;
