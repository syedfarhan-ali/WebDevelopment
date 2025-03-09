# Git config
git config --global user.name "my name"
git config --global user.email "my email"
git config --list
git --version

# Clone and status
git clone some link
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
