# Minimal Web Path Bruteforcer

![Version Details](https://img.shields.io/badge/version-1.0-brightgreen.svg)
![Download Details](https://img.shields.io/github/downloads/mohitesh07/path-bruteforcer/total.svg)
![GitHub contributors](https://img.shields.io/github/contributors/mohitesh07/path-bruteforcer.svg)

Software Requirements

```
node -v
v12.18.3
```

### Usage Instructions
Go to the project directory and run
```
npm install
```
This will install all the dependencies for the project.

### Version 1
Go to the project directory and run
```
cd sol1
node main https://google.com paths.txt 
```
path.txt has all the extension paths for the URL.

### Version 2
Go to the project directory and run
```
cd sol2
node main urls.txt paths.txt
```

### Output Looks like
To record output in file. While running the command use:
```
node main urls.txt paths.txt >> output.txt
```
