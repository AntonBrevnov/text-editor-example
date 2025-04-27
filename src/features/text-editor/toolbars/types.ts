import {EditorBridge} from '@10play/tentap-editor';

export type BaseToolbarProps = {
  editor: EditorBridge;
  activeKeyboard?: string;
  setActiveKeyboard: (id: string | undefined) => void;
};

export type BaseItemProps = {
  editor: EditorBridge;
  activeKeyboard?: string;
  setActiveKeyboard: (id: string | undefined) => void;
};
