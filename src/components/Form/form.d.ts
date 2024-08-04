export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export interface FormField extends React.InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
}

export interface FormLabel
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export interface FormSubmit
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface FormTextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
}
