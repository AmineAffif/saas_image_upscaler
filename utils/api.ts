import axios from 'axios';

const API_URL = 'https://api.stability.ai/v1/generation/esrgan-v1-x2plus/image-to-image/upscale';

export const upscaleImage = async (file: File) => {
  const resizedFile = await resizeImage(file, 512, 512); // Resize to 512x512 for testing

  const formData = new FormData();
  formData.append('image', resizedFile);

  const response = await axios.post(API_URL, formData, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STABILITY_API_KEY}`,
      'Content-Type': 'multipart/form-data',
      'Accept': 'image/png'
    },
    responseType: 'blob' // Important to handle binary response
  });

  return response.data;
};


const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height *= maxWidth / width));
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width *= maxHeight / height));
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(new File([blob], file.name, { type: file.type }));
            } else {
              reject(new Error('Image resizing failed.'));
            }
          }, file.type);
        } else {
          reject(new Error('Canvas context not found.'));
        }
      };
      img.onerror = () => {
        reject(new Error('Image loading failed.'));
      };
    };
    reader.onerror = () => {
      reject(new Error('File reading failed.'));
    };
    reader.readAsDataURL(file);
  });
};
