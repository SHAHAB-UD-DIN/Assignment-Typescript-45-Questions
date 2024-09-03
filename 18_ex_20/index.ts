// Define an array of languages
let languages : string[] = ["English", "Hangugeo", "Mandarin", "Pashto"];

// Print the list of languages
console.log("List of Languages:" );
languages.forEach((languages, index) => 
    {console.log(`${index + 1}. ${languages}`);
});