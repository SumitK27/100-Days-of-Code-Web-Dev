# **Day 14** <!-- omit in toc -->

1. [**Local Repository => Remote Repository**](#local-repository--remote-repository)
   1. [**Creating Personal Access Token**](#creating-personal-access-token)
   2. [**Using the token**](#using-the-token)
   3. [**Push Local Repo to GitHub**](#push-local-repo-to-github)
   4. [**Erasing the GitHub Credentials**](#erasing-the-github-credentials)
   5. [**Pre-requisite for Cloning Repository**](#pre-requisite-for-cloning-repository)
2. [**Remote Repository => Local Repository**](#remote-repository--local-repository)
   1. [**Cloning a remote repository**](#cloning-a-remote-repository)
   2. [**Modifying Repository**](#modifying-repository)
3. [**Collaboration**](#collaboration)
   1. [**Create a Private Repository**](#create-a-private-repository)
   2. [**Adding a Collaborator**](#adding-a-collaborator)
   3. [**Collaborator Side**](#collaborator-side)
   4. [**Fetching Updated Repository**](#fetching-updated-repository)
4. [**Contribution**](#contribution)
   1. [**Pre-requisite**](#pre-requisite)
   2. [**Contributing to Someone's Project**](#contributing-to-someones-project)
   3. [**Owner's side**](#owners-side)
5. [**Summary**](#summary)

---

[Test Repository](https://github.com/SumitK27/web-dev-github) for practicing GitHub basics

## **Local Repository => Remote Repository**

### **Creating Personal Access Token**

1. Goto [GitHub](https://github.com/).
2. Click on the `Profile` Icon and select `Settings`.
3. Select `Developer Settings` and click on `Personal access tokens`.
4. Click on `Generate New Token`.
5. Fill the Note and Select the following options:
    1. `repo`, `write:packages`, `delete packages`, `user`
6. Click `Generate Token`.
7. Copy the Token.

### **Using the token**

-   While pushing the code to GitHub when vscode asks to allow GitHub extension:

1. Press cancel.
2. Enter the GitHub username.
3. For Password, paste the access token.

### **Push Local Repo to GitHub**

```shell
$ git push -u https://github.com/YourName/YourRepoName.git main
```

### **Erasing the GitHub Credentials**

```shell
$ git credential-osxkeychain erase
host=github.com
protocol=https
```

### **Pre-requisite for Cloning Repository**

```shell
$ rm -r "Git Basics"
$ mkdir "Git Basics"
$ cd "Git Basics"
```

---

## **Remote Repository => Local Repository**

### **Cloning a remote repository**

-   Creates a copy of a remote repository on your local machine.
-   `.` will let us copy the content on the remote repository directory in the folder we are currently in.

```shell
$ git clone https://github.com/YourUserName/YourRepo.git .
```

### **Modifying Repository**

```shell
$ touch created-after-clone.txt
$ git add .
$ git commit -m "added local text file after clone"
$ git push -u https://github.com/YourName/YourRepoName.git main
```

---

## **Collaboration**

### **Create a Private Repository**

1. Goto GitHub.
2. Click on Repositories.
3. Select add new repository.
4. Give the repository a name.
5. Select the repository type as "Private".

### **Adding a Collaborator**

1. Open the repository where you want a collaborator.
2. Click on `Settings`.
3. Select `Manage Access`.
4. Click on `Invite a collaborator`.
5. Enter the GitHub Username or email address of the user you want to add to your repository.
6. Status of invite will be pending till the collaborator accepts it.

### **Collaborator Side**

1. Accept the invite.
2. Clone the repository to your local machine.

```shell
$ git clone https://github.com/YourName/YourRepoName.git .
$ touch team-page.txt
$ git add .
$ git commit -m "added team page"
$ git push -u https://github.com/YourName/YourRepoName.git main
```

-   Create a personal access toke from collaborator's account to push the modified repository to the remote repository of the owner.

### **Fetching Updated Repository**

```shell
$ git pull
```

---

## **Contribution**

-   Code is made available publicly.
-   Anyone can add or modify to the existing code to improve or fix it.

### **Pre-requisite**

1. Create a new repository.
2. Keep the repository type as Public.

### **Contributing to Someone's Project**

1. Open the repo you want to contribute to.
2. Click on `Fork` (to make a copy of that repo to your own account)
3. Clone the forked repository to your local system.
4. Modify the repository, commit and push it to your forked remote repository.
5. On the forked repository select `Pull requests` for telling the owner to add our modification.
6. Click on `New Pull Request`. (On the left should be owner's repo and on the right, our modified repo)
7. Press `Create Pull Request` andd mention the short description for the owner and press `Create Pull Request`.

### **Owner's side**

1. Goto the repository.
2. Click on `Pull requests`.
3. Click on the pull request of the contributor.
4. Press `Merge pull request` for applying the modification to our code.
5. Press `Close pull request` for not applying the contributor's code.

---

## **Summary**

-   Git is used for a single person access on a local environment.
-   GitHub is a cloud storage for all the git repositories that could be used for both single and team access. It also allows collaboration and contribution.

| Operation     |                                 Description                                  | Command           | Example                                                              |
| :------------ | :--------------------------------------------------------------------------: | :---------------- | :------------------------------------------------------------------- |
| Initializing  | Initialize the git repository to your working directory for version control. | `git init`        | `git init`                                                           |
| Staging       |         Adding the modifications to be affected in the next commit.          | `git add`         | `git add .` or `git add fileName.ext`                                |
| Committing    |                        Create a snapshot of the code.                        | `git commit`      | `git commit -m "Commit message"`                                     |
| Branch        |   A folder containing all the snapshots (commits). Lists all the branches    | `git branch`      | `git branch`                                                         |
| Create Branch |      Creates a branch for separating the development code from the main      | `git checkout -b` | `git checkout -b BranchName`                                         |
| Add Remote    |        Connects the local git repository to a remote git repository.         | `git remote add`  | `git remote add origin https://github.com/YourName/YourRepoName.git` |
| Push          |           Updates the remote repository with the local repository.           | `git push`        | `git push origin BranchName`                                         |
| Pull          |           Updates the local repository with the remote repository.           | `git pull`        | `git pull`                                                           |
| Clone         |                Clones a remote repository to a local machine.                | `git clone`       | `git clone https://github.com/YourName/YourRepoName.git`             |
