/*
wind pin 123321
Jazz - swapnil9921- Swap@8805
MS win - Sopang@kpit.com - Swap@8805
DB2- .\db2admin - Kpit@dng
UAT - DB21061E\db2admin - 123@KpitDng
python anywahere venu, Swap@8805
aws Sopan0@gmail.com Swap@8805 -bio5
PMR sopan.gayake@da**.com - Swap@9921930

https://assist.kpit.com/
https://blrdngjts.kpit.com/jts/admin
https://myworld.kpit.com/#/home
https://kpitkrown.xoxoday.com/
https://blribmcoejts.kpit.com/jts

npx create-react-app myfirstreactapp
Get-ChildItem -Path . -Filter *.py

-LKS server is showing error with 3 hostname and one server name IP adreess

-Open VM and run this command on CMD 'nslookup HJIBMTOKEN01.KPIT.COM'
Server:  BLRRMZDC03.kpit.com
Address:  10.30.11.12
Name:    HJIBMTOKEN01.KPIT.COM
Address:  10.52.58.159

check Port is correct or not use command '
telnet HJIBMTOKEN02 27000' 
if telnet is installed (dism /online /Enable-Feature /FeatureName:TelnetClient) you can get telnet Hostname blanck screen

- Open server 10.52.58.159 and open IBM>LKS>logs> rlks.logs or IBM > rlks_6-11-2024 logs may updated like STOP, licence server 
- Open imgrd.log from same dir where check listening port info random port (57982)
-Open server 10.52.58.160 same process like 159
 random port 54723
-On CMD cd E: LKS>bin of 160 'lmutil lmstat -a -c 27000@HJIBMTOKEN02 (winSock: Connection refused)
-Open server 10.52.58.161 same process like 159

-Open LKS HJIBMTOKEN01 check server status
-Open 'https://HJIBMTOKEN03:5043/iclagent/login'
User=LKSAdmin pass LKSAdmin --> check server status
-Token usage summary - should show details
-check the version of LKS under version and under i symbal both sould same
-Try to start from same url using green button
-If still not running Open services and restart LKSser
-Open LKS HJIBMTOKEN01/2/3 check server status
from LKS<bin we can start server by runing 'startLKS.bat file' with administraitor
-Restart all servers from services and check the LKS logs


install python from google
install VScode
Open blanck folder by clicking right
open terminal 
pip install virtualenv / python -m venv venv
virtualenv env -- isolating environment 
.\env\Scripts\activate.ps1 -- use new env
or .\venv\Scripts\activate -- activate venv
Set-ExecutionPolicy unrestricted (OPTIONAL)

pip install flask -- install framework
create app.py
pip install waitress
pip freeze > requirements.txt
pip freeze | ForEach-Object { pip uninstall -y $_ }   ---- this is for freez requirments and uninstall all freesed libraries

git --version
git init
git add .
git log (see commit history) exit - q
git commit -m "Initial commit"
git rm --cached -r venv  -- untrack tracked
git clean -fd  -- remove untracked files 
git remote add origin <your-repo-url>
git remote -v
git push

git fetch origin -- get new code from repo
git stash
git merge origin/main
pip install -r requirements.txt

1. Node js download (windows Installer)
install default run
2. node --version and npm --version
3. react dev tools add chrome extention
4. VS Code download and install
Open VS code
5. Thunder client plugin download (postman)
6. ES7 React/Redux/graphQL - install for shortcut
7. bracket pair colorize - opening closing colore
8. Auto rename Tag - tag name will change <>
9. Live Server -

10. React is JS library/framework search on google creat react app. (pack)
11. we can use - npm install -g create-react-app or npx create-react-app . / my-app 
12. Basic react app is created which will start striming http://localhost:3000/ after using command npm starts
13. After adding componants in src/app.js all will appeare on web
14. if many files/componant are located in Public directory the entry point to get this files will be index.html with the help of 'ID=root element'
15. From src/Index.js/ReactDOM.render all react app componants will directed to the root ID
14. learn Rreact JSX componants reaching to eactjs.org/docs (JSX is js extention only where we can write html but using js functions in {} this brackats )
15. app.js file is writen in JS but its returning one element writern in html+js (jsx)
16. For beutifing the Elements we can assign properties to the Each elements with help of tags 

16. learn JS - JS use to create interactive and dynamic web pages, js is dynamically typed meaning is you no need to declare variable types explicitly.

17. when we are sharing/pushing any project
we do not shre nodemodule directori (add in gitegnore) we can nodemodul using npm i/install

18. Visit to getbootstrap.com/docs - it is a css framework which will provide all the ready UI compotent for our website

19. keep changing multiple componants and use 'npm run build' command for build application.
 20. ech time save and puush your code using following commands git add .
git commit -m "first code push"

21. learn module functions export and import
22. learn how componants works (rfc)

//tag[@atribute="value"]
//tag[text()='text']
//tag[contains(@atribute,"value")]
//tag[normalixe-space()='text']
//tag[@atribute1="val1" and @atribute2="val2"]
//tag[@atribute1="val1" or @atribute2="val2"]
//tag[@atribute1="val1" not @atribute2="val2"]
//tag[starts-with(atribute,'value')]
(//tag[@atribute="value"])[5]

Axes of Xpath

//tag1[@atribute="value"]following::tag2
//tag1[@atribute="value"]preceding::tag2
//tag1[@atribute="value"]child::tag2
//tag1[@atribute="value"]parent::tag2
//tag1[@atribute="value"]ancestor::tag2/descendent::
//tag1[@atribute="value"]preceding-sibling::tag2


CSS Selectore

Tag.valueOfClass
.valueOfClass
Tag[atribute=value]
tag.valueOfClass[atribute=value] */