import { useState } from "react";
import { Handle } from "react-flow-renderer";
import "./ImageField.scss";

export default function ImageField() {
  const [imageFile, setImageFile] = useState(null);

  // [Functions]
  const changeHandler = event =>
    setImageFile(URL.createObjectURL(event.target.files[0]));
  return (
    <div className="imageField-container">
      <div className="title">
        <header>
          <h2>Image Field</h2>
        </header>
      </div>
      <div className="image-container">
        {imageFile && <img src={imageFile}></img>}
      </div>
      <div className="image-add">
        <input
          type="file"
          name="imageFile"
          id="imageFile"
          accept="image/*"
          placeholder="Add Image"
          onChange={changeHandler}
        />
      </div>
      <Handle className="nodeOut" type="source" position="right" />
    </div>
  );
}
