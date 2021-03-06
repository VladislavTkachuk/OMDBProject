const fs = require('fs');
const path = require('path');

function notFound(req, res) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");

    const stream = fs.createReadStream(path.join(__dirname, "../public/error.html"));

    stream.pipe(res);
}

module.exports = notFound;
