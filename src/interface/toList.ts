export interface IInputField {
  value: string;
}
export interface IChildProps {
  sharedState: IInputField[];
  setSharedState: React.Dispatch<React.SetStateAction<IInputField[]>>;
}
