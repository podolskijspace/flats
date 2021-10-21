import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {makeData} from '../../actions/index';
import GetData from '../../services/getData';
import Main from '../../pages/main/Main';


const getDataService = new GetData();

function App({makeData}) {
  const getData = ()=> {
    getDataService.getResource('response')
      .then(response => makeData(response))
  }

  useEffect(getData ,[])
  return (
    <div className="App">
      <Main />
    </div>
  );
}

const mstp = ({}) => {
  return {

  }
}

const mdtp = {
  makeData,
}

export default connect(mstp, mdtp)(App);