<div align="center">
  <h1>
    <br/>
    <br/>
    👩🏻‍💻
    <br />
    Intern : Practice Ground
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <br />
    <br />
    <a href="https://github.com/purelledhand/sq-intern-practice-ground">업무관련 스터디가 필요할 때 사용하는 연습용 저장소</a>. 2020.03.02 ~ 2020.06.30
    <br />
    디렉토리 별로 담당했던 업무, 해당 업무에서 필요했던 스터디 기록하기
  </sup>
  <br />
  <br />
  <br />
  <br />
</div>
<div>
  Typescript
  <br />
  <br />
  <sup>
    CL: Routing code base restructuring <br />
    스터디: 작업 중 TS object 참조 관련 에러 핸들링 <br />
    https://cheatsheets.joshuatz.com/cheatsheets/typescript/ <br />
    TS Error 핸들링 중 Top-down식 대처말고 Bottom-up으로 제대로 공부해야겠다는 생각이 들어서 스터디 시작 <br />
    컨셉이 확연히 들어날 수 있는 micro 예시 중심으로 정리할 예정 <br />
  </sup>
</div>
<br />
<br />
<div>
  Gerrit
  <br />
  <br />
  <sup>
    https://github.com/purelledhand/sq-intern-practice-ground/blob/master/gerrit/README.md <br />
    모노레포기반에 브랜치를 따지 않으며 gerrit 기반으로 코드리뷰를 진행하는 환경에 적응하면서 겪은 이슈들을 위 링크에 정리해 놓았다. <br /> 
    정리한 이슈들 🐥 <br />
    1. Gerrit 및 Jenkins 환경 정리 <br />
    2. Relation Chain과 Jenkins 배포 관련 이슈 <br />
    3. 로컬에서 쌓인 Relation Chain 비우기 <br />
  </sup>
</div>
<br />
<br />
<div>
  react-hook-form을 이용한 폼 유효성 검증<br />
  React-Hook-Form + MUI 도입 안정성 테스트)
  <br />
  <br />
  <sup>
    CL: Add AddUserDialog Component in Users page <br />
    새로 맡고 있는 업무에서 form과 관련하여 react-hook-form 라이브러리 도입을 제안했다. <br />
    다양한 handler 함수들을 useForm 훅을 통해 제공해주기도 하고, Typescript으로 제작되어서 폼 내 각 value type에 대해 typesafe하게 사용할 수 있으며 렌더링 횟수 및 마운트 시간도 다른 라이브러리에 비해 훨씬 잘 최적화되어있기 때문이다.<br />
    시니어 엔지니어 분께서는 개발이 간편해지는 이점이 있다면 찬성하지만, 해당 프로젝트에서 사용하고 있는 MUI 컴포넌트와 함께 사용하는 데에도 지장이 없는지 여쭤보셨다. <br />
    Contents <br />
    1. 그래서 MUI 컴포넌트 폼과 react-hook-form 사용이 용이한지 확인해보는 테스트용 프로젝트 <br />
    2. native select tag에 inputRef가 직접 적용되지 않는 MUI select 태그에서 value값을 register하고 상태관리 없이 효율적으로 관리하는 법 <br />
    3. password validation <br />
  </sup>
</div>
<br />
<br />
<div>
  Snackbar with notistack
  <br />
  <br />
  <sup>
    CL: Add Snackbar component and use-case in login page <br />
    snackbar 또는 toast를 쌓아서 디스플레이할 수 있도록 도와주는 커스텀 라이브러리 notistack을 사용하여 컴포넌트화했다. <br />
    https://iamhosseindhv.com/notistack <br />
  </sup>
</div>
<br />
<br />
<div>
  Protobuf to JSON
  <br />
  <br />
  <sup>
    Example for protobuf for js to json. <br />
    1. get fake api using protobuf, grpc <br />
    2. get json data <br />
    
    $ pbjs --keep-case -t static-module -w es6 -o src/model/proto/index.js externalProto/**/*.proto && pbts -o src/model/proto/index.d.ts src/model/proto/index.js

  </sup>
</div>
<br />
<br />
