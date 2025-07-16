interface IdolType {
  readonly name: string; // 읽기 전용
  age: string;
  year?: number; // 옵셔널
}

let bts: IdolType = {
  name: "h",
  age: "20",
};

bts.age = "40";
bts.name = "hong"; // 읽기 전용이라 변경 불가
