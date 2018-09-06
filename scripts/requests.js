const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200)
    {
        const data = await response.json();
        return data.puzzle;
    }
    else
    {
        throw new Error("Unable to fetch puzzle");
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);    
};

const getCountry = async (country_code) => {
    const response = await fetch(`//restcountries.eu/rest/v2/all`);

    if (response.status === 200)
    {
        let country = await response.json();
        country = country.find((country) => country.alpha2Code === country_code);
        return country.name;
    }
    else
    {
        throw new Error("Unable to fetch country data");
    }
};

const getLocation = async () => {
    const response = await fetch(`//ipinfo.io/json?token=1798eb074addc9`);

    if (response.status === 200)
    {
        return response.json();
    }
    else
    {
        throw new Error("Unable to fetch location");
    }
};