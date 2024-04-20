import { RegisterFormValues } from "../global/types";

export function calcSumData(data: RegisterFormValues[]) {
  const teams = getTeams(data);

  const results = teams.map((team) => {
    const result = {
      teamName: team,
      SUM: 0,
    };

    data.forEach((data) => {
      if (data.teamName === team) {
        result.SUM += data.result;
      }
    });

    return result;
  });

  return results;
}

export function calcAverageData(data: RegisterFormValues[]) {
  const teams = getTeams(data);

  const results = teams.map((team) => {
    const result = {
      teamName: team,
      AVG: 0,
    };

    let count = 0;

    data.forEach((data) => {
      if (data.teamName === team) {
        count++;
        result.AVG = (result.AVG + data.result) / count;
      }
    });

    return result;
  });

  return results;
}

export function calcStandardDeviationData(data: RegisterFormValues[]) {
  const teams = getTeams(data);

  const results = [
    {
      teamName: "gogo",
      SD: 16,
    },
    {
      teamName: "ioio",
      SD: 10,
    },
  ];

  return results;
}

function getTeams(data: RegisterFormValues[]) {
  const teams = data.map((data) => data.teamName);
  return Array.from(new Set(teams));
}
