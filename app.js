// module.exports = {
//     sayHello: function(){
//         return 'hello'
//     },
//     addNumbers: function(value1, value2){
//         return value1 + value2
//     },
//     nomNom: function(arr) {
//         let i = 0
//         while (i+1 <= arr.length) {
//           console.log(arr[i])
//             if (arr[i] > arr[i+1]){
//               arr[i+1] = arr[i] + arr[i+1]
//               arr.splice(i, 1)  
//             } else {
//                 i++
//             }
//         }
//         return arr
//       }
// }

module.exports = function helloWorld(){
    return 'helloWorld'
}

