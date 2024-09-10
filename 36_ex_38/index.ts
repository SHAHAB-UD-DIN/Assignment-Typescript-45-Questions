function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}`);
    
}

// calling the function
describe_city('Islamabad', 'Pakistan');
describe_city('Beijing', 'China');
describe_city(`New York`);