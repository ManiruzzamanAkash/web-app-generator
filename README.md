# Web App Generator

A complete web application generator developed with some mixed technologies - Laravel, React JS, Next JS and so on.

---

### Motivation & Primary Goal
We want to
1. **Reduce the hassle of developers** and
2. **Give them some rest for redundant works**.


### Plan of Year 2021
Release `v1.0.0` between **December 30, 2021**.
1. Make a **Frontend Website** with Basic design.
2. Make a **CRUD Generator** in there
   1. User can select which technology he wants to generate the CRUD. default is **Laravel**(*Both with UI*) or **Lumen**(*For API*).
   2. User can write the table or model name
   3. User can select / give the inputs with it's data type and so on.
   4. User can drag/drop the inputs to order them accordingly.
   5. On click generate CRUD button, a CRUD will be generated as `.zip` file.

### Technologies at glance
#### Frontend Technologies
- JavaScript
- React JS
- Next JS
- TypeScript
- Sass/Scss
- Tailwind CSS

#### Backend / API Technologies
- PHP
- Laravel
- Lumen
-  All of the Best Design Patterns & Principles
   - SOLID Principle
   - Repository Pattern
   - Chain of Responsibility Pattern
- Laravel Packages
  - Spatie Permission - https://github.com/spatie/laravel-permission
  - Laravel Modules - https://github.com/nWidart/laravel-modules


### How to Start

#### Start Frontend
Use these commands to start for frontend.
```bash
cd frontend
npm i
npm run dev
```
For mroe please read here - https://nextjs.org/docs/getting-started



#### Start API
Use these commands to start for frontend.
```bash
cd api
composer install
php -S localhost:8000 -t public
```
For more please read here - https://lumen.laravel.com/docs/8.x

## Contribution Guideline - PR
- Fork the repository in your github account.
- Sync / Fetch the latest updated from `develop` branch
- Create New branch, eg: `fix/crud-generation-issue`
- Confirm your changes and Create a Pull Request (PR)
- Our dedicated contributor will review your PR and merge with `develop` branch
- Then in release, we'll merge `develop` branch with `master` branch and your code will be actually released.

## Core Contributors
1. Maniruzzaman Akash - https://github.com/ManiruzzamanAkash
2. Mahmud Hasan Shakkhor - https://github.com/shakkhorpstu

## Other Contributors
- Other Contributor list will come here.