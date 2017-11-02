import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate(prop, value);
    });
  }

  onSubmit() {
    const { name, phone, shift } = this.props;
    const { uid } = this.props.employee;
    this.props.employeeSave({ name, phone, shift, uid });
  }

  onText() {
    const { phone, shift } = this.props;
    text(phone, `Your next shift is on ${shift}`);
  }

  onFire() {
    console.log('Fire pressed');
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>Update</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onText.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onFire.bind(this)}>Fire</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
