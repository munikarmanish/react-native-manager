import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John Doe"
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate('name', text)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="9841872635"
            keyboardType="phone-pad"
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate('phone', text)}
          />
        </CardSection>

        <CardSection
          selectedValue={this.props.shift}
          onValueChange={value => this.props.employeeUpdate('shift', value)}
        >
          <Picker style={{ flex: 1 }}>
            <Picker.Item label="Sunday" value="Sunday" />
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
