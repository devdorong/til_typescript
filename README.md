# 배열

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
- 데이터의 종류와 상관없이 묶어서 관리함.
- 데이터들은 순서(index) 로 접근함.

## 1. 배열 만드는 법

```js
const 배열명 = [요소1, 요소2, 요소3, ......];
// 아래는 잘 활용하지 않음.
const 배열명 = new Array(5); // 5개의 데이터를 담아둘 배열
```

```ts
const 배열명: 종류[] = [요소1, 요소2, 요소3, ......];
const 배열명: Array<종류> = [요소1, 요소2, 요소3, ......];
// 아래는 잘 활용하지 않음.
const 배열명: 종류[] = new Array(5); // 5개의 데이터를 담아둘 배열
```

## 2. 배열의 요소에 값을 찾아서 활용하기

- index 는 `0`번 부터

```js
const 배열명 = [요소1, 요소2, 요소3];
배열명[0];
배열명[1];
배열명[2];
```

```ts
const 배열명: 종류[] = [요소1, 요소2, 요소3];
배열명[0];
배열명[1];
배열명[2];
```

## 3. 배열도 객체라서 속성이 있음. (`length`만 존재)

```js
const 배열명 = [요소1, 요소2, 요소3];
배열명.length; // 3
```

```ts
const 배열명: 종류[] = [요소1, 요소2, 요소3];
배열명.length; // 3
```

## 4. 원본 배열이 변경되어지는 이미 만들어진 기능(메소드)

- push : 배열의 마지막에 요소 `추가`

```js
const fruitsArr = ["사과", "딸기"];
fruitsArr.push("수박"); // 사과 딸기 수박

// 원본이 훼손됨 ! 주의사항
```

```ts
const fruitsArr: string[] = ["사과", "딸기"];
fruitsArr.push("수박"); // 사과 딸기 수박

// 원본이 훼손됨 ! 주의사항
```

- pop : 마지막 요소가 제거됨

```js
const fruitsArr = ["사과", "딸기"];
fruitsArr.pop(); // 사과

// 원본이 훼손됨 ! 주의사항
```

```ts
const fruitsArr: string[] = ["사과", "딸기"];
fruitsArr.pop(); // 사과

// 원본이 훼손됨 ! 주의사항
```

- unshift : 가장 앞쪽에 요소 추가

```js
const fruitsArr = ["사과", "딸기"];
fruitsArr.unshift("수박"); // 수박, 사과, 딸기

// 원본이 훼손됨 ! 주의사항
```

```ts
const fruitsArr: string[] = ["사과", "딸기"];
fruitsArr.unshift("수박"); // 수박, 사과, 딸기

// 원본이 훼손됨 ! 주의사항
```

- shift : 가장 앞쪽 요소 제거

```js
const fruitsArr = ["사과", "딸기"];
fruitsArr.shift(); // 딸기

// 원본이 훼손됨 ! 주의사항
```

```ts
const fruitsArr: string[] = ["사과", "딸기"];
fruitsArr.shift(); // 딸기

// 원본이 훼손됨 ! 주의사항
```

- splice : 원하는 인덱스 제거

```js
const fruitsArr = ["사과", "딸기", "수박"];
fruitsArr.splice(1, 2); // 딸기~수박 제거 1번째 인덱스부터 2개 제거

// 원본이 훼손됨 ! 주의사항
```

```ts
const fruitsArr: string[] = ["사과", "딸기", "수박"];
fruitsArr.splice(1, 2); // 딸기~수박 제거 1번째 인덱스부터 2개 제거

// 원본이 훼손됨 ! 주의사항
```

- sort : 배열의 요소를 정렬

```js
const fruitsArr = ["사과", "딸기", "수박"];
fruitsArr.sort(); // 딸기, 사과, 수박 순서정렬
// 원본이 훼손됨 ! 주의사항

const enArr = ["b", "c", "f", "e", "a"];
enARr.sort(); // a, b, c, d, e
// 원본이 훼손됨 ! 주의사항

const numArr = [3, 5, 2, 1, 4];
numArr.sort(); // 1,2,3,4,5
// 원본이 훼손됨 ! 주의사항

const numArr1 = [13, 19, 3, 5, 2, 1, 4];
numArr1.sort(); // 1,13,19,2,3,4,5
// 위의 결과는 일반적이지 않다.
// 원본이 훼손됨 ! 주의사항

// 올림 차순으로 정렬하려면 추가 작업
numArr1.sort((a, b) => a - b); // 1,3,5,7,12,19
// 원본이 훼손됨 ! 주의사항
// 내림 차순으로 정렬하려면 추가 작업
numArr1.sort((a, b) => b - a); // 19,12,7,5,3,1
// 원본이 훼손됨 ! 주의사항
```

```ts
const fruitsArr: string[] = ["사과", "딸기", "수박"];
fruitsArr.sort(); // 딸기, 사과, 수박 순서정렬
// 원본이 훼손됨 ! 주의사항

const enArr: string[] = ["b", "c", "f", "e", "a"];
enARr.sort(); // a, b, c, d, e
// 원본이 훼손됨 ! 주의사항

const numArr: number[] = [3, 5, 2, 1, 4];
numArr.sort(); // 1,2,3,4,5
// 원본이 훼손됨 ! 주의사항

const numArr1: number[] = [13, 19, 3, 5, 2, 1, 4];
numArr1.sort(); // 1,13,19,2,3,4,5
// 위의 결과는 일반적이지 않다.
// 원본이 훼손됨 ! 주의사항

// 올림 차순으로 정렬하려면 추가 작업
numArr1.sort((a, b) => a - b); // 1,3,5,7,12,19
// 원본이 훼손됨 ! 주의사항
// 내림 차순으로 정렬하려면 추가 작업
numArr1.sort((a, b) => b - a); // 19,12,7,5,3,1
// 원본이 훼손됨 ! 주의사항
```

- reverse : 순서를 역으로 저장함.

```js
const numArr = [1, 2, 3, 4, 5];
numArr.reverse(); // [5,4,3,2,1]
// 원본이 훼손됨 ! 주의사항
```

```ts
const numArr: number[] = [1, 2, 3, 4, 5];
numArr.reverse(); // [5,4,3,2,1]
// 원본이 훼손됨 ! 주의사항
```

- fill : 요소에 값을 채운다.

```js
const numArr = [1, 2, 3, 4, 5];
numArr.fill(0); // 0,0,0,0,0
// 원본이 훼손됨 ! 주의사항
```

```ts
const numArr: number[] = [1, 2, 3, 4, 5];
numArr.fill(0); // 0,0,0,0,0
// 원본이 훼손됨 ! 주의사항
```

## 5. 원본 배열을 복사해서 활용하는 이미 만들어진 기능(메소드)

- 데이터 불변성(immutabillity) 을 유지하는 메소드 (`star 100만개`)
- `원본 배열`과 `복사본 배열`의 `요소를 비교`해서 다르면 화면 새로 그림(`리렌더링`)

### 5.1. map (정말 자주 활용)

- 원본 배열을 `복사`하여 새로운 배열 생성

```js
const 원본배열 = [1, 2, 3, 4];
const 복사배열 = 원본배열.map(function (요소, 인덱스, 원본배열) {
  return 요소;
}); // 복사배열 = [1,2,3,4]
// html 예제

const 복사배열 = 원본배열.map(function (요소, 인덱스, 원본배열) {
  return `<div>${요소}</div>`;
}); // 복사배열 = [<div>1</div>,<div>1</div>,<div>1</div>,<div>1</div>]
```

## 5.2. filter (정말 자주 활용)

- 조건이 `참`인 것만 모은 배열생성

```js
const numArr = [1, 4, 3, 5, 8, 9];
const arr = numArr.filter(function (요소, 인덱스, 원본배열) {
  if (요소 % 2) {
    // 홀수 만 추출
    return 요소; // 1,3,5,9
  }
});
```

```js
const hong = { age: 10, study: true };
const kim = { age: 20, study: false };
const park = { age: 22, study: true };
const 학생목록배열 = [hong, kim, park];
const 공부한사람배열 = 학생목록배열.filter(function (요소, 인덱스, 원본배열) {
  if (요소.study) {
    return 요소;
  }
});
```

```ts
type UserType = { age: number; study: boolean };
const hong: UserType = { age: 10, study: true };
const kim: UserType = { age: 20, study: false };
const park: UserType = { age: 22, study: true };
const 학생목록배열: UserType[] = [hong, kim, park];
const 공부한사람배열: UserType[] = 학생목록배열.filter(function (
  요소: UserType,
  인덱스: number,
  원본배열: UserType[]
) {
  if (요소.study) {
    return 요소;
  }
});
```

### 5.3. concat : 여러 개의 배열을 하나로 합친 배열

```js
const numArr = [2, 4, 5, 8, 2];
const strArr = ["a", "b", "c"];
const result = numArr.concat(strArr);
// [2,4,5,8,2,"a","b","c"]

const result;
for(let i = 0; i < strArr.lenght; i++) {
    numArr.push(strArr[i]);
}
```

### 5.4. join : 배열을 하나의 문자열로 표현하기

```js
const numArr = [1, 2, 3];
const str1 = numArr.join(); // "1,2,3"
const str2 = numArr.join("@"); // "1@2@3"
```

### 5.5 includes : 배열의 요소에 원하는 값이 있는가?

```js
const numArr = [1, 2, 3];
const result = numArr.includes(3); //true
```

```ts
const numArr: number[] = [1, 2, 3];
const result: boolean = numArr.includes(3); // true
```
