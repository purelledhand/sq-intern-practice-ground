## `unknown` type in TypeScript 3.0

> TypeScript 3.0 부터 새로 소개된 `unknown`타입에 대해, 그리고 `any`타입과의 차이점에 대해 정리



#### 공식 도큐먼트에서의 소개

https://blogs.msdn.microsoft.com/typescript/2018/07/12/announcing-typescript-3-0-rc/#the-unknown-type

> TypeScript 3.0 introduces a new type called `unknown` that does exactly that. Much like `any`, any value is assignable to `unknown`; however, unlike `any`, you cannot access any properties on values with the type `unknown`, nor can you call/construct them. Furthermore, values of type `unknown` can only be assigned to `unknown` or `any`.
>
> As an example, swapping the above example to use `unknown` instead of `any` forces turns all usages of foo into an error:

* any 타입은 unknown 타입에 할당이 가능하지만, any는 unknown 타입 내의 value들에 접근과 call/construct가 불가능 하다.

* unknown 타입의 value는 unknown과 any에만 할당될 수 있다.

  * 에러 예시

    > Type 'EntryCollection<unknown>' is not assignable to type 'EntryCollection<T>'.
    > Type 'unknown' is not assignable to type 'T'.ts(2345)



#### `any` 타입의 문제점, 대체제인 `unknown` 타입

개발자들이 넣으면 안되는(에러를 야기하는) 다른 타입의 변수 및 파라미터에 실수로 any 타입을 할당시켜서 런타임에러를 초래할 수 있다는 것이다. TypeScript 도입의 근본적인 이유 중 하나가 타입 에러를 컴파일 타임에 감지하는 것인데, 이 이유를 무색하게 만드는 문제점이다.

`any` 타입의  type-safe counterpart가 `unknown`이라고 보면 될 것 같다.

비교 1:

```typescript
function foo():any { return 1 } 
let x:string = foo()
x.bold() // runtime error

function foo(): unknown { return 1 } 
let x:string = foo() // compile time error we need to think about why we are doing this.
```

비교 2:

```typescript
const B = <T>(t: T, u: T) => {
    console.log(t);
    console.log(u);
};
const B1 = (t: unknown, u: unknown) => {
    console.log(t);
    console.log(u);
};

B('Hello', 100); //compile time error 
B1(100, 'Hello'); //compiles
```



#### 활용

> 꼭 알아두어야 할 핵심은 어떤 변수에 `unknown` 타입을 할당한 경우 그 변수는 반드시 어떤 타입인지 타입 가드를 거치거나 타입 지정을 해 주어야 오롯이 지정된 타입으로 사용할 수 있다는 것이다.
>
> [unknown 타입 활용하기](https://rinae.dev/posts/practical-advanced-typescript-summary#unknown-타입-활용하기)



### Reference

https://stackoverflow.com/questions/51569567/typescript-3-0-unknown-type-as-an-alternative-to-any-or-generics

[https://rinae.dev/posts/practical-advanced-typescript-summary#unknown-%ED%83%80%EC%9E%85-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0](https://rinae.dev/posts/practical-advanced-typescript-summary#unknown-타입-활용하기)

https://mariusschulz.com/blog/the-unknown-type-in-typescript




> 갑자기 궁금해져서 찾아보니 마크다운 파일 제목 네이밍 케이스는 spinal-case가 권장된다고 한다.

