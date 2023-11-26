// Create web server
// 1. Create web server
// 2. Read the comments.json file
// 3. Convert the content of the file to a javascript object
// 4. Add the new comment to the comments array
// 5. Convert the comments array to a string
// 6. Write the string back to the comments.json file
// 7. Send the javascript object as a response to the client
// 8. Redirect the client to the index.html page

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Read the comments.json file
const fs = require('fs');

// 3. Convert the content of the file to a javascript object
let comments = JSON.parse(fs.readFileSync('comments.json'));

// 4. Add the new comment to the comments array
app.post('/addComment', (req, res) => {
    // Get the comment from the request body
    let comment = req.body.comment;
    // Add the comment to the comments array
    comments.push(comment);
    // 5. Convert the comments array to a string
    let commentsString = JSON.stringify(comments);
    // 6. Write the string back to the comments.json file
    fs.writeFileSync('comments.json', commentsString);
    // 7. Send the javascript object as a response to the client
    res.send(comments);
    // 8. Redirect the client to the index.html page
    res.redirect('index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));