import {
  FileUploaderRegular
} from "@uploadcare/react-uploader";
import { PhotoMeta } from "@/Types";
import { useState } from "react";

interface IFileUploaderProps {
  onChange: (fileEntry: PhotoMeta[]) => void;
}

const FileUploader: React.FunctionComponent<IFileUploaderProps> = ({
  onChange,
}) => {
  const [files, setFiles] = useState<PhotoMeta[]>([]);

  const handleChangeEvent = (files) => {

    const PhotoMeta:PhotoMeta[] = files.allEntries?.map((img: PhotoMeta)=>(
      {cdnUrl:img.cdnUrl, uuid:img.uuid}
    ));
    onChange(PhotoMeta)
    setFiles(PhotoMeta);
  };

  return (
    <div>
      <FileUploaderRegular
        onChange={handleChangeEvent}
        pubkey="ff0f6a88f3bd3f63f00d"
        imgOnly
      />

      <div className="grid grid-cols-2 gap-4 mt-8">
        {files?.map((file) => (
          <div key={file.uuid} className="relative">
            <img
              key={file.uuid}
              src={`${file.cdnUrl}/-/format/webp/-/quality/smart/-/stretch/fill/
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
