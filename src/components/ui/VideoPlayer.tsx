import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

interface VideoPlayerProps {
  src: string;
  thumbnail?: string;
  className?: string;
  autoplay?: boolean;
  aspectRatio?: string;
}

export default function VideoPlayer({
  src,
  thumbnail,
  className = "",
  autoplay = false,
  aspectRatio = "video",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const thumbnailVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Capture first frame of video as thumbnail
  useEffect(() => {
    if (thumbnail || !thumbnailVideoRef.current) return;

    const video = thumbnailVideoRef.current;

    const captureFrame = () => {
      if (!canvasRef.current || !video) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size to video dimensions
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;

      // Draw the first frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to image URL
      const dataUrl = canvas.toDataURL("image/jpeg");
      setThumbnailUrl(dataUrl);
    };

    const handleLoadedMetadata = () => {
      // Seek to first frame
      video.currentTime = 0;
    };

    const handleSeeked = () => {
      // Once seeked to first frame, capture it
      captureFrame();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    // Load the video
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [src, thumbnail]);

  const aspectRatioClass = aspectRatio === "video" ? "aspect-video" : aspectRatio === "1212/572" ? "aspect-[1212/572]" : "aspect-video";
  const aspectRatioStyle = aspectRatio !== "video" && aspectRatio !== "1212/572" ? { aspectRatio: aspectRatio } : {};

  return (
    <div className={`relative w-full ${className}`}>
      <div 
        className={`relative ${aspectRatioClass} bg-black overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all`}
        style={aspectRatioStyle}
      >
        {/* Hidden video and canvas for capturing first frame */}
        {!thumbnail && (
          <>
            <video
              ref={thumbnailVideoRef}
              src={src}
              className="hidden"
              preload="metadata"
              muted
              playsInline
            />
            <canvas ref={canvasRef} className="hidden" />
          </>
        )}

        {/* Show video poster/thumbnail when not playing */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : thumbnailUrl ? (
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-black" />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[80px] h-[80px] bg-[#261E51] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 glow-purple-hover"
              >
                <FaPlay className="text-white text-2xl ml-1" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.video
              key="playing-video"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              controls
              autoPlay
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
