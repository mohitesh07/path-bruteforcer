const { workerData, parentPort }  = require('worker_threads') 
const lineReader = require('line-reader');
const got = require('got');

const baseUrl = workerData.baseUrl;
const fileName = workerData.fileName;
let message = '';

if(baseUrl && fileName) {
    // START
    console.log(`Base URL: ${baseUrl}`);

    lineReader.eachLine(fileName, (line, last) => {
        // console.log(`${baseUrl}/${line}`);
        got(`${baseUrl}/${line}`)
        .then(response=>{
            message = `${baseUrl}/${line} - ${response.statusCode}`;
        })
        .catch(err=>{
            message = console.log(`${baseUrl}/${line} - ${err.message}`);
        })
    });
} else {
    console.log('Base URL and Web Paths file to be provided');
}



parentPort.postMessage(message);
  
