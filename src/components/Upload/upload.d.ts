export type UploadImageData = {
    uid: string;
    name: string;
    previewUrl: string;
    url: string;
  };
  
export type UploadProps = {
    onChange(value: UploadImageData[]): void;
    value: UploadImageData[];
}


  