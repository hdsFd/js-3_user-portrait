function isValidNum(num) {
    if (!isNaN(num) && num !== null && num.trim() !== "") {
        return true;
    } else {
        return false;
    }
}

function isValidStr(str) {
    if (isNaN(str)) {
        return true;
    } else {
        return false;
    }
}

const currentYear = new Date().getFullYear();
const userBirth = prompt("Enter your year of birth.");
if (isValidNum(userBirth)) {
    const userAge = currentYear - userBirth;
    const userCity = prompt("What city do you live in?");
        if (isValidStr(userCity)) {
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

        const userSport = prompt("What is your favorite sport?")
        if (isValidStr(userSport)) {
            /* Варіант 1. Більш логічний як для мене. */
            const sportMessage = `Your favorite sport is ${userSport}.`
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

            alert(`You are ${userAge}. ${"\n" + cityMessage} ${"\n" + sportMessage}`)

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