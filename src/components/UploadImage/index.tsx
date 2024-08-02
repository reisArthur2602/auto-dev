import { Trash, Upload } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { useUser } from '../../context/User';
import { v4 as uuidV4 } from 'uuid';
import { storage } from '../../services';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';

export const UploadImage = () => {
  const { user } = useUser();

  type UploadImageData = {
    uid: string;
    name: string;
    previewUrl: string;
    url: string;
  };

  const [carImages, setCarImages] = useState<UploadImageData[]>([]);

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        await handleUpload(image);
      } else {
        alert('Envie uma imagem no formato jpeg ou png');
        return;
      }
    }
  };

  const handleUpload = async (image: File) => {
    if (!user?.uid) return;

    const currentUid = user?.uid;
    const uidImage = uuidV4();
    const uploadRef = ref(storage, `images/${currentUid}/${uidImage}`);

    uploadBytes(uploadRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        const imageItem = {
          name: uidImage,
          uid: currentUid,
          previewUrl: URL.createObjectURL(image),
          url: downloadUrl,
        };

        setCarImages([...carImages, imageItem]);
      });
    });
  };

  const handleDelete = async (data: UploadImageData) => {
    const imagePath = `images/${data.uid}/${data.name}`;

    const imageRef = ref(storage, imagePath);

    await deleteObject(imageRef).then(() =>
      setCarImages(carImages.filter((car) => car.url !== data.url))
    );
  };

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg p-4 mb-4 ">
      <label className="h-[8.25rem] min-w-[12.5rem] border border-solid border-neutral-400 rounded-lg flex items-center justify-center cursor-pointer">
        <Upload size={28} className="absolute" color="#0a0a0a" />
        <input
          type="file"
          accept="image/*"
          className="hidden cursor-pointer"
          onChange={handleFile}
        />
      </label>

      {carImages.map((i) => (
        <div
          key={i.name}
          className="w-full h-[8.25rem] flex items-center justify-center "
        >
          <button className="absolute" onClick={() => handleDelete(i)}>
            <Trash size={28} color="#FFF" />
          </button>
          <img
            src={i.previewUrl}
            className="rounded-lg w-full h-full object-cover"
            alt="Foto do carro"
          />
        </div>
      ))}
    </div>
  );
};
