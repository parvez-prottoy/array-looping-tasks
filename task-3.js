/* 
    Task 3

    Use a for...of loop to concatenate all the elements of an array into a single string.

    **Input:**
    `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

    **Output:**

    `'TomTimTinTik'`
*/
const names = ["Tom", "Tim", "Tin", "Tik"];
let str = "";
for (const name of names) {
  str = str.concat(name);
}
console.log(str);
