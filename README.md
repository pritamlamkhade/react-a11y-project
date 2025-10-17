# Incubyte String Calculator – Implementation

## Overview

This project is my implementation of the String Calculator built with React + TypeScript + Tailwind CSS.
It follows Test-Driven Development (TDD) principles and focuses heavily on accessibility (a11y) best practices.

- **The goal of this project is to:**
   - Implement the functionality of a String Calculator following TDD practices.
   - Improve and enhance UI accessibility for keyboard users and screen readers.
   - Deliver a clean, responsive, and modern React frontend with Tailwind CSS

## Project Structure

- **src/**
  - `App.tsx`: Redesigned and accessible React component for the calculator UI.
  - `stringCalculator.ts`: Core String Calculator logic implementation (comma and newline support) .
- **tests/**
  - `stringCalculator.test.ts`: Unit test suite for calculator functionality, built with Vitest.


## Features Implemented

- **String Calculator Logic**
   - Handles numbers separated by commas (,) or newlines (\n).
   - Returns 0 for empty strings.
   - Throws a descriptive error when negative numbers are provided.
   - Validates input and rejects invalid characters.
   - Fully tested with Vitest unit tests.

- **Accessibility Improvements**
   - Semantic HTML structure with `<form>`, `<label>`, `<button>`, and `<output>`.
   - Proper ARIA roles (role="alert", aria-live="polite") for errors and results.
   - Full keyboard navigation support.
   - Color contrast and focus states improved for visually impaired users.
   - Screen reader-friendly messaging.

- **UI Enhancements**
   - Redesigned with Tailwind CSS for a modern and clean interface.
   - Responsive and mobile-friendly design.
   - Improved user experience with placeholders, hints, and visual feedback.

- **TDD Workflow**
  This project was developed using the Red → Green → Refactor cycle:
   - Red: Write a failing test for a small piece of functionality.
   - Green: Write the minimal production code to make the test pass.
   - Refactor: Improve the code and repeat the cycle.

Unit tests are located in:
   ```bash
      tests/stringCalculator.test.ts
   ```

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/pritamlamkhade/react-a11y-project.git
   cd react-a11y-project
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

4. **Run Tests**

   ```bash
   npm test
   ```


## Live Demo
You can view the live deployed version of the project here:
Live Demo Link- https://string-calculator-f1a31.web.app/