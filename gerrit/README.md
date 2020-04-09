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
    이 곳은 gerrit 기반으로 코드 리뷰를 진행한다. git-review를 통해서 올린 커밋이 gerrit에 반영되어 코드리뷰를 진행하고, +2점을 받으면 리모트에 서밋이 되는 구조이며 gerrit에 푸시되는 커밋들은 모두 master 브랜치로 커밋된다. <br />
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
<div>
  로컬에서 Relation Chain 비우기
  <br />
  <br />
  <sup>
    당시 CL: Add addUser form dialog component in Users page <br />
    코드리뷰 중 받은 커멘트들에 대해서는 해당 CL의 패치셋을 업로드하여 반영해야 하는데, git-review를 통해 커밋들을 dependency하게 푸시하면 독립적인 다른 커밋을 올리더라도 엮여있는 커밋들이 함께 패치되어 곤란해지는 상황이 생겨버린다. <br />
    이럴 때는 로컬 커밋들에 대해서 relation chain을 어떻게 끊어야 한다. <br />
    git pull을 통해 브랜치를 리모트와 동기화 시켜줄 때 working tree를 비우면서 relation chain에 걸려있는 커밋들을 없애면서 dependency review를 없앨 수 있다. <br />
    git-review에서 outstanding commits에 대한 기준을 어떻게 잡는건지 정확히 알고 싶은데 관련 레퍼런스를 못찾고 있담<br />
    
    git reset --soft HEAD^ // 최근 커밋 없앤 후 변경내용 저장
    
    git add .
    git stash
    git status // Working tree clean
    
    git reset --hard HEAD^ // Relation Chain에 걸려있는 커밋들을 삭제해서 working tree 비워주기

    git pull // 최신 리모트의 HEAD 가져오기

    git stash pop // conflict가 있다면 resolving 후 커밋 올리기 -> 새로운 relation chain
  </sup>
</div>
<br />
<br />
