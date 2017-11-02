import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => (
  <Router>
    <Scene key="root">

      <Scene
        key="login"
        component={LoginForm}
        title="Please Login"
        initial
      />

      <Scene
        key="employeeList"
        type="reset"
        component={EmployeeList}
        title="Employees"
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
      />

      <Scene
        key="employeeCreate"
        component={EmployeeCreate}
        title="Add Employee"
      />

      <Scene
        key="employeeEdit"
        component={EmployeeEdit}
        title="Edit Employee"
      />
    </Scene>
  </Router>
);

export default RouterComponent;
