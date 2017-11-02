import React from 'react';
import { View, Modal, Text } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

class Confirm extends React.Component {
  render() {
    const { children, onAccept, onDecline, visible } = this.props;

    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <CardSection style={styles.cardSection}>
            <Text style={styles.text}>{children}</Text>
          </CardSection>
          <CardSection style={styles.cardSection}>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = {
  cardSection: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  }
};

export { Confirm };
