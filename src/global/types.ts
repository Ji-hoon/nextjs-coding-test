export type storeProps = {
  survey: {
    isRegistered: boolean;
    registeredUserInfo: RegisterFormValues;
  };
};

export type RegisterFormValues = {
  teamName: string;
  memberName: string;
};

export type FormValues = {
  teamName?: string;
  memberName?: string;
  exerciseCount?: string;
  plankTime?: string;
  exerciseType?: string;
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
};
