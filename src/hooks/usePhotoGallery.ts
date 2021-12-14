import {useState,useEffect} from 'react'
import {Camera,CameraResultType,CameraSource,Photo} from '@capacitor/camera'


export interface UserPhoto {
    filePath : string;
    webViewPath? : string;
  }

export function usePhotoGallery() {
    const [photos, setPhotos] = useState<UserPhoto[]>([]);

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType : CameraResultType.Uri
          , source : CameraSource.Camera
          , quality : 100
        });

        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [
            {
                filePath:fileName,
                webViewPath: photo.webPath
            },
            ...photos
        ]
    };

    return {
        photos,
        takePhoto
    }
};
