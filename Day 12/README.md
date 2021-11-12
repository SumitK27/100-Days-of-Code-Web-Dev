# **Day 12** <!-- omit in toc -->

1. [**Interacting with CLI (Command Line Interface)**](#interacting-with-cli-command-line-interface)
   1. [**MacOS**](#macos)
      1. [**Show the current directory path**](#show-the-current-directory-path)
      2. [**Show All files in a directory**](#show-all-files-in-a-directory)
      3. [**Changing the directory**](#changing-the-directory)
      4. [**Clearing your Terminal output**](#clearing-your-terminal-output)
      5. [**Creating a Folder/Directory**](#creating-a-folderdirectory)
      6. [**Creating a File**](#creating-a-file)
      7. [**Deleting Files and Folders**](#deleting-files-and-folders)
   2. [**Windows**](#windows)
      1. [**Show All files in a directory**](#show-all-files-in-a-directory-1)
      2. [**Changing the directory**](#changing-the-directory-1)
      3. [**Clearing your Terminal output**](#clearing-your-terminal-output-1)
      4. [**Creating a Folder/Directory**](#creating-a-folderdirectory-1)
      5. [**Creating a File**](#creating-a-file-1)
      6. [**Read a File**](#read-a-file)
      7. [**Deleting Files and Folders**](#deleting-files-and-folders-1)
2. [**Installing Git**](#installing-git)
   1. [**MacOS**](#macos-1)
   2. [**Windows**](#windows-1)
3. [**Git Basics**](#git-basics)
   1. [**Repository**](#repository)
      1. [**Initializing Git**](#initializing-git)
      2. [**Status**](#status)
      3. [**Staging**](#staging)
         1. [**Individual files**](#individual-files)
         2. [**Multiple files**](#multiple-files)
      4. [**Commit**](#commit)
         1. [**First Commit**](#first-commit)
         2. [**Commit after modification & creation of file**](#commit-after-modification--creation-of-file)
      5. [**Git Config**](#git-config)
         1. [**Edit Git Configs for a System**](#edit-git-configs-for-a-system)
         2. [**Getting User Name**](#getting-user-name)
         3. [**Updating User Name**](#updating-user-name)
         4. [**Getting Email**](#getting-email)
         5. [**Updating Email**](#updating-email)
      6. [**Git Logs**](#git-logs)
      7. [**Branch**](#branch)

## **Interacting with CLI (Command Line Interface)**

### **MacOS**

1. Open Search by pressing `Cmd + Space`.
2. Search `Terminal` and launch it.

-   You open a terminal, it launches a Z-shell software to run commands.

#### **Show the current directory path**

-   `pwd` stands for `Print Working Directory`

```shell
$ pwd   # displays the current working directory
```

#### **Show All files in a directory**

-   `ls` stands for `List Items`.
-   Lists all folders and files inside the folder you currently are.

```shell
$ ls    # list all files and folders in the directory
```

#### **Changing the directory**

-   `cd` stands for `Change Directory`.
-   Use `tab` key to autocomplete the path name.

```shell
$ cd /      # to get to the root directory
$ cd        # to get to the home directory
$ cd ..     # to get to the parent directory
$ cd child # to get to the directory with the name "child"
```

#### **Clearing your Terminal output**

-   It clears the current view of the terminal.
-   History is still available if you scroll above.

```shell
$ clear # clears the terminal screen
```

#### **Creating a Folder/Directory**

-   `mkdir` stands for `Make/Create a Directory`
-   Create a directory in the current working folder.

```shell
$ mkdir WebDev-Course   # this will create a directory with the name "WebDev-Course"
```

#### **Creating a File**

-   `touch` creates a file.

```shell
$ touch dummy.txt # Creates a text (txt) file with the name "dummy"
```

#### **Deleting Files and Folders**

-   `rm` stands for `Remove`.

```shell
$ rm dummy.txt  # deletes "dummy.txt" file
```

-   `rmdir` stands for `Remove Directory`.

```shell
$ rmdir WebDev-Course # if the directory is empty
```

### **Windows**

1. Open Search from start.
2. Search `CMD` or `Command Prompt` and launch it.

#### **Show All files in a directory**

-   `dir` stands for `Directory`.
-   Lists all folders and files inside the folder you currently are.

```bash
$ dir    # list all files and folders in the directory
```

#### **Changing the directory**

-   `cd` stands for `Change Directory`.
-   Use `tab` key to autocomplete the path name.

```bash
$ cd /      # to get to the root directory
$ cd        # to get to the home directory
$ cd ..     # to get to the parent directory
$ cd child  # to get to the directory with the name "child"
$ D:        # to change the drive to "D" Drive
```

#### **Clearing your Terminal output**

-   `cls` stands for `clear`.
-   It clears the current view of the terminal.
-   History is still available if you scroll above.

```shell
$ cls   # clears the terminal screen
```

#### **Creating a Folder/Directory**

-   `mkdir` stands for `Make/Create a Directory`
-   Create a directory in the current working folder.

```bash
$ mkdir WebDev-Course   # this will create a directory with the name "WebDev-Course"
```

#### **Creating a File**

-   `echo` is used to create a file.

```bash
$ echo testing content > dummy.txt # Creates a text (txt) file with the name "dummy" and "testing content" written in it.
```

#### **Read a File**

-   `type` is used to read the content of the file by printing it on the terminal.

```bash
$ type dummy.txt    # prints the content of the file to the terminal
```

#### **Deleting Files and Folders**

-   `del` stands for `Delete`.

```bash
$ del dummy.txt  # deletes "dummy.txt" file
```

-   `rmdir` stands for `Remove Directory`.

```bash
$ rmdir WebDev-Course # if the directory is empty
```

---

## **Installing Git**

### **MacOS**

1. Goto [Git Scm](https://git-scm.com).
2. Press the download button.
    1. **By Homebrew (Package installer for Mac)**
        1. Install HomeBrew.
            1. Goto [HomeBrew](https://brew.sh/)
            2. Copy the command to your terminal.
            3. Wait till it gets installed.
        2. Paste the given command and wait till its installed.
3. Check if git is installed by `git --version`

### **Windows**

1. Goto [Git Scm](https://git-scm.com).
2. Press the download button.
3. Run the installer and go through the on-screen installation process.
4. Check if git is installed by `git --version`

---

## **Git Basics**

-   Two important part of a git project
    1. **Working Directory** - Current project folder.
    2. **Repository** - All tracked files and folders.
        1. **Commits** - Code Snapshot.
        2. **Branches** - Where commits are stored.
-   Git only saves the initial file and then keeps the tracks of the changes made to it.

### **Repository**

#### **Initializing Git**

```shell
$ git init
```

**Output**

```shell
Initialized empty Git repository in Day 12/Git Basics/.git/
```

#### **Status**

-   Check if the project is managed by git.
-   Status shows the status of the files in the project.
-   It also shows which files would be committed in the next commit.

```shell
$ git status
```

**Output**

```shell
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        test.txt

nothing added to commit but untracked files present (use "git add" to track)
```

#### **Staging**

-   Let's you add the modified files to the next commit.

##### **Individual files**

```shell
$ git add test.txt  # adds the "test.txt" to the staging
```

**Output of the status**

```shell
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   test.txt
```

##### **Multiple files**

```shell
$ git add .
```

#### **Commit**

-   It is a snapshot of the code saved.
-   It can be:
    -   "Added Image"
    -   "Fixed Order Button"

##### **First Commit**

```shell
$ git commit -m "added text.txt file"
```

**Output**

```shell
[master (root-commit) fec94d5] added text.txt file
 1 file changed, 1 insertion(+)
 create mode 100644 test.txt
```

##### **Commit after modification & creation of file**

```shell
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        second-commit.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

#### **Git Config**

##### **Edit Git Configs for a System**

```shell
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[user]
	name = MyGitUserName
	email = my.email@address.com
```

##### **Getting User Name**

```shell
$ git config --global user.name
    MyGitUserName
```

##### **Updating User Name**

```shell
git config --global user.name "My New User Name"
```

##### **Getting Email**

```shell
$ git config --global user.email
    my@email.com
```

##### **Updating Email**

```shell
$ git config --global user.email "my.new@email.com"
```

#### **Git Logs**

```shell
$ git log
```

**Output**

```shell
commit fec94d5d3dce7f140fc08715c4d563c211374ce1 (HEAD -> master)
Author: MyGitUserName <my@email.com>
Date:   Fri Nov 12 21:41:04 2021 +0530

    added text.txt file
```

#### **Branch**

-   Commits are stored in a branch.
-   Branch can be main/master by default.
-   Can create a branch that might be used for development purposes and later can be merged to the main or master branch.
