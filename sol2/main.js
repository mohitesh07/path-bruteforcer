const { Worker } = require('worker_threads');
const fs = require('fs'); 
const readline = require('readline'); 

const myArgs = process.argv.slice(2);
const urlsFileName = myArgs[0];
const fileName = myArgs[1];

const runService = (workerData) => { 
    return new Promise((resolve, reject) => { 
        const worker = new Worker( 
                './worker.js', { workerData }); 
        worker.on('message', resolve); 
        worker.on('error', reject); 
        worker.on('exit', (code) => { 
            if (code !== 0) 
                reject(new Error( `Stopped the Worker Thread with the exit code: ${code}`)); 
        }) 
    }) 
} 

const run = async(baseUrl, fileName) => { 
    await runService({baseUrl: baseUrl, fileName: fileName}); 
} 

const file = readline.createInterface({ 
    input: fs.createReadStream(urlsFileName), 
    output: process.stdout, 
    terminal: false
}); 

console.log(`Web Paths Filename: ${fileName}`);

file.on('line', (line) => { 
    run(line, fileName);
}); 



 
  
