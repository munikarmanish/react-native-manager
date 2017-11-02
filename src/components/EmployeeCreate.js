import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

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

        <CardSection>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate('shift', value)}
          >
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
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    paddingTop: 10,
  },
  picker: {
    flex: 2,
  }
};

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
})(EmployeeCreate);
