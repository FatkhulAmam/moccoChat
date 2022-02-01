import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Card, Right, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListChat extends React.Component {
  render() {
    return (
        <View style={styles.renderParent}>
          <TouchableOpacity style={styles.borderAva} onPress={this.props.moveDetailContact}>
            <Image style={styles.pict} source={this.props.avatar} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.press}
            onPress={this.props.movePageChat}>
            <Card transparent>
              <View style={styles.headerChat}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Right />
                {/* <Icon name="check" /> */}
                <Text style={styles.date} note>
                  {this.props.time}
                </Text>
              </View>
              <View style={styles.headerChat}>
                <Text style={styles.status} note>
                  {this.props.lastMessage}
                </Text>
                <Right />
                {/* <Text style={styles.mount}>{this.props.mount}</Text> */}
              </View>
            </Card>
          </TouchableOpacity>
        </View>
    );
  }
}

export default ListChat;

const styles = StyleSheet.create({
  renderParent: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  borderAva: {borderWidth: 1.5, borderColor: '#421908', borderRadius: 50},
  pict: {
    width: 50,
    height: 50,
    backgroundColor: '#8e8e8e',
    borderRadius: 50,
    margin: 3,
  },
  headerChat: {
    flexDirection: 'row',
  },
  name: {
    color: '#421908',
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 17,
    marginTop: 3,
  },
  press: {
    borderBottomWidth: 1,
    width: '75%',
    marginLeft: 10,
    borderBottomColor: '#8e8e8e',
  },
  mount: {
    backgroundColor: 'lightblue',
    width: 25,
    height: 25,
    borderRadius: 15,
    textAlign: 'center',
  },
});
