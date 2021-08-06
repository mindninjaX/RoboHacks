import { useState, useRef } from "react";

const fileUpload = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadImage=  (ev) =>{
    ev.preventDefault();

    const data = new FormData();
    data.append('file', uploadInput.files[0]);
    data.append('filename', fileName.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        setImageUrl(`http://localhost:8000/${body.file}`)        
      });
    });
  }

  return (
    <form onSubmit={handleUploadImage}>
      <div>
        <input
          ref={useRef("uploadInput")}
          type="file"
        />
      </div>
      <div>
        <input
          ref={useRef("fileName")} type="text"
          placeholder="Enter the desired name of file"
        />
      </div>
      <br />
      <div>
        <button>Upload</button>
      </div>
      <img src={imageUrl} alt="img" />
    </form>
  );
};

export default fileUpload;
