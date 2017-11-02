import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

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
    this.setState({ showModal: true });
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete(uid);
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
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

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete
})(EmployeeEdit);
