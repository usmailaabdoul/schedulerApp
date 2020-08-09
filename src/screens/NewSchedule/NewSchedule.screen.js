import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'react-moment';

import styles from './NewSchedule.style';

const NewSchedule = () => {
  const [title, onTitleChangeText] = useState('');
  const [description, onDescriptionChangeText] = useState('');
  const [buttons] = useState([
    {color: '#3dc8d9', description: 'Design'},
    {color: '#F89B2B', description: 'Product'},
    {color: '#948bfe', description: 'Business'},
    {color: '#f86c6e', description: 'Developer'},
  ]);

  return (
    <SafeAreaView>
      <Text style={[styles.greetingText, {marginTop: 50}]}>Create</Text>
      <Text style={[styles.greetingText, {marginBottom: 40}]}>
        New Meetings
      </Text>

      <View style={styles.titleTextInputWrapper}>
        <TextInput
          onChangeText={(text) => onTitleChangeText(text)}
          value={title}
          placeholder="Meeting Title"
          placeholderTextColor="#00000080"
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailsWrapper}>
          <TouchableOpacity style={styles.detailsIcon}>
            <Icon name="calendar-month" size={20} color="#F89B2B" />
          </TouchableOpacity>
          <View>
            <Moment
              element={Text}
              style={styles.dateText}
              format="dddd, MMM DD"
            />
          </View>
        </View>

        <View style={styles.detailsWrapper}>
          <TouchableOpacity style={styles.detailsIcon}>
            <Icon name="clock" size={20} color="#3dc8d9" />
          </TouchableOpacity>
          <View>
            <Text style={styles.dateText}>10:00 AM - 1:00 PM</Text>
          </View>
        </View>

        <View style={styles.descriptionTextInputWrapper}>
          <TextInput
            style={styles.titleTextInput}
            onChangeText={(text) => onDescriptionChangeText(text)}
            value={description}
            placeholder="Description"
            placeholderTextColor="#00000080"
            numberOfLines={4}
          />
          <View style={styles.descriptionIcon}>
            <Icon name="paperclip" size={20} color="#4565EC" />
          </View>
        </View>
      </View>

      <Text style={styles.footerTitle}>Team / Category</Text>

      <View style={styles.buttonsWrapper}>
        {buttons.map((button, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={[styles.buttons, {backgroundColor: button.color}]}>
              <Text style={styles.buttonsText}>{button.description}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={20} color="#4565EC" />
          <Text style={styles.addButtonText}>New</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.footerButtonText}>Create Meeting</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewSchedule;
