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
