const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else { 
        throw new Error('Unable to get puzzle')
    }
}

export { getPuzzle as default }

// const getCountryDetails = async (countryCode) => {
//     const response = await fetch('//restcountries.eu/rest/v2/all')

//     if (response.status === 200) {
//         const data = await response.json()
//         return data.find((co) => co.alpha2Code === countryCode)
//     } else {
//         throw new Error('Unable to get country')
//     }
// }

// const getLocation = async () => {
//     const response = await fetch('//ipinfo.io/json?token=5cf4a77e00faba')
    
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Error')
//     }
// }

// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     const country = await getCountryDetails(location.country)
//     return country
// }
