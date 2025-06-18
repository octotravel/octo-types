export interface Question {
  id: string;
  title: string;
  shortDescription: Nullable<string>;
  required: boolean;
  inputType: InputType;
  selectOptions: SelectOption[];
  coverImageUrl: string | null;
}

export enum InputType {
  date = 'date',
  datetime_local = 'datetime-local',
  email = 'email',
  file = 'file',
  number = 'number',
  tel = 'tel',
  text = 'text',
  time = 'time',
  url = 'url',
  select = 'select',
  textarea = 'textarea',
}

interface SelectOption {
  label: string;
  value: string;
}

export interface QuestionAnswer {
  questionId: string;
  question: Question;
  value: Nullable<string>;
}
