// Node.js program to demonstrate the path.extname() method

// Import the path module
const path = require('path');

// Comparing extensions from a list of file paths
paths_array = [
    "/home/user/website/index.html",
    "/home/user/website/style.css",
    "/home/user/website/bootstrap.css",
    "/home/user/website/main.js",
    "/home/user/website/contact_us.html",
    "/home/user/website/services.html",
]

paths_array.forEach(filePath => {
    if (path.extname(filePath) == ".html")
       console.log(filePath);
});
