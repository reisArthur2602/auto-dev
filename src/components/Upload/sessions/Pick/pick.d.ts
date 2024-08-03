import { UploadImageData } from "../../upload";

export type PickImageProps = {
  onChange(value: UploadImageData[]): void;
  value: UploadImageData[];
};

