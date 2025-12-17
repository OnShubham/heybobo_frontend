# Assets Guide

## 📸 Required Assets

This document outlines all the image assets you need to provide for the Account/Profile Dashboard UI.

---

## 🖼️ Asset List

### 1. App Logo
- **Filename:** `logo.png`
- **Location:** `public/assets/images/logo.png`
- **Recommended Size:** 120px × 40px (or maintain aspect ratio)
- **Format:** PNG with transparency
- **Usage:** Displayed in the top-left corner of the AppHeader
- **Notes:** Should be your brand logo, clear and readable at small sizes

---

### 2. Top Background Image
- **Filename:** `top-background.png`
- **Location:** `public/assets/images/top-background.png`
- **Recommended Size:** 1200px × 300px (or higher resolution)
- **Format:** PNG or JPG
- **Usage:** Background image for the ProfileHeader section
- **Notes:** 
  - Should complement the gradient background
  - Can be a pattern, texture, or decorative image
  - Will be overlaid with gradient: `linear-gradient(180deg, #E3FADD 0%, #A3E7F3 100%)`

---

### 3. Profile Picture
- **Filename:** `profile.png`
- **Location:** `public/assets/images/profile.png`
- **Recommended Size:** 240px × 240px (square)
- **Format:** PNG or JPG
- **Usage:** User's profile picture in ProfileHeader
- **Notes:** 
  - Will be displayed as a circle (120px diameter)
  - Should be a square image for best results
  - High quality recommended for retina displays

---

## 📥 How to Add Your Assets

### Option 1: Manual Copy

1. Prepare your images according to the specifications above
2. Copy them to the `public/assets/images/` directory
3. Ensure filenames match exactly:
   - `logo.png`
   - `top-background.png`
   - `profile.png`

### Option 2: Command Line (Windows PowerShell)

```powershell
# Navigate to project directory
cd c:\Shubham\Office\heybobo_frontend

# Copy your assets (replace paths with your actual file paths)
Copy-Item "C:\path\to\your\logo.png" -Destination "public\assets\images\logo.png"
Copy-Item "C:\path\to\your\background.png" -Destination "public\assets\images\top-background.png"
Copy-Item "C:\path\to\your\profile.png" -Destination "public\assets\images\profile.png"
```

---

## 🎨 Asset Specifications

### Logo Specifications
```
Dimensions: 120px × 40px (3:1 ratio)
File Size: < 50KB recommended
Color Mode: RGB
Transparency: Yes (PNG)
DPI: 72 (web standard) or higher for retina
```

### Background Specifications
```
Dimensions: 1200px × 300px minimum (4:1 ratio)
File Size: < 500KB recommended
Color Mode: RGB
Format: PNG or JPG
DPI: 72 (web standard) or higher
```

### Profile Picture Specifications
```
Dimensions: 240px × 240px (1:1 ratio, square)
File Size: < 200KB recommended
Color Mode: RGB
Format: PNG or JPG
DPI: 144 (2x for retina) recommended
Aspect Ratio: 1:1 (square)
```

---

## 🔄 Updating Assets

If you need to update assets after initial setup:

1. Replace the file in `public/assets/images/`
2. Keep the same filename
3. Clear browser cache (Ctrl + Shift + R) to see changes
4. Restart dev server if changes don't appear

---

## 🚨 Troubleshooting

### Images Not Showing?

**Check:**
1. ✅ Files are in `public/assets/images/` directory
2. ✅ Filenames match exactly (case-sensitive)
3. ✅ File extensions are correct (.png, not .PNG)
4. ✅ Browser cache is cleared
5. ✅ Dev server is running

**Common Issues:**
- **Wrong path:** Ensure files are in `public/assets/images/`, not `src/assets/images/`
- **Case sensitivity:** Use lowercase filenames
- **File format:** Ensure images are valid PNG/JPG files
- **Permissions:** Check file read permissions

---

## 📐 Creating Placeholder Images

If you don't have assets yet, you can create placeholders:

### Using Online Tools:
- **Placeholder.com:** https://placeholder.com/
- **Lorem Picsum:** https://picsum.photos/

### Example Placeholder URLs:
```
Logo: https://via.placeholder.com/120x40/667eea/ffffff?text=Logo
Background: https://via.placeholder.com/1200x300/E3FADD/A3E7F3?text=Background
Profile: https://via.placeholder.com/240x240/cccccc/ffffff?text=Profile
```

### Temporary Solution in Code:
You can temporarily use placeholder URLs in `App.js`:

```jsx
<AppHeader
  logo="https://via.placeholder.com/120x40/667eea/ffffff?text=Logo"
  // ... other props
/>

<ProfileHeader
  backgroundImage="https://via.placeholder.com/1200x300/E3FADD/A3E7F3?text=Background"
  profileImage="https://via.placeholder.com/240x240/cccccc/ffffff?text=Profile"
  // ... other props
/>
```

---

## 🎯 Best Practices

1. **Optimize Images:** Use tools like TinyPNG or ImageOptim to reduce file size
2. **Use WebP:** For better compression (requires fallback)
3. **Retina Ready:** Provide 2x resolution images for sharp display
4. **Consistent Style:** Ensure all images match your brand aesthetic
5. **Accessibility:** Provide meaningful alt text in components

---

## 📊 Asset Checklist

Before deploying, ensure:

- [ ] Logo is clear and readable at small sizes
- [ ] Background image complements the gradient
- [ ] Profile picture is high quality and properly cropped
- [ ] All images are optimized for web
- [ ] File sizes are reasonable (< 500KB total)
- [ ] Images display correctly on all screen sizes
- [ ] Images work on retina displays

---

## 🔗 Additional Resources

- **Image Optimization:** https://tinypng.com/
- **Free Stock Photos:** https://unsplash.com/
- **Icon Resources:** https://www.flaticon.com/
- **Color Palette:** https://coolors.co/

---

## 📝 Notes

- All paths in the code use `/assets/images/` which maps to `public/assets/images/`
- React's public folder is served at the root URL
- Images in the public folder can be referenced with absolute paths starting with `/`
- For dynamic imports, consider moving images to `src/assets/` and using `import`

---

**Need Help?** Contact the development team for assistance with asset preparation.
