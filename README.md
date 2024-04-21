# NextJS + TypeScript 로 진행한 과제 입니다.

설문조사 서비스 구현을 위해 사용된 기술과 라이브러리 그리고 구현된 필수 요구사항과 추가 구현 사항을 기술했습니다.

&nbsp;

### 사용 기술 / 라이브러리

- **프레임워크** : NextJS 14 (App router)
- **클라이언트 전역 상태 관리** : Redux (Redux-toolkit)
- **폼 관리** : React hook form
- **차트 라이브러리** : Nivo
- **스타일링** : Tailwind CSS
- **DB** : Prisma

&nbsp;

### 폴더 구조

**src** <br>
ㄴ **app**<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ **api**<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ **dashboard**<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ **questions**<br>
ㄴ **components** : 클라이언트 컴포넌트<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ **atoms** : 최소 단위의 컴포넌트<br>
&nbsp;&nbsp;&nbsp;&nbsp;ㄴ **modules** : atom이 조합된 컴포넌트<br>
ㄴ **global** : 공통 type, constants<br>
ㄴ **store** : 전역 상태 관련 provider, reducer<br>
ㄴ **utils** : 공통 유틸 함수<br>

&nbsp;

### 필수 요구사항

- [x] 사용자는 최초 페이지 진입 시 설문조사 소개 화면에 진입하며, 팀 명과 이름을 입력하는 인풋필드와 설문조사 시작하기 버튼을 확인할 수 있어야 합니다.
- [x] 설문조사 첫 번째 문항은 유형 A 타입 (1~5점 선택지 중 하나를 선택)이 제공되며, 반드시 1개의 옵션을 선택해야만 다음 버튼을 클릭하여 다음 문항으로 넘어갈 수 있어야 합니다.
- [x] 설문조사 두 번째 문항은 유형 B 타입 (1~10점 사이의 점수를 직접 입력)이 제공되며, 반드시 1이상 10 이하의 값을 입력해야만 다음 버튼을 클릭 하여 다음 문항으로 넘어갈 수 있어야 합니다. (이전 버튼 클릭 시 첫 번째 문항으로 이동)
- [x] 설문조사 세 번째 문항은 유형 C 타입 (1~5점 선택지 중 여러 개를 선택하고 점수는 합산)이 제공되며, 반드시 1개 이상의 옵션을 선택해야만 화면 우측 하단 완료 버튼을 클릭하여 대시보드 페이지로 이동할 수 있습니다. (이전 버튼 클릭 시 두 번째 문항으로 이동)
- [x] 각 설문 문항 페이지에서 이전 문항으로 이동 후 수정이 가능해야 합니다.
- [x] 마지막 문항에서 완료 버튼 클릭 시 이동되는 대시보드 페이지에서는 팀별 각종 통계(합계, 평균, 표준 편차)를 확인 할 수 있어야 합니다.
- [x] 입력된 설문조사 결과는 로컬 스토리지에 저장되어 새로고침 이후에도 확인할 수 있어야 합니다.

&nbsp;

### 추가 구현 사항

- [x] 설문조사 첫 화면에서 모든 필드가 입력되지 않은 경우, 시작 버튼 클릭 시 에러 메시지가 노출되며 미입력 필드로 자동 포커스 할당되도록 구현
- [x] 설문조사 종료 후 대시보드 페이지 진입 시, 본인의 점수와 그에 따른 응원 메시지가 표시되도록 구현
- [ ] 브라우저 너비에 따라서 반응형 디자인을 적용 (Break Point : 1024 > 720 > 500)
