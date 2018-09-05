const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200)
        {
            return response.json();
        }
        else 
        {
            throw new Error("Unable to fetch puzzle");
        }
    }).then((data) => {
        return data.puzzle;
    });
};

const getCountry = (country_code) => {
    return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
        if (response.status === 200)
        {
            return response.json();
        }
        else
        {
            throw new Error("Unable to fetch country data");
        }
    }).then((data) =>  {
        const country = data.find((country) => country.alpha2Code === country_code);
        return country.name;
    });
};

const getLocation = () => {
    return fetch(`http://ipinfo.io/json?token=1798eb074addc9`).then((response) => {
        if (response.status === 200)
        {
            return response.json();
        }
        else
        {
            throw new Error("Unable to fetch location");
        }
    }).then((data) => {
        return data;
    })
};