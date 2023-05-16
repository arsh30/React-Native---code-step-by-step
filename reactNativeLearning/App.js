/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Button, Text, View} from 'react-native';
const name = 'arsh';
let age = 19;
var email = 'abc@test.com';

function fruit() {
  return 'Apple';
}

function App() {
  return (
    <View>
      <Text style={{fontSize: 30}}>Components</Text>
      {/* use the below component in this */}
      <User />
      {/* using the below component */}
      <User />

      {/* using the 2nd component */}
      <CompanyData />
    </View>
  );
}

// function component in same file
const User = () => {
  // ARROW fun is js function
  return (
    <View>
      <Text style={{fontSize: 30}}>Name: Arsh</Text>
      <Text style={{fontSize: 30}}>Age: 29</Text>
      <Text style={{fontSize: 30}}>Email : abc@test.com</Text>
    </View>
  );
};

const CompanyData = () => {
  // 2nd component
  return (
    <View>
      <Text style={{fontSize: 20}}>Name:XYZ COMPANY</Text>
      <Text style={{fontSize: 20}}>Area: Delhi</Text>
    </View>
  );
};
export default App;
