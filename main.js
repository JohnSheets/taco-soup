var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for (var i = 0; i < harryPotterTitles.length; i++){
    //console.log( 'Harry Potter ' + harryPotterTitles[i]);
  }
  var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

// for (var i =0; i < grades.length; i++) {
//     if (grades[i] >= 0 && grades[i] <= 69) {
//         console.log("you got an F");
//     } else if (grades[i] >= 70 && grades[i] <= 76) {
//         console.log('You got a D');
//         } else if (grades[i] >= 77 && grades[i] <= 84) {
//         console.log('You got a C');
//         } else if (grades[i] >= 84 && grades[i] <= 92) {
//         console.log('you got a B');
//         } else if (grades[i] >= 93 && grades[i] <= 100) {
//             console.log('you got an A');
// } 
// }

let numberOfStudentsF = 0
let numberOfStudentsD = 0
let numberOfStudentsC = 0
let numberOfStudentsB = 0
let numberOfStudentsA = 0

for (var i =0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        numberOfStudentsF+=1
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        numberOfStudentsD+=1
        } else if (grades[i] >= 77 && grades[i] <= 84) {
            numberOfStudentsC+=1
        } else if (grades[i] >= 84 && grades[i] <= 92) {
            numberOfStudentsB+=1
        } else if (grades[i] >= 93 && grades[i] <= 100) {
            numberOfStudentsA+=1
        }
    };

    let totalGradePoints = 92 + 91 + 75 + 66 + 52 + 90 + 83 + 85 + 64 + 90 + 72 + 88 + 77 + 98 + 100 + 73 + 92

    // console.log(`${numberOfStudentsA} students have A's`);
    // console.log(`${numberOfStudentsB} students have B's`);
    // console.log(`${numberOfStudentsC} students have C's`)
    // console.log(`${numberOfStudentsD} students have D's`);
    // console.log(`${numberOfStudentsF} students have F's`);

for (i = 0; i < grades.length; i++) {
    totalGradePoints += grades[i]
}

averagePercentageGrade = totalGradePoints /grades.length;

// console.log(averagePercentageGrade);

// for (let counter = 2; counter < 10; counter+=2) 
// 		{
// 		  console.log(counter);
// 		}
//     console.log('Who do we appericate?!');


    var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let cowSentence = " "

    for (let i =0; i < sentenceArray.length; i++) {
        if((i + 1) % 3 === 0){

            cowSentence = cowSentence + ` ${sentenceArray[i]}  Moooo`

        }
         else{
            
            cowSentence = cowSentence + ` ${sentenceArray[i]}`
        }  
    }
// console.log(cowSentence)




    const beatles = {
        albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
        history: {
            formed: 1960,
            disbanded: 1970
        },
        members: [
            {
                name: "George Harrison",
                birth: 1943,
                death: 2001
            },
            {
                name: "Paul McCartney",
                birth: 1942,
                death: null
            },
            {
                name: "John Lennon",
                birth: 1940,
                death: 1980
            },
            {
                name: "Ringo Starr",
                birth: 1940,
                death: null
            }
        ]
    }

    console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[2]} Album.`)

