// 믹스인 함수, 다중속성 활용
function withFlyingAbility(obj) {
    return Object.assign(obj, {
        fly() {
            console.log(`${this.name} is flying!`);
        },
    });
}

function withSwimmingAbility(obj) {
    return Object.assign(obj, {
        swim() {
            console.log(`${this.name} is swimming!`);
        },
    });
}

// 객체 생성
const superman = withFlyingAbility({ name: 'Superman' });
const duck = withSwimmingAbility(withFlyingAbility({ name: 'Duck' }));

// 메서드 호출
superman.fly(); // Superman is flying!
duck.fly(); // Duck is flying!
duck.swim(); // Duck is swimming!

// 다중속성 불가이유
// 복잡성: 다중 상속은 다이아몬드 문제와 같은 복잡성을 도입할 수 있습니다. 다이아몬드 문제는 두 클래스가 같은 기반 클래스를 상속받을 때 발생하며, 파생 클래스가 두 부모 클래스의 메서드를 호출할 때 어떤 메서드를 호출해야 할지 모호함이 생기는 문제입니다.

// 명확성: JavaScript는 프로토타입 기반의 언어입니다. 프로토타입 체인은 각 객체가 단일 프로토타입으로부터 속성과 메서드를 상속받는 방식으로 작동하며, 이는 상속 구조를 더 단순하고 명확하게 만듭니다.

// 유연성: JavaScript의 프로토타입 기반 상속은 다중 상속보다는 유연하지만, 믹스인(Mixin)이나 컴포지션(Composition) 같은 패턴을 사용하여 다중 상속과 유사한 결과를 얻을 수 있습니다.

// 다이아몬드 문제.
//  Base
//  /  \
// /    \
//Sub1  Sub2
// \    /
//  \  /
// SubSub
