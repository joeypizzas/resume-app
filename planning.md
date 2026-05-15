# Resume app planning

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- Three main sections:
  - Header
  - Main app section
  - Footer
- Header is simply name of app.
- Footer is just attribution to the author.
- Main app section:
  - Split into left and right side.
  - Left side is resume form builder.
    - Contains sections:
      - Personal details
      - Education
      - Professional experience
      - Skills
    - Each section can be expanded/collapsed.
    - Personal details only is expanded to start.
    - Each section is seeded with mock info to show how it looks. Field are filled and editable.
    - Download PDF button somewhere.
    - No submit buttons needed on fields. Resume just updates in real time with changes.
  - Right side is preview of resume as you add info. Shares state with left side and updates in realtime. Use real resume example to build structure.

## What will the project react components be?

- App
  - Header
  - ResumeBuilder
    - ResumeBuilderForm (personal details)
      - FormField (name)
      - FormField (email)
      - FormField (phone number)
      - FormField (address)
    - ResumeBuilderForm (education)
      - FormFieldsContainer
        - FormField (school)
        - FormField (degree)
        - DatePicker (start date)
        - DatePicker (end date)
        - FormField (location)
      - AdditionButton (+ education)
      - DeleteButton (delete education)
    - ResumeBuilderForm (experience)
      - FormFieldsContainer
        - FormField (company)
        - FormField (position or title)
        - DatePicker (start date)
        - DatePicker (end date)
        - FormField (location)
        - DescriptionField (description)
      - AdditionButton (+ experience)
      - DeleteButton (delete experience)
    - ResumeBuilderForm (skills)
      - FormFieldsContainer
        - FormField (skill)
        - FormField (skill)
        - FormField (skill)
      - AdditionButton (+ skill)
      - DeleteButton (delete skill)
  - ResumePreview
    - PreviewHeader
    - ResumeSection (education)
      - ResumeSectionHeader
      - ResumeItem (school)
    - ResumeSection (experience)
      - ResumeSectionHeader
      - ResumeItem (experience)
      - ResumeItem (experience)
      - ResumeItem (experience)
    - ResumeSection (skills)
      - ResumeSectionHeader
      - SkillsContainer
        - Skill
        - Skill
        - Skill
        - Skill
        - Skill
  - Footer

## How do you plan to organize your project files?

- src/
  - main.jsx
  - App.jsx
  - App.css
  - components/
    - Header/
      - Header.jsx
      - Header.css
    - ResumeBuilder/
      - Resumebuilder.jsx
      - Resumebuilder.css
    - ResumeBuilderForm/
      - ResumeBuilderForm.jsx
      - ResumeBuilderForm.css
    - FormField/
      - FormField.jsx
      - FormField.css
    - FormFieldsContainer/
      - FormFieldsContainer.jsx
      - FormFieldsContainer.css
    - AdditionButton/
      - AdditionButton.jsx
      - AdditionButton.css
    - DeleteButton/
      - DeleteButton.jsx
      - DeleteButton.css
    - DescriptionField/
      - DescriptionField.jsx
      - DescriptionField.css
    - ResumePreview/
      - ResumePreview.jsx
      - ResumePreview.css
    - PreviewHeader/
      - PreviewHeader.jsx
      - PreviewHeader.css
    - ResumeSection/
      - ResumeSection.jsx
      - ResumeSection.css
    - ResumeSectionHeader/
      - ResumeSectionHeader.jsx
      - ResumeSectionHeader.css
    - ResumeItem/
      - ResumeItem.jsx
      - ResumeItem.css
    - SkillsContainer/
      - SkillsContainer.jsx
      - SkillsContainer.css
    - Skill/
      - Skill.jsx
      - Skill.css
    - Footer/
      - Footer.jsx
      - Footer.css

## How do you plan to design the application state?

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

## How will you design your UI and link it to application state
