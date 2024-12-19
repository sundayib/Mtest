
var sec=0,autofarm=0,TaskCoins=0,page=1,fname = 'Audu',msg='message',movieUrl="",moviePage="", TaskToHandle=1,refId="",ref="",ask1="",rwd=0,yts="";
var signUpdt= new Date();
var activedt= new Date("9/Dec/2024 00:00:00");
	var lastLogindt= new Date();

var  startValue = 6000, initData,id2='537920146';

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  var endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 1000,
    progressColor = "grey";//progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = "#2e2e2e";

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * (360/endValue)
    }deg,darkgrey 0deg)`;
    /*if (startValue === endValue) {
      clearInterval(progress);
    }*/
  }, speed);
});
 //const po= document.getElementById('pop');
 //po.addEventListener("click",function (){} );
//linearProgress1.appendTo('#percentage');


const tmer =setInterval(txt, 1000);

 
function initfunc()
{
    try{   
    
Telegram.WebApp.ready(); 
              
     Telegram.WebApp.disableVerticalSwipes(); 
     //initData= Telegram.WebApp.initData;    
     id2 =  Telegram.WebApp.initData.Id;  
      fname= window.Telegram.WebApp.initDataUnsafe.user.first_name;
              //navigator.clipboard.writeText(window.Telegram.WebApp.initData);
             // alert("initData:  "+window.Telegram.WebApp.initData);
          document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
     document.getElementById('tc').innerHTML ="Task Coins : "+TaskCoins;
      lditems();                                                      
       
    }catch(er){showAlert(er);}              
}
    
  
function txt(){   
         //startValue=sec;
        sec =startValue; 
      
       if(sec==86000) {startValue=0;   autofarm +=86000;}
         document.getElementById('auto').innerHTML ='Bot coin : '+autofarm;
             
         // document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
                                 
          
}
 


function closePopUp()
{
   ppp.style.display= "none";
          
}
function pageld(e){
    // alert("ffffff");
 if(e.id=="p1b") 
     {
     ppp.style.display= "none";
     p1.style.display= "block";
     p2.style.display= "none";
     p3.style.display= "none";
    // ppp.style.display= "none";
     }
     else if(e.id=="p4b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
    // ppp.style.display= "none";
     }
     else if(e.id=="p3b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "block";
      ShowMovieList();            
    // ppp.style.display= "none";
     }
}
 function showpops(ms,b1,b2,height,task)
{
     msg=ms;
          document.getElementById('bt1').innerHTML =b1;
          document.getElementById('bt2').innerHTML =b2;
          document.getElementById('pop').innerHTML =msg;
          ppp.style.height= height;
          ppp.style.display= "flex";            
}
function showmovie(e)
{
     movieUrl=e.id; 
      if(e.id.includes("://hd"))    
     moviePage= "https://hdmania2.net/showmovie.php?id=" +e.name;   
    else  moviePage= "https://mp4mania1.net/showmovie.php?id=" +e.name;   
                   
     TaskToHandle= 1;    
     let msg='Watch or download the movie directly at the cost of 100,000 coins or visit the movie web page at zero cost. ';
          let b1='Watch or dowload directly';
    let b2 ='Visit movie page';          
    let height= '80%';
          showpops(msg,b1,b2,height);
}


function showinvite()
{
          TaskToHandle= 5;
          msg='Get unlimited coins inviting as many frens as you can. Each invite earns you 100,000 coins per new user. You can copy your referral link below.';
    document.getElementById('bt1').innerHTML ='Copy referal link to clipboard';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '80%';
          ppp.style.display= "flex";            
}

//GET REFERRAL CODE
var en='KeWoVaQn5x',rfc;
function getrefcode()
{   let n='';
          //alert(id2);
  for(let i=0;i<id2.length;i++)
    {
   n=n+ en[id2[i]];
    }
    //alert(rfc);
         return n;
}


function ShowAd()
{
     TaskToHandle= 2;
    msg="Watch ads to get 200,000 coin per ad. If you don't have the whot game installed already, you will have to download and install it from Amazon app store first which will give you 1,000,000 coins for first time installation. If you don't have Amazon app store installed on your device, you may have to install it first before installing Whot.";
    document.getElementById('bt1').innerHTML ='Watch ads from whot game';
    document.getElementById('bt2').innerHTML ='Download app from Amazon ';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}

function ShowYt()
{
     TaskToHandle= 3;
    msg="Watch the Youtube video to the end without fast forwarding to earn 500,000 coins.";
          document.getElementById('bt1').innerHTML ='Watch video now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '80%';     
    ppp.style.display= "flex";       
          
}

function ShowWebsite()
{
     TaskToHandle= 4;
    msg="Subscribe to YouTube channel to earn 1,000,000 coins.  Reward for the subscription may take upto 72 hours  before being awarded in order to prevent cheating through different verification processes. Penalty for cheating is 3,000,000 coins deduction.";
          document.getElementById('bt1').innerHTML ='Subscribe to channel now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}

function HandleTask(e)
{ 
          if(e==bt1){
    if(TaskToHandle==1)
          { 
                    window.open(movieUrl);
          }   
   else if(TaskToHandle==2)
          { 
                    showAlert('Task is mobile ad');
          }   
  else if(TaskToHandle==3)
          { 
                    showAlert('Task is mobile YT');
          }   
  else if(TaskToHandle==4)
          { 
                    showAlert('Task is yt subcription ');
          }
  else if(TaskToHandle==5)
          { 
                    navigator.clipboard.writeText(getrefcode());
                    showAlert('Referral link copied.');
          }
                              
          else
          { 
                    showAlert('Task is empty '+TaskToHandle);
          }   
          }
          else
          {
             if(TaskToHandle==1)
          { showAlert(moviePage);//window.open(moviePage);
          }   
   else if(TaskToHandle==2)
          { 
                    window.open('amazonapplink');
          }   
  else 
          { 
                    ppp.style.display= "none";
          }   
      
                    
                 
          }
}




//HOME ENDS


function getdt()
{
          
var weekdt = new Date("16/Nov/2024 20:30:00");
var now = new Date();
          
 if(weekdt.getTime()>now.getTime() || now.getTime()- weekdt.getTime()> 2580000000){ showAlert("Your phone date is not correct. Set it and try again. The app will close automatically."); /*close();*/}
  if(now.getTime() -lastLogindt.getTime() > 2752000000 ) { autofarm=0; activedt=now; save("activedt",now.toString()); showAlert("It has been more than 30 days since your last login and because of this your bot coin has reset to zero. To avoid similar situation, try to login at least once every 30 days." )} 
 lastLogindt=now;
       
  save("activedt",now.toString()); 
           
    if(signUpdt.getTime()-360 > now.getTime) save("signUpdt",now.toString());
         // save("lastLogindt", lastLogindt.toString());
     //sec = diff - days * (1000 * 60 * 60 * 24);
          //showAlert(new Date().toString());  
          let d = new Date();
let h = d.getHours() * 3600;
let m = d.getMinutes() * 60;
 //sec = d.getSeconds() + h  + m; 
      startValue =  d.getSeconds() + h  + m;   
          var diff = now.getTime() - activedt.getTime();
    autofarm= Math.floor((diff )/ (1000)) - startValue;
     
 //showAlert(new Date().toString());         
     /*
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
diff -=  days * (1000 * 60 * 60 * 24);

var hours = Math.floor(diff / (1000 * 60 * 60));
diff -= hours * (1000 * 60 * 60);

var mins = Math.floor(diff / (1000 * 60));
diff -= mins * (1000 * 60);

var seconds = Math.floor(diff / (1000));
diff -= seconds * (1000);
 
 //return days + " days, " + hours + " hours, " + mins + " minutes, " + seconds + " seconds";
    */ 
}       
    



  
   function getQuery(isref=false)
{
 //Params = new URLSearchParams(window.location.search);
    Params = window.Telegram.WebApp.initDataUnsafe.start_param;
  
           if(Params.has('ask'))
          {
           let [p1,p2]=   Params.split("_") ;  
 if(ask1 == p2)  
           {
              Award() ;     
           }                               
          }
        else if(Params.has('ref'))
  {
    let refcode=Params.split('_')[1];
    save('ref',refcode);
    //send bot msg
     sendMsg(id+'===='+refcode);
                               
  }  else{if (isref)save('ref','noref');}
        /*  if(Params.has('ask'))
          {
            let  askcode=Params.get('ask');
                    if(ask1 == askcode)  
           {
              Award() ;     
           }                    
          }
          else if(Params.has('ref'))
  {
    let refcode=Params.get('ref');
    save('ref',refcode);
    //send bot msg
     sendMsg(id+'='+refcode);
                               
  }
  else
  {
            if(!ref.length > 2)
            {
    save('ref','noref');
            }
  }*/
}

function Award()
{
    if(rwd >0)save("rwd","0") ;    
}


function save(key,value)
{
          try{
  Telegram.WebApp.setHeaderColor('#2e2e2e');
                  
Telegram.WebApp.CloudStorage.setItem(key, value, function(err, saved) {
                if (err) 
                   {
                     showAlert('Error: ' + err);
                   } 
           else {
                    if (saved)
                   {
                        //bot 2 send msg
                    }
                    
                }
            });
          } catch(err){ showAlert("setittem "+err);}
    }


 function getItem(key) {
            
                    
                        Telegram.WebApp.CloudStorage.getItem(key, function(err, value) {
                            if (err) {
                                showAlert('Error: ' + err);
                            }
                          else {
                                
                                //use value
                            }
                          
                        });
                    
                   }


 function lditems() {
            
           let keys= ["autofarm","TaskCoins" ,"refId","ref","ask1","rwd","yts","signUpdt","activedt","lastLogindt"];
                        Telegram.WebApp.CloudStorage.getItems(keys, function(err, values) {
                            if (err) {
                                showAlert('Error reading 4m cloud: ' + err);
                                      for (let i=0;i<keys.length;i++)save(keys[i],"z");
                            } else {
                                
                           // if(goAhead(values[keys[0]])) autofarm = values[keys[0]]; else autofarm=0;
                                   if(goAhead(values[keys[1]]))  TaskCoins = values[keys[1]]; else TaskCoins = 0;
                                  if(goAhead(values[keys[2]]))   refId = values[keys[2]]; else refId = getrefcode();
                                  if(goAhead(values[keys[3]]))   ref = values[keys[3]]; else ref = ""; 
                                  if(goAhead(values[keys[4]]))   ask1 = values[keys[4]]; else ask1 = "";
                                  if(goAhead(values[keys[5]]))   rwd = values[keys[5]]; else rwd = 0;
                                  if(goAhead(values[keys[6]]))  yts = values[keys[6]]; else yts = 0;
                                  if(goAhead(values[keys[7]]))   signUpdt = new Date(values[keys[7]]); else signUpdt = new Date("16/Nov/2026 20:30:00");
                                   if(goAhead(values[keys[8]]))  activedt = new Date(values[keys[8]]);  else activedt = new Date() ;
                                  if(goAhead(values[keys[9]]))   lastLogindt = new Date(values[keys[9]]); else lastLogindt = new Date();
                            }
                           
                        });
                    
        }

 function goAhead(o)
{
  if(o.length > 2) return true;else return false;       
}


   function  sendMsg(msg)
{
  Telegram.WebApp.sendData(msg);
 /*fetch("https://api.telegram.org/bot{HTTP_API_TOKEN}/sendMessage?chat_id={CHAT_ID}&text={"+msg+"}")
  .then((response) => {
     if (!response.ok) {
      throw new Error("Network response was not ok");
    }
            return response.json();
  })
  .then((data) => console.log(data));
  */
  
}

function showAlert(message) {
         alert(message);
            //Telegram.WebApp.showAlert("V2 "+message);
        }









 

// PAGE 3

var lis = ﻿[{"Tit":" AINBO - Spirit of the Amazon ","Des":" In the spirit of Moana and Frozen, Ainbo - Spirit of the Amazon is the epic journey of a young hero and her Spirit Guides, Dillo a cute and humorous armadillo and Vaca a goofy oversized tapir, who embark on a quest to save their home in the spectacular Amazon Rainforest.","Length":" 1:24 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13435","Hid":"6449","Img":"http://o2videos.com/screenshots/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip.jpg","LSize":"LR 141.72 MB","HSize":"HD 199.5 MB"},{"Tit":" A Date with Danger ","Des":" When a womans best friend goes missing, she must work quickly to determine whether her friends abductor is someone close to home.","Length":" 1:27 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Date%20with%20Danger%20-%20BRRip/A%20Date%20with%20Danger%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Date%20with%20Danger%20-%20BRRip/A%20Date%20with%20Danger%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13426","Hid":"6440","Img":"http://o2videos.com/screenshots/A%20Date%20with%20Danger%20-%20BRRip.jpg","LSize":"LR 100.77 MB","HSize":"HD 137.67 MB"},{"Tit":" Anything for Jackson ","Des":" A bereaved Satanist couple kidnap a pregnant woman so they can use an ancient spellbook to put their dead grandsons spirit into her unborn child but end up summoning more than they bargained for.","Length":" 1:37 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Anything%20for%20Jackson%20-%20BRRip/Anything%20for%20Jackson%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Anything%20for%20Jackson%20-%20BRRip/Anything%20for%20Jackson%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13424","Hid":"6438","Img":"http://o2videos.com/screenshots/Anything%20for%20Jackson%20-%20BRRip.jpg","LSize":"LR 80.88 MB","HSize":"HD 127.25 MB"},{"Tit":" America - The Motion Picture ","Des":" A chainsaw-wielding George Washington teams with beer-loving bro Sam Adams to take down the Brits in a tongue-in-cheek riff on the American Revolution.","Length":" 1:38 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/America%20-%20The%20Motion%20Picture%20-%20BRRip/America%20-%20The%20Motion%20Picture%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/America%20-%20The%20Motion%20Picture%20-%20BRRip/America%20-%20The%20Motion%20Picture%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13408","Hid":"6422","Img":"http://o2videos.com/screenshots/America%20-%20The%20Motion%20Picture%20-%20BRRip.jpg","LSize":"LR 181.47 MB","HSize":"HD 256.15 MB"},{"Tit":" A Love to Remember ","Des":" Tenley, a horticulturist, works up the courage to meet her online crush, Jared. Tenley gets mistaken for his wife and is forced to keep the lie up with Jareds family and his charming best friend, Everett, in order to save their company.","Length":" 1:25 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Love%20to%20Remember%20-%20BRRip/A%20Love%20to%20Remember%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Love%20to%20Remember%20-%20BRRip/A%20Love%20to%20Remember%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13405","Hid":"6419","Img":"http://o2videos.com/screenshots/A%20Love%20to%20Remember%20-%20BRRip.jpg","LSize":"LR 117.53 MB","HSize":"HD 181.52 MB"},{"Tit":" A Quiet Place Part II ","Des":" Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.","Length":" 1:30 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Quiet%20Place%20Part%20II%20-%20BRRip/A%20Quiet%20Place%20Part%20II%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Quiet%20Place%20Part%20II%20-%20BRRip/A%20Quiet%20Place%20Part%20II%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13401","Hid":"6415","Img":"http://o2videos.com/screenshots/A%20Quiet%20Place%20Part%20II%20-%20SCam.jpg","LSize":"LR 161.5 MB","HSize":"HD 236.66 MB"},{"Tit":" Awake ","Des":" After a devastating global event wipes out all electronics and eliminated peoples ability to sleep, a former soldier may have found a solution with her daughter.","Length":" 1:36 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Awake%20-%20BRRip/Awake%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Awake%20-%20BRRip/Awake%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13351","Hid":"6364","Img":"http://o2videos.com/screenshots/Awake%20-%20BRRip.jpg","LSize":"LR 103.11 MB","HSize":"HD 166.21 MB"},{"Tit":" Army of the Dead ","Des":" Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.","Length":" 2:22 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Army%20of%20the%20Dead%20-%20BRRip/Army%20of%20the%20Dead%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Army%20of%20the%20Dead%20-%20BRRip/Army%20of%20the%20Dead%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13301","Hid":"6313","Img":"http://o2videos.com/screenshots/Army%20of%20the%20Dead%20-%20SCam.jpg","LSize":"LR 208.45 MB","HSize":"HD 293.65 MB"},{"Tit":" Arlo the Alligator Boy ","Des":" A young humanoid alligator travels to the big city in hopes of reuniting with his estranged father, meeting a colorful cast of characters along the way.","Length":" 1:33 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Arlo%20the%20Alligator%20Boy%20-%20BRRip/Arlo%20the%20Alligator%20Boy%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Arlo%20the%20Alligator%20Boy%20-%20BRRip/Arlo%20the%20Alligator%20Boy%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13204","Hid":"6216","Img":"http://o2videos.com/screenshots/Arlo%20the%20Alligator%20Boy%20-%20BRRip.jpg","LSize":"LR 141.64 MB","HSize":"HD 193.28 MB"},{"Tit":" A Week Away ","Des":" Nowhere left to go, Will Hawkins finds himself at camp for the first time. His instinct is to run, but he finds a friend, a father figure and even a girl who awakens his heart. Most of all, he finally finds a home.","Length":" 1:38 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Week%20Away%20-%20BRRip/A%20Week%20Away%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Week%20Away%20-%20BRRip/A%20Week%20Away%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13141","Hid":"6153","Img":"http://o2videos.com/screenshots/A%20Week%20Away%20-%20BRRip.jp","LSize":"LR 209.89 MB","HSize":"HD 309.09 MB"},{"Tit":" Adverse ","Des":" A rideshare driver discovers that his sister is in debt to a dangerous crime syndicate.","Length":" 1:34 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Adverse%20-%20BRRip/Adverse%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Adverse%20-%20BRRip/Adverse%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13071","Hid":"6082","Img":"http://o2videos.com/screenshots/Adverse%20-%20SCam.jpg","LSize":"LR 89.18 MB","HSize":"HD 128.32 MB"},{"Tit":" All My Life ","Des":" A couples wedding plans are thrown off course when the groom is diagnosed with liver cancer.","Length":" 1:31 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/All%20My%20Life%20-%20BRRip/All%20My%20Life%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/All%20My%20Life%20-%20BRRip/All%20My%20Life%20-%20BRRip%20(Mp4Mania).mp4","Lid":"13037","Hid":"6048","Img":"http://o2videos.com/screenshots/All%20My%20Life%20-%20BRRip.jpg","LSize":"LR 145.83 MB","HSize":"HD 205.92 MB"},{"Tit":" A Nice Girl Like You ","Des":" After being accused of being too inhibited by her ex-boyfriend, a violinist creates a rather wild to-do list that sends her on a whirlwind journey of self-discovery.","Length":" 1:34 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Nice%20Girl%20Like%20You%20-%20BRRip/A%20Nice%20Girl%20Like%20You%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Nice%20Girl%20Like%20You%20-%20BRRip/A%20Nice%20Girl%20Like%20You%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12948","Hid":"5959","Img":"http://o2videos.com/screenshots/A%20Nice%20Girl%20Like%20You%20-%20BRRip.jpg","LSize":"LR 142.13 MB","HSize":"HD 202.25 MB"},{"Tit":" American Dream ","Des":" Entrepreneurs Scott and Nicky are desperate for cash to finish their construction project. They turn to Russian mobster Yuri, but after refusing the funding he offered them, Yuri gets revenge by trying to take over their project.","Length":" 1:23 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/American%20Dream%20-%20BRRip/American%20Dream%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/American%20Dream%20-%20BRRip/American%20Dream%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12866","Hid":"5877","Img":"http://o2videos.com/screenshots/American%20Dream%20-%20BRRip.jpg","LSize":"LR 124.82 MB","HSize":"HD 174.91 MB"},{"Tit":" Another Round ","Des":" Four friends, all high school teachers, test a theory that they will improve their lives by maintaining a constant level of alcohol in their blood.","Length":" 1:56 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Another%20Round%20-%20BRRip/Another%20Round%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Another%20Round%20-%20BRRip/Another%20Round%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12784","Hid":"5795","Img":"http://o2videos.com/screenshots/Another%20Round%20-%20BRRip.jpg","LSize":"LR 162.08 MB","HSize":"HD 224.73 MB"},{"Tit":" Alabama Snake ","Des":" Explores the story of a Pentecostal minister, accused of attempting to murder his wife with a rattlesnake. Based on true events!","Length":" 1:25 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Alabama%20Snake%20-%20BRRip/Alabama%20Snake%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Alabama%20Snake%20-%20BRRip/Alabama%20Snake%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12760","Hid":"5771","Img":"http://o2videos.com/screenshots/Alabama%20Snake%20-%20BRRip.jpg","LSize":"LR 106.12 MB","HSize":"HD 149.11 MB"},{"Tit":" Ammonite ","Des":" 1840s England, acclaimed but overlooked fossil hunter Mary Anning and a young woman sent to convalesce by the sea develop an intense relationship, altering both of their lives forever.","Length":" 1:58 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Ammonite%20-%20BRRip/Ammonite%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Ammonite%20-%20BRRip/Ammonite%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12730","Hid":"5741","Img":"http://o2videos.com/screenshots/Ammonite%20-%20BRRip.jpg","LSize":"LR 130.21 MB","HSize":"HD 176.87 MB"},{"Tit":" Always and 4Ever ","Des":" After a tragedy reunites Nicole with her childhood friends, they each find themselves in danger, targets of a deranged stalker. Nicole knows this cant be a coincidence. The secrets of their past are coming back to haunt them.","Length":" 1:38 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Always%20and%204Ever%20-%20BRRip/Always%20and%204Ever%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Always%20and%204Ever%20-%20BRRip/Always%20and%204Ever%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12669","Hid":"5680","Img":"http://o2videos.com/screenshots/Always%20and%204Ever%20-%20BRRip.jpg","LSize":"LR 140.02 MB","HSize":"HD 191.98 MB"},{"Tit":" After We Collided ","Des":" Based on the 2014 romance novel of the same name, this follows the love life of two young adults.","Length":" 1:45 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/After%20We%20Collided%20-%20BRRip/After%20We%20Collided%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/After%20We%20Collided%20-%20BRRip/After%20We%20Collided%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12531","Hid":"5542","Img":"http://o2videos.com/screenshots/After%20We%20Collided%20-%20SCam.jpg","LSize":"LR 155.45 MB","HSize":"HD 217.42 MB"},{"Tit":" Agatha and the Midnight Murders ","Des":" As bombs fall on London, writer Agatha Christie decides it is time to kill off her most famous creation.","Length":" 1:31 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12509","Hid":"5520","Img":"http://o2videos.com/screenshots/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip.jpg","LSize":"LR 87.41 MB","HSize":"HD 109.92 MB"},{"Tit":" A Babysitters Guide to Monster Hunting ","Des":" A babysitter embarks on a mission to save a child whos been abducted by monsters.","Length":" 1:38 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12496","Hid":"5507","Img":"http://o2videos.com/screenshots/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip.jpg","LSize":"LR 132.39 MB","HSize":"HD 189.5 MB"},{"Tit":" A Call to Spy ","Des":" In the beginning of WWII, with Britain becoming desperate, Churchill orders his new spy agency - SOE - to recruit and train women as spies.","Length":" 2:04 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Call%20to%20Spy%20-%20BRRip/A%20Call%20to%20Spy%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Call%20to%20Spy%20-%20BRRip/A%20Call%20to%20Spy%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12429","Hid":"5440","Img":"http://o2videos.com/screenshots/A%20Call%20to%20Spy%20-%20BRRip.jpg","LSize":"LR 149.09 MB","HSize":"HD 198.29 MB"},{"Tit":" American Pie Presents - Girls Rules ","Des":" Its Senior year at East Great Falls. Annie, Kayla, Michelle, and Stephanie decide to harness their girl power and band together to get what they want their last year of high school.","Length":" 1:35 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12419","Hid":"5430","Img":"http://o2videos.com/screenshots/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip.jpg","LSize":"LR 172.75 MB","HSize":"HD 245.67 MB"},{"Tit":" Antebellum ","Des":" Successful author Veronica Henley finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before its too late.","Length":" 1:45 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Antebellum%20-%20BRRip/Antebellum%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Antebellum%20-%20BRRip/Antebellum%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12378","Hid":"5389","Img":"http://o2videos.com/screenshots/Antebellum%20-%20BRRip.jpg","LSize":"LR 143.31 MB","HSize":"HD 201.66 MB"},{"Tit":" Anthony ","Des":" In July 2005, black teenager Anthony Walker was murdered by two white men in an unprovoked racist attack in a Liverpool park. He was just 18 years old. This film tells the story of how this talented young mans life might have turned out.","Length":" 1:24 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Anthony%20-%20BRRip/Anthony%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Anthony%20-%20BRRip/Anthony%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12343","Hid":"5354","Img":"http://o2videos.com/screenshots/Anthony%20-%20BRRip.jpg","LSize":"LR 120.32 MB","HSize":"HD 168.62 MB"},{"Tit":" All Together Now ","Des":" An optimistic high schooler with musical aspirations must learn to accept help from her friends to overcome her personal hardships and fulfill her dreams.","Length":" 1:32 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/All%20Together%20Now%20-%20BRRip/All%20Together%20Now%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/All%20Together%20Now%20-%20BRRip/All%20Together%20Now%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12308","Hid":"5319","Img":"http://o2videos.com/screenshots/All%20Together%20Now%20-%20BRRip.jpg","LSize":"LR 116.63 MB","HSize":"HD 157.42 MB"},{"Tit":" Ava ","Des":" Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.","Length":" 1:37 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Ava%20-%20BRRip/Ava%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Ava%20-%20BRRip/Ava%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12277","Hid":"5288","Img":"http://o2videos.com/screenshots/Ava%20-%20SCam.jpg","LSize":"LR 138.25 MB","HSize":"HD 193.67 MB"},{"Tit":" An American Pickle ","Des":" An immigrant worker at a pickle factory is accidentally preserved for 100 years and wakes up in modern day Brooklyn.","Length":" 1:26 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/An%20American%20Pickle%20-%20BRRip/An%20American%20Pickle%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/An%20American%20Pickle%20-%20BRRip/An%20American%20Pickle%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12224","Hid":"5235","Img":"http://o2videos.com/screenshots/An%20American%20Pickle%20-%20BRRip.jpg","LSize":"LR 124.87 MB","HSize":"HD 173.37 MB"},{"Tit":" Around the Sun ","Des":" Touring a repossessed chateau, a film location scout falls for its flirtatious representative, who recounts the story of an influential book written there. But is their connection for real, or just a projection of the books characters?","Length":" 1:18 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Around%20the%20Sun%20-%20BRRip/Around%20the%20Sun%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Around%20the%20Sun%20-%20BRRip/Around%20the%20Sun%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12213","Hid":"5224","Img":"http://o2videos.com/screenshots/Around%20the%20Sun%20-%20BRRip.jpg","LSize":"LR 89.86 MB","HSize":"HD 136.44 MB"},{"Tit":" American Wisper ","Des":" In June 2016, a loving family was found shot to death at their suburban home in Northern New Jersey, and discovered by father and husband Josiah Wisper - a brash businessman who owned bars, restaurants and real estate in Harlem, New York.","Length":" 1:30 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/American%20Wisper%20-%20BRRip/American%20Wisper%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/American%20Wisper%20-%20BRRip/American%20Wisper%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12185","Hid":"5196","Img":"http://o2videos.com/screenshots/American%20Wisper%20-%20BRRip.jpg","LSize":"LR 123.79 MB","HSize":"HD 172.59 MB"},{"Tit":" Amulet ","Des":" An ex-soldier, living homeless in London, is offered a place to stay at a decaying house inhabited by a young woman and her dying mother. As he starts to fall for her, he cannot ignore his suspicion that something sinister is going on.","Length":" 1:40 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Amulet%20-%20BRRip/Amulet%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Amulet%20-%20BRRip/Amulet%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12173","Hid":"5184","Img":"http://o2videos.com/screenshots/Amulet%20-%20BRRip.jpg","LSize":"LR 104.89 MB","HSize":"HD 261.43 MB"},{"Tit":" Arthur and Merlin - Knights of Camelot ","Des":" A much older King Arthur returns home after fighting the Roman Empire. His illegitimate son has corrupted the throne of Camelot. Now King Arthur must reunite with the wizard Merlin and the Knights of the Round Table and fight to get back his crown.","Length":" 1:30 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12148","Hid":"5159","Img":"http://o2videos.com/screenshots/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip.jpg","LSize":"LR 101.06 MB","HSize":"HD 136.58 MB"},{"Tit":" Archive ","Des":" 2038: George Almore is working on a true human-equivalent AI. His latest prototype is almost ready. This sensitive phase is also the riskiest. Especially as he has a goal that must be hidden at all costs: being reunited with his dead wife.","Length":" 1:49 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Archive%20-%20BRRip/Archive%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Archive%20-%20BRRip/Archive%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12139","Hid":"5150","Img":"http://o2videos.com/screenshots/Archive%20-%20BRRip.jpg","LSize":"LR 143.2 MB","HSize":"HD 200.62 MB"},{"Tit":" Above Suspicion ","Des":" The story that lead to the first conviction for murder of an FBI agent.","Length":" 1:44 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Above%20Suspicion%20-%20BRRip/Above%20Suspicion%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Above%20Suspicion%20-%20BRRip/Above%20Suspicion%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12126","Hid":"5137","Img":"http://o2videos.com/screenshots/Above%20Suspicion%20-%20DvdScr.jpg","LSize":"LR 130.85 MB","HSize":"HD 180.92 MB"},{"Tit":" Avengement ","Des":" After years of assaults on him in prison, Cain escapes for avengement on those responsible.","Length":" 1:30 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Avengement%20-%20BRRip/Avengement%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Avengement%20-%20BRRip/Avengement%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12102","Hid":"5113","Img":"http://o2videos.com/screenshots/Avengement%20-%20BRRip.jpg","LSize":"LR 108.56 MB","HSize":"HD 165 MB"},{"Tit":" A Midsummer Nights Dream ","Des":" Young lovers, a troupe of actors, and fairies have romantic encounters in the forest on summers night.","Length":" 2:40 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Midsummer%20Nights%20Dream%20-%20BRRip/A%20Midsummer%20Nights%20Dream%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Midsummer%20Nights%20Dream%20-%20BRRip/A%20Midsummer%20Nights%20Dream%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12095","Hid":"5106","Img":"http://o2videos.com/screenshots/A%20Midsummer%20Nights%20Dream%20-%20BRRip.jpg","LSize":"LR 215.58 MB","HSize":"HD 297.64 MB"},{"Tit":" Anna 2 ","Des":" Starring Justin Duncan, Gerald Crum, Mercedes Peterson and John Charles Dickson. The Stars of two competing and colliding paranormal television shows converge on an abandoned haunted","Length":" 1:37 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Anna%202%20-%20BRRip/Anna%202%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Anna%202%20-%20BRRip/Anna%202%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12093","Hid":"5104","Img":"http://o2videos.com/screenshots/Anna%202%20-%20DvdScr.jpg","LSize":"LR 112.5 MB","HSize":"HD 152.06 MB"},{"Tit":" Athlete A ","Des":" Follow the Indianapolis Star reporters that broke the story about USA Gymnastics doctor Larry Nassars abuse and hear from gymnasts like Maggie Nichols.","Length":" 1:43 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Athlete%20A%20-%20BRRip/Athlete%20A%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Athlete%20A%20-%20BRRip/Athlete%20A%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12088","Hid":"5099","Img":"http://o2videos.com/screenshots/Athlete%20A%20-%20BRRip.jpg","LSize":"LR 158.05 MB","HSize":"HD 223.44 MB"},{"Tit":" Artemis Fowl ","Des":" Artemis Fowl, a young criminal prodigy, hunts down a secret society of fairies to find his missing father.","Length":" 1:35 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Artemis%20Fowl%20-%20BRRip/Artemis%20Fowl%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Artemis%20Fowl%20-%20BRRip/Artemis%20Fowl%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12057","Hid":"5068","Img":"http://o2videos.com/screenshots/Artemis%20Fowl%20-%20BRRip.jpg","LSize":"LR 161.75 MB","HSize":"HD 236.59 MB"},{"Tit":" Acrylic ","Des":" A colorful neighborhood salon is threatened by a new addition. The pot is stirred by a local magazine competition and a long standing rivalry. Which salon has what it takes to win the grand prize?","Length":" 1:18 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Acrylic%20-%20BRRip/Acrylic%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Acrylic%20-%20BRRip/Acrylic%20-%20BRRip%20(Mp4Mania).mp4","Lid":"12019","Hid":"5030","Img":"http://o2videos.com/screenshots/Acrylic%20-%20BRRip.jpg","LSize":"LR 102.94 MB","HSize":"HD 158.87 MB"},{"Tit":" Adam ","Des":" A hard-living salesman becomes a quadriplegic after an accident.","Length":" 1:40 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Adam%20-%20BRRip/Adam%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Adam%20-%20BRRip/Adam%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11985","Hid":"4996","Img":"http://o2videos.com/screenshots/Adam%20-%20BRRip.jpg","LSize":"LR 123.13 MB","HSize":"HD 187.32 MB"},{"Tit":" All Day and a Night ","Des":" A young man who committed a homicide deals with the repercussions of his action.","Length":" 2:01 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/All%20Day%20and%20a%20Night%20-%20BRRip/All%20Day%20and%20a%20Night%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/All%20Day%20and%20a%20Night%20-%20BRRip/All%20Day%20and%20a%20Night%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11949","Hid":"4960","Img":"http://o2videos.com/screenshots/All%20Day%20and%20a%20Night%20-%20BRRip.jpg","LSize":"LR 123.2 MB","HSize":"HD 177.97 MB"},{"Tit":" Arkansas ","Des":" Kyle and Swin live by the orders of an Arkansas-based drug kingpin named Frog, whom theyve never met. But when a deal goes horribly wrong, the consequences are deadly.","Length":" 1:57 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Arkansas%20-%20BRRip/Arkansas%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Arkansas%20-%20BRRip/Arkansas%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11924","Hid":"4935","Img":"http://o2videos.com/screenshots/Arkansas%20-%20BRRip.jpg","LSize":"LR 106.26 MB","HSize":"HD 149.32 MB"},{"Tit":" Adults in the Room ","Des":" Greece in 2015: the economy is in tatters and the country is on the verge of bankruptcy. A new government rebels against the EUs iron-fisted rule and inspires millions of Europeans. Based on the political memoirs of Yanis Varoufakis.","Length":" 2:07 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Adults%20in%20the%20Room%20-%20BRRip/Adults%20in%20the%20Room%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Adults%20in%20the%20Room%20-%20BRRip/Adults%20in%20the%20Room%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11764","Hid":"4775","Img":"http://o2videos.com/screenshots/Adults%20in%20the%20Room%20-%20BRRip.jpg","LSize":"LR 152.49 MB","HSize":"HD 226.48 MB"},{"Tit":" A Hidden Life ","Des":" The Austrian Franz Jagerstatter, a conscientious objector, refuses to fight for the Nazis in World War II.","Length":" 2:54 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Hidden%20Life%20-%20BRRip/A%20Hidden%20Life%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Hidden%20Life%20-%20BRRip/A%20Hidden%20Life%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11741","Hid":"4752","Img":"http://o2videos.com/screenshots/A%20Hidden%20Life%20-%20DvdScr.jpg","LSize":"LR 228 MB","HSize":"HD 368.4 MB"},{"Tit":" All the Bright Places ","Des":" The story of Violet and Theodore, who meet and change each others lives forever. As they struggle with the emotional and physical scars of their past, they discover that even the smallest places and moments can mean something.","Length":" 1:49 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/All%20the%20Bright%20Places%20-%20BRRip/All%20the%20Bright%20Places%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/All%20the%20Bright%20Places%20-%20BRRip/All%20the%20Bright%20Places%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11727","Hid":"4738","Img":"http://o2videos.com/screenshots/All%20the%20Bright%20Places%20-%20BRRip.jpg","LSize":"LR 124.71 MB","HSize":"HD 190.84 MB"},{"Tit":" A Beautiful Day in the Neighbourhood ","Des":" Based on the true story of a real-life friendship between Fred Rogers and journalist Tom Junod.","Length":" 1:49 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11629","Hid":"4640","Img":"http://o2videos.com/screenshots/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20DvdScr.jpg","LSize":"LR 116.53 MB","HSize":"HD 169.43 MB"},{"Tit":" A Shaun the Sheep Movie - Farmageddon ","Des":" When an alien with amazing powers crash-lands near Mossy Bottom Farm, Shaun the Sheep goes on a mission to shepherd the intergalactic visitor home before a sinister organization can capture her.","Length":" 1:27 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11614","Hid":"4625","Img":"http://o2videos.com/screenshots/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20SCam.jpg","LSize":"LR 94.77 MB","HSize":"HD 138.75 MB"},{"Tit":" A Serial Killers Guide to Life ","Des":" A self-help addict unwittingly finds herself on a killing spree with her unhinged life coach.","Length":" 1:21 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11525","Hid":"4536","Img":"http://o2videos.com/screenshots/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip.jpg","LSize":"LR 101.39 MB","HSize":"HD 155.6 MB"},{"Tit":" Abigail ","Des":" A young girl Abigail lives in a city whose borders were closed many years ago because of an epidemic of a mysterious disease. Abbys father was one of the sick - and he was taken when she was six years old. Going against the authorities to find her father, Abby learns that her city is actually full of magic. And she discovers in herself extraordinary magical abilities.","Length":" 1:46 Hrs","HLink":"http://hd2.dlmania.com/Hollywood/Abigail%20-%20BRRip/Abigail%20-%20BRRip%20HD%20(HDMp4Mania).mp4","LLink":"https://mp41.maniadl.com/Hollywood/Abigail%20-%20BRRip/Abigail%20-%20BRRip%20(Mp4Mania).mp4","Lid":"11440","Hid":"4451","Img":"http://o2videos.com/screenshots/Abigail%20-%20BRRip.jpg","LSize":"LR 118.19 MB","HSize":"HD 180.94 MB"}];


function get(url){
    showAlert(url.id);
}
 var movIndex=0;
 
 function ini( tit, des,img,len,hre='tttt',lre, hsi,lsi,Lid ,Hid)
{
    this.tit=tit;
    this.des=des;
    this.img=img;
    this.len=len;
    this.hre=hre;
    this.lre=lre;
    this.hsi=hsi;
    this.lsi=lsi;
    this.Lid=Lid;
    this.Hid=Hid;
    
    
    
    
    var temp = '<div id="fr" class="frame">'
        +'<div id="tit" style="font-size:5vh; margin: 20px"> '+tit+'</div>'
 +'<img src='+img+ ' style="height: 50vh; width:38vh;"/>'
 +'<div id="len"style="font-size:4vh"> Duration : '+len+ '</div>'
      +'<div id="des"style="font-size: 3vh; margin-left: 20px; margin-right: 20px"> DESCRIPTION :'+ des +' </div>'
     
  +'<button class="bt3" style="color: white;background: #2e2e2e;border:1px solid white;" onclick="showmovie(this);" id='+hre+' name= '+Hid+'>High resolution ('+hsi+')</button>'
  +'<button class="bt3" style="color: #2e2e2e;background: white;border:1px solid white;" onclick="showmovie(this);" id='+lre+' name= '+Lid+'>Low resolution ('+lsi+')</button>'
   
  +'</div>';
        let b=document.getElementById("p3content").innerHTML +temp;
    document.getElementById("p3content").innerHTML=b;
        
    //document.body.appendChild(temp);
    
 // alert(img);
    
}
 function ShowMovieList()
{
    //alert('init');
    
    let x = 0;
    if(movIndex +10 <lis.length)x = movIndex +10;
    else x=lis.length;
     if(x>0)
    {
  document.getElementById("p3content").innerHTML= "  ";      
    for(let i= movIndex;i< x;i++)  
    {
              //"VidImgs\\"+lis[i].Lid+".jpg"
   ini(lis[i].Tit,lis[i].Des, lis[i].Img,lis[i].Length,lis[i].HLink,lis[i].LLink,lis[i].HSize,lis[i].LSize,lis[i].Lid , lis[i].Hid);
    }
    }
     
    
}


function nex()
{
   
     ShowMovieList();   
      if(movIndex==lis.length-9) showAlert("End of page reached");
    if(movIndex +10 <lis.length) movIndex+=10; else movIndex=lis.length-9;
    
}
function prev()
{
   if(movIndex>=10)
    {
       movIndex= movIndex-10;
     ShowMovieList();   
      
    }
    else showAlert("You are already on the first page.");
}

function npage(){
          if(page==1){page=2;document.getElementById('p1').style.display = "none";
                    document.getElementById('container').style.display = "block";
                    
                    
          }
        else{ page=1;document.getElementById('container').style.display = "none";
                    document.getElementById('p1').style.display = "block";
                       }  
}
getdt();
initfunc();

       
          