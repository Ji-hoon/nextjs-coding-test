import { RegisterFormValues, DataPropsType } from "../global/types";

export function calcResultData(
  data: RegisterFormValues[] | undefined,
  result: DataPropsType
) {
  if (data === undefined) return;

  const teams = getTeams(data);

  const results = teams.map((team) => {
    const newResult = { ...result };
    newResult.teamName = team;
    let count = 0;
    let diff: number[] = [];

    data.forEach((data) => {
      if (data.teamName === team) {
        count++;

        newResult.SUM += data.result;
        newResult.memberCount = count;
        diff.push(data.result);
      }
    });

    const average = newResult.SUM / count;
    newResult.AVG = Number(average.toFixed(2));

    /*
     * NOTE : 표준편차 구하는 공식
     * (참고 : https://ko.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/variance-standard-deviation-population/a/calculating-standard-deviation-step-by-step )
     *
     * 1단계 - 측정하려는 그룹의 '평균'을 산출
     * 2단계 - 각 측정값과 평균값의 차이(절대값)의 '제곱'을 산출
     * 3단계 - 제곱 산출값들의 합계를 산출
     * 4단계 - 산출된 합계를 자료의 갯수로 나눈 값을 산출
     * 5단계 - 산출된 값의 제곱근을 산출
     */
    newResult.DIFF_SUM = [...diff];
    newResult.DIFF_SUM = newResult.DIFF_SUM.map((num) => {
      const powDiff = Math.pow(Math.abs(num - newResult.AVG), 2);
      return Number(powDiff.toFixed(2));
    });

    const diffSum = newResult.DIFF_SUM.reduce((acc, diff) => acc + diff, 0);
    const standardDeviation = Math.sqrt(diffSum / newResult.memberCount);
    newResult.SD = Number(standardDeviation.toFixed(2));

    return newResult;
  });

  return results;
}

function getTeams(data: RegisterFormValues[]) {
  const teams = data.map((data) => data.teamName);
  return Array.from(new Set(teams));
}
