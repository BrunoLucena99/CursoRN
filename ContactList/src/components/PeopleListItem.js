import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';


//I Used React.PureComponent to fix bug "You have a large list that is slow to update"
class PeopleListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {person, navigation} = this.props;
    const {title, first, last} = person.name;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('PeopleDetailPage', person)} style={styles.line}>
        <Image style={styles.avatar} source={{uri: person.picture.thumbnail}}/>
        <Text style={styles.lineText}>{`${title} ${first} ${last}`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },
  avatar: {
    aspectRatio: 1, //Maintain the aspect radio
    flex: 1,
    marginLeft: 5,
    borderRadius: 50,
  }
})

export default PeopleListItem;