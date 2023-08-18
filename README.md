**Project Prompt: RadioButtonGroup Component**

**Task:**
Your task is to create a reusable `RadioButtonGroup` component using React. The component should allow users to select a single option from a list of radio button options.

**Getting started**

Install dependencies via `npm`:

```sh
npm install
```

This requires having node.js installed on your computer. You will need to install node.js if you don't already have it.

**Run the project**

```sh
npm start
```

**Running the unit tests**

```sh
npm run test
```

**Requirements:**

This project requires completing the `RadioButtonGroup` component located in `src/components/RadioButtonGroup` follow the criteria below.

1. **Component Design:**
   The component should take three props:

   - `options`: An array of objects representing the available options. Each object should have a `value` and `label` property.
   - `selectedValue`: The value of the currently selected option.
   - `onChange`: A function that the `RadioButtonGroup` component calls when the value changes.

2. **Component Functionality:**

   - Render radio buttons for each option provided in the `options` prop.
   - Highlight the radio button corresponding to the `selectedValue` prop.
   - Allow users to select a new option by clicking on a radio button.

3. **Styling:**
   It is not important to make this look pretty – this is a developer position, not a design position. Style the radio buttons to provide a clear visual distinction between selected and non-selected options. It can be anything from a different text color or different background.

   Consider using CSS or a styling library like `styled-components` to do this.

4. **Event Handling:**
   The component will take an onChange function as a prop. This onChange event should be called with the associated option value when a radio button is clicked.

5. **Testing:**
   Tests should be written in `src/components/RadioButtonGroup/RadioButtonGroup.test.js` using [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/), which is already set up for this project. Implement the three tests that are currently stubbed in this file.

6. **Usage Example:**
   The `App.js` file in this project renders the RadioButtonGroup component with predefined options. This can/should be used for showing your component in action, and it should not need any edits made to it.

**Submission:**

- Create a new Git repository for this project.
- Implement the `RadioButtonGroup` component and all related code.
- Share the repository with us when you're ready for review.

**Evaluation Criteria:**

- Component design and implementation.
- Code organization and readability.
- Functionality and correctness of the `RadioButtonGroup` component.
- Proper usage of React principles and best practices.
- Unit test coverage and test quality.
- Styling implementation (again, we will not evaluate how pretty it looks, but just showcase _some_ CSS in your solution).

Feel free to ask any questions if you need further clarification or guidance. Good luck with the project!
