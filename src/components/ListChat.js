import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Card, Right, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class ListChat extends React.Component {
  render() {
    return (
      <>
        <View style={styles.renderParent}>
          <TouchableOpacity onPress={this.props.moveDetailContact}>
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
      </>
    );
  }
}

export default ListChat;

const styles = StyleSheet.create({
  renderParent: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  pict: {
    width: 55,
    height: 55,
    backgroundColor: '#8e8e8e',
    borderRadius: 50,
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
    marginBottom: 3,
    marginTop: 3,
  },
  press: {
    borderBottomWidth: 1,
    width: 270,
    marginLeft: 10,
    borderBottomColor: '#e8e8e8',
  },
  mount: {
    backgroundColor: 'lightblue',
    width: 25,
    height: 25,
    borderRadius: 15,
    textAlign: 'center',
  },
});
