import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import WeekView, { addLocale } from 'react-native-week-view';



export default class Week extends React.Component{
	selectedDate = new Date();

	generateDates = (hours, minutes) => {
    const date = new Date();
    date.setHours(date.getHours() + hours);
    if (minutes != null) {
      date.setMinutes(minutes);
    }
    return date;
	};
	
	constructor(){
    super()
			this.events = [
				{
					id: 1,
					description: 'Event 1',
					startDate: this.generateDates(0),
					endDate: this.generateDates(2),
					color: 'blue',
				},
				{
					id: 2,
					description: 'Event 2',
					startDate: this.generateDates(1),
					endDate: this.generateDates(4),
					color: 'red',
				},
				{
					id: 3,
					description: 'Event 3',
					startDate: this.generateDates(-5),
					endDate: this.generateDates(-3),
					color: 'green',
				},
			];
  } 

  render(){
		return(
			<View style={styles.container}>
					<WeekView
						events={this.events}
						selectedDate={this.selectedDate}
						numberOfDays={3}
						onEventPress={(event) => Alert.alert('eventId:' + event.id)}
						headerStyle={styles.headerStyle}
						formatDateHeader="MMM D"
						locale="br"
        />
      </View>		
		);
	}  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 22,
  },
  headerStyle: {
    backgroundColor: '#4286f4',
  },
});