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
    당시 CL: Routing code base restructuring <br />
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
    당시 CL: Add addUser form dialog component in Users page <br />
    이 곳은 gerrit 기반으로 코드 리뷰를 진행한다. git-review를 통해서 올린 커밋이 gerrit에 반영되어 코드리뷰를 진행하고, +2점을 받으면 리모트에 서밋이 되는 구조이며 gerrit에 푸시되는 커밋들은 모두 master 브랜치로 커밋된다. <br />
    코드리뷰 중 받은 커멘트들에 대해서는 해당 CL의 패치셋을 업로드하여 반영해야 하는데, git-review를 통해 커밋들을 dependency하게 푸시하면 독립적인 다른 커밋을 올리더라도 엮여있는 커밋들이 함께 패치되어 곤란해지는 상황이 생겨버린다. <br />
    이미 gerrit에 올라간 커밋에 대해서는 체리픽이 간단하지만, 로컬 커밋들에 대해서 relation chain을 어떻게 끊어야 할지 모르겠다.. 그래서 지금 CL이 git review [-R]해도 이미 올라간 CL들도 함께 올려지려 해서 못올리고 있담.. <br />
    git-review에서 outstanding commits에 대한 기준을 어떻게 잡는건지 궁금해서 docs와 구글링을 해보고 있는데 못찾는중 <br />
  </sup>
</div>
<br />
<br />
