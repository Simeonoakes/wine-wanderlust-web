import { forwardRef } from "react";
import { MEDIA, MediaKey } from "@/config/media";

interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {
  mediaKey?: MediaKey;
}

/**
 * Full-bleed background video, reading its source from MEDIA by default.
 */
const HeroVideo = forwardRef<HTMLVideoElement, Props>(
  ({ mediaKey = "heroVideo", ...rest }, ref) => (
    <video
      ref={ref}
      src={MEDIA[mediaKey]}
      autoPlay
      muted
      loop
      playsInline
      {...rest}
    />
  ),
);
HeroVideo.displayName = "HeroVideo";
export default HeroVideo;
