import { QUESTION_TYPES } from "./constants";

export const questions = [
  {
    type: QUESTION_TYPES.TYPE_A,
    title: "일주일동안 20분 이상의 운동을 몇 회 하시나요?",
    options: ["1회", "2회", "3회", "4회", "5회 이상"],
  },
  {
    type: QUESTION_TYPES.TYPE_B,
    title:
      "플랭크 자세로 몇 분을 버틸 수 있나요? 1~10분 사이의 값을 입력해주세요.",
    ranges: [1, 10],
  },
  {
    type: QUESTION_TYPES.TYPE_C,
    title: "아래 보기 중에서 10회 이상 수행 가능한 운동 방식을 선택해주세요.",
    options: [
      "윗몸 일으키기 (1점)",
      "스쿼트 (2점)",
      "런지 (3점)",
      "팔굽혀펴기 (4점)",
      "턱걸이 (5점)",
    ],
  },
];
