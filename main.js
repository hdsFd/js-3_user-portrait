const currentYear = new Date().getFullYear();
let userBirth = prompt("Enter your year of birth.");
if (!isNaN(userBirth) && userBirth !== "" && userBirth !== null) {
    const userAge = currentYear - userBirth;
    let userCity = prompt("What city do you live in?");
    if (userCity !== "" && userCity !== null) {
        let cityMessage;
        switch (userCity) {
            case "Kyiv":
                cityMessage = "You live in the capital of Ukraine."
                break;
            case "Washington":
                cityMessage = "You live in the capital of USA."
                break;
            case "London":
                cityMessage = "You live in the capital of Great Britain."
                break;
            default:
                cityMessage = `You live in the city of ${userCity}.`;
                break;
        }

        let userSport = prompt("What is your favorite sport?")
        if (userSport !== "" && userSport !== null) {

            /* Варіант 1. Більш логічний як для мене. */
            let sportMessage = `Your favorite sport is ${userSport}.`
            switch (userSport) {
                case "football":
                    alert("Cool! Do you want to be like Lionel Messi?")
                    break;
                case "basketball":
                    alert("Cool! Do you want to be like Michael Jordan?")
                    break;
                case "boxing":
                    alert("Cool! Do you want to be like Michael Tyson?")
                    break;
                default:
                    break;
            }

            /* Варіант 2 */
            /*
             let sportMessage;
             switch (userSport) {
                 case "football":
                     sportMessage = "Cool! Do you want to be like Lionel Messi?"
                     break;
                 case "basketball":
                     sportMessage = "Cool! Do you want to be like Michael Jordan?"
                     break;
                 case "boxing":
                     sportMessage = "Cool! Do you want to be like Michael Tyson?"
                     break;
                 default:
                     sportMessage = `Your favorite sport is ${userSport}.`
                     break;
             }
            */

            alert(`You are ${userAge}. ${cityMessage} ${sportMessage}`)

        } else if (userSport === null) {
            alert("It's a pity that you didn't want to enter your favorite sport.");
        } else {
            alert("Sorry, incorrect data, try again later.");
        }

    } else if (userCity === null) {
        alert("It's a pity that you didn't want to enter your city.");
    } else {
        alert("Sorry, incorrect data, try again later.");
    }

} else if (userBirth === null) {
    alert("It's a pity that you didn't want to enter your year of birth.");
} else {
    alert("Sorry, incorrect data, try again later.");
}