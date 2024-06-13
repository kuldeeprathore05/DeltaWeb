//01 What is the Terminal
//A text input and output environment



//02 Different terms related to terminals
// ~Command Line - any interface that is used by entering textual commands. (generally Windows centric)
// ~Terminal - this is a type of command line (generally Mac centric)
// ~Console - a coomand line interface usd to work with your computer
// ~Shell - a program running on terminal
// ~Bash - a popular shell on Mac OS/Linus
// ~Z-Shell - another shell(default)

//04 Basic Commands
// ls = list files (show my files)    // apan jaha khade hai waha ki sari files bata deta hai
// pwd = print working directory (where am i?)  // apan kaha khade hai ye batata hai
// clear = clear screen
// up down arrow key se pichla or next command dekh skte hai



//05 Navigation Commands
//Inside & Outside Directories
// cd = change dirctory   //kise ke andar jana hai to cd fir uske agge jaha jana hai vo likh doo
//eg.   cd Downloads   
//eg.   cd Downloads/Javascript    //yaha doo step andar jane ke liye 
// cd .. = back button   //Bahar anne ke liye (cd fir space fir two dots hai ,,, cd two dots likha to no such command aa jaega)
// cd ../..     //doo step bahar anne ke liye


//06 Paths in Navigation
// cd Downloads/Javascript (relavtive path)
// cd /c/Users/test1/Downloads/Javascript (absolute path)  ,,, / se suru hota hai absolute path
//    / = root directory
//    ~ = home directory



//07 Making Directories
// mkdir = make directory (folder create krti hai)
//eg.   mkdir Newdir   ,,, Newdir naam ka folder create ho jaega
//eg.   mkdir Downloads/Javascript/hello   ,,, hello naam ka folder banega javascript wale folder mein jo khud downloads mein hai,,, similary we can use absolute path


//08 What are Flags_
//Flags are characters that we pass with comands to modify their behaviour 
//mannual Command
//   man ls - give info about ls command  ,,, to quit form it press "q" key in  keyboard
//   man mkdir - give info about mkdir command  ,,, to quit form it press "q" key in  keyboard

//with flags 
//ls -l (details mein files ki info dega)
//ls -a (hidden files ki info bhi dega)
//ls -la (hidden files bhi dega aue detaail mein bhi dega)



//09 Touch Command
//Used to create files
//example
// touch index.html   //files ka naam with extension likhna acha reta hai
// touch app.js
// touch abc.txt


//10 Deleting Files _ Folders
// rm - removes files   ,,, eg. rm abc.txt  ,, nam ke sath likh diya isko delete kr dega
// rmdir - removes empty folder    ,,eg.  rmdir Delta ,, delta agar khali folder hai o use delete kr dega
// rm -rf - removes any folder     ,,eg.  rm -rf Delta ,, yaha rf means recursive force agar delta ko bahar hua folder hai tab bhi usko aur uske andar ke saman ko delete kr dega ye