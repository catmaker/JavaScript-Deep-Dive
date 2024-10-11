## 9장 타입 변환과 단축 평가

### 타입 변환이란?

개발자가 의도적으로 값이 타입을 변환하는 것을 **명시적 타입 변환** 또는 **타입 캐스팅**이라 한다.

```js
// 명시적 타입 변환
// x의 값이 변경된 것은 아니다.
var x = 1;
var str = x.toString();

console.log(typeof str, str); // string 10
console.log(typeof x, x); // number 10
```

개발자의 의도와 상관없이 표현식을 평가하는 도중에 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환 되는 것을 **암묵적 타입 변환** 또는 **강제 타입 변환**이라한다.

```js
// 문자열과 숫자의 덧셈 연산
let result = "3" + 2;
console.log(result); // 출력 결과: "32"
```

명시적 타입 변환이나 암묵적 타입 변환이 기존 원시 값을 직접 변경하는 것은 아니다. 원시 값은 변경 불가능한 값이므로 변경할 수 없다. 타입 변환이란 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것이다.

### 암묵적 타입 변환

#### 숫자 타입으로 변환

| **입력 값**  | **변환 결과** | **설명**                             |
| ------------ | ------------- | ------------------------------------ |
| `+''`        | `0`           | 빈 문자열은 숫자 `0`으로 변환됨      |
| `+'0'`       | `0`           | 문자열 `'0'`은 숫자 `0`으로 변환됨   |
| `+'123'`     | `123`         | 문자열 `'123'`은 숫자 `123`으로 변환 |
| `+true`      | `1`           | 불리언 `true`는 숫자 `1`로 변환됨    |
| `+false`     | `0`           | 불리언 `false`는 숫자 `0`으로 변환됨 |
| `+null`      | `0`           | `null`은 숫자 `0`으로 변환됨         |
| `+undefined` | `NaN`         | `undefined`는 숫자로 변환 시 `NaN`   |

#### 문자열 타입으로 변환

| **입력 값**                | **숫자 타입 변환** | **문자 타입 변환**  | **설명**                                                            |
| -------------------------- | ------------------ | ------------------- | ------------------------------------------------------------------- |
| `0 + ''`                   | `0`                | `'0'`               | 숫자 `0`과 빈 문자열이 더해져 `'0'`으로 변환됨                      |
| `123 + ''`                 | `123`              | `'123'`             | 숫자 `123`과 빈 문자열이 더해져 `'123'`으로 변환됨                  |
| `true + ''`                | `1`                | `'true'`            | `true`와 빈 문자열이 더해져 `'true'`로 변환됨                       |
| `false + ''`               | `0`                | `'false'`           | `false`와 빈 문자열이 더해져 `'false'`로 변환됨                     |
| `null + ''`                | `0`                | `'null'`            | `null`과 빈 문자열이 더해져 `'null'`로 변환됨                       |
| `undefined + ''`           | `NaN`              | `'undefined'`       | `undefined`와 빈 문자열이 더해져 `'undefined'`로 변환됨             |
| `Infinity + ''`            | `Infinity`         | `'Infinity'`        | `Infinity`와 빈 문자열이 더해져 `'Infinity'`로 변환됨               |
| `{} + ''`                  | `0`                | `'[object Object]'` | 빈 객체는 숫자로 변환 시 `0`, 문자로는 `'[object Object]'`로 변환됨 |
| `[] + ''`                  | `0`                | `''`                | 빈 배열은 숫자로 변환 시 `0`, 문자로는 빈 문자열로 변환됨           |
| `[{ name: 'Alice' }] + ''` | `NaN`              | `'[object Object]'` | 배열이 숫자로 변환 시 NaN, 문자로는 `'[object Object]'`로 변환됨    |

#### 불리언 타입으로 변환

| **입력 값**                      | **결과** | **설명**                                          |
| -------------------------------- | -------- | ------------------------------------------------- |
| `if('') {}`                      | -        | 빈 문자열은 falsy 값이므로 블록이 실행되지 않음   |
| `if('hello') {}`                 | -        | `'hello'`는 truthy 값이므로 블록이 실행됨         |
| `if(0) {}`                       | -        | 숫자 `0`은 falsy 값이므로 블록이 실행되지 않음    |
| `if(1) {}`                       | -        | 숫자 `1`은 truthy 값이므로 블록이 실행됨          |
| `if(true) {}`                    | -        | `true`는 truthy 값이므로 블록이 실행됨            |
| `if(false) {}`                   | -        | `false`는 falsy 값이므로 블록이 실행되지 않음     |
| `if(null) {}`                    | -        | `null`은 falsy 값이므로 블록이 실행되지 않음      |
| `if(undefined) {}`               | -        | `undefined`는 falsy 값이므로 블록이 실행되지 않음 |
| `for (let i = 0; i < 3; i++) {}` | -        | `i`가 `0`, `1`, `2`일 때 블록이 실행됨            |
| `for (let i = 0; i < 0; i++) {}` | -        | `i`가 `0`일 때 블록이 실행되지 않음               |

### 명시적 타입 변환

개발자의 의도에 따라 명시적으로 타입을 변경하는 방법은 다양하다. 표준 빌트인 생성자 함수(String,Number,Boolean)를 new 연산자 없이 호출하는 방법과 빌트인 메서드를 사용하는 방법, 그리고 앞에서 살펴본 암묵적 타입 변환을 이용하는 방법이 있다.

#### 문자열 타입으로 변환

> String 생성자 함수를 new 연산자 없이 호출하는 방법

```javascript
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
```

> Object.prototype.toString 메서드를 사용하는 방법

```js
(1).toString(); // "1"
NaN.toString(); // "NaN"
Infinity.toString(); // "Infinity"
```

### 숫자 타입으로 변환

> Number 생성자 함수를 new 연산자 없이 호출하는 방법

```js
Number("0"); // 0
Number("-1"); // -1
Number("10.11"); // 10.11
```

> ParseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)

```js
parseInt("0"); // 0
parseInt("-1"); // -1
parseFloat("10.11"); // 10.11
```

### 불리언 타입으로 변환

> Boolean 생성자 함수를 new 연산자 없이 호출하는 방법

```js
Boolean("x"); // true
Boolean(""); // false
Boolean("false"); // true
Boolean(0); // false
Boolean(1); // true
```

> 부정 논리 연산자를 두 번 사용하는 방법

```js
!!"x"; // true
!!""; // false
!!0; // false
!!NaN; // false
```

### 단축 평가

논리합 또는 논리곱 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다. 논리합 또는 논리곱 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.

```js
// Cat이 true로 평가됨으로 두 번째 피연산자를 그대로 반환한다.
"Cat" && "Dog"; // "Dog"
// 논리합은 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 두 번째 피연산자까지 평가하지 않아도 평가가 된다.
"Cat" || "Dog"; // "Cat"
```

논리곱 연산자와 논리합 연산자는 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환한다. 이를 단축 평가라 한다. 단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.

```js
// true || anything
console.log(true || "anything"); // 결과: true

// false || anything
console.log(false || "anything"); // 결과: 'anything'

// false && anything
console.log(false && "anything"); // 결과: false

// true && anything
console.log(true && "anything"); // 결과: 'anything'
```

### 옵셔널 체이닝 연산자

ES11에서 도입된 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

```js
//옵셔널 체이닝이 없는 경우
const user = {
  name: "John",
  address: {
    city: "New York",
  },
};

let city;
if (user.address && user.address.city) {
  city = user.address.city; // 'New York'
} else {
  city = undefined; // 없을 경우 undefined
}

console.log(city); // 출력: 'New York'

// country는 존재하지 않으므로 수동 체크 필요
let country;
if (user.address && user.address.country) {
  country = user.address.country;
} else {
  country = undefined; // 없을 경우 undefined
}

console.log(country); // 출력: undefined
```

```js
// 옵셔널 체이닝 사용 시
const city = user.address?.city; // 'New York'
const country = user.address?.country; // undefined
```

### null 변합 연산자

ES11에서 도입된 null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다. null 변합 연산자 ??는 변수에 기본값을 설정할 때 유용하다.

```js
var foo = null ?? "default string";
console.log(foo); // 'default string'
```

하지만 null 병합 연산자 ??는 좌항의 피연산자가 false로 평가되는 false, undefined, null, 0, -0, NaN, '' 이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.

```js
var foo = "" ?? "default string";
console.log(foo); // ""
```
