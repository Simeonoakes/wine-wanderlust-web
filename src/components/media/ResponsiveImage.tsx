import { MEDIA, MediaKey } from "@/config/media";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  mediaKey: MediaKey;
  alt: string;
}

/**
 * Reads its src from the centralised MEDIA registry.
 * Usage: <ResponsiveImage mediaKey="img_8254" alt="..." className="..." />
 */
const ResponsiveImage = ({ mediaKey, alt, ...rest }: Props) => (
  <img src={MEDIA[mediaKey]} alt={alt} loading="lazy" {...rest} />
);

export default ResponsiveImage;
