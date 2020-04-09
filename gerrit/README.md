<div align="center">
  <h1>
    <br/>
    <br/>
    🦊
    <br />
    Gerrit 기반 코드관리
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    <br />
    <br />
    모노레포 기반에 브랜치를 안따고 Gerrit을 통해 코드리뷰하는 환경 적응기
    <br />
    Gerrit + Jenkins
  </sup>
  <br />
  <br />
  <br />
  <br />
</div>
<div>
  Gerrit 및 Jenkins 환경 정리
  <br />
  <br />
  <sup>
    커밋이 Gerrit으로 올라가면, 올라간 CL에 대해 Jenkins가 smoke test(lint 및 build 테스트)를 진행한다.<br />
    빌드가 성공했다면 jenkins artifact를 통해 빌드된 페이지를 확인할 수 있다.<br />
    smoke test마다 테스트 결과에 대한 링크를 확인할 수 있으며 빌드된 파일 목록과 console output(빌드 실패 시 확인하기 매우 용이)을 포함해서 다양한 정보를 제공한다.<br />
  </sup>
</div>
<br />
<br />
<div>
  Relation Chain과 Jenkins 배포 이슈
  <br />
  <br />
  <sup>
    상황: Relation Chain이 A - B - C - D로 걸려있고, A가 Submit되었으나, A 코드에서 smoke test 실패를 야기하는 코드가 있는 상황<br />
    이런 상황에서는 A에 존재하는 해당 코드로 인해 B C D 모두 smoke test가 failed된다.<br />
    이는 Jenkins에서 parent commit을 기준으로 smoke test가 돌기 때문이며, B C D CL에 모두 수정 패치셋을 업로드 할 필요 없이 rebase를 통해 relation chain을 끊어주면 된다.<br />
  </sup>
</div>
<br />
<br />
