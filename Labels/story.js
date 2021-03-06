/*

If you read the comments in this source code, you will understand the basic idea of how to write a game.

I'll try to keep the comments as simple and clear as possible. If you are not already familiar with basic programming and html coding concepts, it may be helpful to google up some tutorials on the subject.

If you're already pro, forgive me if I comment on stuff that's obvious.

Have fun making your game!
 
*/


/////////////////////////////////////
////Game Config/////////////////////
////////////////////////////////////

function config() {
	gameTitle = "Labels";
	gameAuthor = "Colleen Potvin";
	metaContent = "{About|about} {Help|help}"; //goes at menu at bottom
	inventorySystem = 1; //If you don't want an inventory system in your game, set inventorySystem = 0;
	
	waitSystem = 0; //If you want a "wait" button to allow time to pass, set waitSystem = 1; If the wait system is off, it can be activated on a specific node by writing wait=1; Alternatively, if the wait system is turned on, it can be deactivated on a specific node by writing wait=0;
	
	debugMode = 0; //Right now the debugger needs php. It's hidden with css in style.css using display: none.
	
}
 
/////////////////////////////////////
////Variables////////////////////////
////////////////////////////////////

/*
Any variables that need to be stored in save games must be put into the userVariables array below. No empty spaces in the variable names! 

*/

userVariables = new Array (

    'labelNew',
    'labelCurrent',
    'label_array'
);

//By default, all variables in the array start off set as "0" or "false"





/*
 
node: A node is a chunk of descriptive text that the engine outputs. A situation. Or kind of like a page in a choose your own adventure book. 

By default the player starts at the "start" node.

In this demo, these are all nodes:
blueRoom
redRoom
chair
lightSwitch







/////////////////////////////////////
////Node settings reference:////////
////////////////////////////////////

root = 1; //make node a root location. When user clicks "back" they are taken back to the root location.

back = 0; turn off "back" button

wait = 0; turn off "wait" button. Only in that particular node. For turning it completely off throughout the entire game, use waitSystem = 0;

use = 1; activate "use" inventory mode when in a sub-node. For using objects to interact with other objects.

links = 0; deactivate all links in description but keep links within the event box active. Used when an event causes something to happen and you still want to show the description of room, but not have people interact with it. For example, if a timed event occurs, like the "lights go off", you 

inv = 0; hide inventory and wait button

*/





///////////////////////////////////////////////
//////////////Nodes////////////////////////////
///////////////////////////////////////////////

function nodes() { //Do not remove this line
//console.log(f['node'].substring(0, 6))
    if (f['node'].substring(0, 6) == "label-") {
        i = parseInt(f['node'].substring(6), 10);
        console.log(i)
        label = f['label_array'][i];
        d = "<h2>" + label[0] + "</h2>";
        root = 1;
    if (label[5] == 0){
    d+= "<p>You haven't talked about how this label makes you feel. {Change this?|mood-"+ i + "}</p>";  
    }
    if (label[5] == 'Like'){
    d+= "<p>You said that you generally enjoy this label's way of describing you. {Change this?|mood-"+ i + "}</p>";  
    }
    if (label[5] == 'Dislike'){
    d+= "<p>You think this label is unfair, inaccurate, or painful. {Change this?|mood-"+ i + "}</p>";  
    }
    if (label[5] == 'Uncaring'){
    d+= "<p>You recognize this label applies to you, but that doesn't make you feel any better or worse. {Change this?|mood-"+ i + "}</p>";  
    }
    if (label[5] == 'Important'){
    d+= "<p>This label is an essential part of how you (and possibly others) percieve yourself. {Change this?|mood-"+ i + "}</p>";  
    }
        if (label[1] == 'Recently'){
    d+= "<p>You've felt this recently. {Change this?|recency-"+ i + "}</p>";            
    }
        if (label[1] == '0'){
    d+= "<p>You haven't added information about how long you've felt this way. {Change this?|recency-"+ i + "}</p>";            
    }
        if (label[1] == 'Yesterday'){
        d+= "<p>You noticed this just yesterday. {Change this?|recency-"+ i + "}</p>";            
    }
        if (label[1] == 'Months'){
        d+= "<p>You noticed this a few months ago. {Change this?|recency-"+ i + "}</p>";            
    }
    if (label[1] == 'Years'){
        d+= "<p>It's been years since you realized. {Change this?|recency-"+ i + "}</p>";            
    }
    if (label[1] == 'Life'){
        d+= "<p>You've felt this all your life. {Change this?|recency-"+ i + "}</p>";            
    }
    if (label[6] == 0){
    d+= "<p>You haven't added information about who gave you this label. {Change this?|who-"+ i + "}</p>";            
    }
    if (label[6] == 'Myself'){
    d+= "<p>You gave yourself this label consciously. {Change this?|who-"+ i + "}</p>";            
    }
    if (label[6] == 'Found'){
    d+= "<p>You came across this label and thought it fit you well. {Change this?|who-"+ i + "}</p>";            
    }
    if (label[6] == 'Others'){
    d+= "<p>Somebody, or some group, gave you this label regardless of whether or not you want it. {Change this?|who-"+ i + "}</p>";            
    }
    if (label[6] == 'Unsure'){
    d+= "<p>You can't really recall where this label came from. {Change this?|who-"+ i + "}</p>";            
    }

        if (label[2] == '0'){
        d+= "<p>You haven't added information about how you feel about community. {Change this?|community-"+ i + "}</p>"; 
    }
        if (label[2] == 'No'){
        d+= "<p>You haven't found a community. {Change this?|community-"+ i + "}</p>";            
    }
         if (label[2] == 'Yes'){
         d+= "<p>You've found a community. {Change this?|community-"+ i + "}</p>";            
    }
         if (label[2] == 'Silent Left'){
         d+= "<p>You've left a community. {Change this?|community-"+ i + "}</p>";            
    }
    if (label[2] == 'Unwelcome Left'){
         d+= "<p>You've felt compelled to leave a community. {Change this?|community-"+ i + "}</p>";            
    }
    if (label[2] == 'Outgrown Left'){
         d+= "<p>You've outgrown a previous community. {Change this?|community-"+ i + "}</p>";            
    }
    if (label[3] == 0){
         d+= "<p>You haven't mentioned how you feel about this. {Change this?|hopes-"+ i + "}</p>";            
    }
    if (label[3] == "Change"){
        d+= "<p>You want to change this to be something better. {Change this?|hopes-"+ i + "}</p>";        
    }   
    if (label[3] == "Grow"){
        d+= "<p>You want to embrace this label more strongly and make it grow as a part of you. {Change this?|hopes-"+ i + "}</p>"; 
    } 
    if (label[3] == "Fight"){
        d+= "<p>You want to fight back against this label and the feelings it pushes upon you. {Change this?|hopes-"+ i + "}</p>"; 
    }      
    if (label[3] == "Leave"){
        d+= "<p>You want to leave this label behind. {Change this?|hopes-"+ i + "}</p>";        
    }   
    if (label[4] == 0){
    d+= "<p>You haven't said what the next step is. {Pick something to do?|change-"+ i + "}</p>";
    }
    if (label[4] == "Learn"){
    d+= "<p>You want to learn more about your label, do research and discover how it relates to you (and perhaps how it doesn't). {Choose a new focus?|change-"+ i + "}</p>";
    }
    if (label[4] == "Create"){
    d+= "<p>You think pouring the thoughts you have into something creative will help. {Choose a new focus?|change-"+ i + "}</p>";
    }
        if (label[4] == "Relax"){
    d+= "<p>This label is causing you some stress and you need to relax and let that stress dissipate. {Choose a new focus?|change-"+ i + "}</p>";
    }
    if (label[4] == "Leave"){
    d+= "<p>If you're ready to leave this label behind, {remove it from your being.|leave-"+ i +"}</p>";
    }
        return;
    }
    
    if (f['node'].substring(0, 8) == "recency-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>Tell me how long you've felt that this label has described you.</p>"; 
        
        e += "<p>{Yesterday.|yestrec-"+i+"}</p>"; 
        e += "<p>{Recently.|Recerec-"+i+"}</p>";
        e += "<p>{A few months.|monthrec-"+i+"}</p>";
        e += "<p>{A few years.|yearrec-"+i+"}</p>";
        e += "<p>{All my life.|liferec-"+i+"}</p>";
    
        return;
    }
    if (f['node'].substring(0, 8) == "yestrec-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>Yesterday, understood. I hope this is going well for you.</p>"; 
        
        label[1] = 'Yesterday';    
    
        return;
    }

    if (f['node'].substring(0, 8) == "Recerec-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>Recently, understood. Do you know what you've learned so far?</p>"; 
        
        label[1] = 'Recently';    
    
        return;
    }

    if (f['node'].substring(0, 9) == "monthrec-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>A few months, understood.</p>"; 
        
        label[1] = 'Months';    
    
        return;
    }

    if (f['node'].substring(0, 8) == "yearrec-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>Years, understood. I hope this is going well for you.</p>"; 
        
        label[1] = 'Years';    
    
        return;
    }

    if (f['node'].substring(0, 8) == "liferec-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>Your entire life, understood. I hope this is going well for you.</p>"; 
        
        label[1] = 'Life';    
    
        return;
    }

    if (f['node'].substring(0, 10) == "community-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>What's the community situation like?.</p>"; 
        
        e += "<p>{I don't have one, but I want one.|nocomm-"+i+"}</p>"; 
        e += "<p>{I have one.|yescomm-"+i+"}</p>";
        e += "<p>{I left mine.|leftcomm-"+i+"}</p>";
        
        return;
    }

    if (f['node'].substring(0, 7) == "nocomm-") {
        i = parseInt(f['node'].substring(7), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>I hope you find one soon.</p>";
        label[2] = 'No';
        return;
    }

    if (f['node'].substring(0, 8) == "yescomm-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>How do you feel about it?.</p>";
        label[2] = 'Yes';
        return;
    }

    if (f['node'].substring(0, 9) == "leftcomm-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Why did you leave?.</p>";

        e += "<p>{I don't want to say.|sleftcomm-"+i+"}</p>"; 
        e += "<p>{I didn't feel welcome.|uleftcomm-"+i+"}</p>";
        e += "<p>{I outgrew it.|oleftcomm-"+i+"}</p>";
        return;
    }

    if (f['node'].substring(0, 10) == "sleftcomm-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "I <p>understand, you don't have to get into it.</p>";
        label[2] = 'Silent Left';
        return;
    }

    if (f['node'].substring(0, 10) == "uleftcomm-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>I won't ask why.</p>";
        label[2] = 'Unwelcome Left';
        return;
    }

    if (f['node'].substring(0, 10) == "oleftcomm-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>That doesn't have to be a bad thing.</p>";
        label[2] = 'Outgrown Left';
        return;
    }

    if (f['node'].substring(0, 6) == "hopes-") {
        i = parseInt(f['node'].substring(6), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>What do you hope for the future when you think about this label?</p>";

        e += "<p>{I want to leave it behind.|leavehope-"+i+"}</p>"; 
        e += "<p>{I want to change it to something better. |chanhope-"+i+"}</p>";
        e += "<p>{I want to fight against it and all I don't like about it. |fighthope-"+i+"}</p>";
        e += "<p>{I want to encourage my feelings about it and make my connection with it grow. |growhope-"+i+"}</p>";
     //e += "<p>{I outgrew it.|oleftcomm-"+i+"}</p>";
        return;
    }
    

    if (f['node'].substring(0, 10) == "leavehope-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>That is often for the best. Not everything can describe you well, and not everything ought to be a part of you. It's okay to let this go.</p>";
        label[3] = 'Leave';
        return;
    }

    if (f['node'].substring(0, 10) == "fighthope-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>If you want to fight a part of yourself, you should. But don't use it to hurt yourself in the process.</p>";
        label[3] = 'Fight';
        return;
    }

    if (f['node'].substring(0, 9) == "growhope-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Grow your connection to your label as much as you like, but don't let it consume you. Remember, you have other labels that are important to you as well.</p>";
        label[3] = 'Leave';
        return;
    }



    if (f['node'].substring(0, 9) == "chanhope-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Desiring change is important, and you can do it if you desire.</p>";
        label[3] = 'Change';
        return;
    }

    if (f['node'].substring(0, 7) == "change-") {
        i = parseInt(f['node'].substring(7), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>Where do you go from here?</p>"; 
        
        e += "<p>{I want to learn more.|lrnchange-"+i+"}</p>";
        e += "<p>{I want to use this to create something new.|subchange-"+i+"}</p>";
        e += "<p>{I want to get rid of the stress this label causes me.|strchange-"+i+"}</p>";
        e += "<p>{I want to leave it behind.|makeleave-"+i+"}</p>"; 
       
        return;
    }

    if (f['node'].substring(0, 10) == "lrnchange-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>It's good to take the time to find out more about the lenses you use to see yourself. Remember, you may discover things that you don't like, or don't match up to your experience, and that's okay.</p>";
        label[4] = 'Learn';
        return;
    }

    if (f['node'].substring(0, 10) == "subchange-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Sublimation is an excellent way to deal with something. Write it out, draw your mood, sing a song. There's a lot of things you can focus your energy to, and all those feelings and thoughts and worries you have surrounding this label are excellent sources of creativity and power.</p>";
        label[4] = 'Create';
        return;
    }

    if (f['node'].substring(0, 10) == "strchange-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>It's okay to be stressed out by something, but that doesn't mean you have to let that stress build up. Take the next chance you have to not think about anything connected to your label as much as possible, and do something simple, easy and relaxing.</p>";
        label[4] = 'Relax';
        return;
    }

    if (f['node'].substring(0, 10) == "makeleave-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>If you think it's time to do so. I hope you will move forward confidently.</p>";
        label[4] = 'Leave';
        return;
    }

    if (f['node'].substring(0, 5) == "mood-") {
        i = parseInt(f['node'].substring(5), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>How do you feel about this label?</p>"; 
        
        e += "<p>{I like it.|likemood-"+i+"}</p>"; 
        e += "<p>{Having it upsets me.|upsetmood-"+i+"}</p>";
        e += "<p>{It's just there.|ehmood-"+i+"}</p>";
        e += "<p>{It's essential to my understanding of myself.|essmood-"+i+"}</p>";
    
        return;
    }

    if (f['node'].substring(0, 9) == "likemood-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>So you like your label? That's good to hear.</p>";
        label[5] = 'Like';
        return;
    }

    if (f['node'].substring(0, 10) == "upsetmood-") {
        i = parseInt(f['node'].substring(10), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>It's fine not to want to have this label attached to you.</p>";
        label[5] = 'Dislike';
        return;
    }

    if (f['node'].substring(0, 7) == "ehmood-") {
        i = parseInt(f['node'].substring(7), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Sometimes a label is just a label.</p>";
        label[5] = 'Uncaring';
        return;
    }
    
    if (f['node'].substring(0, 8) == "essmood-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>I imagine all of us have a label or two like that.</p>";
        label[5] = 'Important';
        return;
    }

    if (f['node'].substring(0, 4) == "who-") {
        i = parseInt(f['node'].substring(4), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d+="<p>So, who assigned you this label?</p>"; 
        
        e += "<p>{I assigned it to myself, willingly.|mewho-"+i+"}</p>"; 
        e += "<p>{I found it and discovered it fit me well.|findwho-"+i+"}</p>";
        e += "<p>{Other people declared it as my descriptor, I had little to no say.|otherwho-"+i+"}</p>";
        e += "<p>{I'm not sure where the label came from.|dunnowho-"+i+"}</p>";
    
        return;
    }

    if (f['node'].substring(0, 6) == "mewho-") {
        i = parseInt(f['node'].substring(6), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>It's your label, you own it. Maybe you came up with it yourself!</p>";
        label[6]= 'Myself';
        return;
    }

    if (f['node'].substring(0, 8) == "findwho-") {
        i = parseInt(f['node'].substring(8), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>It's an amazing experience to find something concrete that you can use to understand yourself, isn't it?</p>";
        label[6] = 'Found';
        return;
    }

    if (f['node'].substring(0, 9) == "otherwho-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Not every label is your own, and not every label you can get rid of even if you want to.</p>";
        label[6] = 'Others';
        return;
    }
    
    if (f['node'].substring(0, 9) == "dunnowho-") {
        i = parseInt(f['node'].substring(9), 10);
        console.log(i)
        label = f['label_array'][i];
        //d = "label " + label[0];

        d += "<p>Sometimes that happens, but you can still work through how you feel about this label in the present.</p>";
        label[6] = 'Unsure';
        return;
    }


    if (f['node'].substring(0, 6) == "leave-") {
        i = parseInt(f['node'].substring(6), 10);
        console.log(i)
        label = f['label_array'][i];
        root = 1;
        //d = "label " + label[0];
        d+="<p>The label will be removed.</p>"; 
        
        f['label_array'].pop(label);
        
        d+= "<p>{Would you like to add a new label?|nextnode}</p>";
    
        return;
    }
	switch(f['node']) { //Do not remove this line

	
////////////////
case "start":
	
	root = 1; //make current node a physical or "root" location. Think of it as a room. When user clicks the "back" button they are taken back to the last root location. 
	
	//Within a node, the "d" variable holds all the text that you want the node to output. 
    
    f['label_array'] = []

	d = "<p>Thank you for joining. This is a little way to spend some time thinking about the labels that describe you. Maybe some of them are labels that describe something you like about yourself, or labels that mark you as a specific type of person. Maybe there are some things you feel that you've only recently discovered a name for, or lately there's been a word you've used to understand yourself, but doesn't feel quite right anymore.</p>";

    d+= "<p>This program does not save any data except to your computer. The things you type or change will not be seen by anyone by you, unless you willingly choose to show someone.";
    
    d+= "<p>To begin, click 'go on' and input your first label. You can add as many labels as you want, and you can click on a label in the menu to the left to add information to it, think about how you relate to it, and remove it from your list if you decide it no longer describes you.</p>";
    
    d+= "<p>If you wish to read this again, click 'help' in the bottom menu.</p>";
    
    d+= "<p> {Go on.|nextnode}</p>";

    //for(i = 0; i < 5; i++){
    //    d+= "<p>" + i + "</p>";
    //}

    //f['label_array'] += [[f['newLabel, "Recently", "No"]]
    
   //  for(i = 0; i < f['label_array'].length; i++){
   //     d+= "<p>" + f['label_array'][i] + "</p>";
    //    d+= "<p>" + i + "</p>";
   // }

	
	//If you want to add more text then write d+="whatever new text". For example: 
	//d+="<p>There is a {blue door|blueRoom}, a {red door|redRoom} and a {chair|chair}.</p>";

    //e="<p>{Yes.|gqYes}</p> <p>{No.|gqNo}</p>";

    //f['maxNum'] = 15

    //f['randomnumber']=Math.floor(Math.random()*f['maxNum'])

    //if (f['randomnumber'] >= 5) {
        //d+="5"
    //}
	
	
	
	/*
	 	  
	Note: javascript code CANNOT have line breaks within quotations.
	
	This code will not work:
	d="<h2>Starting Room</h2>
	<p>This is a demo blink game. You stand in a room.</p>";
	
	But you can add a "\" do indicate a new line. This works:
	d="<h2>Starting Room</h2>\
	<p>This is a demo blink game. You stand in a room.</p>";
	
	*/
	
	
	break;

case "nextnode":
    root = 1;
    d="<p>Go ahead and give me a label. Anything you think describes you. Click 'go on' to add the label to your list.</p>";

    d+="<p>" + '<input type="text" name="labelNew" id="labelNew" value="">' + "</p>";
    $('body').delegate('#labelNew', 'change', function () {
      labelNew = $(this).val();
    });
    d+= "<p> {Go on.|madeLabel}</p>";
   
break;

case "madeLabel":
    d= "<p>You've added '"+ labelNew +"'to your list of labels. Click on it to add information, or click back to add a new label.</p>";
    f['label_array'].push([labelNew, 0, 0, 0, 0, 0, 0, 0]);
break;

case "gqNo":
    d="<p>Got it. How would you prefer to label your gender?</p>";

    e="<p>{Genderfluid.|gfYes}</p> <p>{Cisgender.|cisYes}</p> <p>{Transgender.|transYes}</p> <p>{Confused.|confusedYes}</p>";
break;	



///////////////
case "chair":
	//Notice this node does not have "root=1" like the starting room or the blue room, so a "back" button appears.
	d="<p>A wooden chair.</p>";
	
	break;

///////////////
case "blueRoom":
	root=1; //physical location
	
	d="<h2>Blue Room</h2>\
	<p>The floor, ceiling and walls are all blue. A door leads back to the {start room|start}</p><p>There's a {light switch|lightSwitch} on the wall.</p>";
	
	if (f['blueRoomDark']) {
		d+="<p>The room is dark.</p>"; 
		
	} else {
		d+="<p>The room is brightly lit.</p>";
		
	} 	
	
	break;

	


/////////////////
case "lightSwitch":
	d="<p>You flick the switch ";
	
	if (f['blueRoomDark']) { //if the blue room is dark, do this:
		d+="on";
		f['blueRoomDark']=0 //Turn the light off
		
	} else { 
		d+="off";
		f['blueRoomDark']=1 //Turn the light on
	}
	
	d+="</p>"
	
	break;

/*
  
a note on variables:

All variables that go into the save game need to be put into the f[] array.
  
It is best to use binary states, 1=true 0=false, or single letters ("a", "b", "c") for all game variables that need to be saved. However longer string variables can be still used keeping in mind that these variables cannot have empty spaces in them, or else the save game system breaks. Use underscore if you really need to have a longer variable name with spaces. Eg: "john_doe".
	
*/
	
/////////////

case "redRoom":
	root=1;
	d="<h2>Red Room</h2><p>The room is red. A door leads back to the {start room|start}.</p>"
	
	if (!f['haveBall']) { // For newbies: "!" means not. So this is saying "if not have ball", then print this:
		d+="<p>A {ball|takeBall} rests on the ground.</p>"
	}
	
	//This is how to make an "event" or something that displays in special formatting below the main room description. Good for displaying text that is different from the standard room description.
	if (!f['haveBall']) {
		e="<p>You feel an urge to pick up the ball</p>"; 
	}
	break;

	
	
/////////////
case "takeBall":
	d+="<p>You pick up the ball.</p>"
	f['haveBall']=1; //have ball set to true
	
	break;
	

/////////////////
case "help":
	metaNode=1; //A meta node means that this node is for informational purposes. Time (the move counter) will not increase if the user goes to a metaNode.
	
	d="<h2>Help</h2>";

    d+= "<p>Thank you for joining. This is a little way to spend some time thinking about the labels that describe you. Maybe some of them are labels that describe something you like about yourself, or labels that mark you as a specific type of person. Maybe there are some things you feel that you've only recently discovered a name for, or lately there's been a word you've used to understand yourself, but doesn't feel quite right anymore.</p>";

    d+= "<p>This program does not save any data except to your computer. The things you type or change will not be seen by anyone by you, unless you willingly choose to show someone.";
    
    d+= "<p>To create a new label, click 'New Label' in the menu to the left. You can add as many labels as you want, and you can click on a label in the menu to the left to add information to it, think about how you relate to it, and remove it from your list if you decide it no longer describes you.</p>";
    
	break;


		
/////////
case "about":
	metaNode=1;
	
	d+="<h2>About</h2><p>Created by Colleen Potvin for TransH4CK Chicago. Lots of Javascript help from Peter Harkins.</p>";
	
	break;


///////
case "iBall":
	d+="<p>just an ordinary ball.</p>";
	
	break;

case "labelOverview":
    d+= "<ul>"
    
    for(i = 0; i < f['label_array'].length; i++){
        d+="<li>" + f['label_array'][i][0]+  f['label_array'][i][1] + "</li>";
    }
    d+="</ul>"
    d+= "The label overview goes here.";
    break;




///////In case you link to a nonexistent node, then this error message will appear
default:
	d = "Error";
	break;
	}
	
	
} //////do not remove this bracket




/////////////////////////////////////
////Inventory////////////////////////
////////////////////////////////////

function includeInv() {


	invText="<div id='objects'><ul>"; //do not erase

	//put all inventory items that can potentially be picked up into this area. Put each item into a <li></li> tag.
	
	if (f['haveBall']) {
		invText+="<li>{Ball|iBall}</li>";
	}

        invText+="<li>{New Label|nextnode}</li>";

    for(i = 0; i < f['label_array'].length; i++){
        invText+="<li>{" + f['label_array'][i][0]+ "|label-" + i + "}" + "</li>";
    }
	




	invText+="</ul></div>";	//do not erase
}





/////////////////////////////////////////
//Object Interactions////////////////////
/////////////////////////////////////////

/*
  
this part is W.I.P. If you can figure it out, use it. I will document it better later.

*/

function interactions() {

	var end;
	
	if (f['giver']=='iPurse' && f['receiver']=='box1') {
		d+="Ppurse doesn't like it. Not a good use of purse.";
		end=1;
	}
	
	
	if (!end) {
		
		if(f['receiver']=="box1") {
		
				 
			switch(f['giver']) {
				case "iMenu":
				
					
					d+="<p>You request a sandwich. He nods and takes the menu.</p>";
					
	
					
				break;
			
				default:
				d+="<p>Doesn't go in box.</p> ";
				break;
				
			}
		} else if(f['receiver']=='cat') {
			
			switch(f['giver']) {
				case "invMouse":
					d+="It plays with the mouse";
				break;
			
				default:
				d+="It doesn't seem interested. Cats are that way sometimes. ";
				break;
				
			}
		} else if(f['receiver']=='start2') {
			switch(f['giver']) {
				default:
					d+="start 2 doesn't want it";
					//build("Start2 doesn't want it");
			}
		} else if(f['receiver']=='start3') {
			switch(f['giver']) {
				case "invApple":
					//noBack=1;
					d+="it eats the {apple|start} sdfdsf sdsd f dsfd sdfdsf sdsd f dsfdfsdfsfsdfs";
					break;
				
				case "invOrange":
					
					d+="IT doesT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangeT doesn't want orangen't want orange";
					break;
				
				default:
					d+="It doesn't want it";
					//for (i in fname) {
					//	build(fname[i]) + build(": ") + build(f[fname[i]]) + build("<br>");
					//}
			}
		
		}
		
	}	
}
/////end interactions
