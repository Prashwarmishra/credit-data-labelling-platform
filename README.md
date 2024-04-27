# Credit data labelling platform

User interface for a data validator to interact with business data entries.

The app provides the following functionalities:

- Basic authentication basis the role, auth credentials are stored in local storage.
- Multiple tabs for authenticated users, these tabs are: listing, inbox, support, settings, and profile. Currently only the listing tab works.
- The listing tab has list of all the entities.
- Clicking on any entity in the list opens a new page, entity-details, where all the entries basis different categories are listed, each represented by a different tab.
- A user can hover over the Input field to view list of values available against a field/head.
- Any entry can be marked flagged or unflagged by clicking on the flag icon.
- Inputs against a field can be added/removed/updated by clicking on the edit icon, every change is recorded in the "Previous Changes" field.
- The table is paginated, with next and previous buttons.
- Breadcrumbs can be accessed to navigate througout the project.
- Data is static and is hard-coded in the data folder for now.

The src folder in the app contains the following folders:

1. components -> Has the list of components used throughout, and ui elements (which are present in the ui folder).
2. constants -> Contains files each storing constants of particular kind.
3. data -> Contains all the relevant dummy data.
4. hooks -> Contains common hooks used throughout.
5. pages -> Directory of all the pages that are part of the application.
6. primitives -> Contains all the types used in UI components.
7. styles -> Contains common stylesheets, commonly used css variables are defined in these files.
8. types -> Contains relevant data types for the components & functionalities used.
9. utils -> Contains helper files.

The following credential can be used to access the application:
email -> `prashwarmishra@gmail.com | password -> 1231 | role -> admin`

UI for common pages:

<img width="1727" alt="login" src="https://github.com/Prashwarmishra/credit-data-labelling-platform/assets/40193287/9dce57ee-80e7-4cd6-aa2e-0b6c90cc0f94">



<img width="1606" alt="listing" src="https://github.com/Prashwarmishra/credit-data-labelling-platform/assets/40193287/8541c347-1fa5-4184-b505-48a121699fd0">



<img width="1451" alt="entity-details" src="https://github.com/Prashwarmishra/credit-data-labelling-platform/assets/40193287/69cb0435-fd2b-4455-91c4-eab479aa0cac">




<img width="1457" alt="edit-entries" src="https://github.com/Prashwarmishra/credit-data-labelling-platform/assets/40193287/a60ab54b-292e-4ec6-a96b-05a9e541fee4">




<img width="1456" alt="view-previous-changes" src="https://github.com/Prashwarmishra/credit-data-labelling-platform/assets/40193287/e8a6b72d-38eb-49e9-840c-98a9bfd516d6">


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
