## 07장 연산자

숫자 타입이 아닌 피연산자에 + 단항 연산자를 사용하면 피연산자를 숫자 타입으로 변환하여 반환한다.

```js
var x = "1";
console.log(+x); // 1

x = true;
console.log(x); // 1

x = false;
console.log(x); // 0
```

### 문자열 연결 연산자

연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.

```js
"1" + 2; // '12'
```

null은 0으로 타입 변환된다.

```js
1 + null; // 1
```

개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다는 것이다.

> 이를 **암묵적 타입 변환** 또는 **타입 강제 변환** 이라고 한다.

### 비교 연산자

| 비교 연산자 | 의미        | 사례      | 설명                                        |
| ----------- | ----------- | --------- | ------------------------------------------- |
| `==`        | 동등 비교   | `x == y`  | 두 값이 같은지 비교합니다.                  |
| `===`       | 일치 비교   | `x === y` | x와 y의 값과 타입이 같은지 비교합니다.      |
| `!=`        | 부동등 비교 | `x != y`  | x와 y의 값이 다른지 비교합니다.             |
| `!==`       | 불일치 비교 | `x !== y` | x와 y의 값과 타입이 전부 다른지 비교합니다. |

동등 비교 연산자는 좌항과 우항의 피연산자를 비교할 때 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다. 따라서 동등 비교 연산자는 좌항과 우항의 피연산자가 타입은 다르더라도 암묵적 타입 변환 후에 같은 값일 수 있다면 ture를 반환한다.

```js
// 동등 비교
5 == "5"; // true
```

일치 비교 연산자는 좌항과 우항의 피연산자가 타입도 같고 값도 같은 경우에 한하여 true를 반환한다.

```js
5 === 5; // true
5 === "5"; // false
```

### NaN은 다르다.

일치 비교 연산자에서 주의할 것은 NaN이다.

```js
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false;
```

따라서 숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN을 사용한다.

```js
Number.isNaN(NaN); // true
Number.isNaN(1); // false
Number.isNaN(1 + undefined); // true
```

### Object.is 메서드 (ES6)

==, ===는 +0과 -0을 동일하다고 평가한다. 또한 NaN과 NaN을 비교하면 다른 값이라고 평가한다.

Object.is 메서드는 다음과 같이 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치 비교 연산자와 동일하게 동작한다.

```js
-0 === 0; // true
Object.is(-0, 0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true
```

### 삼항 조건 연산자

삼항 조건 연산자는 조건식의 평가 결과에 따라 반환할 값을 결정한다.

```js
let age = 20;
let message = age >= 18 ? "성인입니다." : "미성년자입니다.";

console.log(message); // 출력: "성인입니다."
```

첫 번째 피연산자가 true로 평가되면 두 번째 피연산자를 반환하고, 첫 번째 피연산자가 false로 평가되면 세 번째 피연산자를 반환한다.

🔔 if ... else문과의 차이점은 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if ... else 문은 값처럼 사용할 수 없다. if else 문은 표현식이 아닌 문이다.

```js
let age = 16;

let message = if (age >= 18) {
    "성인입니다.";
} else {
    "미성년자입니다.";
}; // Syntax Error: Unexpected token

console.log(message);
```

### 논리 연산자

```js
// 논리합 (OR)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(1 || 0); // 1 (true)
console.log(null || "Hello"); // "Hello"

// 논리곱 (AND)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(1 && 0); // 0 (false)
console.log(null && "Hello"); // null

// 논리 부정 (NOT)
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!"Hello"); // false
console.log(!null); // true
```

논리 부정 연산자는 언제나 불리언 값을 반환한다. 단, 피연산자가 반드시 불리언 값일 필요는 없다. 피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환된다.

```js
// 암묵적 타입 변환
!0; // true
!"text"; // false
```

### typeof 연산자

```js
// typeof 연산자
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (이것은 JavaScript의 오래된 버그로, null은 실제로 객체가 아님)
console.log(typeof Symbol("sym")); // "symbol"
console.log(typeof BigInt(12345678901234567890)); // "bigint"
console.log(typeof []); // "object" (배열은 객체로 간주됨)
console.log(typeof {}); // "object"
console.log(typeof function () {}); // "function"
```

null을 주의해야 하는데 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못하고 있다고 한다.
