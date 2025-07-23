class Animal {
  public name: string; // 모든 접근 가능
  private age: number; // 모든 접근 불가
  protected breeze: string; // 상속시 접근 가능
  test() {
    this.name;
    this.age;
    this.breeze;
  }
}

class Cat extends Animal {
  show() {
    this.name;
    this.age; // 접근 불가, private
    this.breeze;
  }
}

const c = new Cat();
c.name;
c.age; // 접근 불가, private
c.breeze; // 접근 불가, protected 클래스 내부에서만 가능
