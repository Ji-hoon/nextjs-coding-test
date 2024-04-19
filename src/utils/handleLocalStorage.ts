import { RegisterFormValues } from "../global/types";

export function setLocalstorageWithUserInfo(data: RegisterFormValues) {
  let newData = [];
  const currentStorageData = localStorage.getItem("surveyData");
  if (currentStorageData) {
    const currentData = JSON.parse(currentStorageData);
    newData = currentData;
  }

  newData.push(data);
  localStorage.setItem("surveyData", JSON.stringify(newData));
}