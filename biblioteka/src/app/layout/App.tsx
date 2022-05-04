import React, { useEffect, useState } from 'react';
import './styles.css';
import { Container, Button } from 'semantic-ui-react';
import NavBar from './NavBar';
import UsersDashboard from '../../features/users/dashboard/UsersDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import Homepage from '../../features/home/homepage';
import UserForm from '../../features/users/form/UserForm';

function App() {

  return (
    <>
      <NavBar/>
      <Container style={{marginTop:'7em'}}>
          <Route path='/' component={Homepage} />

          <Route path='/users' component={UsersDashboard} />
          <Route path='/createUser' component={UserForm} />
 
        </Container>
      </>
  );
}

export default observer(App);
