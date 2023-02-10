export interface Question {
  id: string;
  label: string;
  description: Nullable<string>;
  required: boolean;
  inputType: InputType;
  selectOptions: Array<SelectOption>;
}

export enum InputType {
  date = "date",
  datetime_local = "datetime-local",
  email = "email",
  file = "file",
  number = "number",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  select = "select",
  textarea = "textarea",
}

interface SelectOption {
  label: string;
  value: string;
}
