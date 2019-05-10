import React from 'react';
import { Text, View } from 'react-native';

interface UserProps {
    name: string,
    email: string,
    isLoading: boolean
  }

class User extends React.Component<UserProps> {
    render() {
      const { name, email, isLoading } = this.props;
  
      const userDetails = (
        <View>
          <Text>{name}</Text>
          <Text>{email}</Text>
        </View>
      );
  
      const loadingMessage = (<View><Text>Loading...</Text></View>);
  
      return (
        <View>
          {isLoading ? loadingMessage : userDetails}
        </View>
      );
    }
  }

  export default User