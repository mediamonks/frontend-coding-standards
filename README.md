# frontend-coding-standards

## GIT

### Branches
We use [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) for our branching strategy.

#### Automatic deployment of branches
Some projects will automatically deploy to an environment when pushing commits into a specific branch. Which branch is connected to which environment should be written in the `README.md` of the project.

### Commit messages
Please read: https://chris.beams.io/posts/git-commit/

* If possible add a reference to the corresponding ticket in the commit message. Make sure it is always clear why a change was made.
* Only commit one feature at the time.
* Always check your commit in details to avoid committing wrong code.
