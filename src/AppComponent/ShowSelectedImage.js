import { useEffect, useState } from "react";

function ShowSelectedImage() {
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => { 
        return () => {
            selectedImage && URL.revokeObjectURL(selectedImage.preview);
        }
    },[selectedImage]);

    const getUrlImage = (e) => {
        const file = e.target.files[0]
         file.preview = URL.createObjectURL(file);
        setSelectedImage(file.preview);
    }
  return (
    <div>
        <div>

            <div class="form-group">
              <label for=""> chọn ảnh</label>
              <input type="file" class="form-control-file" name="" onChange={getUrlImage} id="" placeholder="" aria-describedby="fileHelpId" />
              <small id="fileHelpId" class="form-text text-muted">Help text</small>
            </div>
            <img src={selectedImage} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
        </div>
    </div>
  )
}

export default ShowSelectedImage