import { Photo, titleForPhoto } from '.';
import ImageSmall from '@/components/ImageSmall';
import Link from 'next/link';
import { clsx } from 'clsx/lite';
import { pathForPhoto } from '@/site/paths';
import { FilmSimulation } from '@/simulation';

export default function PhotoSmall({
  photo,
  tag,
  simulation,
  selected,
}: {
  photo: Photo
  tag?: string
  simulation?: FilmSimulation
  selected?: boolean
}) {
  return (
    <Link
      href={pathForPhoto(photo, tag, simulation)}
      className={clsx(
        'group',
        'flex relative w-full h-full',
        'active:brightness-75',
        selected && 'brightness-50',
      )}
    >
      <ImageSmall
        src={photo.url}
        aspectRatio={photo.aspectRatio}
        blurData={photo.blurData}
        className="w-full"
        alt={titleForPhoto(photo)}
      />
    </Link>
  );
};
