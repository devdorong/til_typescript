# 조건문(Condition)

## 1. if 문

- 조건의 결과가 true 이면 { 안쪽 실행 }

```ts
const age: number = 18;
if (age >= 18) {
  console.log("성인이십니다.");
}
```

- 만약 { 한줄만 실행 한다면? }

```ts
const age: number = 18;
if (age >= 18) console.log("성인이시군요");

// 두줄 이상일 경우는 반드시 중괄호로 묶기
if (age >= 18) {
  console.log("성인이시군요");
  console.log("입장하세요");
}
```

- if ~ else 구문

```ts
const age: number = 10;
if (age > 18) {
  console.log("성인이시군요");
} else {
  console.log("나중에 오세요");
}
```

- if ~ else if ~ else if ~ else

```ts
const age: number = 25;
if (age >= 40) {
  console.log("40 대 이상입니다.");
} else if (age >= 30) {
  console.log("30 대 이상입니다.");
} else if (age >= 20) {
  console.log("20 대 이상입니다.");
} else {
  console.log("10 대 입니다.");
}
```

- 예측해 봅시다.

```ts
const age: number = 25;
// 논리적으로 잘못 코딩함.
if (age >= 20) {
  console.log("20 대 이상입니다.");
} else if (age >= 30) {
  console.log("30 대 이상입니다.");
} else if (age >= 40) {
  console.log("40 대 이상입니다.");
} else {
  console.log("10 대 입니다.");
}
```

- 예측해 봅시다.

```ts
const result: number = 0;
if (result) {
  console.log("결과 참");
} else {
  comnsole.log("결과 거짓");
}
// falshy 한 값이므로 false 로 판단 : 결과 거짓
// false, null, undefined, "", 0, NaN
```

```ts
const result: number = 0;
if (result === 0) {
  console.log("결과 참");
} else {
  comnsole.log("결과 거짓");
}
// 결과 참
```

## 2. switch

- 값이 일치하는지를 비교해서 코드 분기

- switch 문의 값은 직접 원시값으로 작성시 오류발생이 가능
- TypeScript 에 있는 `enum` 을 사용하시길 권장
- enum 은 정해진 값만 사용하게 권장할 때
- 인터넷 상태 등에 대한 내용을 코드 할때 많이 사용

```ts
enum Level {
  L1 = "1층",
  L2 = "2층",
  L3 = "3층",
  L4 = "4층",
  L5 = "5층",
}
const level: string = "5층";
switch (level) {
  case Level.L5:
    console.log("5층입니다.");
    break;
  case Level.L4:
    console.log("4층입니다.");
    break;
  case Level.L3:
    console.log("3층입니다.");
    break;
  case Level.L2:
    console.log("2층입니다.");
    break;
  case Level.L1:
    console.log("1층입니다.");
    break;
  default:
    console.log("값이 아무것도 같지 않다");
    break;
}
```

- 네트워크 상태를 체크해 보자.

```ts
enum NetworkStatus {
  Offline = "OFF",
  Wifi = "Wifi",
  LTE = "LTE",
  G5 = "5G",
}

switch (net) {
  case NetworkStatus.G5:
    break;
  case NetworkStatus.LTE:
    break;
  case NetworkStatus.Wifi:
    break;
  case NetworkStatus.Offline:
    break;
}
```

# 반복문(Loop)

- 조건이 참이면 코드를 반복 실행함.

## 1. for

- `조건이 참`이면서 `반복 횟수를 알때` 사용함.

```ts
const 반복횟수:number = 10;
for(let 초기값:number = 0; 초기값 < 반복횟수; 초기값++;) {
  // 코드 실행

}

const arr:number[] = [1,2,3];
for (let i:number = 0; i < arr.length; i++;) {
  arr[i];
}

const total:number = 10;
for (let i:number = 0; i < tatal; i++) {
if(i === 5) {
  break; // for 구문을 벗어남
}
// 실행코드
}

const total:number = 10;
for (let i:number = 0; i < tatal; i++) {
if(i === 5) {
  continue; // for 실행코드를 건너띄고 계속 반복
}
// 실행코드
}

const total: number = 10;
for(let i:number = 0; i <total; i ++)
{
  for(let j:number=0; j < 5; j++) {
    if(j === 2) {
      break;
    }
  }
}

```

## 2. while

- `조건이 참` 이면서 `반복 횟수를 모를때` 사용

```ts
// 아래 코드는 한번도 실행되지 않는다. 조건이 거짓이므로
let count: number = 0;
while (count < 5) {
  // 실행하라.
  count++; // 반드시 조건을 거짓으로 만드는 코드 필요, 없을시 무한루프
}
```

## 3. do while

- `일단 한번은 실행하자`. 그리고, `조건이 참` 이면서 `반복 횟수를 모를때` 사용

```ts
let tries: number = 0;
do {
  // 할일 코드 실행

  // 무한 루프 방지 거짓을 만들 값
  tries++;
} while (tries < 5);
{
  // 실행하라.
  tries++; // 반드시 조건을 거짓으로 만드는 코드 필요, 없을시 무한루프
}
```

## 4. for ... of

- 배열의 각각의 요소에 값을 알아낼때

```ts
const arr:number[] = [1,2,3];
for (let i:number = 0; i < arr.length; i++;) {
  arr[i];
}

for (let item of arr) {
  item; // 1 2 3
}


```

## 5. for ... in

- `객체`의 `속성명`을 알아낼때

```ts
const hong = { age: 10, city: "daegu" };
for(let key in hong) {
  key;        // age city
  hong[hye];  // 10  daegu
}

```
