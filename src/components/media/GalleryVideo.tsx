import { MEDIA, MediaKey } from "@/config/media";

interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {
  mediaKey: MediaKey;
}

/**
 * In-page video (e.g. Sim's Samples lightbox). Reads src from MEDIA.
 */
const GalleryVideo = ({ mediaKey, ...rest }: Props) => (
  <video src={MEDIA[mediaKey]} {...rest} />
);
export default GalleryVideo;
