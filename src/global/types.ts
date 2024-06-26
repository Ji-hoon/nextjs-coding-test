export type storeProps = {
  survey: {
    isRegistered: boolean;
    registeredUserInfo: RegisterFormValues;
    answers: [AnswerProps];
  };
};

export type RegisterFormValues = {
  teamName: string;
  memberName: string;
  result: number;
};

export type FormValues = {
  teamName?: string;
  memberName?: string;
  exerciseCount?: string;
  plankTime?: string;
  exerciseType?: [boolean | undefined | string];
};

export type RegisterFormFieldType =
  | "teamName"
  | "memberName"
  | "exerciseCount"
  | "plankTime"
  | "exerciseType";

export type QuestionContentType = {
  type: string;
  title: string;
  name: string;
  options?: string[];
  ranges?: number[];
  unit?: string;
};

export type AnswerProps = {
  id: string;
  value: string[];
};

export type DataPropsType = {
  teamName: string;
  memberCount: number;
  SUM: number;
  AVG: number;
  DIFF_SUM: number[];
  SD: number;
};
