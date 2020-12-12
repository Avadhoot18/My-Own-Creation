class Form {
    constructor(){
        this.name = createInput('name');
        this.email = createInput('email');
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.title = createElement('h1');
        this.register = createButton('Register');
        this.image = loadImage('ThanksgivingImage.png');
    }
    
    display(){
        this.title.html('Study for Exams, Learn for Life');
        image(this.image,displayWidth-50,0,50,50);
        this.title.position(displayWidth/2-180, 0);
        this.name.position(displayWidth/2-40, displayHeight/2-80);
        this.register.position(displayWidth/2+30, displayHeight/2);
        this.email.position(displayWidth/2-40, displayHeight/2-50);
        this.register.mousePressed(()=>{
            this.register.hide();
            this.name.hide();
            this.email.hide();
            name = this.name.value();
            email = this.email.value();
            index = index+1;
            user.updateUsercount(index);
            user.updateUser(name,email);
        
            console.log(name);
            console.log(email);
            strokeWeight(7);
            stroke(255);
            this.greeting1.html("Welcome "+ name);
            strokeWeight(7);
            stroke(255);
            this.greeting2.html("Choose your examination paper from the given list");
            this.greeting2.style.color="white";
            this.greeting1.position(displayWidth/2-80, 100);
            this.greeting2.position(displayWidth/2-260, 120);
            this.paper1 = createButton('Paper1');
            this.paper2 = createButton('Paper2');
            this.paper3 = createButton('Paper3');
            this.paper4 = createButton('Paper4');
            this.paper1.position(displayWidth/2-40, displayHeight/2);
            this.paper2.position(displayWidth/2-40,displayHeight/2+20);
            this.paper3.position(displayWidth/2-40,displayHeight/2+40);
            this.paper4.position(displayWidth/2-40,displayHeight/2+60);

            this.paper1.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();
                this.greeting1.hide();
                this.greeting2.hide();
            
                this.paper1title = createElement('h3');
                this.paper1title.html("Select your exams from the links given below"); 
                this.paper1title.position(displayWidth/2-140,displayHeight/2-260);
                this.paper1content1 = createElement('h3');
                this.paper1content1.html("https://cbseportal.com/links/Some-Wonderful-Physics-Links-For-Students-Preparing-For-AIEEE-IIT-JEE");
                this.paper1content1.position(displayWidth/2-350,displayHeight/2-160); 
                this.paper1content2 = createElement('h3');
                this.paper1content2.html("https://www.google.com");
                this.paper1content2.position(displayWidth/2-350,displayHeight/2-120);
                this.paper1content3 = createElement('h3');
                this.paper1content3.html("https://www.wikipedia.com");
                this.paper1content3.position(displayWidth/2-350,displayHeight/2-80);
                 
                this.settings.mousePressed(()=>{
                this.paper1title.hide();
                this.paper1content1.hide();
                this.paper1content2.hide();
                this.paper1content3.hide();
                this.settings.hide();
                this.profileName = createInput(name);
                this.profileName.position(displayWidth/2-40, displayHeight/2-80);
                this.profileEmail = createInput(email);
                this.profileEmail.position(displayWidth/2-40, displayHeight/2-50);
                this.save = createButton('Save');
                this.save.position(displayWidth/2+30, displayHeight/2);
                this.save.mousePressed(()=>{
                name = this.profileName.value();
                email = this.profileEmail.value();
                user.updateUser(name,email);
                this.profileName.hide();
                this.profileEmail.hide();
                this.save.hide();
            })
            })
            })
            this.paper2.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();

                var a = document.createElement('a');    
                var link = document.createTextNode("Official Website"); 
                a.appendChild(link); 
                a.title = "Official Website"; 
                a.href = "http://www.aiime.org";    
                document.body.appendChild(a);                

                //this.paper2title = createElement('h3');
                //this.paper2title.html("Click on the link below to take your exams");
                //this.paper2title.position(displayWidth/2-350,displayHeight/2-160);
                this.paper2content = createElement('h3');
                this.paper2content.html("https://cbseportal.com/links/Some-Wonderful-Chemistry-Links-For-Students-Preparing-For-AIEEE-IIT-JEE");
                this.paper2content.position(displayWidth/2,displayHeight/2); 
                this.paper2content2 = createElement('h3');    
                this.paper2content2.html("https://www.google.com");
                this.paper2content2.position(displayWidth/2-350,displayHeight/2-120);
                this.paper2content3 = createElement('h3');
                this.paper2content3.html("https://www.wikipedia.com");
                this.paper2content3.position(displayWidth/2-350,displayHeight/2-80);   
            })
            this.paper3.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();

                this.paper3title = createElement('h3');
                this.paper3title.html("Click on the link below to take your exams");
                this.paper3title.position(displayWidth/2-50,displayHeight/2-50);
                this.paper3content = createElement('h3');
            this.paper3content.html("https://cbseportal.com/links/Some-Wonderful-Mathematics-Links-For-Students-Preparing-For-AIEEE-IIT-JEE");
            this.paper3content.position(displayWidth/2-350,displayHeight/2-160);
            this.paper3content2 = createElement('h3');      
            this.paper3content2.html("https://www.google.com");
                this.paper3content2.position(displayWidth/2-350,displayHeight/2-120);
                this.paper3content3 = createElement('h3');
                this.paper3content3.html("https://www.wikipedia.com");
                this.paper3content3.position(displayWidth/2-350,displayHeight/2-80);   
            })
            this.paper4.mousePressed(()=>{
                this.paper1.hide();
                this.paper2.hide();
                this.paper3.hide();
                this.paper4.hide();

                this.paper4title = createElement('h3');
                this.paper4title.html("Click on the link below to take your exams");
                this.paper4title.position(displayWidth/2-50,displayHeight/2-50);
                this.paper4content = createElement('h3');
                this.paper4content.html("https://cbseportal.com/links/Some-Wonderful-Biology-Links-For-Students-Preparing-For-AIEEE-IIT-JEE");
                this.paper4content.position(displayWidth/2-350,displayHeight/2-160); 
                this.paper4content2 = createElement('h3');  
                this.paper4content2.html("https://www.google.com");
                this.paper4content2.position(displayWidth/2-350,displayHeight/2-120);
                this.paper4content3 = createElement('h3');
                this.paper4content3.html("https://www.wikipedia.com");
                this.paper4content3.position(displayWidth/2-350,displayHeight/2-80);   
            })
            
        }) 
    }
}