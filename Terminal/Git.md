# Git config
git config --global user.name "my name"
git config --global user.email "my email"
git config --list
git --version

# Clone and status
git clone some-link
git status

# ADD and Commit
git add fileName or git add . to add all
git commit -m "some message is required"

# Push
git push origin main (to push code to main branch)
git push -u origin main (you can write only git push to push code after this)

# Init 
git init (Initializes a new local git repo)
git remote add origin link (adds the origin of the local repo on github)
git remote -v (to verify remote)

# Branches
git branch (to check branch)
git branch -M main (to rename branch to main)
git checkout branchName (to navigate between branches)
git checkout -b newBranchName (to create a new branch)
git branch -d branchName (to delete a branch)

# Merging code
git diff branchName (to compare commits, branches. files & more)
git merge branchName (to merge two branches)
OR Create a Pull Request (PR)

# Pull 
git pull origin main (used to fetch and download content from a remote repo and immediately update the local repo to match that content)

# Fixing Mistakes
Case 1:Staged changes
    git reset fileName (remove from stagged status)
    git reset (remove all from stagged status)

Case 2:commited changes (for one commit)
    git reset HEAD~1 (reverts one commit)

Case 3:commited changes (for many commits)
git log (gives commit hash)
    git reset commit hash 
    git reset --hard commit hash (remove new changes from files too)

# Forking
A fork is a new repository that shares code and visibility settings with the original "upstream" repository.
Fork is a rough copy
