function downloadFile(url) {
    return new Promise((resolve, reject) => {
        console.log(`Downloading data from ${url}`);

        setTimeout(() => {
            if (url === 'xyz.com') {
                const data = `Data from ${url}`;
                console.log(`Downloaded data from ${url}`);
                resolve(data);
            } else {
                reject('Wrong URL');
            }
        }, 1000);
    });
}

function writeFile(data) {
    return new Promise((resolve, reject) => {
        console.log(`Writing ${data} to file`);

        setTimeout(() => {
            const fileName = 'file.txt';
            console.log(`Written ${data} to ${fileName}`);
            resolve(fileName);
        }, 1000);
    });
}

function uploadFile(url, fileName) {
    return new Promise((resolve, reject) => {
        console.log(`Uploading ${fileName} to ${url}`);

        setTimeout(() => {
            if (url === 'xyz.com') {
                console.log(`Uploaded ${fileName} to ${url}`);
                resolve('Uploaded successfully');
            } else {
                reject('Not uploaded — wrong URL');
            }
        }, 1000);
    });
}

function nestedOperationWithPromise() {
    const url = 'xyz.com';

    downloadFile(url)
        .then(data => writeFile(data))
        .then(fileName => uploadFile(url, fileName))
        .then(response => console.log(`Final response: ${response}`))
        .catch(err => console.error(`Error: ${err}`));
}
