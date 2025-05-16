var audio = new Audio('sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+910000000000'> <div class='socialItem' id='call'><img class='socialItemI' src='phone.svg'/><label class='number'>0000000000</label></div> </a> <a href='mailto:doondigangadhar30@gmail.com'> <div class='socialItem'><img class='socialItemI' src='gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/doondigangadhar30'> <div class='socialItem'><img class='socialItemI' src='github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/910000000000'> <div class='socialItem'><img class='socialItemI' src='whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/doondigangadhar30'> <div class='socialItem'><img class='socialItemI' src='telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/doondi_gangadhar_routhu'> <div class='socialItem'><img class='socialItemI' src='instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/doondi/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='pdf.png'><label>Doondi_Resume.pdf</label></div><a href='https://drive.google.com/file/d/1CufOYIiQbf03duyfAMWbaYIJAkUkvSe1/view?usp=sharing' download='Doondi_Resume.pdf'><img class='download' src='downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58307.92410290505!2d83.362019005277!3d18.099989475725756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be517fcf0885f%3A0xe85104bb5f291d8d!2sVizianagaram%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1747402557019!5m2!1sen!2sin' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>House no. 301<br>Mudidham Village<br>Vizianagaram, Andhra Pradesh, INDIA 535002</address>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Namasthey 🙏<br><br>My name is <span class='bold'><a class='alink' href='https://heartfelt-mermaid-9712ef.netlify.app/'>R Doondi Gangadhar</a>.</span><br><br>I am a Computer science student skilled in <span class='bold'>DSA and MERN Stack Web Development</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'more'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "more":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'achievements'</span> - to get my acheivevement details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage(`
    <span class='sk'>I am currently pursuing a B.Tech degree in Computer Science.<br><br>
    My skills include:<br><br>

    <span class='bold'>Web Development:</span> <br> HTML, CSS, JavaScript, React<br>
    <span class='bold'>Programming Languages:</span> <br> Python, C, Java (Basic)<br>
    <span class='bold'>Database Management:</span> <br>DBMS, MySQL<br>
    <span class='bold'>Other Skills:</span><br> Computer Fundamentals, Content Creation, Designing, Exploring New Technologies<br><br>
    `);

            break;

    case "achievements":
    sendTextMessage(`
    <span class='sk'>My Achievements:<br><br>

    <span class='bold'>GFG Avishkaar Hackathon:</span> <br> 7th Rank Holder<br>
    <span class='bold'>LeetCode Contests:</span> <br> Attended 20+ contests with 1500+ rating<br>
    <span class='bold'>HackAP Hackathon:</span> <br> Finalist at Andhra University<br>
    <span class='bold'>JNTU GV CodeQuest:</span> <br> Winner<br>
    <span class='bold'>Open Source Contributions:</span> <br> Hacktoberfest 2024 <br>
    <span class='bold'>Geeks For Geeks Students Club:</span> <br>Marketing Head<br>
    <span class='bold'>IEEE Pitch Competition:</span> <br> Winner <br><br>
    `);
    break;

        case "address":
            sendTextMessage(addressString);
            break;

        case "hi":
        case "hello":
        case "hii":
            sendTextMessage("Hi! How can I assist you?");
            break;

        case "how are you":
            sendTextMessage("I'm here and ready to help! How can I assist?");
            break;

        case "good morning":
            sendTextMessage("Good morning! Hope you have a productive day.");
            break;

        case "good afternoon":
            sendTextMessage("Good afternoon! Let me know how I can assist.");
            break;

        case "good evening":
            sendTextMessage("Good evening! What skills or details would you like to explore?");
            break;

        case "good night":
            sendTextMessage("Good night! Wishing you success and a restful night.");
            break;

        case "thank you":
            sendTextMessage("You're welcome! Let me know if you need anything else.");
            break;

        case "bye":
        case "goodbye":
            sendTextMessage("Goodbye! Take care.");
            break;

        case "clear":
            clearChat();
            break;

        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://heartfelt-mermaid-9712ef.netlify.app/'><span class='bold'>R Doondi Gangadhar</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? <br>Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/doondigangadhar30'> <div class='socialItem'><img class='socialItemI' src='github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'more' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
