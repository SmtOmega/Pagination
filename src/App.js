
import './App.css';
import {useFetch} from './useFetch'
import Follower from './Follower'
import { useEffect, useState } from 'react';

function App() {
  const {loading, dataSet} = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(()=>{
    if(loading)return 
    setFollowers(dataSet[page])
  },[loading, page])

  const handlePage = (index) => {
    setPage(index)
  }
  const prevPage = () => {
    setPage((oldPage)=>{
      let newValue = oldPage - 1
      if(newValue < 0) {
        newValue = dataSet.length -1
      }
      return newValue
    })
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nxtPage = oldPage + 1
      if(nxtPage > dataSet.length - 1){
        nxtPage = 0
      }
      return nxtPage
    })
  }
  return (
    <main>
      <div  className="section-title">
        <h2>{loading ? 'Loading' : 'Pagination'}</h2>
        <div className="underline"></div>
      </div>
      <section className="follower">
        <div className="container">
          {followers.map((follower)=> {
            const {id} = follower
            return <Follower key={id} {...follower} />
          })}
        </div>
        
        {!loading ? 
        <div className="btn-container">
          <button onClick={prevPage} className="prev">Prev</button>
          {dataSet.map((item, index)=> {
            return <button key={index} onClick={()=> handlePage(index)} 
            className={`${index === page ? 'page-btn active-btn' : 'page-btn'}`}>
            {index + 1}
            </button>
          })}
          <button onClick={nextPage} className="next">next</button>
        </div> : null}
        
      </section>
    </main>
  );
}

export default App;
