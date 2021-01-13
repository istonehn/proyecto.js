function generateRandom(num){
    return Math.floor(Math.random() * num)
}

const everythingOption = {
    optionInfo: ['Hello!', 'Good bye!', 'Congrats!', 'Oh, nooo!'],
    optionOutput: ['Idiot, you"re a duuuuumb!', 'Or hello, whatever, only bye!', 'Yourself a very asshoooole', 'U are the best man men, woman women!'],
    advice: ['eat less', 'Always get up', 'Never forget!', 'U can']
}

let personalOption = []

for(let prop in everythingOption) {
    let options = generateRandom(everythingOption[prop].length)


switch(prop){
    case 'optionInfo':
        personalOption.push('Your greeting today is ' + everythingOption[prop][options] + ".")
        break
    case 'optionOutput':
        personalOption.push('I have a phrase for you: ' + everythingOption[prop][options] + ".")
        break
    case 'advice':
        personalOption.push('c"mon, remeber it ' + everythingOption[prop][options] + ".")
        break
    default:
        personalOption.push('There is not information for u')
 }

}

function formatOption(Option) {
    const formatted = personalOption.join('\n')
    console.log(formatted)
}

formatOption(personalOption);


