// 5가지 배열 변형 메서드
// 1.filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "봄봄이", hobby:"간식먹기"},
    {name : "가을이", hobby:"간식먹기"},
    {name : "강민서", hobby:"술먹기"},
];

const treatPeople = arr1.filter((item) => item.hobby === "간식먹기");
console.log("treatPeople : ", treatPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});
console.log("mapResult1 : ", mapResult1);

let names = arr1.map((item) => item.name);
console.log("names : ", names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// let arr3 = ["b", "a", "c"];
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if (a > b) return 1;
    else if ( a < b) return -1;
    else return 0;
});

console.log("sort : ", arr3);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log("arr5 : ", arr5);
console.log("sorted : ", sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winter"];
const joined = arr6.join(' ');
console.log("joined : ", joined);