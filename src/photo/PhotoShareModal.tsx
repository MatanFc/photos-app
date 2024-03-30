import PhotoOGTile from '@/photo/PhotoOGTile';
import { absolutePathForPhoto, pathForPhoto } from '@/site/paths';
import { Photo } from '.';
import ShareModal from '@/components/ShareModal';
import { FilmSimulation } from '@/simulation';

export default function PhotoShareModal({
  photo,
  tag,
  simulation,
}: {
  photo: Photo
  tag?: string
  simulation?: FilmSimulation
}) {
  return (
    <ShareModal
      title="Share Photo"
      pathShare={absolutePathForPhoto(photo, tag, simulation)}
      pathClose={pathForPhoto(photo, tag, simulation)}
    >
      <PhotoOGTile photo={photo} />
    </ShareModal>
  );
};
