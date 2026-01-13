import { useEffect, useRef, useState } from "react";

export const cloudfrontSignedUrlFor = async (
	url: string,
	options?: {
		download?: boolean;
	},
) => {
	try {
		const response = await fetch(
			`https://archispec.fr/app/cloudfront-signed-url?url=${encodeURIComponent(url)}&download=${options?.download === true}`,
		);

		if (!response.ok) {
			// Try to extract server-provided error message
			let message = "This link is unavailable or has expired.";
			try {
				const data = await response.json();
				const serverMessage =
					(typeof data?.error === "string" && data.error) ||
					(typeof data?.message === "string" && data.message);
				if (serverMessage) message = serverMessage;
			} catch {
				// ignore JSON parse failures and use default message
			}
			throw new Error(message);
		}

		console.log(response);

		const data = await response.json();
		if (!data?.signedUrl) {
			throw new Error("This link is unavailable or has expired.");
		}
		return data.signedUrl;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error("This link is unavailable or has expired.");
	}
};

interface CloudFrontVideoProps {
	/**
	 * The file path in the S3 files bucket (e.g., "files/extension-install.mp4")
	 * The CloudFront route will extract the pathname and remove the 'files/' prefix
	 */
	filePath: string;
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
}

/**
 * A reusable video component that loads videos from S3 via CloudFront signed URLs.
 * Features:
 * - Click to play/pause
 * - Automatic CloudFront URL signing
 * - Error handling
 * - Accessible with captions track
 */
export function CloudFrontVideo({
	filePath,
	className = "",
	autoPlay = true,
	loop = true,
	muted = true,
}: CloudFrontVideoProps) {
	const [videoUrl, setVideoUrl] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const loadVideo = async () => {
			try {
				// The CloudFront route expects a URL with pathname containing 'files/'
				// The pathname will be extracted and the 'files/' prefix removed before signing
				const fileUrl = `https://example.com/${filePath}`;
				const signedUrl = await cloudfrontSignedUrlFor(fileUrl);
				console.log(signedUrl);
				setVideoUrl(signedUrl);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to load video");
			}
		};

		loadVideo();
	}, [filePath]);

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

	if (error) {
		return <p>Impossible de charger la vidéo : {error}</p>;
	}

	if (!videoUrl) {
		return null; // Or a loading spinner if preferred
	}

	return (
		<div className={`my-8 ${className}`}>
			<video
				ref={videoRef}
				loop={loop}
				autoPlay={autoPlay}
				muted={muted}
				playsInline
				onClick={handleVideoClick}
				className="w-full rounded-lg shadow-lg cursor-pointer"
				preload="auto"
			>
				<source src={videoUrl} type="video/mp4" />
				<track kind="captions" />
				Votre navigateur ne supporte pas la lecture de vidéos.
			</video>
		</div>
	);
}
