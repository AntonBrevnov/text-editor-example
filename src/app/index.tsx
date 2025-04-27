import {Alert, Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  ColorsKeyboard,
  EmojiKeyboard,
  TextEditor,
  ThemeEditorToolbar,
} from '@features/text-editor';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {useState} from 'react';

export const App = () => {
  const [content, setContent] = useState<string>();

  const handleSave = () => {
    Alert.alert('Content', content);
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <SafeAreaView style={styles.root}>
        <View style={styles.header}>
          <Button title="Save" onPress={handleSave} />
        </View>

        <TextEditor
          style={{paddingHorizontal: 16}}
          renderToolbar={props => <ThemeEditorToolbar {...props} />}
          keyboards={[EmojiKeyboard, ColorsKeyboard]}
          onChange={setContent}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#101010',
  },
});

export default App;
