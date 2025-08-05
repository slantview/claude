# Analyze Figma Design

Extract and analyze Figma designs for implementation:

## Prerequisites
- Figma desktop app must be running
- Design file must be open in Figma
- MCP server connected

## Step 1: Get Design Link
Ask for:
- Figma file URL or
- Currently selected frame in Figma

## Step 2: Extract Design Information
Using @figma tools:

### Get Component Code
```
@figma get_code
```
This returns React + Tailwind code by default

### Get Variables
```
@figma get_variable_defs
```
Returns design tokens like:
- Colors
- Spacing
- Typography
- Shadows

### Get Component Mapping
```
@figma get_code_connect_map
```
Maps Figma components to codebase components

## Step 3: Analyze Design System
Create analysis of:
1. Component hierarchy
2. Reusable patterns
3. Design tokens used
4. Responsive breakpoints
5. Interaction states

## Step 4: Generate Implementation Plan
Based on design analysis:

### Component Structure
```markdown
## Components Needed
- [ ] Header
  - [ ] Navigation
  - [ ] User menu
- [ ] Card
  - [ ] Card header
  - [ ] Card body
  - [ ] Card actions
- [ ] Button variants
  - [ ] Primary
  - [ ] Secondary
  - [ ] Ghost
```

### Styling Requirements
```css
/* Design Tokens */
--primary-color: #...
--spacing-unit: 8px
--border-radius: 4px
```

## Step 5: Create Component Specs
For each component, document:
- Props interface
- States and variants
- Accessibility requirements
- Animation/transitions
- Responsive behavior

## Step 6: Integration Points
Identify:
- API data requirements
- State management needs
- Event handlers
- Navigation flows

## Step 7: Save Analysis
Create `docs/figma-analysis.md` with:
- Design overview
- Component inventory
- Implementation priorities
- Technical considerations

## Step 8: Update Linear
Post findings to Linear:
```
@linear create_comment <issue_id> "🎨 Figma Analysis Complete

Components identified: X
Design tokens extracted: ✅
Responsive breakpoints: [list]
Estimated implementation: X hours

Full analysis: [Link to docs]

Ready to begin implementation."
```

## Custom Prompts
For specific frameworks:
- "Generate Vue components"
- "Use Material-UI components"
- "Create with styled-components"
- "Generate Next.js pages"

## Troubleshooting
If Figma connection fails:
1. Ensure desktop app is running
2. Try selecting a frame first
3. Restart MCP server
4. Check @figma connection status