import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native"

class PlaceInput extends Component {
	state = {
    placeName: '',
  };

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName)
  };

	render() {
		return ( 
			<View style={styles.inputContainer}>
	      <TextInput 
	        style={styles.placeInput}
	        value={this.state.placeName}
	        placeholder={'whatever'}
	        onChangeText={this.placeNameChangedHandler}
	      />
	      <Button 
	        style={styles.placeButton} title="Press me" 
	        onPress={this.placeSubmitHandler}
	      />
	    </View>
	   );
	};
}

const styles = StyleSheet.create({
	inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  placeInput: {
    width: "70%",
    borderColor: "black",
  },
  placeButton: {
    width: "30%",
  },
});

export default PlaceInput;