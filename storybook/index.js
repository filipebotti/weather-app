import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import { View, SafeAreaView } from 'react-native'

import './rn-addons';

// import stories
configure(() => {
  loadStories()
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 7007, host: 'localhost' });

export default () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StorybookUIRoot/>
      </SafeAreaView>
    </View>
  )
};
