# Image Guide for The Mediaverse Services

## 📁 Folder Structure
Create a `public` folder in the root directory (if it doesn't exist) and organize images as follows:

```
public/
  └── services/
      ├── out-shop/
      └── in-shop/
```

## 📸 Image Naming Convention

### Out Shop Branding Services (8 images)

1. **ACP 2D Board**
   - File name: `acp-2d-board.jpg` or `acp-2d-board.webp`
   - Alt text: "ACP 2D Board - Flat shop signage with Aluminium Composite Panel"

2. **ACP 3D Board (Lit)**
   - File name: `acp-3d-board-lit.jpg` or `acp-3d-board-lit.webp`
   - Alt text: "ACP 3D Lit Board - Premium illuminated signage with 3D acrylic letters"

3. **Glow Shine Board**
   - File name: `glow-shine-board.jpg` or `glow-shine-board.webp`
   - Alt text: "Glow Shine Board - Ultra-bright backlit illuminated signage"

4. **Non Lit Board**
   - File name: `non-lit-board.jpg` or `non-lit-board.webp`
   - Alt text: "Non-Lit Board - Cost-effective static signage solution"

5. **3D Flange Boards (Lit)**
   - File name: `3d-flange-board-lit.jpg` or `3d-flange-board-lit.webp`
   - Alt text: "3D Flange Board Lit - Double-sided projecting illuminated sign"

6. **2D Flange Boards**
   - File name: `2d-flange-board.jpg` or `2d-flange-board.webp`
   - Alt text: "2D Flange Board - Wall-projected directional signage"

7. **2D Arch Gate**
   - File name: `2d-arch-gate.jpg` or `2d-arch-gate.webp`
   - Alt text: "2D Arch Gate - Grand entrance signage with MS frame and ACP cladding"

8. **3D Arch Gate (Lit)**
   - File name: `3d-arch-gate-lit.jpg` or `3d-arch-gate-lit.webp`
   - Alt text: "3D Arch Gate Lit - Premium illuminated entrance signage"

### In Shop Branding Services (6 images)

1. **Fabric Lit Board**
   - File name: `fabric-lit-board.jpg` or `fabric-lit-board.webp`
   - Alt text: "Fabric Light Box - Ultra-thin tension fabric system with LED backlighting"

2. **Dropdown**
   - File name: `dropdown.jpg` or `dropdown.webp`
   - Alt text: "Dropdown Signage - Ceiling suspended overhead display"

3. **Standees**
   - File name: `standees.jpg` or `standees.webp`
   - Alt text: "Roll-up Standee - Portable retractable display unit"

4. **LED Clip-ons Board**
   - File name: `led-clip-on-board.jpg` or `led-clip-on-board.webp`
   - Alt text: "LED Clip-on Frame - Ultra-slim snap frame with edge-lit LEDs"

5. **Table Tops**
   - File name: `table-tops.jpg` or `table-tops.webp`
   - Alt text: "Table Top Display - Point-of-sale counter signage"

6. **One Way Vision**
   - File name: `one-way-vision.jpg` or `one-way-vision.webp`
   - Alt text: "One Way Vision Film - Perforated window branding solution"

## 📐 Image Size Recommendations

### For Service Cards (Grid Display)
- **Dimensions:** 1200px × 800px (3:2 aspect ratio)
- **File Format:** WebP (preferred) or JPG
- **File Size:** Max 200KB per image
- **Resolution:** 72 DPI (web standard)

### For Hero/Large Display
- **Dimensions:** 1920px × 1080px (16:9 aspect ratio)
- **File Format:** WebP or JPG
- **File Size:** Max 500KB
- **Resolution:** 72 DPI

### For Gallery/Detail Views
- **Dimensions:** 1600px × 1200px (4:3 aspect ratio)
- **File Format:** WebP or JPG
- **File Size:** Max 300KB
- **Resolution:** 72 DPI

## 🎨 Image Quality Guidelines

1. **Composition:**
   - Show the product clearly in a real-world setting
   - Include good lighting (especially for lit boards)
   - Show multiple angles if possible
   - Include installation context when relevant

2. **Background:**
   - Clean, uncluttered backgrounds
   - White or neutral backgrounds work best
   - For lit boards, show them in low-light/dark settings to highlight illumination

3. **Color Accuracy:**
   - Ensure colors match your red/white brand theme
   - Avoid over-saturation
   - Maintain consistent color temperature across all images

4. **File Optimization:**
   - Use WebP format for best compression
   - Compress images before uploading (use tools like TinyPNG, Squoosh)
   - Maintain quality while reducing file size

## 📋 Quick Checklist

- [ ] All 14 service images named correctly
- [ ] Images saved in `public/services/out-shop/` and `public/services/in-shop/`
- [ ] Images optimized (WebP format, under size limits)
- [ ] Consistent aspect ratios (3:2 for cards)
- [ ] Alt text prepared for each image
- [ ] Images show products clearly in good lighting
- [ ] File sizes optimized for web performance

## 🔗 Image Paths in Code

Once images are added, they will be referenced as:
- `/services/out-shop/acp-2d-board.webp`
- `/services/in-shop/fabric-lit-board.webp`

## 💡 Pro Tips

1. **Use WebP format** - Better compression than JPG while maintaining quality
2. **Create multiple sizes** - Consider creating @2x versions for retina displays
3. **Lazy loading** - Images will be lazy-loaded automatically in Next.js
4. **SEO** - Always include descriptive alt text matching the service name
5. **Consistency** - Keep lighting, angle, and style consistent across all service images

