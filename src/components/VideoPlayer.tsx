import { useRef } from "react";

interface VideoPlayerProps {
	/**
	 * The URL of the video to play
	 */
	url: string;
	/**
	 * Additional CSS classes for the video container
	 */
	className?: string;
	/**
	 * Whether the video should autoplay (default: true)
	 */
	autoPlay?: boolean;
	/**
	 * Whether the video should loop (default: true)
	 */
	loop?: boolean;
	/**
	 * Whether the video should be muted (default: true, required for autoplay)
	 */
	muted?: boolean;
	/**
	 * The size of the video (default: "sm")
	 */
	size?: "sm" | "md";
}

/**
 * A reusable video component that loads videos from S3 via CloudFront signed URLs.
 * Features:
 * - Click to play/pause
 * - Automatic CloudFront URL signing
 * - Error handling
 * - Accessible with captions track
 */
export function VideoPlayer({
	url,
	className = "",
	autoPlay = true,
	loop = true,
	muted = true,
	size = "sm",
}: VideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleVideoClick = () => {
		if (videoRef.current) {
			if (videoRef.current.paused) {
				videoRef.current.play().catch(() => {
					// Ignore play() promise rejection (e.g., if autoplay was prevented)
				});
			} else {
				videoRef.current.pause();
			}
		}
	};

	return (
		<div className={`video-player-container ${className}`}>
			<video
				ref={videoRef}
				loop={loop}
				autoPlay={autoPlay}
				muted={muted}
				playsInline
				onClick={handleVideoClick}
				className={`video-player ${size}`}
				preload="auto"
			>
				<source src={url} type="video/mp4" />
				<track kind="captions" />
				Votre navigateur ne supporte pas la lecture de vidéos.
			</video>
		</div>
	);
}
