const horoscopeMessage = (sign) => {
    //let acceptableSigns = [capricorn, aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, ophiuchus, sagittarius]
    let acceptableSigns = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'ophiuchus', 'sagittarius']
        if (acceptableSigns.indexOf(sign) !== -1){
            return console.log(`${sign} is the sign you have entered.`)

        }   else {
            return console.log(`${sign} is not a sign...`)
            
        }
    
}

//This is for the input only
horoscopeMessage('capricorn')
