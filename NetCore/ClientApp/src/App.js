import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import TournamentList from './components/TournamentList';
import Round from './components/Round';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route path='/tournamentlist' component={TournamentList} />
        <Route path='/round/:roundID/:startTaskIndex' component={Round} />
  </Layout>
);
