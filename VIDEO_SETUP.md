# Hero Video Setup Instructions

## Issue
The hero video (`hero-video.mp4`) is currently stored in Git LFS (Large File Storage), but only the pointer file is being deployed, not the actual video. This causes the video to not display on the website.

## Solution Options

### Option 1: Upload Video Directly (Recommended for small videos)
1. Replace the LFS pointer file with the actual video:
   ```bash
   # Remove from LFS tracking
   git lfs untrack public/hero-video.mp4

   # Add the actual video file (make sure it's the real video, not the pointer)
   git add public/hero-video.mp4
   git commit -m "Replace LFS pointer with actual video file"
   git push
   ```

### Option 2: Use Vercel Blob Storage (Recommended for large videos)
1. Upload your video to Vercel Blob Storage
2. Update the video source in `components/Hero.tsx`:
   ```tsx
   <source src="https://your-blob-url.vercel-storage.com/hero-video.mp4" type="video/mp4" />
   ```

### Option 3: Use External CDN (Best for production)
Upload your video to:
- **Cloudinary**: Free tier available, optimized for videos
- **Bunny CDN**: Affordable video hosting
- **YouTube/Vimeo**: Embed using iframe (change implementation)

Then update the video URL in `components/Hero.tsx` (line 183)

### Option 4: Remove LFS and Commit Actual File
If the video is under 100MB:
```bash
# Download the actual video from LFS
git lfs pull

# Remove LFS tracking
git lfs untrack public/hero-video.mp4
echo "*.mp4" >> .gitignore
echo "!public/hero-video.mp4" >> .gitignore

# Commit the actual file
git add public/hero-video.mp4 .gitattributes .gitignore
git commit -m "Store video file directly instead of LFS"
git push
```

## Current Fallback
The Hero component now displays a placeholder when the video fails to load, so your site will work even without the video.

## Video File Info
- Current file: Git LFS pointer (134 bytes)
- Actual video size: ~103 MB
- Required formats: MP4 (primary), WebM (fallback)
- Optimal dimensions: 1080x1920 (9:16 aspect ratio for Instagram Reel style)
