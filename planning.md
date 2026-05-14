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
    - PersonalDetailsForm
      - FormField (name)
      - FormField (email)
      - FormField (phone number)
      - FormField (address)
    - EducationForm
      - FormFieldsContainer
        - FormField (school)
        - FormField (degree)
        - DatePicker (start date)
        - DatePicker (end date)
        - FormField (location)
      - AdditionButton (+ education)
      - DeleteButton (delete education)
    - ExperienceForm
      - FormFieldsContainer
        - FormField (company)
        - FormField (position or title)
        - DatePicker (start date)
        - DatePicker (end date)
        - FormField (location)
        - DescriptionField (description)
      - AdditionButton (+ experience)
      - DeleteButton (delete experience)
    - SkillsForm
  - ResumePreview

## How do you plan to organize your project files?

## How do you plan to design the application state?

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

## How will you design your UI and link it to application state
