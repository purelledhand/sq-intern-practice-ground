## React-Hook-Form + Mui 도입 안정성 테스트

[React-Hook-Form UI 라이브러리에 적용하기](https://react-hook-form.com/kr/get-started#WorkwithUIlibrary)

위 문서에 잘 나와있듯이, Material-UI 컴포넌트에 적용하는 데 있어서 불편한 점은 전혀 없었다.<br />
기존 html input element property인 ref대신 inputRef를 사용해주는 것 빼고는 예제와 다르게 사용해야 할 코드나 트릭?들도 없었다.<br />

다만 도입을 제안한 프로젝트가 백오피스 프로덕트이고 코드리뷰가 빡센 환경이라 기존 기술 스택이나 코드베이스와 최대한 비슷하게 가야하는 상황인지라 
프로덕트 내 얼마 없는 폼들에 이 라이브러리를 도입할만한지에 대해서는 더 생각해봐야 할 것 같다.
