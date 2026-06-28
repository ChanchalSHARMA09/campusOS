# Git Workflow - CampusOS

## Overview

This document defines the Git branching strategy and development workflow used in the CampusOS project. Following this workflow ensures organized development, clean commit history, and easier collaboration.

---

# Git Branching Strategy

The project follows a simplified **Git Flow** model.

```text
main
 │
 ├── develop
 │      │
 │      ├── feature/authentication
 │      ├── feature/student-dashboard
 │      ├── feature/faculty-dashboard
 │      ├── feature/attendance
 │      ├── feature/assignments
 │      ├── feature/placements
 │      ├── feature/chat
 │      ├── feature/events
 │      ├── feature/admin-panel
 │      └── feature/deployment
 │
 ├── bugfix/*
 └── hotfix/*
```

---

# Branch Description

## main

- Production-ready branch.
- Always contains stable code.
- Only updated after successful testing.

---

## develop

- Main development branch.
- Features are merged here first.
- Acts as the integration branch before production.

---

## feature/*

Used for developing individual features.

Examples

```text
feature/authentication
feature/student-dashboard
feature/attendance
feature/chat
feature/events
```

---

## bugfix/*

Used for fixing bugs discovered during development.

Examples

```text
bugfix/login-error
bugfix/profile-update
```

---

## hotfix/*

Used for urgent fixes in production.

Examples

```text
hotfix/security-patch
hotfix/server-crash
```

---

# Development Workflow

## Step 1: Clone Repository

```bash
git clone <repository-url>
cd CampusOS
```

---

## Step 2: Switch to Develop Branch

```bash
git checkout develop
git pull origin develop
```

---

## Step 3: Create a Feature Branch

```bash
git checkout -b feature/authentication
```

---

## Step 4: Develop the Feature

- Write code
- Test locally
- Fix errors

---

## Step 5: Check Changes

```bash
git status
```

---

## Step 6: Stage Changes

```bash
git add .
```

---

## Step 7: Commit Changes

```bash
git commit -m "feat(auth): implement JWT authentication"
```

---

## Step 8: Push Branch

```bash
git push origin feature/authentication
```

---

## Step 9: Create Pull Request

```text
feature/authentication
        │
        ▼
     develop
```

---

## Step 10: Code Review

- Review code quality
- Resolve comments
- Run tests

---

## Step 11: Merge into Develop

```bash
git checkout develop
git merge feature/authentication
```

---

## Step 12: Merge into Main

After completing a sprint and testing:

```bash
git checkout main
git merge develop
```

---

# Commit Message Convention

## Feature

```text
feat(auth): add JWT authentication
```

## Bug Fix

```text
fix(login): resolve invalid token issue
```

## Documentation

```text
docs: update API documentation
```

## Refactor

```text
refactor(auth): improve authentication middleware
```

## Styling

```text
style(ui): improve dashboard layout
```

## Performance

```text
perf(db): optimize attendance query
```

## Testing

```text
test(auth): add login unit tests
```

## Chore

```text
chore: update project dependencies
```

---

# Branch Naming Convention

| Branch Type | Example |
|-------------|---------|
| Feature | feature/authentication |
| Feature | feature/student-dashboard |
| Feature | feature/chat-system |
| Bug Fix | bugfix/login-error |
| Bug Fix | bugfix/navbar-overlap |
| Hot Fix | hotfix/security-patch |

---

# Pull Request Checklist

Before creating a Pull Request:

- [ ] Feature works correctly
- [ ] Code is tested
- [ ] No unnecessary files included
- [ ] No console errors
- [ ] Documentation updated
- [ ] Branch is up to date with develop
- [ ] Merge conflicts resolved

---

# Merge Rules

- Never push directly to `main`.
- Every feature must have its own branch.
- Merge features into `develop` first.
- Merge `develop` into `main` only after testing.
- Delete feature branches after merging.

---

# Git Ignore

The following files and folders should not be tracked.

```text
node_modules/
.env
dist/
build/
coverage/
.vscode/
.idea/
*.log
.DS_Store
```

---

# Sprint Workflow

```text
Sprint Planning
        │
        ▼
Create Feature Branch
        │
        ▼
Develop Feature
        │
        ▼
Commit Changes
        │
        ▼
Push to GitHub
        │
        ▼
Pull Request
        │
        ▼
Code Review
        │
        ▼
Merge into develop
        │
        ▼
Testing
        │
        ▼
Merge into main
```

---

# Best Practices

- Pull the latest code before starting work.
- Commit frequently with meaningful messages.
- Keep each branch focused on a single feature.
- Never commit `.env` or sensitive credentials.
- Test code before creating a Pull Request.
- Delete merged branches to keep the repository clean.
- Keep commit messages short and descriptive.
- Update documentation whenever a new feature is added.

---

# Git Workflow Diagram

```text
                    main
                     ▲
                     │
           Merge after Testing
                     │
                 develop
                     ▲
                     │
             Pull Request (PR)
                     ▲
                     │
        feature/authentication
                     │
          git add .
                     │
git commit -m "feat(auth): add JWT authentication"
                     │
git push origin feature/authentication
```

---

# Summary

| Branch | Purpose |
|----------|---------|
| `main` | Production-ready code |
| `develop` | Integration branch |
| `feature/*` | New feature development |
| `bugfix/*` | Bug fixes |
| `hotfix/*` | Critical production fixes |

---

## Workflow Summary

```text
Clone Repository
        │
        ▼
Checkout develop
        │
        ▼
Create feature branch
        │
        ▼
Develop feature
        │
        ▼
Commit changes
        │
        ▼
Push to GitHub
        │
        ▼
Create Pull Request
        │
        ▼
Merge into develop
        │
        ▼
Test application
        │
        ▼
Merge into main
```