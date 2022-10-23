// console.log("hello");

// const SteamAccount = {
//     email: "wahyu@gmail.com",
//     password: "inipassword",
//     isVerified: true,
//     wallet: "iniwallet",
//     games: [
//         {
//             name: "ads",
//             rank: "wada"
//         },
//         {
//             name: "ads",
//             rank: "wada"
//         },
//     ]
//     friends: [
//         {
//             name: "ads",
//             rank: "wada"
//         },
//         {
//             name: "ads",
//             rank: "wada"
//         },

//     ]
// }
// const SteamAccount2 = {
//     email: "wahyu@gmail.com",
//     password: "inipassword",
//     isVerified: true,
//     wallet: "iniwallet",
//     friends: [
//         {
//             name: "teman1",
//             games: [
//                 {
//                     name: "gem 1",
//                     rank: "low"
//                 },
//                 {
//                     name: "gem 2",
//                     rank: "medium"
//                 },
//             ]
//         },
//         {
//             name: "teman2",
//             games: [
//                 {
//                     name: "gem3",
//                     rank: "low"
//                 },
//                 {
//                     name: "gem4",
//                     rank: "med"
//                 },
//             ]
//         },

//     ]
// }

// console.log("ini tugas")
// console.log(SteamAccount2.friends[0].games[0].rank);


// tugas
// let x = 10;
// let y = 23;

// a+b>0 ?

const studentScores = [
    { name: "Ganda", score: 90 },
    { name: "Nadila", score: 80 },
    { name: "Andre", score: 70 },
    { name: "Andra", score: 60 },
    { name: "Backbone", score: 50 },
    { name: "Nuri", score: 65 },
    { name: "Tariana", score: 50 },
    { name: "Najwa", score: 76 },
    { name: "Nanda", score: 99 },
    { name: "Ben", score: 100 },
    { name: "Rizky", score: 40 },
    { name: "Bandana", score: 81 },
    { name: "Rindho", score: 80 },
    { name: "Finder", score: 90 }
];
// console.log(studentScores.length)
// for (let i = 0; i < studentScores.length; i++) {
//     // console.log(studentScores[i].score)
//     if (studentScores[i].score >= 50) {
//         console.log(studentScores[i].name)
//     }
// }

studentScores.forEach((studentScores, wahyu) => {
    // console.log(studentScores)
    console.log(wahyu)
    if (studentScores.score >= 50) {
        console.log(studentScores.name)
    }
})

// numbers.forEach((number, index) => {
//     console.log('Index: ' + index + ' Value: ' + number);
// });
// var nilai_mak = 0;
var nilai_mak = 0;
var nama_max
for (let i = 0; i < studentScores.length; i++) {


    if (studentScores[i].score > nilai_mak) {
        // console.log(nilai_mak);

        nilai_mak = studentScores[i].score
        nama_max = studentScores[i]
    }


}
console.log(nama_max)

