# Contributing to Raster Playground
We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github
---
We use github to host code, to track issues and feature requests, as well as accept pull requests.
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've taken an issue and resolved that issue, link the issue with PR.
2. If you've resolved an issue or adding a feature, don't forget to create an issue and link it with PR.
2. If you've completed a feature, update the [readme](https://github.com/blueskyanalytics/raster-playground/blob/master/README.md).
4. Ensure all the required test pass.
5. Make sure your code is run through prettier.
6. Issue that pull request!
7. Your PR must have an active netlify deploy preview link for our maintainers to review.

## Setup
---
- We recommend VScode and some basic extensions like `prettier`
- Always lint your code using `prettier` etc
- Windows is not recommended for dev setup
- Get a basic and good understanding of bash
- Learn what a git and how to use it
- Use `ssh` when working with `github`. `https` is so old school.

## Follow these conventions for branches
---
- `bug/bug-name` for fixing bugs
- `feature/feature-name` for adding new features
- `hotfix/small-fixes` for very minor fixes
- `experiment/*`  for experiments and A/B testing
- `api/new-api` for new apis added

## Basic coding tips
---
- Always use proper variables, no shortcuts or abbreviation as name
- Put a `TODO:` wherever you think is needed.
- All files `kebab-cased` , never should a file or folder be in upper case
- Always lint your code. `prettier`
- Link `open-issues` from the packages you use inside the code and put a todo on top
- Never shy way from refactoring, if it can't be fixed immediately. Make an `issue` or put a `TODO`
- Try to keep the code as per functional programming paradigm which follows:
    1. Pure functions
    2. Function composition
    3. Avoid shared state
    4. Avoid mutating state
    5. Avoid side effects
- Make sure you code in small pieces and never big plethora of code in files. Don't code vomit
- Write as little code as possible to get the work done. Less code = Better code
- Write code that is easily testable and then test it from every angle. `null` checks are super important
- **D**on't **R**epeat **C**ode. NEVER
- First make it work, then optimize.
- Make the code as dumb as possible. Just think that the person who will review this code is super dumb.
- All constants will be `UPPER_CASED` and written at the top of file.
- No code without Git and everything to be committed!
- All Dates will be in UTC.

    [Date time](https://www.notion.so/Date-time-46d001a1ed2349d1ae525d3e80d13eaa)

- Always use `CAPS_NAME` for Env variables and constants

## Some words to live by
---
- Less code is the best code
- Keep evolving. A code is never below 90% and never above 95% complete
- Don't shy away from refactoring
- If you don't look back at your code with disgust, you need to improve

## Maintainers
---
- (Srijit S Madhavan)[https://github.com/srijitcoder]
- (Sri Harsha Devulapalli)[https://github.com/sriharshadevulapalli]

## License
By contributing, you agree that your contributions will be licensed under its [GPL-3.0 License](https://github.com/blueskyanalytics/raster-playground/blob/master/LICENSE).
