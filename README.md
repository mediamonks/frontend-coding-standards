# MediaMonks - Frontend Coding Standards

## Definition of Done Checklist

#### Before Starting feature
- [x] Read the ticket. If no ticket is present, create one yourself or ask the Project Manager to create one.
- [x] Make sure the ticket is clear and actionable. If not, reassign the ticket to the person responsible for the creation of the tickets (the project manager or project lead) until the ticket is 100% clear.
- [x] Create a feature branch (`feature/ticket-number-feature-name` or for Jira use the default branch name when creating a branch from a ticket)

#### General Tasks
- [x] Double check if feature is properly working on all browsers specified in the browser matrix.
- [x] Double check if feature is properly working on all resolutions
- [x] Review all commits and check if there is room for improvement 
- [x] Could any of the functions you wrote be reused on other components/features ?. If so, rewrite it and restart the checklist process.
- [x] Ask yourself in which scenarios could this fail?
- [x] Check if you are handling possible error states. Catch them.
- [x] Merge latest develop into branch and see if there are no conflicts. If there are conflicts please ask for help if you don't know which part of the code should stay.
- [x] Remove unnecessary comments. 
- [x] Check the name and semantics of all functions, properties, consts etc. Do they still make sense? Could someone that doesn't know the code understand what it is doing?
- [x] Read your code again. Do you think it can be done better or optimized? Do it. Start process again.
- [x] Read the description of the ticket / email again. Did you really do what is asked for? Does your change solve the issue?
- [x] Run build tasks and see if they actually works
- [x] Does your project have code that isn't used anymore? Throw it away!
- [X] Make sure all linting is passing

#### UI Task
- [x] Check if HTML5 Semantic Elements are used appropriately (`header`, `section`, `footer`, `main`...).
- [x] All images have an `alt` property
- [x] All `<a>` have `title` property
- [x] Check if all images are optimized (Saved for web and compressed, resized accordingly)
- [x] Headings (`h1`, `h2`, `h3`...) are used in the correct order.
- [x] All `input`'s have a `label`
- [x] Check if you can navigate the website with keyboard (using tabs) 
- [x] Check if all videos are compressed correctly
- [x] Add `aria` labels. 
- [x] Check if the fonts are being loaded properly.
- [x] Check if images are being lazy loaded and for proper usage of picture with responsive images
- [X] Check the `hover`, `disabled`, `invalid` and `error` states on buttons, links, form elements, etc.

#### Before  every release
- [x] Check for proper html `doctype`.
- [x] Check for proper `viewport` tags.
- [x] Check the site has a `title` tag.
- [x] Check for Social sharing `meta` tags.
- [x] Check the site `description`.
- [x] Check the site again while trottling the internet connection. Does it still work? Do you have loaders in place?
- [x] What happens if you press the `back` button in the browser? And then the `forward` button?
- [x] What happens if you refresh the page halfway the flow?
- [x] What happens if you directly enter a page at the end of the flow?
- [x] What happens if you navigate away during an async process?
- [x] What happens if you manually change a value in the URL?
- [x] Is there a `404`?
- [x] Check for a favicon.
- [x] Check for JavaScript errors in the console.
- [x] Remove all console.logs.

#### Deployment process
- [x] QA/Staging/UAT/Dev deploy before every Production release. No matter if it's a hotfix or if the PM is pushing. Unless everything is broken, please follow the rules.
- [x] No Friday deploys. Remember the project manager not to rely on Friday deploys 😀 
- [x] Run the website through page insights / Lighthouse. (Run audits in chrome)
