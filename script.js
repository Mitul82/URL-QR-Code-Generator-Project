const generateQRButton = document.getElementById("generate-qr");
const copyButton = document.getElementById("copy-btn");
const downloadButton = document.getElementById("download-btn");
const urlInput = document.getElementById("SSID");
const qrContainer = document.getElementById("qr-code-container");

let qr;

function generateQRcode() {
    const url = urlInput.value.trim();

    if (url === "") {
        alert("Please enter a valid URL.");
        return;
    }

    qr = new QRious({
        element: document.createElement("canvas"),
        value: url,
        size: 200,
    });

    qrContainer.innerHTML = "";
    qrContainer.appendChild(qr.element);
}
s
function copyCredentials() {
    const url = urlInput.value.trim();

    if (url === "") {
        alert("Nothing to copy. Please enter a URL.");
        return;
    }

    navigator.clipboard.writeText(url)
        .then(() => {
            alert("URL copied to clipboard!");
        })
        .catch(() => {
            alert("Failed to copy. Please try again.");
        });
}

function downloadQRcode() {
    if (!qr) {
        alert("No QR code available to download. Generate one first!");
        return;
    }

    const qrImage = qr.element.toDataURL("image/png");
    const downloadLink = document.createElement("a");

    downloadLink.href = qrImage;
    downloadLink.download = "QRCode.png"; 
    downloadLink.click();
}

generateQRButton.addEventListener("click", generateQRcode);
copyButton.addEventListener("click", copyCredentials);
downloadButton.addEventListener("click", downloadQRcode);