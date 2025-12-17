# 🚀 Quick Reference Guide

## 📋 Table of Contents
1. [Getting Started](#getting-started)
2. [Component Quick Reference](#component-quick-reference)
3. [Common Tasks](#common-tasks)
4. [Troubleshooting](#troubleshooting)
5. [File Locations](#file-locations)

---

## 🎯 Getting Started

### Start the App
```bash
cd c:\Shubham\Office\heybobo_frontend
npm start
```
**URL:** http://localhost:3000

### Build for Production
```bash
npm run build
```

---

## 🧩 Component Quick Reference

### 1. AppHeader
**Location:** `src/components/AppHeader/`
```jsx
<AppHeader
  logo="/assets/images/logo.png"
  onSearch={(query) => console.log(query)}
  notificationsCount={3}
  onSOSClick={() => {}}
  onNotificationClick={() => {}}
  onProfileClick={() => {}}
/>
```

### 2. ProfileHeader
**Location:** `src/components/ProfileHeader/`
```jsx
<ProfileHeader
  backgroundImage="/assets/images/top-background.png"
  profileImage="/assets/images/profile.png"
  userName="John Doe"
  level={5}
  currentXP={1680}
  totalXP={2000}
/>
```

### 3. StatsCards
**Location:** `src/components/StatsCards/`
```jsx
<StatsCards 
  stats={[
    { icon: '🔥', value: '1 Day', label: 'Streak' },
    { icon: '💎', value: '270', label: 'XP' }
  ]} 
/>
```

### 4. AccordionSection
**Location:** `src/components/AccordionSection/`
```jsx
<AccordionSection title="Section Title" defaultExpanded={true}>
  {/* Your content here */}
</AccordionSection>
```

### 5. PersonalInfoItem
**Location:** `src/components/PersonalInfoItem/`
```jsx
<PersonalInfoItem label="Name" value="John Doe" />
```

### 6. FeatureListItem
**Location:** `src/components/FeatureListItem/`
```jsx
<FeatureListItem 
  label="Health" 
  onClick={() => console.log('Clicked')} 
/>
```

### 7. ToggleItem
**Location:** `src/components/ToggleItem/`
```jsx
<ToggleItem
  label="Push Notification"
  isEnabled={true}
  onToggle={(enabled) => console.log(enabled)}
/>
```

### 8. ActionItem
**Location:** `src/components/ActionItem/`
```jsx
<ActionItem
  label="Log Out"
  variant="danger"  // 'default' | 'danger' | 'primary'
  onClick={() => console.log('Clicked')}
/>
```

---

## 📝 Common Tasks

### Change User Data
**File:** `src/data/sampleData.js`
```javascript
export const userData = {
  profile: {
    userName: 'Your Name',
    level: 10,
    currentXP: 500,
    totalXP: 1000,
  },
  // ... more data
};
```

### Add New Personal Info Field
**File:** `src/data/sampleData.js`
```javascript
personalInfo: [
  { label: 'Name', value: 'John Doe' },
  { label: 'New Field', value: 'New Value' }, // Add here
]
```

### Add New Feature
**File:** `src/data/sampleData.js`
```javascript
features: [
  'Health',
  'Education',
  'Your New Feature', // Add here
]
```

### Add New Section
**File:** `src/App.js`
```jsx
<AccordionSection title="New Section" defaultExpanded={false}>
  <ActionItem label="New Action" onClick={() => {}} />
</AccordionSection>
```

### Change Colors
**File:** Component CSS files
```css
/* Example: Change XP bar color */
.xp-bar-fill {
  background: linear-gradient(90deg, #yourColor 0%, #yourColor2 100%);
}
```

### Replace Images
1. Add new images to `public/assets/images/`
2. Update paths in `src/data/sampleData.js`:
```javascript
export const assetPaths = {
  logo: '/assets/images/your-logo.png',
  topBackground: '/assets/images/your-background.png',
  profileImage: '/assets/images/your-profile.png',
};
```

---

## 🔧 Troubleshooting

### Images Not Showing
1. Check files are in `public/assets/images/`
2. Verify file names match exactly
3. Clear browser cache (Ctrl + Shift + R)
4. Restart dev server

### Styles Not Applying
1. Check CSS file is imported in component
2. Verify class names match
3. Clear browser cache
4. Restart dev server

### Component Not Rendering
1. Check import path is correct
2. Verify props are passed
3. Check browser console for errors
4. Ensure component is exported/imported correctly

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📁 File Locations

### Components
```
src/components/
├── AppHeader/         → Top navigation bar
├── ProfileHeader/     → User profile section
├── StatsCards/        → Stats display cards
├── AccordionSection/  → Expandable sections
├── PersonalInfoItem/  → Label-value pairs
├── FeatureListItem/   → Feature list items
├── ToggleItem/        → Toggle switches
└── ActionItem/        → Action buttons
```

### Data
```
src/data/
└── sampleData.js      → All app data
```

### Assets
```
public/assets/images/
├── logo.png           → App logo
├── top-background.png → Profile background
└── profile.png        → Profile picture
```

### Styles
```
src/
├── App.css            → Global styles
└── components/*/      → Component-specific CSS
```

### Documentation
```
Root Directory/
├── README.md                    → Main documentation
├── COMPONENT_TREE.md            → Component architecture
├── ASSETS_GUIDE.md              → Image specifications
├── IMPLEMENTATION_SUMMARY.md    → Project summary
├── VISUAL_COMPONENT_TREE.md     → Visual tree diagram
└── QUICK_REFERENCE.md           → This file
```

---

## 🎨 Color Reference

```css
/* Backgrounds */
--gradient-top: #E3FADD;
--gradient-bottom: #A3E7F3;
--white: #FFFFFF;

/* Text */
--text-primary: #2d3748;
--text-secondary: #718096;
--text-muted: #cbd5e0;

/* Accents */
--success: #48bb78;
--danger: #ff4444;
--primary: #3182ce;

/* Borders */
--border-color: #e2e8f0;
```

---

## 📐 Spacing Reference

```css
/* Padding */
--padding-mobile: 16px;
--padding-desktop: 24px;

/* Border Radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-full: 50%;

/* Shadows */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);  /* Light */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); /* Medium */
```

---

## 🔄 State Management

### Current State (Local)
- Notification toggle state in `App.js`
- Accordion expand/collapse in `AccordionSection.jsx`

### Future State (If Needed)
- Use React Context for global state
- Use Redux for complex state management
- Use React Query for API data

---

## 🌐 API Integration (Future)

### Example: Fetch User Data
```javascript
// In App.js or custom hook
useEffect(() => {
  fetch('/api/user/profile')
    .then(res => res.json())
    .then(data => {
      // Update state with API data
      setUserData(data);
    });
}, []);
```

### Example: Update Notification Setting
```javascript
const handleToggle = async (enabled) => {
  setPushNotifications(enabled);
  
  await fetch('/api/user/settings', {
    method: 'PUT',
    body: JSON.stringify({ pushNotifications: enabled })
  });
};
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

---

## ⌨️ Keyboard Shortcuts (Dev)

- **Ctrl + C** - Stop dev server
- **Ctrl + Shift + R** - Hard refresh browser
- **F12** - Open developer tools
- **Ctrl + Shift + I** - Inspect element

---

## 📦 NPM Commands

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App (⚠️ irreversible)
```

---

## 🎯 Quick Checklist

### Before Deployment
- [ ] Replace placeholder images with actual assets
- [ ] Update user data in `sampleData.js`
- [ ] Test on mobile, tablet, desktop
- [ ] Check all links and buttons work
- [ ] Verify all images load correctly
- [ ] Test accordion expand/collapse
- [ ] Verify toggle switches work
- [ ] Run production build
- [ ] Test production build locally

### After Deployment
- [ ] Verify live site loads correctly
- [ ] Test on different browsers
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test all interactive elements

---

## 💡 Tips & Best Practices

1. **Keep components pure** - No side effects in render
2. **Use props for data** - Avoid hardcoding
3. **Follow naming conventions** - Be consistent
4. **Comment complex logic** - Help future you
5. **Test on real devices** - Not just browser resize
6. **Optimize images** - Use tools like TinyPNG
7. **Use semantic HTML** - Better accessibility
8. **Keep files organized** - One component per folder

---

## 🔗 Useful Links

- **React Docs:** https://react.dev/
- **Create React App:** https://create-react-app.dev/
- **CSS Tricks:** https://css-tricks.com/
- **MDN Web Docs:** https://developer.mozilla.org/

---

## 📞 Need Help?

1. Check browser console for errors
2. Review component documentation
3. Check this quick reference
4. Review COMPONENT_TREE.md
5. Contact development team

---

**Last Updated:** December 16, 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅
