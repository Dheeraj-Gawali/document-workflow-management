# DocumentWorkflowManagement

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


// document workflow management system
# Document Workflow Management System

This project is managing documents through an approval workflow.

## Features Implemented

- Document listing with search, status filter, sorting, pagination and total count
- Create document using Reactive Forms
- Edit only draft documents
- File upload with progress, cancel, retry and remove
- Document details page
- Workflow status actions
- Audit timeline
- Bulk approve and reject
- Dynamic form rendering from configuration
- Recursive approval matrix management
- Custom click outside directive
- Custom permission directive
- Dirty state route guard
- Mock API using Angular services and localStorage
- Lazy loaded standalone components

## Workflow

Draft -> Submitted -> Manager Review -> Approved / Rejected

<!-- questions and answers -->
# Assumptions
i. Backend API is mocked using Angular services and localStorage.
ii. Logged in user is considered as Current User.
iii. File upload is simulated because no real backend is available.
iv. Approval matrix is stored locally.
v. Only Draft documents can be edited.
vi. Approved and Rejected documents are treated as final states.

# Architecture Decisions
The application uses standalone components and lazy loading to keep the structure simple and scalable.
The core folder contains shared application-level logic like services, guards, interceptors, models and mock data.
The shared folder contains reusable UI components and directives.
The features folder contains business features like documents and approval matrix.
Reactive Forms are used for document creation, editing and dynamic form rendering because they provide strong validation and better control for complex forms.

# Architecture Assessment Answers
# 1. How would you structure an Angular application containing over 500 components?
I would divide the application by business features instead of keeping all components in one common folder. Each feature would contain its own pages, child components, routes and services where required. Shared reusable components would be moved to a shared library or shared folder. Core singleton services like authentication, interceptors and guards would stay in the core folder.
# 2. How would you organize reusable components and utilities?
Reusable components would go inside a shared folder or internal UI library. Utilities like date helpers, constants, validators and pipes would be grouped by purpose. I would avoid putting business-specific logic inside reusable components so they can be used across multiple features.
# 3. How would you structure API service layers?
I would create feature-specific API services for business calls, such as DocumentService and ApprovalMatrixService. Common HTTP handling, headers, error handling and authentication tokens would be managed through interceptors. Large applications can also use separate data-access layers to keep components clean.
# 4. How would you minimize duplication across modules?
I would identify repeated UI patterns, validators, pipes and service methods and move them into shared components or utilities. I would also create base models and reusable form helpers where useful. Code reviews and consistent folder structure help prevent duplicate implementations.
# 5. How would you manage environment-specific configurations?
I would use Angular environment files for different environments like development, QA, staging and production. API URLs, feature flags and app-level configuration values would be stored there and injected into services as needed.
# 6. What considerations would you take while designing applications for large development teams?
I would define clear folder structure, naming conventions, linting rules and code review practices. Features should have clear ownership and minimal dependency on unrelated modules. Shared components should be documented properly. I would also use strong TypeScript models and automated testing to reduce integration issues.
Third Party Libraries
No third-party UI or utility libraries are used. The app uses Angular features only.
<!-- end here -->

## Setup Instructions

Install dependencies:

```bash
npm install