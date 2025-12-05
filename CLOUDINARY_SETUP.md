# Upload Video to Cloudinary (Free)

## Step 1: Create Free Account
1. Go to: https://cloudinary.com/users/register/free
2. Sign up for free account (No credit card needed)

## Step 2: Upload Your Video
1. Login to Cloudinary Dashboard
2. Click "Media Library" → "Upload"
3. Upload your 93MB video
4. Wait for upload to complete

## Step 3: Get Video URL
After upload, click on your video and copy the URL. It will look like:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/hero-video.mp4
```

## Step 4: Update Hero.tsx
Replace line 185 in `components/Hero.tsx` with your Cloudinary URL:
```tsx
<source src="https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/hero-video.mp4" type="video/mp4" />
```

## Step 5: (Optional) Optimize Video
In Cloudinary, you can add transformations to reduce size:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/q_auto,w_1080/hero-video.mp4
```
- `q_auto` = automatic quality optimization
- `w_1080` = max width 1080px

---

**Benefits:**
- ✅ 100% Free tier: 25GB storage, 25GB bandwidth/month
- ✅ Automatic video optimization
- ✅ Fast CDN delivery
- ✅ No coding required
