const lineReader = require('line-reader');
const got = require('got');

const myArgs = process.argv.slice(2);
const baseUrl = myArgs[0];
const fileName = myArgs[1];

if(baseUrl && fileName) {
    // START
    console.log(`Base URL: ${baseUrl}`);
    console.log(`Web Paths Filename: ${fileName}`);

    lineReader.eachLine(fileName, (line, last) => {
        // console.log(`${baseUrl}/${line}`);

        (async () => {
            try {
                const response = await got(`${baseUrl}/${line}`);
                console.log(`${baseUrl}/${line} - ${response.statusCode}`);
            } catch (error) {
                // console.log(`${baseUrl}/${line} - ${error.message}`);
            }
        })();
    });

} else {
    console.log('Base URL and Web Paths file to be provided');
}