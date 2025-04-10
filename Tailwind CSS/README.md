We will see how to use Tailwind Css and make our web beautifull. To use Tailwind Css in our project first we have to configure it in our project, for that we have to go to their website and go to get started then we have to go to framework guides and we will choose PARCEL beacuse we are using parcel in our project.
Tailwind Css comes as a package so we have to install it along POSTCSS, postCss is a tool for transforming CSS with javaScript. So Tailwind Css behind the scenes uses PostCss.
we have to write a command:
npm install tailwindcss @tailwindcss/postcss

this will add tailwindcss latest version in our package.json file and to execute it we have to run command:
npx tailwindcss init

but this command not work here because we have installed latest version of tailwind css and this command will not work perfectly wiht this lates version so we have to install tailwind older version which is 3.4.17, to install it we have to write a command:
npm install tailwindcss@3 @tailwindcss/postcss.
now our package works perfectly fine. and it will creata a new file name as tailwind.config.js which is the configuration file for tailwindcss. Now we have got configuration for our tailwind now we have to get configuation for postcss also means we have to create our postcss file also. To do that we have to make a new file in root section name as .postcssrc which will be configuration for postcss. and we have to write 
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
in this file