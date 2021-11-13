# **Day 13** <!-- omit in toc -->

1. [**Branch**](#branch)
   1. [**Get the current branch**](#get-the-current-branch)
   2. [**Get all the branches**](#get-all-the-branches)
   3. [**Rename a branch**](#rename-a-branch)
   4. [**Creating a branch**](#creating-a-branch)
   5. [**Merging branches**](#merging-branches)
      1. [**Merge Conflict**](#merge-conflict)
   6. [**Deleting files**](#deleting-files)
      1. [**Manual deletion**](#manual-deletion)
      2. [**Delete by Git**](#delete-by-git)
   7. [**Deleting Branches**](#deleting-branches)
   8. [**Deleting Commits**](#deleting-commits)
   9. [**Revert Staged Changes**](#revert-staged-changes)
   10. [**Revert Un-staged Changes**](#revert-un-staged-changes)
2. [**Follow-up of Exercise**](#follow-up-of-exercise)
   1. [**Get Branches**](#get-branches)
   2. [**Create a branch**](#create-a-branch)
   3. [**Add changes to new branch**](#add-changes-to-new-branch)
   4. [**Merger branches**](#merger-branches)
      1. [**Without Conflict**](#without-conflict)
      2. [**With Conflict**](#with-conflict)
         1. [**Create a Conflict**](#create-a-conflict)
         2. [**Switch to feature branch**](#switch-to-feature-branch)
         3. [**Switch Back to Main**](#switch-back-to-main)
         4. [**Merging the branches with Conflict**](#merging-the-branches-with-conflict)
         5. [**Solve the conflict**](#solve-the-conflict)
   5. [**Deleting a Branch (Prerequisites)**](#deleting-a-branch-prerequisites)
      1. [**Create a branch**](#create-a-branch-1)
      2. [**Add Sample Data**](#add-sample-data)
   6. [**Deleting a file**](#deleting-a-file)
         1. [**Manual deletion**](#manual-deletion-1)
         2. [**Delete by Git**](#delete-by-git-1)
   7. [**Deleting a Commit**](#deleting-a-commit)
   8. [**Deleting a Branch**](#deleting-a-branch)
   9. [**Revert Un-staged Changes**](#revert-un-staged-changes-1)
   10. [**Revert Staged Changes**](#revert-staged-changes-1)
3. [**Why to use GitHub?**](#why-to-use-github)
   1. [**As a Single User**](#as-a-single-user)
   2. [**As a Team**](#as-a-team)
4. [**Creating a GitHub Account**](#creating-a-github-account)
5. [**Connecting Git with GitHub**](#connecting-git-with-github)
   1. [**Create a New Remote Repository**](#create-a-new-remote-repository)
   2. [**Adding your Local Repository to the Remote Repository.**](#adding-your-local-repository-to-the-remote-repository)

## **Branch**

-   Commits are stored in a branch.
-   Master is a default branch in git.

### **Get the current branch**

-   By using `git status`

```shell
$ git status    # check the current branch

On branch master
nothing to commit, working tree clean
```

### **Get all the branches**

```shell
$ git branch    # lists all the branches

* master
```

-   `*` indicates your current working branch.

### **Rename a branch**

```shell
$ git branch -m main    # renames the current branch to "main"
```

### **Creating a branch**

-   Creating a branch fetches the commits from the previous branch.
-   `checkout` lets you create or switch between branches.
-   `-b` to create a branch

```shell
$ git checkout -b feature   # creates a new branch with the name "feature" from the current branch
$ git checkout main         # switch to "main" branch
```

### **Merging branches**

-   combine two commits from separate branches.
-   Works from the branch you need to merge into.
    -   eg. Adding feature to the main branch:
        -   Switch to main branch

```shell
$ git merge feature         # merges commits of "feature" branch into the current branch
```

#### **Merge Conflict**

-   Occurs when there is a commit on a branch that behind its main branch.
-   Multiple ways to fix this error.
    1. Accept current changes
    2. Accept incoming changes
    3. Accept both changes
    4. Compare both changes

### **Deleting files**

#### **Manual deletion**

-   This is an uncommitted deletion.
-   You will have to manually add it to the staging area and then commit it.

```shell
$ rm deleting-data/file3.txt        # delete a file manually
$ git status                        # shows status of uncommitted deleted file
$ git add .                         # staging the file
```

```
On branch delete
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    deleting-data/file3.txt
```

#### **Delete by Git**

-   It is staged automatically.
-   You will still have to commit it.

```shell
$ git rm deleting-data/file2.txt
```

```
On branch delete
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    deleting-data/file2.txt
```

### **Deleting Branches**

-   It can be done for many reasons. eg. if the branch has been merged and no longer needed.
-   `-D` let's you delete a branch.
-   `feature` is the name of the branch to be deleted.

```shell
$ git branch -D feature     # deletes the "feature" branch
```

### **Deleting Commits**

-   `reset` allows you to revert the commit.
-   `--hard` will update the index and path. ie. delete the latest commit and make the earlier one as latest.
-   `HEAD` is a pointer.
-   `~1` means going back one commit earlier.

```shell
$ git reset --hard HEAD~1
```

### **Revert Staged Changes**

-   `reset` used to un-stage.
-   `file1.txt` is the file to be un-staged.
-   `checkout` to revert back.
-   `--`
-   `file1.txt` to just revert back "file1.txt"

```shell
$ git add .                 # stage "file1.txt"
$ git reset file1.txt       # to unstage "file1.txt"
$ git checkout -- file1.txt # to restore "file1.txt"
```

### **Revert Un-staged Changes**

-   `checkout -- .` let's you undo the changes made after the last commit on your branch.

```shell
$ git checkout -- . # reset your branch to the latest commit
```

---

## **Follow-up of Exercise**

### **Get Branches**

```shell
$ git status                        # check the current branch (with status of files)
$ git branch                        # check all the branches (* = current branch)
```

### **Create a branch**

```shell
$ git branch -m main                # rename current branch to "main"
$ git checkout -b feature           # create new branch from current branch
$ git branch                        # check all the branches (* = current branch)
```

### **Add changes to new branch**

```shell
$ mkdir new-feature                 # create a directory
$ touch new-feature/feature.txt     # create a file inside directory
$ git status                        # check for uncommitted files
$ git add .                         # add files to staging
$ git commit -m "added new feature" # commit changes
$ git log                           # check log again (will include commits from "main" branch with the new "feature" branch)
```

**Output**

-   Press `q` to quit.

```
commit 7afd38f3b2f920ed1aefef34e0dcf2f9d1f4c966 (HEAD -> feature)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 14:52:34 2021 +0530

    added new feature

commit bbdbd00a8ebeb48301b00ef218ff058e689c086b (main)
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 22:08:29 2021 +0530

    modified test.txt and added second-commit.txt

commit fec94d5d3dce7f140fc08715c4d563c211374ce1
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
:
```

### **Merger branches**

#### **Without Conflict**

```shell
$ git checkout main             # switch to "main" branch
$ git log                       # commits of "main" branch
$ git merge feature             # merges commits of "feature" branch into the "main" branch
```

**Output**

```
Updating bbdbd00..7afd38f
Fast-forward
 new-feature/feature.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 new-feature/feature.txt
```

```shell
$ git log
```

**Output**

```
commit 7afd38f3b2f920ed1aefef34e0dcf2f9d1f4c966 (HEAD -> main, feature)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 14:52:34 2021 +0530

    added new feature

commit bbdbd00a8ebeb48301b00ef218ff058e689c086b
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 22:08:29 2021 +0530

    modified test.txt and added second-commit.txt

commit fec94d5d3dce7f140fc08715c4d563c211374ce1
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
```

#### **With Conflict**

##### **Create a Conflict**

-   Modify the `test.txt` file (in main) & commit it

```shell
$ git commit -m "updated test.txt"
$ git log
```

```
commit 0e430a8d68614284a00ff61d7c0334a633662bee (HEAD -> main)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:22:37 2021 +0530

    updated test.txt

commit 7afd38f3b2f920ed1aefef34e0dcf2f9d1f4c966 (feature)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 14:52:34 2021 +0530

    added new feature

commit bbdbd00a8ebeb48301b00ef218ff058e689c086b
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 22:08:29 2021 +0530

    modified test.txt and added second-commit.txt

commit fec94d5d3dce7f140fc08715c4d563c211374ce1
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
```

##### **Switch to feature branch**

```shell
$ git checkout feature
```

-   Modify the `test.txt` file

```shell
$ git add .
$ git commit -m "changed test.txt content"
```

```
[feature 458ad2d] changed test.txt content
 1 file changed, 1 insertion(+), 1 deletion(-)
```

```shell
$ git log
```

**Output**

```
commit 458ad2dc89ed85e352739ded4eecd449b28d4bb9 (HEAD -> feature)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:27:48 2021 +0530

    changed test.txt content

commit 7afd38f3b2f920ed1aefef34e0dcf2f9d1f4c966
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 14:52:34 2021 +0530

    added new feature

commit bbdbd00a8ebeb48301b00ef218ff058e689c086b
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 22:08:29 2021 +0530

    modified test.txt and added second-commit.txt

commit fec94d5d3dce7f140fc08715c4d563c211374ce1
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
```

##### **Switch Back to Main**

```shell
$ git checkout main
$ git merge feature
```

##### **Merging the branches with Conflict**

```
Auto-merging test.txt
CONFLICT (content): Merge conflict in test.txt
Automatic merge failed; fix conflicts and then commit the result.
```

![Merge Conflict](./images/merge%20conflict.png)

##### **Solve the conflict**

-   Press `Accept Incoming Changes` by opening the file in vscode and save the file.

```shell
$ git status
$ git add .
$ git commit -m "merged test.txt from feature"
$ git log
```

**Output**

```
commit e400e5e7757ff72366481701daf89e8570ad41c4 (HEAD -> main)
Merge: 0e430a8 458ad2d
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:37:56 2021 +0530

    merged test.txt from feature

commit 458ad2dc89ed85e352739ded4eecd449b28d4bb9 (feature)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:27:48 2021 +0530

    changed test.txt content

commit 0e430a8d68614284a00ff61d7c0334a633662bee
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:22:37 2021 +0530

    updated test.txt

commit 7afd38f3b2f920ed1aefef34e0dcf2f9d1f4c966
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 14:52:34 2021 +0530

    added new feature

commit bbdbd00a8ebeb48301b00ef218ff058e689c086b
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 22:08:29 2021 +0530

    modified test.txt and added second-commit.txt

commit fec94d5d3dce7f140fc08715c4d563c211374ce1
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
```

### **Deleting a Branch (Prerequisites)**

#### **Create a branch**

-   Create a branch to be deleted.
-   Add few commits as samples for demonstrating further operations.

```shell
$ git checkout -b delete    # create a branch with name "delete
$ mkdir deleting-data
$ touch deleting-data/file1.txt
$ git add .
$ git commit -m "added file1.txt"
```

-   Add some text in `file1.txt`

```shell
$ git add .
$ git commit -m "added text to file1.txt"
```

-   Add some more text to `file1.txt`

#### **Add Sample Data**

```shell
$ git add .
$ git commit -m "added more text"
$ touch deleting-data/file2.txt
$ git add .
$ git commit -m "added file2.txt"
$ touch deleting-data/file3.txt
$ git add .
$ git commit -m "added file3.txt"
$ git log
```

**Output**

```
commit bf6fcff96a3bf932278698eac7a26a9b6e275bc6 (HEAD -> delete)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 16:03:55 2021 +0530

    added file3.txt

commit 702262f5b7c82d2936206a1d0e84670861fe5251
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 16:00:45 2021 +0530

    added file2.txt

commit 69c21b12887e6ba3c74b7d79bdd056d1132fea97
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:58:48 2021 +0530

    added more text

commit 8f6eeaae2a5880ba65a78599ae746064df5e041d
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:57:25 2021 +0530

    added text to file1.txt

commit a81b7d6943434a1108dfc6422568657ce89559c4
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:55:35 2021 +0530

    added file1.txt

commit e400e5e7757ff72366481701daf89e8570ad41c4 (main)
Merge: 0e430a8 458ad2d
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:37:56 2021 +0530

    merged test.txt from feature

commit 458ad2dc89ed85e352739ded4eecd449b28d4bb9 (feature)
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:27:48 2021 +0530

    changed test.txt content

commit 0e430a8d68614284a00ff61d7c0334a633662bee
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 15:22:37 2021 +0530

    updated test.txt

commit 7afd38f3b2f920ed1aefef34e0dcf2f9d1f4c966
Author: MyUserName <my@email.com>
Date:   Sat Nov 13 14:52:34 2021 +0530

    added new feature

commit bbdbd00a8ebeb48301b00ef218ff058e689c086b
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 22:08:29 2021 +0530

    modified test.txt and added second-commit.txt

commit fec94d5d3dce7f140fc08715c4d563c211374ce1
Author: MyUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
```

### **Deleting a file**

##### **Manual deletion**

```shell
$ rm deleting-data/file3.txt        # delete a file manually
$ git status                        # shows status of uncommitted deleted file
$ git add .                         # staging the file
```

**Output**

```
On branch delete
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        deleted:    deleting-data/file3.txt
```

##### **Delete by Git**

-   It is staged automatically.
-   You will still have to commit it.

```shell
$ git rm deleting-data/file2.txt
```

```
On branch delete
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    deleting-data/file2.txt
```

```shell
$ git commit -m "deleted file2 and file3"
```

### **Deleting a Commit**

```shell
$ git reset --hard HEAD~1   # this should bring back your file2 and file3
```

### **Deleting a Branch**

```shell
$ git branch                # check for the available branches
$ git branch -D feature     # deletes the "feature" branch
```

**Output**

```
Deleted branch feature (was 458ad2d).
```

### **Revert Un-staged Changes**

-   Add some content to `file1.txt`

```shell
$ git status        # see un-staged changes
$ git checkout -- . # reset your branch to the latest commit
```

-   Modification from the `file1.txt` should be gone.

### **Revert Staged Changes**

-   Modify the `file1.txt` and stage the file.

```shell
$ git add .
$ git status
```

**Output**

```
On branch delete
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   deleting-data/file1.txt
```

```shell
$ git reset deleting-data/file1.txt       # to unstage "file1.txt"
```

**Output**

```
Unstaged changes after reset:
M       deleting-data/file1.txt
```

```shell
$ git status
```

```
On branch delete
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   deleting-data/file1.txt
```

```shell
$ git checkout -- deleting-data/file1.txt # to restore "file1.txt"
```

-   Changes should be reverted in `file1.txt`.

## **Why to use GitHub?**

-   Git is for single user.

### **As a Single User**

-   Allows you to store your code on the cloud, allows you to access it from any other system and helpful if your system fails and lost data from your local disk (backup)
-   Allows you to create Portfolio Pages.

### **As a Team**

-   Allows Collaboration with your team members working on the same project.
-   Allows Contribution from other developers to your project as an open-source project.

## **Creating a GitHub Account**

1. Navigate to [GitHub](https://github.com).
2. Click on `Sign Up`.
3. Enter your required information and verify your account through an email.
4. Click on profile logo on the top-right of the page and check your username.
5. Visit your Public Profile page by adding your username at the end of this url `https://github.com/` eg. `github.com/YourUserName`

## **Connecting Git with GitHub**

-   Git repositories are called local repositories.
-   GitHub repositories are called remote repositories.

### **Create a New Remote Repository**

1. Goto [GitHub](https://github.com) and press `New` or directly visit [Here](https://github.com/new)
2. Give the repository a name. Optionally add the description.
3. Select if you want the repository to be available publicly or just to you.
4. Press `Create Repository`

### **Adding your Local Repository to the Remote Repository.**

```shell
$ git remote add origin https://github.com/YourUserName/YourRepoName.git
$ # adds connection to a remote repository
$ # the URL is the location of the remote repository
$ # "origin" is the name given to the location (URL) of remote repository

$ git push -u origin main
$ # update the remote repository (with name "origin") with the local repository.
$ # "main" is the name of the branch to be updated
```
