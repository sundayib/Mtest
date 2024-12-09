
ej.base.registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH9ceXVRQ2BfU0VyXEA=');
var sec=0,autofarm=0,TaskCoins=0,page=1,fname = 'Audu',msg='message',movieUrl="",moviePage="", TaskToHandle=1,refId="",ref="",ask1="",rwd=0,yts="";
var signUpdt= new Date();
var activedt= new Date("9/Nov/2024 00:00:00");
	var lastLogindt= new Date();

var  initData,id2='537920146';
var linearProgress1 = new ej.progressbar.ProgressBar({
  type: 'Circular',
        value: 10,
        width: '200px',
        height: '200px',
        
        trackColor :'darkgrey',
        radius: '100%',
        innerRadius: '100%',
        progressColor: 'grey',
        trackThickness: 10,
        cornerRadius: 'Round',
        progressThickness: 10,
          maximum : 86000,
    
    isIndeterminate: false,
    secondaryProgress: 0,
    secondaryProgressColor: 'black',
    
  showProgressValue: true,
  labelStyle: {
            color: 'grey',size:'40',text: ' Bot is claiming for you'
        }
// textRender:  tx (args) => {args.text = 'Claiming ';},
          
  //  isGradient:true,
    
        
  });

const po= document.getElementById('pop');
 //po.addEventListener("click",function (){} );
linearProgress1.appendTo('#percentage');


const tmer =setInterval(txt, 1000);

 
function initfunc()
{
    try{   
    
Telegram.WebApp.Ready(); 
    lditems();           
     Telegram.WebApp.disableVerticalSwipes(); 
     initData= Telegram.WebApp.initData;    
      id=  Telegram.WebApp.initData.Id;  
      fname=  Telegram.WebApp.initData.firstName;
          document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
     document.getElementById('tc').innerHTML ="Task Coins : "+TaskCoins;
                                                           
       
    }catch(er){showAlert(er);}              
}
  initfunc();
  function tx(args){
            args.text = 'Claim '+sec; ++sec;
  }
function txt(){   
         linearProgress1.value=sec;
       linearProgress1.labelStyle.text= (sec).toString(); 
         sec +=1; 
      
       if(sec==86000) {sec=0;   autofarm +=86000;}
         document.getElementById('auto').innerHTML ='Bot coin : '+autofarm;
             
          document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
                                 
          //clearInterval(tmer);
          //linearProgress1.refresh();
        //  : (args) => args.text = 'Claim '+sec;}
          
          
}
 
function alertmsg( ){ 
        // document.getElementById("c12").style.color = "blue";// close 
          //ppp.style.display= "none";
        // if(ppp.contains(pop)) pop.remove();
         if(page%2==0)ppp.style.display= "none";
          else ppp.style.display= "flex";
          ++page;
         // ppp.appendChild(t.content.cloneNode(true));
         // let elem = document.createElement('  <div id="pop" style="display:flex;flex-direction: column; align-items: center;width:94%;justify-content: center;">');
 ///let tmpl=document.getElementsByTagName("template")[0];
  // Clone the template content to reuse it multiple times
 // elem.append(t.content.cloneNode(true));
          
 // document.body.appendChild(elem);

         // prompt( document.getElementById("s23").innerHTML +" What's your name?");
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
     moviePage= "https://mp4mania1.net/showmovie.php?id=15855" +e.name;      
     TaskToHandle= 1;    
     let msg='Watch or download the movie directly at the cost of 100,000 coins or visit the movie web page at zero cost. '+ movieUrl;
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
                    navigator.clipboard.writeText("tessssss");
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
          
 if(weekdt.getTime()>now.getTime() || now.getTime()- weekdt.getTime()> 2580000000){ showAlert("Your phone date is not correct. Set it and try again."); close();}
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
 sec = d.getSeconds() + h  + m; 
          
          var diff = now.getTime() - activedt.getTime();
    autofarm= Math.floor((diff )/ (1000)) - sec;
     
 showAlert(new Date().toString());         
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
    
getdt();


  
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
          } catch(err){ showAlert("setitem "+err);}
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
         
            Telegram.WebApp.showAlert("V2 "+message);
        }











// PAGE 3

var lis = ﻿[{Tit:' A Good Person ',Des:' Follows Allison, whose life falls apart following her involvement in a fatal accident.',Length:' 2:08 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Good%20Person%20-%20BRRip/A%20Good%20Person%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Good%20Person%20-%20BRRip/A%20Good%20Person%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15855','Img':null,LSize:'LR 158.85 MB',HSize:'HD 218.24 MB'},{Tit:' Assassin ',Des:' A man dies as part of an experimental military program. A former black-ops soldier takes his place to find who killed him.',Length:' 1:29 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Assassin%20-%20BRRip/Assassin%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Assassin%20-%20BRRip/Assassin%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15824','Img':null,LSize:'LR 99.57 MB',HSize:'HD 136.38 MB'},{Tit:' Avatar - The Way of Water ',Des:' Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Navi race to protect their home',Length:' 3:11 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Avatar%20-%20The%20Way%20of%20Water%20-%20BRRip/Avatar%20-%20The%20Way%20of%20Water%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Avatar%20-%20The%20Way%20of%20Water%20-%20BRRip/Avatar%20-%20The%20Way%20of%20Water%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15808','Img':null,LSize:'LR 524.05 MB',HSize:'HD 791.67 MB'},{Tit:' A Little White Lie ',Des:' When a handyman living in New York City is mistaken for a famous and famously reclusive writer, he is brought to a university where he is to deliver a keynote address to save the schools literary festival.',Length:' 1:41 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Little%20White%20Lie%20-%20BRRip/A%20Little%20White%20Lie%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Little%20White%20Lie%20-%20BRRip/A%20Little%20White%20Lie%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15741','Img':null,LSize:'LR 138.52 MB',HSize:'HD 192.25 MB'},{Tit:' A Man Called Otto ',Des:' Otto is a grump who has given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around.',Length:' 2:06 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Man%20Called%20Otto%20-%20BRRip/A%20Man%20Called%20Otto%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Man%20Called%20Otto%20-%20BRRip/A%20Man%20Called%20Otto%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15729','Img':null,LSize:'LR 169.83 MB',HSize:'HD 236.63 MB'},{Tit:' At Midnight ',Des:' At Midnight is a romantic comedy about two people who have made the safe choice not to fall in love.',Length:' 1:40 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/At%20Midnight%20-%20BRRip/At%20Midnight%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/At%20Midnight%20-%20BRRip/At%20Midnight%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15675','Img':null,LSize:'LR 176.05 MB',HSize:'HD 251.55 MB'},{Tit:' Alice Darling ',Des:' A young woman trapped in an abusive relationship becomes the unwitting participant in an intervention staged by her two closest friends.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Alice%20Darling%20-%20BRRip/Alice%20Darling%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Alice%20Darling%20-%20BRRip/Alice%20Darling%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15650','Img':null,LSize:'LR 101.71 MB',HSize:'HD 186.44 MB'},{Tit:' Aftersun ',Des:' Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories real and imagined fill the gaps between as she tries to reconcile the father she knew with the man she didnt.',Length:' 1:42 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Aftersun%20-%20BRRip/Aftersun%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Aftersun%20-%20BRRip/Aftersun%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15525','Img':null,LSize:'LR 139.61 MB',HSize:'HD 198.22 MB'},{Tit:' A Man of Action ',Des:' In this drama inspired by the life of Lucio Urtubia, an anarchist targets one of the worlds biggest banks with an ingenious counterfeiting operation.',Length:' 1:51 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Man%20of%20Action%20-%20BRRip/A%20Man%20of%20Action%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Man%20of%20Action%20-%20BRRip/A%20Man%20of%20Action%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15434','Img':null,LSize:'LR 139.17 MB',HSize:'HD 190.95 MB'},{Tit:' Armageddon Time ',Des:' A deeply personal coming-of-age story about the strength of family and the generational pursuit of the American Dream.',Length:' 1:54 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Armageddon%20Time%20-%20BRRip/Armageddon%20Time%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Armageddon%20Time%20-%20BRRip/Armageddon%20Time%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15402','Img':null,LSize:'LR 107.35 MB',HSize:'HD 139.09 MB'},{Tit:' Aisha ',Des:' While caught for years in Irelands immigration system Aisha Osagie develops a close friendship with former prisoner Conor Healy. This friendship soon looks to be short lived as Aishas future in Ireland comes under threat.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Aisha%20-%20BRRip/Aisha%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Aisha%20-%20BRRip/Aisha%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15380','Img':null,LSize:'LR 98.44 MB',HSize:'HD 132.51 MB'},{Tit:' A Christmas Story Christmas ',Des:' Follows the now-adult Ralphie as he returns to the house on Cleveland Street to give his kids a magical Christmas like the one he had as a child, reconnecting with childhood friends, and reconciling the passing of his Old Man.',Length:' 1:42 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Christmas%20Story%20Christmas%20-%20BRRip/A%20Christmas%20Story%20Christmas%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Christmas%20Story%20Christmas%20-%20BRRip/A%20Christmas%20Story%20Christmas%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15379','Img':null,LSize:'LR 152.69 MB',HSize:'HD 214.72 MB'},{Tit:' Amsterdam ',Des:' In the 1930s, three friends witness a murder, are framed for it, and uncover one of the most outrageous plots in American history.',Length:' 2:14 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Amsterdam%20-%20BRRip/Amsterdam%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Amsterdam%20-%20BRRip/Amsterdam%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15354','Img':null,LSize:'LR 159.73 MB',HSize:'HD 214.15 MB'},{Tit:' All Quiet on the Western Front ',Des:' A young German soldiers terrifying experiences and distress on the western front during World War I.',Length:' 2:29 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/All%20Quiet%20on%20the%20Western%20Front%20-%20BRRip/All%20Quiet%20on%20the%20Western%20Front%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/All%20Quiet%20on%20the%20Western%20Front%20-%20BRRip/All%20Quiet%20on%20the%20Western%20Front%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15312','Img':null,LSize:'LR 203.05 MB',HSize:'HD 286.13 MB'},{Tit:' A Savannah Haunting ',Des:' A family loses their young daughter in a tragic drowning and moves to Savannah, only to be haunted by her presence in their new home.',Length:' 1:45 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Savannah%20Haunting%20-%20BRRip/A%20Savannah%20Haunting%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Savannah%20Haunting%20-%20BRRip/A%20Savannah%20Haunting%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15309','Img':null,LSize:'LR 118.82 MB',HSize:'HD 159.9 MB'},{Tit:' American Murderer ',Des:' Charismatic con man Jason Derek Brown becomes wanted by the FBI after hatching his most elaborate scheme yet.',Length:' 1:42 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/American%20Murderer%20-%20BRRip/American%20Murderer%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/American%20Murderer%20-%20BRRip/American%20Murderer%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15307','Img':null,LSize:'LR 132.51 MB',HSize:'HD 182.72 MB'},{Tit:' Argentina 1985 ',Des:' A team of lawyers takes on the heads of Argentinas bloody military dictatorship during the 1980s in a battle against odds and a race against time.',Length:' 2:21 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Argentina%201985%20-%20BRRip/Argentina%201985%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Argentina%201985%20-%20BRRip/Argentina%201985%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15286','Img':null,LSize:'LR 153.22 MB',HSize:'HD 203.14 MB'},{Tit:' Accident Man 2 ',Des:' The Accident Man, is back and this time he must beat the top assassins in the world, to protect the ungrateful son of a mafia boss, save the life of his only friend and rekindle his relationship with his maniacal father figure.',Length:' 1:36 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Accident%20Man%202%20-%20BRRip/Accident%20Man%202%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Accident%20Man%202%20-%20BRRip/Accident%20Man%202%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15251','Img':null,LSize:'LR 140.37 MB',HSize:'HD 197.59 MB'},{Tit:' A Love Song ',Des:' At a campground in the rural West, a woman waits alone for an old flame from her past to arrive, uncertain of his intentions while bashful about her own.',Length:' 1:21 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Love%20Song%20-%20BRRip/A%20Love%20Song%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Love%20Song%20-%20BRRip/A%20Love%20Song%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15166','Img':null,LSize:'LR 103.37 MB',HSize:'HD 145.48 MB'},{Tit:' A Jazzmans Blues ',Des:' Follows an investigation into an unsolved murder unveiling a story full of forbidden love, deceit and a secret.',Length:' 2:08 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Jazzmans%20Blues%20-%20BRRip/A%20Jazzmans%20Blues%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Jazzmans%20Blues%20-%20BRRip/A%20Jazzmans%20Blues%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15144','Img':null,LSize:'LR 167.54 MB',HSize:'HD 230.03 MB'},{Tit:' After Ever Happy ',Des:' As a shocking truth about a couples families emerges, the two lovers discover they are not so different from each other. Tessa is no longer the sweet, simple, good girl she was when she met Hardin — any more than he is the cruel, moody boy she fell so hard for.',Length:' 1:59 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/After%20Ever%20Happy%20-%20BRRip/After%20Ever%20Happy%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/After%20Ever%20Happy%20-%20BRRip/After%20Ever%20Happy%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15135','Img':null,LSize:'LR 125.98 MB',HSize:'HD 175.33 MB'},{Tit:' About Fate ',Des:' The romantic comedy is a tale of two people who believe in love, but seem to never be able to find its true meaning. In a wild twist of events, fate puts each in the others path on a stormy New Years Eve and comedy and chaos ensue.',Length:' 1:39 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/About%20Fate%20-%20BRRip/About%20Fate%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/About%20Fate%20-%20BRRip/About%20Fate%20-%20BRRip%20(Mp4Mania).mp4',Lid:'15082','Img':null,LSize:'LR 139.69 MB',HSize:'HD 192.55 MB'},{Tit:' Anythings Possible ',Des:' A delightfully modern Gen Z coming-of-age story that follows Kelsa, a confident high school girl who is trans, as she navigates through senior year.',Length:' 1:38 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Anythings%20Possible%20-%20BRRip/Anythings%20Possible%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Anythings%20Possible%20-%20BRRip/Anythings%20Possible%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14878','Img':null,LSize:'LR 137.49 MB',HSize:'HD 190.85 MB'},{Tit:' A Perfect Pairing ',Des:' It follows a hard-driving LA wine-company executive who travels to an Australian sheep station to land a major client and there she ends up working as a ranch hand and sparking with a rugged local.',Length:' 1:43 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Perfect%20Pairing%20-%20BRRip/A%20Perfect%20Pairing%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Perfect%20Pairing%20-%20BRRip/A%20Perfect%20Pairing%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14672','Img':null,LSize:'LR 154.07 MB',HSize:'HD 215.96 MB'},{Tit:' Along for the Ride ',Des:' The summer before college Auden meets the mysterious Eli, a fellow insomniac. While the seaside town of Colby sleeps, the two embark on a nightly quest to help Auden experience the fun, carefree teen life she never knew she wanted.',Length:' 1:48 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Along%20for%20the%20Ride%20-%20BRRip/Along%20for%20the%20Ride%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Along%20for%20the%20Ride%20-%20BRRip/Along%20for%20the%20Ride%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14630','Img':null,LSize:'LR 148.72 MB',HSize:'HD 208.6 MB'},{Tit:' Ambulance ',Des:' Two robbers steal an ambulance after their heist goes awry.',Length:' 2:16 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Ambulance%20-%20BRRip/Ambulance%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Ambulance%20-%20BRRip/Ambulance%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14588','Img':null,LSize:'LR 292.3 MB',HSize:'HD 430.77 MB'},{Tit:' All the Old Knives ',Des:' Two CIA operatives, and former lovers, reunite at idyllic Carmel-by-the-Sea to re-examine a mission six years ago in Vienna where a fellow agent might have been compromised.',Length:' 1:42 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/All%20the%20Old%20Knives%20-%20BRRip/All%20the%20Old%20Knives%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/All%20the%20Old%20Knives%20-%20BRRip/All%20the%20Old%20Knives%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14551','Img':null,LSize:'LR 110.78 MB',HSize:'HD 148.17 MB'},{Tit:' Agent Game ',Des:' A CIA officer finds himself the target of a rendition operation after being scapegoated for the death of an interrogation subject.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Agent%20Game%20-%20BRRip/Agent%20Game%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Agent%20Game%20-%20BRRip/Agent%20Game%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14550','Img':null,LSize:'LR 97.97 MB',HSize:'HD 131.84 MB'},{Tit:' Alice ',Des:' A slave in the antebellum South escapes her secluded plantation only to discover a shocking reality that lies beyond the tree line.',Length:' 1:40 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Alice%20-%20BRRip/Alice%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Alice%20-%20BRRip/Alice%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14538','Img':null,LSize:'LR 101.34 MB',HSize:'HD 173 MB'},{Tit:' Apollo 10 1-2 - A Space Age Adventure ',Des:' A coming-of-age story set in the suburbs of Houston, Texas in the summer of 1969, centered around the historic Apollo 11 moon landing.',Length:' 1:39 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Apollo%2010%201-2%20-%20A%20Space%20Age%20Adventure%20-%20BRRip/Apollo%2010%201-2%20-%20A%20Space%20Age%20Adventure%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Apollo%2010%201-2%20-%20A%20Space%20Age%20Adventure%20-%20BRRip/Apollo%2010%201-2%20-%20A%20Space%20Age%20Adventure%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14526','Img':null,LSize:'LR 137.71 MB',HSize:'HD 182.12 MB'},{Tit:' After Yang ',Des:' In a near future, a family reckons with questions of love, connection, and loss after their A.I. helper unexpectedly breaks down.',Length:' 1:36 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/After%20Yang%20-%20BRRip/After%20Yang%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/After%20Yang%20-%20BRRip/After%20Yang%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14425','Img':null,LSize:'LR 79.82 MB',HSize:'HD 113.97 MB'},{Tit:' A Day to Die ',Des:' After killing a drug syndicate member while protecting a parolee, Connor Connolly has one day to pay two million dollars in reparations he doesnt have to Tyrone Pettis. He is forced to ask his old military ops crew, led by Brice Mason, to come together and somehow get two million dollars before Connor loses everyone he loves.',Length:' 1:45 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Day%20to%20Die%20-%20BRRip/A%20Day%20to%20Die%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Day%20to%20Die%20-%20BRRip/A%20Day%20to%20Die%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14427','Img':null,LSize:'LR 138.06 MB',HSize:'HD 250.77 MB'},{Tit:' Against the Ice ',Des:' In 1909, two explorers fight to survive after theyre left behind while on a Denmark expedition in ice-covered Greenland. Nikolaj Coster-Waldau stars.',Length:' 1:42 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Against%20the%20Ice%20-%20BRRip/Against%20the%20Ice%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Against%20the%20Ice%20-%20BRRip/Against%20the%20Ice%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14415','Img':null,LSize:'LR 125.89 MB',HSize:'HD 174.42 MB'},{Tit:' A Madea Homecoming ',Des:' Madeas back hallelujer. And shes not putting up with any nonsense as family drama erupts at her great-grandsons college graduation celebration.',Length:' 1:47 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Madea%20Homecoming%20-%20BRRip/A%20Madea%20Homecoming%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Madea%20Homecoming%20-%20BRRip/A%20Madea%20Homecoming%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14405','Img':null,LSize:'LR 167.75 MB',HSize:'HD 238.1 MB'},{Tit:' American Underdog ',Des:' The story of NFL MVP and Hall of Fame quarterback Kurt Warner, who went from stocking shelves at a supermarket to becoming an American Football star.',Length:' 1:52 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/American%20Underdog%20-%20BRRip/American%20Underdog%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/American%20Underdog%20-%20BRRip/American%20Underdog%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14339','Img':null,LSize:'LR 188.91 MB',HSize:'HD 273.24 MB'},{Tit:' A Journal for Jordan ',Des:' 1st Sgt. Charles Monroe King, before he is killed in action in Baghdad, authors a journal for his son intended to tell him how to live a decent life despite growing up without a father.',Length:' 2:04 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Journal%20for%20Jordan%20-%20BRRip/A%20Journal%20for%20Jordan%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Journal%20for%20Jordan%20-%20BRRip/A%20Journal%20for%20Jordan%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14233','Img':null,LSize:'LR 132.43 MB',HSize:'HD 229.03 MB'},{Tit:' A Mouthful of Air ',Des:' Julie Davis writes bestselling childrens books about unlocking your fears, but has yet to unlock her own. When her daughter is born, that trauma is brought to the fore, and with it, a crushing battle to survive.',Length:' 1:45 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Mouthful%20of%20Air%20-%20BRRip/A%20Mouthful%20of%20Air%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Mouthful%20of%20Air%20-%20BRRip/A%20Mouthful%20of%20Air%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14207','Img':null,LSize:'LR 130.61 MB',HSize:'HD 177.98 MB'},{Tit:' A California Christmas - City Lights ',Des:' Sequel to A California Christmas. Follows Callie and Joseph one year after they fell in love, now running a dairy farm and winery, but their romance is threatened when business and family obligations call Joseph back to the city.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20California%20Christmas%20-%20City%20Lights%20-%20BRRip/A%20California%20Christmas%20-%20City%20Lights%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20California%20Christmas%20-%20City%20Lights%20-%20BRRip/A%20California%20Christmas%20-%20City%20Lights%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14114','Img':null,LSize:'LR 150.16 MB',HSize:'HD 208.3 MB'},{Tit:' Antlers ',Des:' In an isolated Oregon town, a middle-school teacher and her sheriff brother become embroiled with her enigmatic student, whose dark secrets lead to terrifying encounters with a legendary ancestral creature who came before them.',Length:' 1:35 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Antlers%20-%20BRRip/Antlers%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Antlers%20-%20BRRip/Antlers%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14102','Img':null,LSize:'LR 92.77 MB',HSize:'HD 134.29 MB'},{Tit:' A Castle for Christmas ',Des:' To escape a scandal, a bestselling author journeys to Scotland, where she falls in love with a castle - and faces off with the grumpy duke who owns it.',Length:' 1:39 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Castle%20for%20Christmas%20-%20BRRip/A%20Castle%20for%20Christmas%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Castle%20for%20Christmas%20-%20BRRip/A%20Castle%20for%20Christmas%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14016','Img':null,LSize:'LR 158.63 MB',HSize:'HD 228.15 MB'},{Tit:' A Boy Called Christmas ',Des:' In this origin story of Father Christmas, an ordinary boy (with a loyal pet mouse and a reindeer at his side) sets out on an extraordinary adventure to find his father who is on a quest to discover the fabled village of Elfhelm.',Length:' 1:47 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Boy%20Called%20Christmas%20-%20BRRip/A%20Boy%20Called%20Christmas%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Boy%20Called%20Christmas%20-%20BRRip/A%20Boy%20Called%20Christmas%20-%20BRRip%20(Mp4Mania).mp4',Lid:'14007','Img':null,LSize:'LR 190.86 MB',HSize:'HD 280.96 MB'},{Tit:' Army of Thieves ',Des:' A prequel, set before the events of Army of the Dead, which focuses on German safecracker Ludwig Dieter leading a group of aspiring thieves on a top secret heist during the early stages of the zombie apocalypse.',Length:' 2:07 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Army%20of%20Thieves%20-%20BRRip/Army%20of%20Thieves%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Army%20of%20Thieves%20-%20BRRip/Army%20of%20Thieves%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13860','Img':null,LSize:'LR 183.18 MB',HSize:'HD 254.07 MB'},{Tit:' Apex ',Des:' Five elite hunters pay to hunt down a man on a deserted island, only to find themselves becoming the prey.',Length:' 1:29 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Apex%20-%20BRRip/Apex%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Apex%20-%20BRRip/Apex%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13858','Img':null,LSize:'LR 130.7 MB',HSize:'HD 183.83 MB'},{Tit:' After We Fell ',Des:' Just as Tessa makes the biggest decision of her life, everything changes. Revelations about her family, and then Hardins, throw everything they knew before in doubt and makes their hard-won future together more difficult to claim.',Length:' 1:50 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/After%20We%20Fell%20-%20BRRip/After%20We%20Fell%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/After%20We%20Fell%20-%20BRRip/After%20We%20Fell%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13822','Img':null,LSize:'LR 134.45 MB',HSize:'HD 184.56 MB'},{Tit:' Aiyai - Wrathful Soul ',Des:' A neighbourhood is plagued by mysterious tragedies when a young man becomes the conduit for an unknown spirit, the AIYAI which lures victims to their chilling fates.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Soul%20-%20BRRip/Soul%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Aiyai%20-%20Wrathful%20Soul%20-%20BRRip/Aiyai%20-%20Wrathful%20Soul%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13805','Img':null,LSize:'LR 95.65 MB',HSize:'HD 205.54 MB'},{Tit:' Ascendant ',Des:' A young environmentalist wakes, trapped, kidnapped in the elevator of a super high-rise building at the mercy of her tormentors',Length:' 1:35 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Ascendant%20-%20BRRip/Ascendant%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Ascendant%20-%20BRRip/Ascendant%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13760','Img':null,LSize:'LR 116.34 MB',HSize:'HD 158.8 MB'},{Tit:' American Night ',Des:' A neo-noir set in the New York Citys corrupt contemporary art world where the art dealer John Kaplan and the ruthless head of New Yorks mafia, Michael Rubino, fight for money, art, power and love.',Length:'',HLink:'http://hd2.dlmania.com/Hollywood/American%20Night%20-%20BRRip/American%20Night%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/American%20Night%20-%20BRRip/American%20Night%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13745','Img':null,LSize:'LR 166.2 MB',HSize:'HD 230.81 MB'},{Tit:' Afterlife of the Party ',Des:' A social butterfly who dies during her birthday week is given a second chance to right her wrongs on Earth.',Length:' 1:50 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Afterlife%20of%20the%20Party%20-%20BRRip/Afterlife%20of%20the%20Party%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Afterlife%20of%20the%20Party%20-%20BRRip/Afterlife%20of%20the%20Party%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13613','Img':null,LSize:'LR 154.65 MB',HSize:'HD 217.16 MB'},{Tit:' Annette ',Des:' A stand-up comedian and his opera singer wife have a 2 year old daughter with a surprising gift.',Length:' 2:21 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Annette%20-%20BRRip/Annette%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Annette%20-%20BRRip/Annette%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13568','Img':null,LSize:'LR 176.49 MB',HSize:'HD 244.32 MB'},{Tit:' A Righteous Man ',Des:' When the aging Meyer Lansky is investigated one last time by the Feds who suspect he has stashed away millions of dollars over half a century, the retired gangster spins a dizzying tale, revealing the untold truth about his life as the notorious boss of Murder Inc. and the National Crime Syndicate.',Length:' 2:00 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Righteous%20Man%20-%20BRRip/A%20Righteous%20Man%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Righteous%20Man%20-%20BRRip/A%20Righteous%20Man%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13519','Img':null,LSize:'LR 136.49 MB',HSize:'HD 184.52 MB'},{Tit:' AINBO - Spirit of the Amazon ',Des:' In the spirit of Moana and Frozen, Ainbo - Spirit of the Amazon is the epic journey of a young hero and her Spirit Guides, Dillo a cute and humorous armadillo and Vaca a goofy oversized tapir, who embark on a quest to save their home in the spectacular Amazon Rainforest.',Length:' 1:24 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip/AINBO%20-%20Spirit%20of%20the%20Amazon%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13435','Img':null,LSize:'LR 141.72 MB',HSize:'HD 199.5 MB'},{Tit:' A Date with Danger ',Des:' When a womans best friend goes missing, she must work quickly to determine whether her friends abductor is someone close to home.',Length:' 1:27 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Date%20with%20Danger%20-%20BRRip/A%20Date%20with%20Danger%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Date%20with%20Danger%20-%20BRRip/A%20Date%20with%20Danger%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13426','Img':null,LSize:'LR 100.77 MB',HSize:'HD 137.67 MB'},{Tit:' Anything for Jackson ',Des:' A bereaved Satanist couple kidnap a pregnant woman so they can use an ancient spellbook to put their dead grandsons spirit into her unborn child but end up summoning more than they bargained for.',Length:' 1:37 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Anything%20for%20Jackson%20-%20BRRip/Anything%20for%20Jackson%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Anything%20for%20Jackson%20-%20BRRip/Anything%20for%20Jackson%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13424','Img':null,LSize:'LR 80.88 MB',HSize:'HD 127.25 MB'},{Tit:' America - The Motion Picture ',Des:' A chainsaw-wielding George Washington teams with beer-loving bro Sam Adams to take down the Brits in a tongue-in-cheek riff on the American Revolution.',Length:' 1:38 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/America%20-%20The%20Motion%20Picture%20-%20BRRip/America%20-%20The%20Motion%20Picture%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/America%20-%20The%20Motion%20Picture%20-%20BRRip/America%20-%20The%20Motion%20Picture%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13408','Img':null,LSize:'LR 181.47 MB',HSize:'HD 256.15 MB'},{Tit:' A Love to Remember ',Des:' Tenley, a horticulturist, works up the courage to meet her online crush, Jared. Tenley gets mistaken for his wife and is forced to keep the lie up with Jareds family and his charming best friend, Everett, in order to save their company.',Length:' 1:25 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Love%20to%20Remember%20-%20BRRip/A%20Love%20to%20Remember%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Love%20to%20Remember%20-%20BRRip/A%20Love%20to%20Remember%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13405','Img':null,LSize:'LR 117.53 MB',HSize:'HD 181.52 MB'},{Tit:' A Quiet Place Part II ',Des:' Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Quiet%20Place%20Part%20II%20-%20BRRip/A%20Quiet%20Place%20Part%20II%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Quiet%20Place%20Part%20II%20-%20BRRip/A%20Quiet%20Place%20Part%20II%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13401','Img':null,LSize:'LR 161.5 MB',HSize:'HD 236.66 MB'},{Tit:' Awake ',Des:' After a devastating global event wipes out all electronics and eliminated peoples ability to sleep, a former soldier may have found a solution with her daughter.',Length:' 1:36 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Awake%20-%20BRRip/Awake%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Awake%20-%20BRRip/Awake%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13351','Img':null,LSize:'LR 103.11 MB',HSize:'HD 166.21 MB'},{Tit:' Army of the Dead ',Des:' Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.',Length:' 2:22 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Army%20of%20the%20Dead%20-%20BRRip/Army%20of%20the%20Dead%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Army%20of%20the%20Dead%20-%20BRRip/Army%20of%20the%20Dead%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13301','Img':null,LSize:'LR 208.45 MB',HSize:'HD 293.65 MB'},{Tit:' Arlo the Alligator Boy ',Des:' A young humanoid alligator travels to the big city in hopes of reuniting with his estranged father, meeting a colorful cast of characters along the way.',Length:' 1:33 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Arlo%20the%20Alligator%20Boy%20-%20BRRip/Arlo%20the%20Alligator%20Boy%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Arlo%20the%20Alligator%20Boy%20-%20BRRip/Arlo%20the%20Alligator%20Boy%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13204','Img':null,LSize:'LR 141.64 MB',HSize:'HD 193.28 MB'},{Tit:' A Week Away ',Des:' Nowhere left to go, Will Hawkins finds himself at camp for the first time. His instinct is to run, but he finds a friend, a father figure and even a girl who awakens his heart. Most of all, he finally finds a home.',Length:' 1:38 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Week%20Away%20-%20BRRip/A%20Week%20Away%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Week%20Away%20-%20BRRip/A%20Week%20Away%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13141','Img':null,LSize:'LR 209.89 MB',HSize:'HD 309.09 MB'},{Tit:' Adverse ',Des:' A rideshare driver discovers that his sister is in debt to a dangerous crime syndicate.',Length:' 1:34 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Adverse%20-%20BRRip/Adverse%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Adverse%20-%20BRRip/Adverse%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13071','Img':null,LSize:'LR 89.18 MB',HSize:'HD 128.32 MB'},{Tit:' All My Life ',Des:' A couples wedding plans are thrown off course when the groom is diagnosed with liver cancer.',Length:' 1:31 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/All%20My%20Life%20-%20BRRip/All%20My%20Life%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/All%20My%20Life%20-%20BRRip/All%20My%20Life%20-%20BRRip%20(Mp4Mania).mp4',Lid:'13037','Img':null,LSize:'LR 145.83 MB',HSize:'HD 205.92 MB'},{Tit:' A Nice Girl Like You ',Des:' After being accused of being too inhibited by her ex-boyfriend, a violinist creates a rather wild to-do list that sends her on a whirlwind journey of self-discovery.',Length:' 1:34 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Nice%20Girl%20Like%20You%20-%20BRRip/A%20Nice%20Girl%20Like%20You%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Nice%20Girl%20Like%20You%20-%20BRRip/A%20Nice%20Girl%20Like%20You%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12948','Img':null,LSize:'LR 142.13 MB',HSize:'HD 202.25 MB'},{Tit:' American Dream ',Des:' Entrepreneurs Scott and Nicky are desperate for cash to finish their construction project. They turn to Russian mobster Yuri, but after refusing the funding he offered them, Yuri gets revenge by trying to take over their project.',Length:' 1:23 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/American%20Dream%20-%20BRRip/American%20Dream%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/American%20Dream%20-%20BRRip/American%20Dream%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12866','Img':null,LSize:'LR 124.82 MB',HSize:'HD 174.91 MB'},{Tit:' Another Round ',Des:' Four friends, all high school teachers, test a theory that they will improve their lives by maintaining a constant level of alcohol in their blood.',Length:' 1:56 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Another%20Round%20-%20BRRip/Another%20Round%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Another%20Round%20-%20BRRip/Another%20Round%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12784','Img':null,LSize:'LR 162.08 MB',HSize:'HD 224.73 MB'},{Tit:' Alabama Snake ',Des:' Explores the story of a Pentecostal minister, accused of attempting to murder his wife with a rattlesnake. Based on true events!',Length:' 1:25 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Alabama%20Snake%20-%20BRRip/Alabama%20Snake%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Alabama%20Snake%20-%20BRRip/Alabama%20Snake%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12760','Img':null,LSize:'LR 106.12 MB',HSize:'HD 149.11 MB'},{Tit:' Ammonite ',Des:' 1840s England, acclaimed but overlooked fossil hunter Mary Anning and a young woman sent to convalesce by the sea develop an intense relationship, altering both of their lives forever.',Length:' 1:58 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Ammonite%20-%20BRRip/Ammonite%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Ammonite%20-%20BRRip/Ammonite%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12730','Img':null,LSize:'LR 130.21 MB',HSize:'HD 176.87 MB'},{Tit:' Always and 4Ever ',Des:' After a tragedy reunites Nicole with her childhood friends, they each find themselves in danger, targets of a deranged stalker. Nicole knows this cant be a coincidence. The secrets of their past are coming back to haunt them.',Length:' 1:38 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Always%20and%204Ever%20-%20BRRip/Always%20and%204Ever%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Always%20and%204Ever%20-%20BRRip/Always%20and%204Ever%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12669','Img':null,LSize:'LR 140.02 MB',HSize:'HD 191.98 MB'},{Tit:' After We Collided ',Des:' Based on the 2014 romance novel of the same name, this follows the love life of two young adults.',Length:' 1:45 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/After%20We%20Collided%20-%20BRRip/After%20We%20Collided%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/After%20We%20Collided%20-%20BRRip/After%20We%20Collided%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12531','Img':null,LSize:'LR 155.45 MB',HSize:'HD 217.42 MB'},{Tit:' Agatha and the Midnight Murders ',Des:' As bombs fall on London, writer Agatha Christie decides it is time to kill off her most famous creation.',Length:' 1:31 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip/Agatha%20and%20the%20Midnight%20Murders%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12509','Img':null,LSize:'LR 87.41 MB',HSize:'HD 109.92 MB'},{Tit:' A Babysitters Guide to Monster Hunting ',Des:' A babysitter embarks on a mission to save a child whos been abducted by monsters.',Length:' 1:38 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip/A%20Babysitters%20Guide%20to%20Monster%20Hunting%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12496','Img':null,LSize:'LR 132.39 MB',HSize:'HD 189.5 MB'},{Tit:' A Call to Spy ',Des:' In the beginning of WWII, with Britain becoming desperate, Churchill orders his new spy agency - SOE - to recruit and train women as spies.',Length:' 2:04 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Call%20to%20Spy%20-%20BRRip/A%20Call%20to%20Spy%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Call%20to%20Spy%20-%20BRRip/A%20Call%20to%20Spy%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12429','Img':null,LSize:'LR 149.09 MB',HSize:'HD 198.29 MB'},{Tit:' American Pie Presents - Girls Rules ',Des:' Its Senior year at East Great Falls. Annie, Kayla, Michelle, and Stephanie decide to harness their girl power and band together to get what they want their last year of high school.',Length:' 1:35 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip/American%20Pie%20Presents%20-%20Girls%20Rules%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12419','Img':null,LSize:'LR 172.75 MB',HSize:'HD 245.67 MB'},{Tit:' Antebellum ',Des:' Successful author Veronica Henley finds herself trapped in a horrifying reality and must uncover the mind-bending mystery before its too late.',Length:' 1:45 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Antebellum%20-%20BRRip/Antebellum%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Antebellum%20-%20BRRip/Antebellum%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12378','Img':null,LSize:'LR 143.31 MB',HSize:'HD 201.66 MB'},{Tit:' Anthony ',Des:' In July 2005, black teenager Anthony Walker was murdered by two white men in an unprovoked racist attack in a Liverpool park. He was just 18 years old. This film tells the story of how this talented young mans life might have turned out.',Length:' 1:24 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Anthony%20-%20BRRip/Anthony%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Anthony%20-%20BRRip/Anthony%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12343','Img':null,LSize:'LR 120.32 MB',HSize:'HD 168.62 MB'},{Tit:' All Together Now ',Des:' An optimistic high schooler with musical aspirations must learn to accept help from her friends to overcome her personal hardships and fulfill her dreams.',Length:' 1:32 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/All%20Together%20Now%20-%20BRRip/All%20Together%20Now%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/All%20Together%20Now%20-%20BRRip/All%20Together%20Now%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12308','Img':null,LSize:'LR 116.63 MB',HSize:'HD 157.42 MB'},{Tit:' Ava ',Des:' Ava is a deadly assassin who works for a black ops organization, traveling the globe specializing in high profile hits. When a job goes dangerously wrong she is forced to fight for her own survival.',Length:' 1:37 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Ava%20-%20BRRip/Ava%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Ava%20-%20BRRip/Ava%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12277','Img':null,LSize:'LR 138.25 MB',HSize:'HD 193.67 MB'},{Tit:' An American Pickle ',Des:' An immigrant worker at a pickle factory is accidentally preserved for 100 years and wakes up in modern day Brooklyn.',Length:' 1:26 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/An%20American%20Pickle%20-%20BRRip/An%20American%20Pickle%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/An%20American%20Pickle%20-%20BRRip/An%20American%20Pickle%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12224','Img':null,LSize:'LR 124.87 MB',HSize:'HD 173.37 MB'},{Tit:' Around the Sun ',Des:' Touring a repossessed chateau, a film location scout falls for its flirtatious representative, who recounts the story of an influential book written there. But is their connection for real, or just a projection of the books characters?',Length:' 1:18 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Around%20the%20Sun%20-%20BRRip/Around%20the%20Sun%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Around%20the%20Sun%20-%20BRRip/Around%20the%20Sun%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12213','Img':null,LSize:'LR 89.86 MB',HSize:'HD 136.44 MB'},{Tit:' American Wisper ',Des:' In June 2016, a loving family was found shot to death at their suburban home in Northern New Jersey, and discovered by father and husband Josiah Wisper - a brash businessman who owned bars, restaurants and real estate in Harlem, New York.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/American%20Wisper%20-%20BRRip/American%20Wisper%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/American%20Wisper%20-%20BRRip/American%20Wisper%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12185','Img':null,LSize:'LR 123.79 MB',HSize:'HD 172.59 MB'},{Tit:' Amulet ',Des:' An ex-soldier, living homeless in London, is offered a place to stay at a decaying house inhabited by a young woman and her dying mother. As he starts to fall for her, he cannot ignore his suspicion that something sinister is going on.',Length:' 1:40 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Amulet%20-%20BRRip/Amulet%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Amulet%20-%20BRRip/Amulet%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12173','Img':null,LSize:'LR 104.89 MB',HSize:'HD 261.43 MB'},{Tit:' Arthur and Merlin - Knights of Camelot ',Des:' A much older King Arthur returns home after fighting the Roman Empire. His illegitimate son has corrupted the throne of Camelot. Now King Arthur must reunite with the wizard Merlin and the Knights of the Round Table and fight to get back his crown.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip/Arthur%20and%20Merlin%20-%20Knights%20of%20Camelot%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12148','Img':null,LSize:'LR 101.06 MB',HSize:'HD 136.58 MB'},{Tit:' Archive ',Des:' 2038: George Almore is working on a true human-equivalent AI. His latest prototype is almost ready. This sensitive phase is also the riskiest. Especially as he has a goal that must be hidden at all costs: being reunited with his dead wife.',Length:' 1:49 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Archive%20-%20BRRip/Archive%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Archive%20-%20BRRip/Archive%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12139','Img':null,LSize:'LR 143.2 MB',HSize:'HD 200.62 MB'},{Tit:' Above Suspicion ',Des:' The story that lead to the first conviction for murder of an FBI agent.',Length:' 1:44 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Above%20Suspicion%20-%20BRRip/Above%20Suspicion%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Above%20Suspicion%20-%20BRRip/Above%20Suspicion%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12126','Img':null,LSize:'LR 130.85 MB',HSize:'HD 180.92 MB'},{Tit:' Avengement ',Des:' After years of assaults on him in prison, Cain escapes for avengement on those responsible.',Length:' 1:30 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Avengement%20-%20BRRip/Avengement%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Avengement%20-%20BRRip/Avengement%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12102','Img':null,LSize:'LR 108.56 MB',HSize:'HD 165 MB'},{Tit:' A Midsummer Nights Dream ',Des:' Young lovers, a troupe of actors, and fairies have romantic encounters in the forest on summers night.',Length:' 2:40 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Midsummer%20Nights%20Dream%20-%20BRRip/A%20Midsummer%20Nights%20Dream%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Midsummer%20Nights%20Dream%20-%20BRRip/A%20Midsummer%20Nights%20Dream%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12095','Img':null,LSize:'LR 215.58 MB',HSize:'HD 297.64 MB'},{Tit:' Anna 2 ',Des:' Starring Justin Duncan, Gerald Crum, Mercedes Peterson and John Charles Dickson. The Stars of two competing and colliding paranormal television shows converge on an abandoned haunted',Length:' 1:37 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Anna%202%20-%20BRRip/Anna%202%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Anna%202%20-%20BRRip/Anna%202%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12093','Img':null,LSize:'LR 112.5 MB',HSize:'HD 152.06 MB'},{Tit:' Athlete A ',Des:' Follow the Indianapolis Star reporters that broke the story about USA Gymnastics doctor Larry Nassars abuse and hear from gymnasts like Maggie Nichols.',Length:' 1:43 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Athlete%20A%20-%20BRRip/Athlete%20A%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Athlete%20A%20-%20BRRip/Athlete%20A%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12088','Img':null,LSize:'LR 158.05 MB',HSize:'HD 223.44 MB'},{Tit:' Artemis Fowl ',Des:' Artemis Fowl, a young criminal prodigy, hunts down a secret society of fairies to find his missing father.',Length:' 1:35 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Artemis%20Fowl%20-%20BRRip/Artemis%20Fowl%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Artemis%20Fowl%20-%20BRRip/Artemis%20Fowl%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12057','Img':null,LSize:'LR 161.75 MB',HSize:'HD 236.59 MB'},{Tit:' Acrylic ',Des:' A colorful neighborhood salon is threatened by a new addition. The pot is stirred by a local magazine competition and a long standing rivalry. Which salon has what it takes to win the grand prize?',Length:' 1:18 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Acrylic%20-%20BRRip/Acrylic%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Acrylic%20-%20BRRip/Acrylic%20-%20BRRip%20(Mp4Mania).mp4',Lid:'12019','Img':null,LSize:'LR 102.94 MB',HSize:'HD 158.87 MB'},{Tit:' Adam ',Des:' A hard-living salesman becomes a quadriplegic after an accident.',Length:' 1:40 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Adam%20-%20BRRip/Adam%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Adam%20-%20BRRip/Adam%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11985','Img':null,LSize:'LR 123.13 MB',HSize:'HD 187.32 MB'},{Tit:' All Day and a Night ',Des:' A young man who committed a homicide deals with the repercussions of his action.',Length:' 2:01 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/All%20Day%20and%20a%20Night%20-%20BRRip/All%20Day%20and%20a%20Night%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/All%20Day%20and%20a%20Night%20-%20BRRip/All%20Day%20and%20a%20Night%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11949','Img':null,LSize:'LR 123.2 MB',HSize:'HD 177.97 MB'},{Tit:' Arkansas ',Des:' Kyle and Swin live by the orders of an Arkansas-based drug kingpin named Frog, whom theyve never met. But when a deal goes horribly wrong, the consequences are deadly.',Length:' 1:57 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Arkansas%20-%20BRRip/Arkansas%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Arkansas%20-%20BRRip/Arkansas%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11924','Img':null,LSize:'LR 106.26 MB',HSize:'HD 149.32 MB'},{Tit:' Adults in the Room ',Des:' Greece in 2015: the economy is in tatters and the country is on the verge of bankruptcy. A new government rebels against the EUs iron-fisted rule and inspires millions of Europeans. Based on the political memoirs of Yanis Varoufakis.',Length:' 2:07 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Adults%20in%20the%20Room%20-%20BRRip/Adults%20in%20the%20Room%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Adults%20in%20the%20Room%20-%20BRRip/Adults%20in%20the%20Room%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11764','Img':null,LSize:'LR 152.49 MB',HSize:'HD 226.48 MB'},{Tit:' A Hidden Life ',Des:' The Austrian Franz Jagerstatter, a conscientious objector, refuses to fight for the Nazis in World War II.',Length:' 2:54 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Hidden%20Life%20-%20BRRip/A%20Hidden%20Life%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Hidden%20Life%20-%20BRRip/A%20Hidden%20Life%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11741','Img':null,LSize:'LR 228 MB',HSize:'HD 368.4 MB'},{Tit:' All the Bright Places ',Des:' The story of Violet and Theodore, who meet and change each others lives forever. As they struggle with the emotional and physical scars of their past, they discover that even the smallest places and moments can mean something.',Length:' 1:49 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/All%20the%20Bright%20Places%20-%20BRRip/All%20the%20Bright%20Places%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/All%20the%20Bright%20Places%20-%20BRRip/All%20the%20Bright%20Places%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11727','Img':null,LSize:'LR 124.71 MB',HSize:'HD 190.84 MB'},{Tit:' A Beautiful Day in the Neighbourhood ',Des:' Based on the true story of a real-life friendship between Fred Rogers and journalist Tom Junod.',Length:' 1:49 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip/A%20Beautiful%20Day%20in%20the%20Neighbourhood%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11629','Img':null,LSize:'LR 116.53 MB',HSize:'HD 169.43 MB'},{Tit:' A Shaun the Sheep Movie - Farmageddon ',Des:' When an alien with amazing powers crash-lands near Mossy Bottom Farm, Shaun the Sheep goes on a mission to shepherd the intergalactic visitor home before a sinister organization can capture her.',Length:' 1:27 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip/A%20Shaun%20the%20Sheep%20Movie%20-%20Farmageddon%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11614','Img':null,LSize:'LR 94.77 MB',HSize:'HD 138.75 MB'},{Tit:' A Serial Killers Guide to Life ',Des:' A self-help addict unwittingly finds herself on a killing spree with her unhinged life coach.',Length:' 1:21 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip/A%20Serial%20Killers%20Guide%20to%20Life%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11525','Img':null,LSize:'LR 101.39 MB',HSize:'HD 155.6 MB'},{Tit:' Abigail ',Des:' A young girl Abigail lives in a city whose borders were closed many years ago because of an epidemic of a mysterious disease. Abbys father was one of the sick - and he was taken when she was six years old. Going against the authorities to find her father, Abby learns that her city is actually full of magic. And she discovers in herself extraordinary magical abilities.',Length:' 1:46 Hrs',HLink:'http://hd2.dlmania.com/Hollywood/Abigail%20-%20BRRip/Abigail%20-%20BRRip%20HD%20(HDMp4Mania).mp4',LLink:'https://mp41.maniadl.com/Hollywood/Abigail%20-%20BRRip/Abigail%20-%20BRRip%20(Mp4Mania).mp4',Lid:'11440','Img':null,LSize:'LR 118.19 MB',HSize:'HD 180.94 MB'}];

function get(url){
    showAlert(url.id);
}
 var movIndex=0;
 
 function ini( tit, des,img,len,hre='tttt',lre, hsi,lsi,Lid )
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
    
    
    
    
    var temp = '<div id="fr" class="frame">'
        +'<div id="tit" style="font-size:5vh; margin: 20px"> '+tit+'</div>'
 +'<img src='+img+ ' style="height: 50vh; width:38vh;"/>'
 +'<div id="len"style="font-size:4vh"> Duration : '+len+ '</div>'
      +'<div id="des"style="font-size: 3vh; margin-left: 20px; margin-right: 20px"> DESCRIPTION :'+ des +' </div>'
     
  +'<button class="bt3" style="color: white;background: #2e2e2e;border:1px solid white;" onclick="showmovie(this);" id='+hre+' name= '+Lid+'>High resolution ('+hsi+')</button>'
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
   ini(lis[i].Tit,lis[i].Des, rep(lis[i].HLink)    ,lis[i].Length,lis[i].HLink,lis[i].LLink,lis[i].HSize,lis[i].LSize,lis[i].Lid);
    }
    }
     
    
}

function rep(str)
{ 
  var a= "https://o2videos.com/screenshots/";
  var b= "http://hd2.dlmania.com/Hollywood/";

    let s= str.replace(b,a);
   s = s.slice(0,s.lastIndexOf("/")) +".jpg";
  navigator.clipboard.writeText(s);
                    
    return s;
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



       
          