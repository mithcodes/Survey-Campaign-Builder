# Survey Campaign Builder

A React-based Survey Campaign Builder that allows users to create and customize survey forms with a live mobile preview. Users can manage survey content, customize styling, configure a thank you page, and preview every change instantly.

---

## Features

- Create and manage survey questions
- Add, edit, and remove answer options
- Enable or disable comments
- Configure a Thank You page
- Basic conditional logic (mock implementation)
- Customize colors, fonts, spacing, buttons, and layout
- Live mobile preview with instant updates
- Responsive UI
- Centralized state management using Redux Toolkit
- Reusable and modular components

---

## Tech Stack

- React.js
- Redux Toolkit
- Vite
- Tailwind CSS
- React Icons

---

## Project Architecture

The application is divided into two main sections.

### Content Panel

Used to build the survey.

Includes:

- Survey questions
- Answer options
- Comment toggle
- Conditional logic
- Thank You page

### Styling Panel

Used to customize the survey appearance.

Supports:

- Background colors
- Font styles
- Button styles
- Border radius
- Alignment
- Spacing
- Option styling

### Mobile Preview

Displays the survey exactly as the user will see it.

Every update made in the Content or Styling panel is reflected immediately without refreshing the page.

---

## State Management

Redux Toolkit is used for centralized state management.

### surveySlice

Stores:

- Survey title
- Questions
- Options
- Logic
- Thank You page data

### styleSlice

Stores:

- Colors
- Fonts
- Button styles
- Layout settings
- Component styling

---

## Folder Structure


## Folder Structure

```text
src/
  components/
    content/
    layout/
    styling/

  redux/
    surveySlice.js
    styleSlice.js
    store.js

  utils/

  App.jsx
  main.jsx
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd survey-campaign-builder
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Design Decisions

- Used Redux Toolkit for better state management.
- Built reusable UI components to reduce duplicate code.
- Organized the project into Content, Styling, and Preview modules.
- Instant preview provides a better editing experience.
- Kept the folder structure clean and scalable.

---

## Future Improvements

- Drag & Drop question ordering
- API integration
- Survey response collection
- User authentication
- Survey templates
- Export survey configuration
- Dark mode support

---

## Deployment

Live Demo:

```
Add your deployment link here
```

---

## GitHub Repository

```
Add your GitHub repository link here
```

---

## Author

**Mithlesh Singh**

Frontend Developer

---

## Thank You

Thank you for reviewing this project. I hope you find the implementation clean, modular, and easy to understand.