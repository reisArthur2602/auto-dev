import { Trash } from 'lucide-react';

import { storage } from '../../../../services';
import { deleteObject, ref } from 'firebase/storage';
import { CardProps } from './card';
import { UploadImageData } from '../../upload';

export const Card = ({ onChange, value, image }: CardProps) => {
  const handleDelete = async (data: UploadImageData) => {
    const imagePath = `images/${data.uid}/${data.name}`;

    const imageRef = ref(storage, imagePath);

    await deleteObject(imageRef).then(() =>
      onChange(value.filter((car) => car.url !== data.url))
    );
  };

  return (
    <div className="w-full h-[8.25rem] flex items-center justify-center ">
      <button className="absolute" onClick={() => handleDelete(image)}>
        <Trash size={28} color="#FFF" />
      </button>
      <img
        src={image.previewUrl}
        className="rounded-lg w-full h-full object-cover"
        alt="Foto do carro"
      />
    </div>
  );
};
