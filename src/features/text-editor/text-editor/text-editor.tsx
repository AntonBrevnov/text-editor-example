import {
  CustomKeyboard,
  EditorBridge,
  RichText,
  useEditorBridge,
  CustomKeyboardExtension,
} from '@10play/tentap-editor';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';
import {FC, ReactNode, useEffect, useRef, useState} from 'react';

type RenderToolbarParams = {
  editor: EditorBridge;
  activeKeyboard?: string;
  setActiveKeyboard: (id: string | undefined) => void;
};

type TextEditorProps = {
  style?: StyleProp<ViewStyle>;
  keyboards?: CustomKeyboardExtension[];
  renderToolbar: (params: RenderToolbarParams) => ReactNode;
  onChange: (html: string) => void;
};

export const TextEditor: FC<TextEditorProps> = ({
  style,
  keyboards = [],
  renderToolbar,
  onChange,
}) => {
  const rootRef = useRef(null);
  const editor = useEditorBridge({
    avoidIosKeyboard: true,
    theme: {
      toolbar: {
        toolbarBody: styles.toolbarBody,
        toolbarButton: styles.toolbarButton,
        iconWrapper: styles.iconWrapper,
        iconWrapperActive: styles.iconWrapperActive,
      },
    },
    onChange() {
      editor.getHTML().then(onChange);
    },
  });

  const [activeKeyboard, setActiveKeyboard] = useState<string>();

  useEffect(() => {
    console.log('activeKeyboard', activeKeyboard);
  }, [activeKeyboard]);

  return (
    <>
      <View ref={rootRef} style={StyleSheet.flatten([styles.root, style])}>
        <RichText editor={editor} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.toolbarWrapper}>
        {renderToolbar({editor, activeKeyboard, setActiveKeyboard})}
        <CustomKeyboard
          editor={editor}
          rootRef={rootRef}
          activeKeyboardID={activeKeyboard}
          setActiveKeyboardID={setActiveKeyboard}
          keyboards={keyboards}
        />
      </KeyboardAvoidingView>
    </>
  );
};
