---

## Architecture

```bash
/REGAIN
  ├── /src
  │   ├── /assets
  │   │   ├── /images
  │   │   └── /icons
  │   ├── /components
  │   │   └── /common
  │   ├── /config
  │   ├── /constants
  │   ├── /navigation
  │   ├── /screens
  │   ├── /services
  │   │   ├── api
  │   │   ├── auth
  │   │   └── storage
  │   ├── /store
  │   ├── /styles
  │   ├── /utils
  │   ├── /hooks
  │   └── /types
  ├── /node_modules
  ├── /android
  ├── /ios
  ├── /assets
  ├── /tests
  ├── App.js
  ├── package.json
  ├── .gitignore
  └── README.md
```

### /src

- This folder contains all the application code.

### /components

- Contains UI components. Components are organized by functionality.
  - `/common`: Shared components that can be reused across the app, such as buttons, input fields, etc.
  - Functional components can be split into specific folders like `/home`, `/profile`, `/settings`.

### /screens

- Contains components that represent screens/pages of the app. This includes both the logic and UI for each screen.

### /navigation

- This folder contains navigation-related code for the app. It typically uses the React Navigation library for routing.
  - `RootNavigator.tsx`: Defines the overall app navigation.
  - `AppNavigator.tsx`: Handles authentication navigations
  - `AuthNavigator.tsx`: Handles unauthentication navigations

### /store

- This folder contains code related to state management

### /services

- This folder contains code that interacts with external APIs or handles business logic.
  - `/api`: Functions to handle API calls.
  - `/auth`: Functions related to authentication, like login and logout.
  - `/storage`: Functions for local storage, such as AsyncStorage.

### /utils

- Contains utility functions that can be reused across different parts of the app.

### /hooks

- Contains custom hooks to extract and reuse logic.
  - ex) `useAuth.ts`, `useTheme.ts`

### /constants

- Contains fixed values and configuration settings.
  - ex) `colors.ts`, `fontSize.ts`

### /config

- Contains configuration files for the app.
  - ex) `firebase_config.ts`
