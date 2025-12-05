# Upload Video to Vercel Blob Storage

## Step 1: Install Vercel CLI (if not already installed)
```bash
npm install -g vercel
```

## Step 2: Login to Vercel
```bash
vercel login
```

## Step 3: Link Your Project
```bash
vercel link
```

## Step 4: Upload Your Video
```bash
vercel blob upload /path/to/your/video.mp4 --token YOUR_BLOB_TOKEN
```

This will give you a URL like:
`https://your-project.vercel-storage.com/hero-video.mp4`

## Step 5: Update Hero.tsx
Replace line 185 in `components/Hero.tsx`:
```tsx
<source src="https://your-blob-url.vercel-storage.com/hero-video.mp4" type="video/mp4" />
```

## Alternative: Use Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Select your project
3. Go to "Storage" → "Blob"
4. Click "Upload" and select your video
5. Copy the URL and update Hero.tsx

---

**Benefits:**
- ✅ No file size limits
- ✅ Automatic CDN distribution
- ✅ Fast loading worldwide
- ✅ Free tier: 100GB bandwidth/month
