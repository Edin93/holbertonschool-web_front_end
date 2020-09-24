let createElement = function(data) {
    let p = document.createElement('p');
    let content = document.createTextNode(data);
    p.appendChild(content);
    document.body.appendChild(p);
};

let queryWikipedia = function() {
    let response;
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            response = JSON.parse(req.response).query.pages[21721040].extract;
            createElement(response);
        }
    }
};

queryWikipedia(createElement);
