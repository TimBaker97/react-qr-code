import React from "react";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  // This is a promise that if it can return the promise it will supply the URL, if not then the console will return err
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 1,
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>React QR-code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://www.portsmouthfc.co.uk"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
