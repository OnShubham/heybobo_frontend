# HeyBobo Frontend - Account/Profile Dashboard

A pixel-perfect, component-based React UI for an Account/Profile Dashboard with modern design aesthetics.

## 🎯 Project Overview

This project implements a responsive, modular Account/Profile Dashboard UI built with React.js. The design follows a strict component-based architecture with reusable, well-documented components.

### Key Features

✅ **Pixel-Perfect Design** - Matches reference design exactly  
✅ **Component-Based Architecture** - 8 reusable components  
✅ **Fully Responsive** - Mobile, tablet, and desktop support  
✅ **Modern Aesthetics** - Gradients, shadows, smooth animations  
✅ **Clean Code** - Separated concerns, no hardcoded data  
✅ **Easy to Theme** - Centralized styling approach  

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd heybobo_frontend

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
heybobo_frontend/
├── public/
│   └── assets/
│       └── images/          # Place your images here
│           ├── logo.png
│           ├── top-background.png
│           └── profile.png
├── src/
│   ├── components/
│   │   ├── AppHeader/
│   │   ├── ProfileHeader/
│   │   ├── StatsCards/
│   │   ├── AccordionSection/
│   │   ├── PersonalInfoItem/
│   │   ├── FeatureListItem/
│   │   ├── ToggleItem/
│   │   └── ActionItem/
│   ├── App.js              # Main application
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── COMPONENT_TREE.md       # Component documentation
└── README.md               # This file
```

---

## 🧩 Components

### 1. **AppHeader**
Top navigation bar with logo, search, SOS button, notifications, and user avatar.

**Props:**
- `logo`: App logo path
- `onSearch`: Search callback
- `notificationsCount`: Notification count
- `onSOSClick`, `onNotificationClick`, `onProfileClick`: Action callbacks

---

### 2. **ProfileHeader**
User profile section with background image, profile picture, level badge, and XP progress bar.

**Props:**
- `backgroundImage`: Background image path
- `profileImage`: Profile picture path
- `userName`: User's name
- `level`: Current level
- `currentXP`, `totalXP`: Experience points

---

### 3. **StatsCards**
Grid of stat cards displaying key metrics (streak, XP, rank).

**Props:**
- `stats`: Array of `{ icon, value, label }` objects

---

### 4. **AccordionSection** ⭐ (Highly Reusable)
Expandable/collapsible section container used throughout the app.

**Props:**
- `title`: Section title
- `children`: Content to display
- `defaultExpanded`: Initial state

---

### 5. **PersonalInfoItem**
Label-value pair display for personal information.

**Props:**
- `label`: Field label
- `value`: Field value

---

### 6. **FeatureListItem**
Simple clickable list item for features.

**Props:**
- `label`: Feature name
- `onClick`: Click handler

---

### 7. **ToggleItem**
Toggle switch with label for settings.

**Props:**
- `label`: Toggle label
- `isEnabled`: Current state
- `onToggle`: Toggle callback

---

### 8. **ActionItem**
Clickable action row with arrow and variant support.

**Props:**
- `label`: Action label
- `onClick`: Click handler
- `variant`: 'default' | 'danger' | 'primary'

---

## 🎨 Design System

### Colors

```css
/* Background Gradient */
background: linear-gradient(180deg, #E3FADD 0%, #A3E7F3 100%);

/* Text Colors */
Primary: #2d3748
Secondary: #718096

/* Accent Colors */
Green: #48bb78
Red: #ff4444
Blue: #3182ce
```

### Typography

- **Font Family:** System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
- **Font Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- **Border Radius:** 8px (small), 12px (medium), 50% (circular)
- **Shadows:** Subtle with 0.08-0.12 opacity
- **Padding:** 24px (desktop), 16px (mobile)

---

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 768px
- **Tablet:** 769px - 1024px
- **Desktop:** > 1024px

### Responsive Behavior

- Stats cards: 3 columns → 1 column on mobile
- Reduced padding and font sizes on mobile
- Touch-friendly tap targets
- Optimized layouts for all screen sizes

---

## 🖼️ Adding Your Assets

### Required Images

1. **App Logo** (`public/assets/images/logo.png`)
   - Recommended size: 120x40px
   - Format: PNG with transparency

2. **Top Background** (`public/assets/images/top-background.png`)
   - Recommended size: 1200x300px
   - Format: PNG or JPG

3. **Profile Picture** (`public/assets/images/profile.png`)
   - Recommended size: 240x240px
   - Format: PNG or JPG (circular crop)

### How to Add

```bash
# Create assets directory if it doesn't exist
mkdir -p public/assets/images

# Copy your images
cp /path/to/your/logo.png public/assets/images/
cp /path/to/your/background.png public/assets/images/top-background.png
cp /path/to/your/profile.png public/assets/images/profile.png
```

---

## 🔧 Customization

### Changing Data

Edit `src/App.js` to update:
- Personal information
- Stats values
- Feature list
- Action items

```jsx
const personalInfo = [
  { label: 'Name', value: 'Your Name' },
  { label: 'DOB', value: '01/01/1990' },
  // ... more fields
];
```

### Changing Colors

Update CSS variables in component CSS files:

```css
/* Example: Change accent color */
.xp-bar-fill {
  background: linear-gradient(90deg, #yourColor 0%, #yourColor2 100%);
}
```

### Adding New Sections

```jsx
<AccordionSection title="New Section" defaultExpanded={false}>
  <ActionItem label="New Action" onClick={handleClick} />
</AccordionSection>
```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Build for production
npm run build
```

---

## 📦 Building for Production

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized files
# Deploy the contents of the build folder to your server
```

---

## 🎯 Design Principles

1. **No Design Improvisation** - Follows reference design strictly
2. **Component Reusability** - Every component is reusable with props
3. **Clean Code** - Separated concerns, no hardcoded values
4. **Responsive First** - Works on all devices
5. **Performance** - Optimized rendering and animations

---

## 📚 Documentation

- **[COMPONENT_TREE.md](./COMPONENT_TREE.md)** - Detailed component architecture
- **Inline Comments** - Code is well-documented
- **PropTypes** - Can be added for type checking

---

## 🛠️ Tech Stack

- **React** 18.x
- **CSS3** (Vanilla CSS, no frameworks)
- **JavaScript** ES6+

---

## 🤝 Contributing

1. Follow the existing component structure
2. Maintain consistent naming conventions
3. Add comments for complex logic
4. Test on multiple screen sizes
5. Keep components pure and reusable

---

## 📄 License

This project is private and proprietary.

---

## 🐛 Troubleshooting

### Images not showing?

Make sure images are in `public/assets/images/` and paths in `App.js` are correct.

### Styles not applying?

Check that CSS files are imported in component files.

### Component not rendering?

Verify props are passed correctly and component is imported in `App.js`.

---

## 📞 Support

For questions or issues, please contact the development team.

---

**Built with ❤️ by the HeyBobo Team**
