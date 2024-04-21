import { RegisterFormValues, DataPropsType } from "../global/types";

export function calcResultData(
  data: RegisterFormValues[],
  result: DataPropsType
) {
  const teams = getTeams(data);

  const results = teams.map((team) => {
    const newResult = { ...result };
    newResult.teamName = team;
    let count = 0;

    data.forEach((data) => {
      if (data.teamName === team) {
        count++;

        if (Object.hasOwn(newResult, "SUM") && newResult.SUM !== undefined) {
          newResult.SUM = newResult.SUM + data.result;
        }
        if (Object.hasOwn(newResult, "AVG") && newResult.AVG !== undefined) {
          newResult.AVG = newResult.AVG + data.result;
        }

        newResult.memberCount = count;
      }
    });

    if (Object.hasOwn(newResult, "AVG") && newResult.AVG !== undefined) {
      const average = newResult.AVG / count;
      newResult.AVG = Number(average.toFixed(2));
    }

    return newResult;
  });

  return results;
}

// TODO : 표준편차 함수 삭제 필요
export function calcStandardDeviationData(data: RegisterFormValues[]) {
  const teams = getTeams(data);

  const results = [
    {
      teamName: "gogo",
      SD: 16,
      memberCount: 1,
    },
    {
      teamName: "ioio",
      SD: 10,
      memberCount: 2,
    },
  ];

  return results;
}

function getTeams(data: RegisterFormValues[]) {
  const teams = data.map((data) => data.teamName);
  return Array.from(new Set(teams));
}
