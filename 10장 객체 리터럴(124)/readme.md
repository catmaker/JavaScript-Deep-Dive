## 10장 객체 리터럴

자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 "모든 것"이 객체다. 원시 값을 제외한 나머지 값(함수, 배열, 정규 표현식 등)은 모두 객체다.

또한 원시 타입의 값, 즉 원시 값은 변경 불가능한 값이지만 객체 타입의 값, 즉 객체는 변경 가능한 값이다.

### ⭐ 객체

객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키와 값으로 구성된다.

```js
var person = {
  name: "Jisu", // 프로퍼티
  age: 27, // age는 키, value는 27
};
```

🔔 프로퍼티의 값이 함수일 경우 일반 함수와 구분하기 위해 **메서드**라 부른다.

```js
var counter = {
  num: 0, // 프로퍼티
  increase: function () {
    // 메서드
    this.num++;
  },
};
```

> 프로퍼티 : 객체의 상태를 나타내는 값(data)

> 메서드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작

객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 **객체지향 프로그래밍**이라 한다.

---

### ⭐ 객체 생성 방법

자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원한다.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스(ES6)

리터럴은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용하여 값을 생성하는 표기법을 말한다.

**객체 리터럴**은 중괄호 내에 0개 이상의 프로퍼티를 정의한다. 변수가 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.

```JS
var person = {
  name: "jisu",
  sayHello: function() {
    console.log(`hello! ${this.name}`)
  }
}
console.log(typeof person) // object
console.log(person) // {name: "jisu", sayHello: f}
```

프로퍼티를 정의하지 않으면 빈 객체가 생성된다.

---

### ⭐ 프로퍼티

#### 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

```JS
var person = {
  name: "jisu",
  sayHello: function() {
    console.log(`hello! ${this.name}`)
  }
}
console.log(typeof person) // object
console.log(person) // {name: "jisu", sayHello: f}
```

프로퍼티를 나열할 때는 쉼표(,)로 구분한다.

> 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값

> 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

프로퍼티 키는 프로퍼티 값에 접글할 수 있는 이름으로서 식별자 역할을 한다. 심벌 값도 사용할 수 있지만 일반적으로 문자열을 사용한다.

식별자 네이밍 규칙을 따르지 않은 프로퍼티 키를 사용하려면 따옴표를 꼭 붙여줘야 한다.

```JS
var person = {
  name: "jisu",
  'last-name':"sin"
}
```

이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. 이때 에러가 발생하지 않는다는 점을 주의해야한다.

```js
var person = {
  name: "jisu",
  name: "sinjisu",
};
console.log(person); // {name: "sinjisu"}
```

---

### ⭐ 메서드

자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있다고 했다.
자바스크립트의 함수는 객체다. 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.

프로퍼티의 값이 함수일 경우 일반 함수와 구분하기 위해 메서드라 부른다.

```JS
var person = {
  name: "jisu",
  sayHello: function() {
    console.log(`hello! ${this.name}`) // this는 person을 가리킨다.
  }
  sayBye() { // ES6에서의 축약 표현
    console.log(`bye~ ${this.name}`)
  }
}

console.log(typeof person) // object
console.log(person) // {name: "jisu", sayHello: f}
```

### ⭐ 프로퍼티 접근

프로퍼티에 접근하는 방법은 두 가지가 있다.

- 마침표 표기법
- 대괄호 표기법

```js
var person = {
  name: "sin"

  console.log(person.name)
  console.log(person['name'])
}
```

대괄호 표기법을 사용하는 경우 대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 한다. (식별자로 해석하기 때문)

🔔 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다. 이때 ReferenceError가 발생하지 않기 때문에 주의해야한다.

식별자 네이밍을 지키지 않는 경우 반드시 대괄호 표기법을 사용해야 한다.

```js
var person = {
  "last-name": "sin",
};

person.last - name; // ReferenceError
person["last-name"]; // sin
```

### ⭐ 프로퍼티 값 갱신

이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.

```js
var person = {
  name: "sin",
};
person.name = "jisu";
console.log(person); // {name: "jisu"}
```

### ⭐ 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.

```js
var person = {
  name: "sin",
};
person.age = 27;

console.log(person); // {name: "sin", age: 27}
```

### ⭐ 프로퍼티 삭제

delete 연산자는 객체의 프로퍼티를 삭제한다. 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러 없이 무시된다.

```js
var person = {
  name: "sin",
};
person.age = 27;

console.log(person); // {name: "sin", age: 27}

delete person.age;
console.log(person); // {name: "sin"}
```
