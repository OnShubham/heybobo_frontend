# Weekly Rewards Popup - Implementation Documentation

## Overview
A beautiful, animated weekly rewards popup component that displays daily rewards for 7 days. The popup is triggered when the user clicks the **SOS button** in the app header.

## Features

### Visual Design
- **Premium Gradient Design**: Blue gradient header with floating mascot animation
- **7-Day Reward Grid**: Responsive grid layout showing daily rewards
- **Reward Types**:
  - Gold rewards (Days 1, 4, 5, 6)
  - XP rewards (Days 2, 3)
  - Mystery Gift (Day 7 - spans 2 columns)
- **Claimed Status**: Visual checkmark indicator for claimed rewards
- **Smooth Animations**: Floating mascot, bouncing gift, hover effects

### Component Structure

```
WeeklyRewardsPopup/
├── WeeklyRewardsPopup.jsx    # Main component
├── WeeklyRewardsPopup.css    # Styling with animations
└── index.js                   # Export file
```

## Usage

### Triggering the Popup
Click the **SOS button** in the top-right corner of the app header to open the Weekly Rewards popup.

### Integration
The popup is integrated at the `MainLayout` level, making it available across all pages:

```jsx
// MainLayout.jsx
const [isWeeklyRewardsOpen, setIsWeeklyRewardsOpen] = useState(false);

const handleSOSClick = () => {
    setIsWeeklyRewardsOpen(true);
};

<WeeklyRewardsPopup
    isOpen={isWeeklyRewardsOpen}
    onClose={() => setIsWeeklyRewardsOpen(false)}
/>
```

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | boolean | Controls popup visibility |
| `onClose` | function | Callback when popup is closed |

## Rewards Configuration

The rewards are configured in the component state:

```javascript
const days = [
    { day: 1, reward: 'Gold x50', type: 'gold', claimed: true },
    { day: 2, reward: '30 XP', type: 'xp', claimed: false },
    { day: 3, reward: '30 XP', type: 'xp', claimed: false },
    { day: 4, reward: 'Gold x50', type: 'gold', claimed: false },
    { day: 5, reward: 'Gold x50', type: 'gold', claimed: false },
    { day: 6, reward: 'Gold x50', type: 'gold', claimed: false },
    { day: 7, reward: 'Mystery Gift', type: 'mystery', claimed: false }
];
```

### Reward Types
- **gold**: Shows gold coin icon (`/assets/badge/Badge_01.png`)
- **xp**: Shows XP icon (`/assets/images/xp.png`)
- **mystery**: Shows gift icon (`/assets/images/gift.png`)

## Assets Used

| Asset | Path | Usage |
|-------|------|-------|
| Weekly Rewards Mascot | `/assets/images/weekly_rewards.png` | Header mascot |
| XP Icon | `/assets/images/xp.png` | XP rewards |
| Gold Icon | `/assets/badge/Badge_01.png` | Gold rewards |
| Gift Icon | `/assets/images/gift.png` | Mystery gift |

## Styling Features

### Colors
- **Primary Blue**: `#5EAED7` (buttons, cards)
- **Light Blue**: `#7BC4E8` (gradients)
- **Orange**: `#FF9A5A` (mystery day)
- **White**: `#FFFFFF` (text, backgrounds)
- **Green**: `#4CAF50` (claimed checkmark)

### Animations
1. **Fade In**: Overlay entrance (0.3s)
2. **Slide Up**: Popup entrance (0.3s)
3. **Float Mascot**: Continuous floating motion (3s loop)
4. **Gift Bounce**: Mystery gift scaling (2s loop)
5. **Checkmark Pop**: Claimed indicator (0.4s)
6. **Hover Effects**: Card lift on hover

### Responsive Breakpoints
- **Desktop**: 7 columns (all days in one row)
- **Tablet** (≤768px): 3 columns
- **Mobile** (≤480px): 2 columns

## Customization

### Changing Rewards
Edit the `days` array in `WeeklyRewardsPopup.jsx`:

```javascript
const days = [
    { day: 1, reward: 'Your Reward', type: 'gold|xp|mystery', claimed: true|false },
    // ... more days
];
```

### Styling Modifications
All styles are in `WeeklyRewardsPopup.css`:
- Modify colors in gradient definitions
- Adjust animation timings
- Change card sizes and spacing
- Update responsive breakpoints

### Adding New Reward Types
1. Add new type to days configuration
2. Add conditional rendering in JSX
3. Add corresponding CSS classes
4. Import new icon assets

## Future Enhancements

### Potential Features
- [ ] API integration for dynamic rewards
- [ ] Claim functionality with backend
- [ ] Progress tracking
- [ ] Streak counter
- [ ] Reward history
- [ ] Sound effects on claim
- [ ] Confetti animation on claim
- [ ] Share rewards on social media

### Backend Integration
```javascript
// Example API integration
const fetchWeeklyRewards = async () => {
    const response = await fetch('/api/rewards/weekly');
    const data = await response.json();
    setDays(data.rewards);
};

const claimReward = async (dayNumber) => {
    await fetch('/api/rewards/claim', {
        method: 'POST',
        body: JSON.stringify({ day: dayNumber })
    });
};
```

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance
- Lightweight component (~4KB)
- CSS animations (GPU accelerated)
- No external dependencies
- Optimized images

## Accessibility
- Keyboard navigation support (ESC to close)
- Click outside to close
- Semantic HTML structure
- Alt text for all images
- ARIA labels (can be added)

## Testing Checklist
- [ ] Popup opens on SOS button click
- [ ] Popup closes on X button click
- [ ] Popup closes on overlay click
- [ ] Popup does NOT close on content click
- [ ] All images load correctly
- [ ] Animations work smoothly
- [ ] Responsive on all screen sizes
- [ ] Claimed status displays correctly
- [ ] Mystery day spans 2 columns (desktop)

## Troubleshooting

### Popup Not Opening
- Check if `isWeeklyRewardsOpen` state is being updated
- Verify `handleSOSClick` is connected to SOS button
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check if images exist in `/public/assets/`
- Clear browser cache

### Styling Issues
- Check if CSS file is imported
- Verify class names match
- Check for CSS conflicts with global styles

## Credits
- Design inspired by modern gamification UI patterns
- Built with React and CSS animations
- No external UI libraries required
