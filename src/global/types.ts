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

export type RegisterFormFieldType = "teamName" | "memberName";

export type QuestionContentType = {
  type: string;
  title: string;
  options?: string[];
  ranges?: number[];
};
