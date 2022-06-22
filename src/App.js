import {useEffect, useState} from 'react';
import './App.css';
import Table from './Components/Table';
import Logo from './logo.png'

function App() {
  // state to store data 
  const [data, setData] = useState();

  // fetch 
  const fetchData = async() =>{
    await fetch('https://randomuser.me/api?results=10')
      .then(response=>{
        if(response.ok){
          return response.json()
        }
        throw response;
      })
      .then(data=>{
        setData(data)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  // onload 
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <div className="header">
        <img src={Logo} alt="logo"/>
      </div>
      <Table data={data}/>
      <button onClick={()=>fetchData()}>Refresh Data</button>
    </>
  );
}

export default App;