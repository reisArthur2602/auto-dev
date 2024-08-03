
import { Pick } from './sessions/Pick';
import { Card } from './sessions/Card';
import { UploadProps } from './upload';

export const Upload = ({ onChange, value }: UploadProps) => {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg p-4 mb-4 ">
      <Pick onChange={onChange} value={value} />

      {value.map((i) => (
        <Card key={i.uid} image={i} onChange={onChange} value={value} />
      ))}
    </div>
  );
};
