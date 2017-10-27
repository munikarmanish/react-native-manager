import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={LoginForm} title="Please Login" initial />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Stack>
  </Router>
);

export default RouterComponent;
