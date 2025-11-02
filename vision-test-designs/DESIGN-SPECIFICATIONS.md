# Design Specifications - VisionCare Eye & Vision Testing Product

## Project Overview
Complete design package for an eye and vision testing product that uses gift cards with scratch-off codes for online redemption.

---

## Deliverable 1: Gift Card

### Dimensions
- **Size:** 13.1 cm × 10.1 cm (5.16" × 3.98")
- **Format:** HTML/CSS (print-ready)
- **File:** `gift-card.html`

### Design Elements
1. **Brand Header**
   - Brand name: "VisionCare" (large, bold)
   - Tagline: "Professional Eye & Vision Testing"

2. **Gift Message Section**
   - Gift icon and welcoming message
   - Brief description of what the card offers
   - Explanation of redemption process

3. **Scratch Card Area**
   - Embedded scratch-off section
   - Placeholder for code format: XXXX-XXXX-XXXX
   - "Scratch to reveal your code" instruction
   - Dashed border to indicate detachable/special area

4. **Footer Information**
   - Website URL in prominent button style
   - Validity period (12 months)

### Color Scheme
- **Primary Gradient:** Purple (#764ba2) to Blue (#667eea)
- **Text:** White for high contrast
- **Accent:** Silver/gray for scratch area
- **Background elements:** Semi-transparent white circles

### Typography
- **Brand Name:** Poppins, 28px, Bold
- **Body Text:** Inter, 11-16px
- **Code Format:** Courier New (monospace)

---

## Deliverable 2: Scratch Card

### Dimensions
- **Size:** 8.56 cm × 5.398 cm (3.375" × 2.125")
- **Standard:** Credit card size
- **Format:** HTML/CSS (print-ready)
- **File:** `scratch-card.html`

### Front Side Design
1. **Header**
   - Brand name: "VisionCare"
   - Subtitle: "Eye & Vision Testing"

2. **Scratch Area**
   - Central placement
   - Silver gradient background
   - "SCRATCH TO REVEAL" text overlay
   - Hidden code format: XXXX-XXXX-XXXX

3. **Footer**
   - Website URL in pill-shaped button
   - Eye icon for visual branding

### Back Side Design
1. **Magnetic Strip**
   - Dark gradient bar at top (visual authenticity)

2. **Instructions Panel**
   - Step-by-step redemption guide:
     1. Visit website
     2. Click "Redeem Gift Card"
     3. Scratch off panel
     4. Enter code
     5. Start test

3. **Footer**
   - Brand name
   - Website URL

### Color Scheme
- **Front:** Same gradient as gift card
- **Back:** White with gray accents
- **Scratch Area:** Silver gradient (#c0c0c0 to #a0a0a0)

---

## Deliverable 3: Marketing Poster

### Dimensions
- **Size:** 18" × 24" (45.72 cm × 60.96 cm)
- **Format:** HTML/CSS (print-ready)
- **File:** `poster.html`

### Layout Structure

1. **Header Section**
   - Large brand logo: "VisionCare"
   - Tagline: "PROFESSIONAL EYE & VISION TESTING"

2. **Hero Section**
   - Main headline: "See Clearly, Live Better"
   - Subheadline: Product value proposition
   - Large, bold typography for maximum impact

3. **Benefits Grid (2×2)**
   - **Quick & Easy:** Complete in 15 minutes
   - **From Home:** No appointment needed
   - **Professional:** Clinically validated
   - **Instant Results:** Immediate feedback
   
   Each benefit includes:
   - Large emoji icon
   - Bold title
   - Brief description

4. **Call-to-Action Section**
   - White box with high contrast
   - "Get Started Today!" headline
   - Website URL (large, prominent)
   - Gift card availability notice
   - Visual gift card element

5. **Footer**
   - Additional selling points
   - Validity information

### Color Scheme
- **Background:** Purple-blue gradient (same as cards)
- **CTA Box:** White for maximum contrast
- **Text:** White on gradient, colored on white
- **Accents:** Semi-transparent overlays

### Typography
- **Main Headline:** Poppins, 64px, Extra Bold
- **Subheadline:** Inter, 32px
- **Benefit Titles:** 28px, Bold
- **CTA Title:** 42px, Bold
- **Website URL:** 48px, Bold

---

## Design Principles Applied

### 1. Visual Hierarchy
- Clear progression from brand → message → action
- Size and color used to guide eye movement
- Important information stands out

### 2. Healthcare Aesthetic
- Professional color scheme (purple/blue = trust, health)
- Clean, modern design
- No clutter or unnecessary elements
- High contrast for readability

### 3. User Experience
- Clear instructions on all materials
- Easy-to-read typography
- Logical information flow
- Obvious call-to-action

### 4. Brand Consistency
- Unified color palette across all pieces
- Consistent typography choices
- Repeated design elements (gradients, rounded corners)
- Same brand voice and messaging

### 5. Print Production
- Exact dimensions specified
- High contrast for print quality
- No small text that would be hard to read
- Bleed areas considered in design

---

## Customization Guide

### Easy Customization Points

1. **Brand Name**
   - Search for "VisionCare" in HTML files
   - Replace with your brand name
   - Appears in all three designs

2. **Website URL**
   - Search for "visioncare-test.com"
   - Replace with your actual domain
   - Update in all locations

3. **Color Scheme**
   - Primary gradient: `#667eea` to `#764ba2`
   - Change these hex values in CSS
   - Maintains design integrity with any colors

4. **Marketing Copy**
   - All text is in HTML (not images)
   - Edit directly in the files
   - Maintain similar length for layout

5. **Code Format**
   - Currently: XXXX-XXXX-XXXX
   - Adjust in scratch area sections
   - Update character spacing if needed

### Advanced Customization

1. **Add Logo Image**
   - Replace text brand name with `<img>` tag
   - Recommended: SVG or high-res PNG
   - Maintain similar size proportions

2. **Adjust Dimensions**
   - Modify width/height in CSS
   - Keep aspect ratios for best results
   - Test print preview after changes

3. **Typography**
   - Google Fonts used (Inter, Poppins)
   - Easy to swap for other Google Fonts
   - Update font-family in CSS

---

## Printing Instructions

### For Home/Office Printing

1. Open HTML file in Chrome, Firefox, or Safari
2. Press Ctrl+P (Windows) or Cmd+P (Mac)
3. Settings:
   - Margins: None
   - Background graphics: ON
   - Scale: 100%
   - Paper size: Match design dimensions
4. Print or Save as PDF

### For Professional Printing

1. Open HTML file in browser
2. Print to PDF with settings above
3. Send PDF to print shop with specifications:
   - **Gift Card:** 13.1 cm × 10.1 cm, cardstock
   - **Scratch Card:** Credit card size, PVC with scratch-off coating
   - **Poster:** 18" × 24", glossy or matte finish

### Recommended Materials

- **Gift Cards:** 300gsm cardstock, glossy finish
- **Scratch Cards:** PVC plastic with silver scratch-off ink
- **Poster:** 200gsm poster paper, matte or glossy

---

## File Structure

```
vision-test-designs/
├── index.html                    # Portfolio overview page
├── gift-card.html               # Gift card design (13.1×10.1 cm)
├── scratch-card.html            # Scratch card design (credit card size)
├── poster.html                  # Marketing poster (18×24 inches)
├── README.md                    # Project documentation
└── DESIGN-SPECIFICATIONS.md     # This file
```

---

## Technical Notes

### Browser Compatibility
- Tested in Chrome, Firefox, Safari
- Uses modern CSS (flexbox, grid)
- Google Fonts loaded via CDN
- Print media queries included

### Responsive Design
- Poster scales down for screen preview
- Maintains exact dimensions for print
- Mobile-friendly preview on index page

### Accessibility
- High contrast ratios
- Readable font sizes
- Clear visual hierarchy
- Semantic HTML structure

---

## Design Rationale

### Why Purple-Blue Gradient?
- Purple: Associated with wisdom, quality, luxury
- Blue: Trust, professionalism, healthcare
- Gradient: Modern, eye-catching, premium feel

### Why These Dimensions?
- **Gift Card:** Slightly larger than credit card for premium feel
- **Scratch Card:** Standard credit card size fits in wallets
- **Poster:** 18×24" is standard retail poster size, highly visible

### Why HTML/CSS?
- Precise dimensional control
- Easy customization without design software
- Print-ready with browser print function
- Version control friendly
- No proprietary software needed

---

## Next Steps for Production

1. **Customize Content**
   - Replace placeholder brand name
   - Update website URL
   - Adjust marketing copy
   - Add real logo if available

2. **Review & Approve**
   - Print test copies
   - Check colors and dimensions
   - Verify readability
   - Test scratch-off area placement

3. **Production**
   - Send to professional printer
   - Order scratch-off coating for cards
   - Specify quantities needed
   - Request samples before full run

4. **Quality Control**
   - Check first batch carefully
   - Verify code area is correct size
   - Test scratch-off functionality
   - Ensure colors match expectations

---

## Contact & Support

For questions about these designs or customization assistance, please refer to the README.md file or contact the designer.

**Design Package Version:** 1.0  
**Created:** 2025  
**Format:** HTML/CSS  
**License:** Customizable for client use
