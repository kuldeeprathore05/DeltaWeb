//01 Introduction To Tailwind 
// "Rapidly build modern wbsites without ever leaving your HTML".
// "Utility-first" means the framework's main focus is on providing utility classes.
// tailwindcss.com -> Get started -> Installation -> Play CDN
// CDN link ko html file mein copy krke use krenge , but for production level project we should use Tailwind CLI

<h1 class="underline ml-4">Hello World</h1>

//Utility classes hoti hai class mein likha ml-4 to margin left ho gayi 1rem se
//1=0.25rem  -->  4=1rem



//02 Tailwind CLI
// tailwindcss.com -> Get started -> Installation -> Using PostCSS
// npm install -D tailwindcss postcss autoprefixer
// npm i vite 
// npx tailwindcss init -p
// tailwind.config.js file mein content:["*"]
// create style.css file & write given below in that file
         //@tailwind base;
         //@tailwind components;
         //@tailwind utilities;
// In package.json - write -> "script":{"start":"vite"},
// In html link styl.css file



//03 TypoGraphy_Styling
//Typography(related to text style) & Sizing




//04 Colors _ Spacing
// Color - text color & bg color
    // Text color -> Typography ke andar text color   //EG class="text-rose-500"
    // Bg color -> Backgrounds ke andar background color   // EG class="bg-purple-400"
// In Customization -> Colors , you can see all color , konsa color kesa lag raha hai

// Spacing - Padding & Margin & Space between (Spacing ke andar ye teen milenge)
    // Padding -> pl-4(pading left = 1rem) , pr , pl , pb , p , px(padding left right only) , py(padding top bottom only) , -pr-4(negative right padding 1rem)
    // Margin  -> ml-4(margin left = 1rem) , mr , ml , mb , m , mx , my , -mr-4(negative right margin 1rem)
    //Space Between = Space between children -> EG  class={space-x-1}

//Flexbox & Grid -> Iske anndar sab flexbox wagera ka    
    
//Borders -> Isme pura border size width radius color etc...

// [] space bracket notation  // we can write any value in square bracket
// EG   class="mr-[20px]  pl-[2rem] w-[50vh] "   etc
// we generall avoid this , inpect styles mein inke liye alag classes bann jati hai  , jyda use krenge to bunddle size badd jaega




//05 Breakpoints
//Core Concepts -> Responsive  Design 
// you can se breakpoints table there.
// Eg class=" md:bg-purle-400 sm:bg-rose-500"
// Matlab 640-768px purple hoga && 768px se jyda pr rose color hoga && 640px se kaam pr default ya kuch nhi hoga



//06 Apply Directive
//USe @apply to inline any exsting utility classes into your own custom CSS.
//Agar koi styling haar bhot jagh use ho rhi hai to use css file mein @apply .... ke agge likh do aur vo class sab elements ko de to



//07 Design a Card in Tailwind
// placeholder ke andar ka text small krne ke liye
// class=" placehoder:text-sm "