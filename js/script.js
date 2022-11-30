/*номер 1 */
let i = 1;
while (i <= 100) {
console.log(i)
i++
};
/*номер 2 */
let i = 100;
while (i <= 100) {
if (i===0){
break}
console.log(i)
i—
};
/*номер 3 */
for (let i = 1; i <= 100; i++) {
	if(i % 2 == 0) {
	console.log(i)
	}
	}
/*номер 4 */
let arr = [];
for (let i = 0; i < 10; i++){
arr.push("x");
console.log(arr);
}
/*номер 5 */
let arr = [];
for (let i = 1; i < 11; i++){
arr.push(i);
console.log(arr);
}
/*номер 6 */
let arr = [0, 2, 4, -1, -3, 1, 7, 0, -5, 8, 5];
for (let i = 0; i < arr.length; i++) {
if(arr[i] > 0 && arr[i] < 10) {
console.log(arr[i]);
}
}
/*номер 7 */
let arr = [0, 2, 4, -1, -3, 1, 7, 0, -5, 8,5 ];
for (let i = 0; i < arr.length; i++) {
if(arr[i] == 5) {
console.log('5');

}
}
/*номер 8 */
let arr = [0, 2, 4, -1, -3, 1, 7, 0, -5, 8,5 ];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum +=arr[i];
console.log(sum)

}

/*номер 9 */
let arr = [0, 2, 4, -1, -3, 1, 7, 0, -5, 8,5 ];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum +=arr[i]**2;
console.log(sum)
}
/*номер 10 */
let arr = [0, 2, 4, -1, -3, 1, 7, 0, -5, 8,5 ];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum +=arr[i];
}
let sredarefm = sum / arr.length
console.log(sredarefm)