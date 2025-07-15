# ts 심화 - 기본타입

- 굳이 타입을 작성하지 않아도 괜찮다.
- VSCode 가 `타입추론`을 잘해 준다면 생략하자.

## 총 7가지의 기본타입

```ts
let strVar = "string";
let numVar = 1;
let bigVar = BigInt(999999);
let boolVar = false;
let symbolVar = Symbol("symbol");
// 아래는 타입추론이 문법적으로 다르다.
// any로 추론됨으로, 타입을 명확히 명시해주자.
let nullVar: null = null;
let undeVar: undefined = undefined;
```

## TS 에만 존재하는 기본형 타입

### 1. any

- 정말 자주 사용합니다. 타입이 중요하지 않을때
- 사용은 하지만, 과도한 사용은 금물
- `치트키`
- any 타입은 어디에나 사용가능
- any 타입은 어느곳에도 할당, 즉 대입이 가능함.

```ts
let anyVar: any = 1450;
let strVar = anyVar;
let numVar = anyVar;
let bigVar = BigInt(anyVar);
let boolVar = anyVar;
let symbolVar = anyVar;
let nullVar = anyVar;
let undefinedVar = anyVar;
```

### 2. unknown

- any 와 용도가 비슷한 느낌
- any 처럼 어떤것도 값을 담을 수 있다.
- 다른 변수에 담을수는 없다.
- 입력은 되지만, 할당하지는 못한다.

```ts
let unknownVar: unknown = 50;
unknownVar = 100;
unknownVar = "string";
unknownVar = true;

// 아래 부터는 에러다.

let numVar: number = unknownVar;
// 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.
```

### 3. never

- 어떤 타입도 `저장 또는 리턴하지 않겠다`는 의지표현
- 절대로 발생하지 않을 것이라는 의지표현
- 예외처리, 무한루프 처리에 활용
- 값을 입력하지도 못하고, 할당하지도 못한다

```ts
// 아래는 모두 다 에러입니다.
let neverVar: never = null;
let never2Var: never = undefined;
let never3Var: never = 1;
let never4Var: never = "string";
```

# ts 심화 - 목록(배열) 타입

- 리스트 타입

```ts
// 타입추론 잘 정리됨
let numberArr = [1, 2, 3];
let strArr = ["hong", "kim", "park"];
let Arr = [1, "hong", false];
```

```ts
// 제네릭으로 구성
let numberArr: Array<number> = [1, 2, 3];
let strArr: Array<string> = ["hong", "kim", "park"];
let Arr: Array<string | number | boolean> = [1, "hong", false];
```

# ts 심화 - Type, Interface

## 1. type 키워드로 정의하기

- 기본형 타입도 type 키워드로 별칭을 만들 수 있다.

```ts
type Hitype = string;
let aaa: Hitype = "Hello";

type AgeType = number;
let bbb: AgeType = 20;
```

- `복잡한 객체 형태`의 데이터도 type 키워드로 별칭을 만들 수 있다.

```ts
type IdolType = {
  name: string;
  age: string;
  year: number;
};

let bts: IdolType = {
  name: "h",
  age: "20",
  year: 2020,
};
```

## 2. interface 키워드로 정의하기
