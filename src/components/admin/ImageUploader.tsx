import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  currentImage?: string | null;
  onImageUploaded: (url: string) => void;
  onImageRemoved: () => void;
  uploadFn: (file: File) => Promise<string | null>;
  isUploading?: boolean;
}

export const ImageUploader = ({
  currentImage,
  onImageUploaded,
  onImageRemoved,
  uploadFn,
  isUploading = false,
}: ImageUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload file
    setUploading(true);
    try {
      const url = await uploadFn(file);
      if (url) {
        onImageUploaded(url);
        setPreview(url);
      }
    } catch (err) {
      console.error('Upload failed:', err);
      setPreview(currentImage || null);
    } finally {
      setUploading(false);
    }
  }, [uploadFn, onImageUploaded, currentImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif'],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleRemove = () => {
    setPreview(null);
    onImageRemoved();
  };

  const isLoading = uploading || isUploading;

  if (preview || currentImage) {
    return (
      <div className="relative rounded-lg overflow-hidden border border-border bg-muted/30">
        <img
          src={preview || currentImage || ''}
          alt="Preview"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => document.getElementById('image-input')?.click()}
            disabled={isLoading}
          >
            Cambia
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleRemove}
            disabled={isLoading}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <input
          id="image-input"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onDrop([file]);
          }}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
        isDragActive
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50 hover:bg-muted/50"
      )}
    >
      <input {...getInputProps()} />
      {isLoading ? (
        <Loader2 className="w-10 h-10 mx-auto text-muted-foreground animate-spin" />
      ) : (
        <>
          <ImageIcon className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
          <p className="text-sm text-muted-foreground mb-1">
            {isDragActive
              ? "Rilascia l'immagine qui..."
              : "Trascina un'immagine o clicca per selezionare"}
          </p>
          <p className="text-xs text-muted-foreground">
            PNG, JPG, WEBP fino a 5MB
          </p>
        </>
      )}
    </div>
  );
};
