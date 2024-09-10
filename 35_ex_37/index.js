"use strict";
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Shirt size: "${size}"   Message: "${message}"`);
}
// call the function
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt('medium');
// Call the function to make a shirt of any size with a different message
make_shirt('xlarge', 'Pakistan Zindabad');
