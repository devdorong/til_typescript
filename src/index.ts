// 저장하기 관련 클래스
class TodoStorage<T> {
  // 내부에서만 사용할 변수
  private items: T[] = [];
  // 메소드 만으로 즉, 검증된 과정으로만 내부 item 배열 접근
  add(item: T): void {
    this.items.push(item);
  }
  read(): T[] {
    return this.items;
  }
}

const result = new TodoStorage<string>();
result.add("아이유");
result.read();
