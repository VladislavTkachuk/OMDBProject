const url = require('url');

const omdb = require('../lib/omdb');
const render = require('../lib/render');

function search(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const title = parsedUrl.query.title;


    omdb.get(title, (error, movie) => {
        if (error) throw error;

        render("movie.html", movie, (error, html) => {
            if (error) throw error;

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");

            res.end(html);
        });
    });

}

module.exports = search;
