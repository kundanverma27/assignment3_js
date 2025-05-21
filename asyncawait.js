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

function writeFile() {
    return new Promise((resolve, reject) => {
        console.log(`Writing file`);

        setTimeout(() => {
            const fileName = 'file.txt';
            console.log(`File written`);
            resolve(fileName);
        }, 1000);
    });
}

function uploadFile(url, fileName) {
    return new Promise((resolve, reject) => {
        console.log('Uploading file');

        setTimeout(() => {
            if (url === 'xyz.com') {
                console.log(`Uploaded ${fileName} on ${url}`);
                resolve('Uploaded successfully');
            } else {
                reject('Not uploaded, wrong URL');
            }
        }, 1000);
    });
}

async function nestedOperationWithAsyncawait() {
    try {
        const url = 'xyz.com';

        const data = await downloadFile(url);
        console.log('Data downloaded');

        const fileName = await writeFile();
        console.log('File written');

        const response = await uploadFile(url, fileName);
        console.log(response);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}
