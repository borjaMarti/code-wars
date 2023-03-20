// 5 kyu
// Extract the domain name from a URL
// JavaScript:

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
    if (url.slice(0, 4) === 'www.') {
      return url.slice(4 ,url.indexOf('.', 4));
    }
    if (url.includes('//www')) {
      return url.slice(url.indexOf('.') + 1, url.indexOf('.', url.indexOf('.') + 1));
    }
    if (url.includes('//')) {
      return url.slice(url.indexOf('//') + 2, url.indexOf('.'));
    }
    
    return url.slice(0, url.indexOf('.'));
}

// Simpler version making use of String.split():

// function domainName(url) {
//     return url.replace("https://", '')
//               .replace("http://", '')
//               .replace("www.", '')
//               .split('.')[0];
// }