import { Upload } from 'lucide-react';
import { ChangeEvent } from 'react';
import { PickImageProps } from './pick';
import { useUser } from '../../../../context/User';
import { v4 as uuidV4 } from 'uuid';
import { storage } from '../../../../services';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const Pick = ({ onChange, value }: PickImageProps) => {
  const { user } = useUser();

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

    uploadBytes(uploadRef, image).then((snapshot) =>
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        
        const files = {
          name: uidImage,
          uid: currentUid,
          previewUrl: URL.createObjectURL(image),
          url: downloadUrl,
        };

        onChange([...value, files]);
      })
    );
  };

  return (
    <label className="h-[8.25rem] min-w-[12.5rem] border border-solid border-neutral-400 rounded-lg flex items-center justify-center cursor-pointer">
      <Upload size={28} className="absolute" color="#0a0a0a" />
      <input
        type="file"
        accept="image/*"
        className="hidden cursor-pointer"
        onChange={handleFile}
      />
    </label>
  );
};
