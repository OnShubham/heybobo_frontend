# Component Tree Architecture

## Overview
This document outlines the component structure for the Account/Profile Dashboard UI.

## Component Hierarchy

```
App (Root)
│
├── AppHeader
│   ├── Logo (Image)
│   ├── Search Input
│   └── Actions
│       ├── SOS Button
│       ├── Notification Icon (with badge)
│       └── User Avatar Icon
│
├── ProfileHeader
│   ├── Background Image
│   ├── Profile Image Container
│   │   ├── Profile Image
│   │   └── Level Badge
│   ├── User Name
│   └── XP Progress
│       ├── Progress Bar
│       └── XP Text
│
├── StatsCards
│   ├── Stat Card (Streak)
│   ├── Stat Card (XP)
│   └── Stat Card (Rank)
│
└── Main Content
    ├── AccordionSection (Personal Information)
    │   └── PersonalInfoItem[] (Name, DOB, Sex, Email, Phone)
    │
    ├── AccordionSection (Features)
    │   └── FeatureListItem[] (Health, Education, Grooming, Dietary, Fitness)
    │
    ├── AccordionSection (Notification)
    │   └── ToggleItem (Push Notification)
    │
    ├── AccordionSection (Privacy & Legal Terms)
    │   └── ActionItem[] (Terms, Privacy Policy, etc.)
    │
    ├── AccordionSection (Account)
    │   └── ActionItem[] (Change Password, Log Out, Delete Account)
    │
    └── AccordionSection (Other)
        └── ActionItem[] (Rate App, Share, Help, About)
```

## Component Details

### 1. AppHeader
**Purpose:** Top navigation bar  
**Reusable:** ✅ Yes  
**Props:**
- `logo` (string): Path to app logo
- `onSearch` (function): Search callback
- `notificationsCount` (number): Number of unread notifications
- `onSOSClick` (function): SOS button callback
- `onNotificationClick` (function): Notification icon callback
- `onProfileClick` (function): Profile icon callback

**Location:** `src/components/AppHeader/`

---

### 2. ProfileHeader
**Purpose:** User identity & progress section  
**Reusable:** ✅ Yes  
**Props:**
- `backgroundImage` (string): Path to background image
- `profileImage` (string): Path to profile picture
- `userName` (string): User's display name
- `level` (number): User's current level
- `currentXP` (number): Current XP points
- `totalXP` (number): XP needed for next level

**Location:** `src/components/ProfileHeader/`

---

### 3. StatsCards
**Purpose:** Display quick stats in card format  
**Reusable:** ✅ Yes  
**Props:**
- `stats` (array): Array of stat objects
  - Each stat: `{ icon, value, label }`

**Location:** `src/components/StatsCards/`

---

### 4. AccordionSection (Highly Reusable)
**Purpose:** Expandable/collapsible section container  
**Reusable:** ✅ Yes (Core reusable component)  
**Props:**
- `title` (string): Section title
- `children` (ReactNode): Content to display when expanded
- `defaultExpanded` (boolean): Initial expanded state

**Location:** `src/components/AccordionSection/`

**Used In:**
- Personal Information
- Features
- Notification
- Privacy & Legal Terms
- Account
- Other

---

### 5. PersonalInfoItem
**Purpose:** Display label-value pairs  
**Reusable:** ✅ Yes  
**Props:**
- `label` (string): Field label (e.g., "Name")
- `value` (string): Field value (e.g., "John Doe")

**Location:** `src/components/PersonalInfoItem/`

**Used In:** Personal Information accordion

---

### 6. FeatureListItem
**Purpose:** Simple clickable list item  
**Reusable:** ✅ Yes  
**Props:**
- `label` (string): Feature name
- `onClick` (function): Click handler

**Location:** `src/components/FeatureListItem/`

**Used In:** Features accordion

---

### 7. ToggleItem
**Purpose:** Toggle switch with label  
**Reusable:** ✅ Yes  
**Props:**
- `label` (string): Toggle label
- `isEnabled` (boolean): Current state
- `onToggle` (function): Toggle callback

**Location:** `src/components/ToggleItem/`

**Used In:** Notification accordion

---

### 8. ActionItem
**Purpose:** Clickable action row with arrow  
**Reusable:** ✅ Yes  
**Props:**
- `label` (string): Action label
- `onClick` (function): Click handler
- `variant` (string): Style variant ('default', 'danger', 'primary')

**Location:** `src/components/ActionItem/`

**Used In:**
- Privacy & Legal Terms
- Account
- Other

---

## Styling Architecture

### Global Styles
- **File:** `src/App.css`
- **Contains:** 
  - CSS reset
  - Background gradients
  - Utility classes
  - Main content container

### Component Styles
Each component has its own CSS file:
- Component-specific styles
- Responsive breakpoints
- Hover/active states
- Animations

### Design Tokens
- **Rounded corners:** 8px, 12px, full circle
- **Shadows:** Subtle (0.08-0.12 opacity)
- **Colors:**
  - Background: Gradient (#E3FADD → #A3E7F3)
  - Text: #2d3748 (primary), #718096 (secondary)
  - Accent: #48bb78 (green), #ff4444 (red)
- **Typography:**
  - System fonts
  - Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

---

## Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 769px - 1024px
- **Desktop:** > 1024px

### Responsive Behavior
- Stats cards: 3 columns → 1 column on mobile
- Padding/spacing: Reduced on mobile
- Font sizes: Slightly smaller on mobile
- Touch-friendly tap targets on mobile

---

## Data Flow

### Props Down, Events Up
- Parent component (App) holds state
- Data flows down via props
- User interactions bubble up via callbacks

### State Management
- Local state in App component
- Can be easily migrated to Context API or Redux if needed

---

## File Structure

```
src/
├── App.js                          # Main application component
├── App.css                         # Global styles
├── components/
│   ├── AppHeader/
│   │   ├── AppHeader.jsx
│   │   └── AppHeader.css
│   ├── ProfileHeader/
│   │   ├── ProfileHeader.jsx
│   │   └── ProfileHeader.css
│   ├── StatsCards/
│   │   ├── StatsCards.jsx
│   │   └── StatsCards.css
│   ├── AccordionSection/
│   │   ├── AccordionSection.jsx
│   │   └── AccordionSection.css
│   ├── PersonalInfoItem/
│   │   ├── PersonalInfoItem.jsx
│   │   └── PersonalInfoItem.css
│   ├── FeatureListItem/
│   │   ├── FeatureListItem.jsx
│   │   └── FeatureListItem.css
│   ├── ToggleItem/
│   │   ├── ToggleItem.jsx
│   │   └── ToggleItem.css
│   └── ActionItem/
│       ├── ActionItem.jsx
│       └── ActionItem.css
└── assets/
    └── images/
        ├── logo.png
        ├── top-background.png
        └── profile.png
```

---

## Usage Example

```jsx
import App from './App';

// The App component is self-contained
// Just render it and provide your data

function Root() {
  return <App />;
}
```

---

## Customization

### Adding New Sections
1. Use `AccordionSection` as wrapper
2. Choose appropriate child component:
   - `PersonalInfoItem` for label-value pairs
   - `FeatureListItem` for simple lists
   - `ToggleItem` for toggles
   - `ActionItem` for clickable actions
3. Add to App.js main content

### Theming
- Modify color variables in component CSS files
- Update gradient in App.css
- Adjust border-radius values for different roundness

---

## Best Practices

1. **Keep components pure:** No side effects in render
2. **Use props for data:** No hardcoded values
3. **Consistent naming:** Follow existing patterns
4. **Accessibility:** Add ARIA labels where needed
5. **Performance:** Use React.memo for expensive components if needed

---

## Future Enhancements

- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add animations (framer-motion)
- [ ] Dark mode support
- [ ] Internationalization (i18n)
- [ ] Unit tests for components
- [ ] Storybook for component documentation
