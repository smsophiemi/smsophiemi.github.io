
const downloadFile = (fileUrl: string, fileName: string): void => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    console.log(`Downloading file: ${fileName} from ${fileUrl}`);
    // Append the link to the body, trigger the download, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };

export default downloadFile;