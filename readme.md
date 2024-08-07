## Demo

https://github.com/user-attachments/assets/d57328c7-1d15-4450-b7db-9adc48e4da46

## Install Dependencies

```
npm install
```

## Run the Application

```
npm run dev
```

Open your browser and go to http://localhost:5173 to see the application in action.

## Code Overview

### HTML Structure
The HTML file contains a form within a main container. The form includes inputs for gender, age, height, and weight, along with buttons for calculating and resetting the BMI.

### CSS Styling
The CSS provides a modern, responsive design with dark mode support. Key styles include:

Flexbox for centering and layout.
Gradient text and box shadows for visual appeal.
Input and button styles for a consistent look and feel.

### JavaScript Functionality
The JavaScript code handles the core functionality of the BMI Calculator:

- Event Listeners: Listens for click events on buttons and the Enter key for calculating BMI.
- Validation: Ensures that height and weight inputs are valid numbers.
- BMI Calculation: Computes the BMI using the formula BMI = weight / (height^2) and displays the result.
- Category Determination: Classifies the BMI into categories (Underweight, Normal weight, Overweight, Obesity) based on standard ranges.
- Reset Function: Clears all input fields and removes the displayed BMI result.
