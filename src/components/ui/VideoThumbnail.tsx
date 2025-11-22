import { useState, useRef, useEffect } from "react";

interface VideoThumbnailProps {
  src: string;
  alt?: string;
  className?: string;
  fallback?: string;
}

export default function VideoThumbnail({
  src,
  alt = "Video thumbnail",
  className = "",
  fallback,
}: VideoThumbnailProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    const captureFrame = () => {
      if (!canvas || !video) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas size to video dimensions
      canvas.width = video.videoWidth || 1280;
      canvas.height = video.videoHeight || 720;

      // Draw the first frame to canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to image URL
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      setThumbnailUrl(dataUrl);
      setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
      // Seek to first frame (0 seconds)
      video.currentTime = 0;
    };

    const handleSeeked = () => {
      // Once seeked to first frame, capture it
      captureFrame();
    };

    const handleError = () => {
      setIsLoading(false);
      // If there's a fallback, use it
      if (fallback) {
        setThumbnailUrl(fallback);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("error", handleError);

    // Load the video
    video.load();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("error", handleError);
    };
  }, [src, fallback]);

  // Show fallback or loading state
  if (isLoading && !thumbnailUrl) {
    return (
      <div className={`w-full h-full bg-black flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {/* Hidden video and canvas for capturing frame */}
      <video
        ref={videoRef}
        src={src}
        className="hidden"
        preload="metadata"
        muted
        playsInline
      />
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Display thumbnail */}
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
        />
      ) : fallback ? (
        <img
          src={fallback}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
        />
      ) : (
        <div className={`w-full h-full bg-black ${className}`} />
      )}
    </>
  );
}

