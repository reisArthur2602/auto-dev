import { UploadImageData } from "../../upload";


export type CardProps = {
    onChange(value: UploadImageData[]): void;
    value: UploadImageData[];
    image:UploadImageData
}