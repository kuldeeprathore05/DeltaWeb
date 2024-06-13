//01 What is Git _ GitHUb
// Git - Free & Oppen source Version Control Sysytem (Tools that help to track changes in code)
// Github - Website where we host repositories online


//04 Using Git

// Kuldeep@windows MINGW64 ~
// $ git --version                  //git --version likhenge to version print ho jaega
// git version 2.43.0.windows.1

// Kuldeep@windows MINGW64 ~
// $ git                            // git likhenge to below wala print ho jaega
// usage: git [-v | --version] [-h | --help] [-C <path>] [-c <name>=<value>]
//            [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
//            [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
//            [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
//            [--config-env=<name>=<envvar>] <command> [<args>]

// These are common Git commands used in various situations:

// start a working area (see also: git help tutorial)
//    clone     Clone a repository into a new directory
//    init      Create an empty Git repository or reinitialize an existing one

// work on the current change (see also: git help everyday)
//    add       Add file contents to the index
//    mv        Move or rename a file, a directory, or a symlink
//    restore   Restore working tree files
//    rm        Remove files from the working tree and from the index

// examine the history and state (see also: git help revisions)
//    bisect    Use binary search to find the commit that introduced a bug
//    diff      Show changes between commits, commit and working tree, etc
//    grep      Print lines matching a pattern
//    log       Show commit logs
//    show      Show various types of objects
//    status    Show the working tree status

// grow, mark and tweak your common history
//    branch    List, create, or delete branches
//    commit    Record changes to the repository
//    merge     Join two or more development histories together
//    rebase    Reapply commits on top of another base tip
//    reset     Reset current HEAD to the specified state
//    switch    Switch branches
//    tag       Create, list, delete or verify a tag object signed with GPG

// collaborate (see also: git help workflows)
//    fetch     Download objects and refs from another repository
//    pull      Fetch from and integrate with another repository or a local branch
//    push      Update remote refs along with associated objects

// 'git help -a' and 'git help -g' list available subcommands and some concept guides. See 'git help <command>' or 'git help <concept>' to read about a specific subcommand or concept.
// See 'git help git' for an overview of the system.



//05 Configuring Git
//   git config --global user.name"My Name"
//   git config --global user.email"someone@email.com"
//   git config --list   //isse username id check kr skte hai


//07 Clone  Commands
// Cloning a repository on our local machine
//   git clone link    // git clone likh ke direct link paste kr do repo file ka


//08 Status Command
//displays the state of the code
// git status

//09 Add _ Commit Commands
// add - adds new or changed files in your working directory to the Git staging area.  
// git add fileName 
// commit - it is the record of change 
// git commit -m "someMessage"
// modified file ko phele add krte hai fir commit krte 
// add krte hai to vo staged ho jati hai fir commit se commited(final work)


//10 Push Command
// Agar chahte hai ki jo change yaha kre vo git pe bhi dikh to push kause krte hai
// push - to upload local repo content to remote repo
// git push origin main


//11 Init Command
// init - used to create a new git repo 
// git init ( phele mkdir  se folder bana do fir cd se folder ked andar jao fir git init is push kr do)



//12 Pushing local repo
// git remote add origin <-link->     //apan ne project 2 naam ki repo bhi banai github pe fir uska link copy krke ye command di
// git remote -v (to verify remote)
// git branch (to check branch)
// git branch -M main (to rename branch ,, isse branch ka naam main ho jaega )
// git push origin main
// agar baar baar git push origin main nhi krna too ,, ek baar git push -u origin main use kro fir badd mein sirf git push likhne se hi kaam ho jaega



//14 Git Branches

//15 Branch Commands
// git branch (to check branch)
// git branch -M main (to rename branch)
// git checkout <-branchName-> (to navigate)
// git checkout -b <-branchName-> (to create new branch)
// git checkout -d <-branchName-> (to delete branch ,,, delete krne ke liye app jisko delete kr rhe ho usme nhi hone chiye isilye phele kisi aur mein checkout kr lo)



//16 Merging Branches
// git diff <-branchName-> (to compare commits ,branches ,files & more)
// git merge <-branchName-> (to merge 2 branches)
//     OR
// create a PR(pull request)(ye pull request github mein hoti hai ki jese feature to main(main ko base man ke) pull kiya to feature ke sare changes main mein poch jaenge)



//17 Pull Commands
//jese doo branch hai main aur feature aur pull request kr di github pe main ko base leke to feature ki chize main mein aa jaegi fir chahe feature to delete kr do ... but ye vs code mein bhi hoone ke liye pull krna padta hai
// git pull origin main
//used to fetch and download content from a remote and immediately update local repo to match that content


// 18 Merge Conflicts
// An event that takes place when Git is unable to automatically resolve differencess in code between two commits.
// kuch likha add kiya commit kiya ,, kuch aur likha add kiya aur commit kiya dusri branch se ,, fir merge kiya to vo confuse ho jata hai 



//19 Fixing Mistakes
// case.1 staged changes  ,,, agr koi chiz add kr di to kese unstage kare
// git rest<-filename->
// case.2 commited changes (for one commit)
// git reset HEAD~1 
// case.3 commited changes (for many commits)
// git reset <-commit hash->  //git log krenge to sare commit dekh jaenge aur unke commit hash bhi
// git reset --hard <-commit hash->



//20 What is Forking
//A  fork is a new repository that shares code nd visibility settings ith the originl "upstream" repository.