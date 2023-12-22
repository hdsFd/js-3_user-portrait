const currentYear = new Date().getFullYear();

function isValidNum(num) {
    if (!isNaN(num) && num !== null && num.trim() !== "") {
        return true;
    } else if (num === null) {
        return false;
    } else {
        return alert("Sorry, incorrect data, try again later.");
    }
}

function isValidStr(str) {
    if (isNaN(str)) {
        return true;
    } else if (str === null) {
        return false;
    } else {
        return alert("Sorry, incorrect data, try again later.");
    }
}

function newUser() {
    const user = {
        birth: "year of birth",
        city: "city",
        sport: "favorite sport",
        showUserInfo() {
            const message = {
                age: `You are ${this.age}.`,
                city: `You live in the city of ${this.city}.`,
                sport: `Your favorite sport is ${this.sport}.`,
            }
            const cityCap = () => {
                message.city = `You live in the capital of ${this.country}`;
            }
            const sportMessage = () => {
                alert(`Cool! Do you want to be like ${this.champ}?`);
            }
            switch (this.city) {
                case "Kyiv":
                    this.country = "Ukraine",
                        cityCap()
                    break;
                case "Washington":
                    this.country = "USA",
                        cityCap()
                    break;
                case "London":
                    this.country = "Great Britain",
                        cityCap()
                    break;

                default:
                    break;
            }

            switch (this.sport) {
                case "football":
                    this.champ = "Lionel Messi",
                        sportMessage()
                    break;
                case "basketball":
                    this.champ = "Michael Jordan",
                        sportMessage()
                    break;
                case "boxing":
                    this.champ = "Michael Tyson?",
                        sportMessage()
                    break;

                default:
                    break;
            }
            const { age, city, sport } = message;
            return age + "\n" + city + "\n" + sport;
        }
    };
    const userBirth = prompt("Enter your year of birth.");
    cancelMessage(userBirth, user.birth)
    if (isValidNum(userBirth)) {
        user.birth = userBirth;
        user.age = currentYear - userBirth;
        console.log(user.age);
        const userCity = prompt("What city do you live in?");
        cancelMessage(userCity, user.city)
        if (isValidStr(userCity)) {
            user.city = userCity;
            const userSport = prompt("What is your favorite sport?")
            cancelMessage(userSport, user.sport)
            if (isValidStr(userSport)) {
                user.sport = userSport;
                return user;
            }
        }
    }
    function cancelMessage(data, value) {
        if (data === null) {
            alert(`It's a pity that you didn't want to enter your ${value}.`)
        }
    }
}

alert(newUser().showUserInfo())


// const currentYear = new Date().getFullYear();
// const userBirth = prompt("Enter your year of birth.");
// const userAge = currentYear - userBirth;
// if (isValidNum(userBirth)) {
//     const userCity = prompt("What city do you live in?");
//     if (isValidStr(userCity)) {
//         let cityMessage;
//         switch (userCity) {
//             case "Kyiv":
//                 cityMessage = "You live in the capital of Ukraine."
//                 break;
//             case "Washington":
//                 cityMessage = "You live in the capital of USA."
//                 break;
//             case "London":
//                 cityMessage = "You live in the capital of Great Britain."
//                 break;
//             default:
//                 cityMessage = `You live in the city of ${userCity}.`;
//                 break;
//         }

//         const userSport = prompt("What is your favorite sport?")
//         if (isValidStr(userSport)) {
//             /* Варіант 1. Більш логічний як для мене. */
//             const sportMessage = `Your favorite sport is ${userSport}.`
//             switch (userSport) {
//                 case "football":
//                     alert("Cool! Do you want to be like Lionel Messi?")
//                     break;
//                 case "basketball":
//                     alert("Cool! Do you want to be like Michael Jordan?")
//                     break;
//                 case "boxing":
//                     alert("Cool! Do you want to be like Michael Tyson?")
//                     break;
//                 default:
//                     break;
//             }

//             /* Варіант 2 */
//             /*
//              let sportMessage;
//              switch (userSport) {
//                  case "football":
//                      sportMessage = "Cool! Do you want to be like Lionel Messi?"
//                      break;
//                  case "basketball":
//                      sportMessage = "Cool! Do you want to be like Michael Jordan?"
//                      break;
//                  case "boxing":
//                      sportMessage = "Cool! Do you want to be like Michael Tyson?"
//                      break;
//                  default:
//                      sportMessage = `Your favorite sport is ${userSport}.`
//                      break;
//              }
//             */

//             alert(`You are ${userAge}. ${"\n" + cityMessage} ${"\n" + sportMessage}`)

//         } else if (userSport === null) {
//             alert("It's a pity that you didn't want to enter your favorite sport.");
//         } else {
//             alert("Sorry, incorrect data, try again later.");
//         }

//     } else if (userCity === null) {
//         alert("It's a pity that you didn't want to enter your city.");
//     } else {
//         alert("Sorry, incorrect data, try again later.");
//     }

// } else if (userBirth === null) {
//     alert("It's a pity that you didn't want to enter your year of birth.");
// } else {
//     alert("Sorry, incorrect data, try again later.");
// }