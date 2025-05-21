function downloadFile(url, callback) {
    console.log(`Downloading file from ${url}`);
    setTimeout(() => {
        const data = `File from ${url}`;
        console.log(`Downloaded file from ${url}`);
        callback(null, data);
    }, 1000);
}

function writeFile(data, callback) {
    console.log(`Writing ${data} to file`);
    setTimeout(() => {
        const fileName = 'file.txt';
        console.log(`Written ${data} to ${fileName}`);
        callback(null, fileName);
    }, 1000);
}

function uploadFile(url, fileName, callback) {
    console.log(`Uploading ${fileName} to ${url}`);
    setTimeout(() => {
        console.log(`Uploaded ${fileName} to ${url}`);
        callback(null, `Uploaded to ${url}`);
    }, 1000);
}

function nestedOperationWithCallbacks() {
    const url = 'xyz.com';

    downloadFile(url, (err, data) => {
        if (err) {
            console.log('Error while downloading file');
            return;
        }

        writeFile(data, (err, fileName) => {
            if (err) {
                console.log('Error while writing the data');
                return;
            }

            uploadFile(url, fileName, (err, response) => {
                if (err) {
                    console.log(`Error while uploading file to ${url}`);
                    return;
                }

                console.log(`Response: ${response}`);
            });
        });
    });
}
