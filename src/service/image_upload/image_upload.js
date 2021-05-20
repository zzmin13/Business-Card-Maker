import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
/*
Image: Cloudinary 이미지 태그
Video : Cloudinary 비디오 태그
Transformation: 부모 엘리먼트에 추가적인 변경을 할 수 있음(변환)
CloudinaryContext: 모든 자식 엘리먼트에 적용되는 공통 매개 변수(공통 parameter)를 정의할 수 있음
*/

class UploadCloudinary {
  constructor() {
    this.CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    this.URL = `https://api.cloudinary.com/v1_1/${this.CLOUDNAME}/image/upload`;
  }
  uploadImage(data) {
    return fetch(this.URL, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return {
          url: data.url,
          filename: data.original_filename,
        };
      });
  }
}
export default UploadCloudinary;
