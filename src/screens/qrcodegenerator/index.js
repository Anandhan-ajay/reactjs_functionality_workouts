import React, { useState } from 'react'
import imagePath from '../../imagePath'

function QrCodeGenenrator() {
    const [img , setImg] = useState(imagePath.lion_img);
    const generateQrCode = async() => {
        try {
            const res = await fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const downloadQrCode = () => {
        fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example")
        .then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click()
            document.body.removeChild(link);
        })
    }

    // const downloadQrCode = () => {
    //     fetch("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example")
    //         .then((response) => response.blob()) // Ensure response.blob() is returned
    //         .then((blob) => {
    //             const link = document.createElement("a");
    //             link.href = URL.createObjectURL(blob); // Convert the blob into a downloadable URL
    //             link.download = "qrcode.png"; // Set the filename for download
    //             document.body.appendChild(link); // Append the link temporarily to the DOM
    //             link.click(); // Trigger the download
    //             document.body.removeChild(link); // Clean up the temporary link
    //         })
    //         .catch((error) => console.error("Error downloading QR code:", error)); // Handle errors
    // };
    
  return (
    <div>
        <h3>Qr code genenrator</h3>
        <div style={{display:'flex', justifyContent:'center', height:100, width:100, textAlign:'center'}}>
        <img src={img}/>
        </div>
        <button onClick={generateQrCode}>Generate qr code </button>
        <button onClick={downloadQrCode}>Download qr code</button>
    </div>
  )
}

export default QrCodeGenenrator