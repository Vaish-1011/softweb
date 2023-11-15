# Ex.07 Software Product Company Website
## DATE : 31/10/23

## AIM:
To develop a static company website to display the softwares and services provided by the company.

## DESIGN STEPS:

### Step 1:
Requirement collection.

### Step 2:
Creating the layout using HTML and CSS.

### Step 3:
Updating the sample content.

### Step 4:
Choose the appropriate style and color scheme.

### Step 5:
Validate the layout in various browsers.

### Step 6:
Validate the HTML code.

### Step 7:
Publish the website in the given URL.

## PROGRAM:
 sample.html
 ```
 <!DOCTYPE html>
<html lang="en">
<head>
    <title>Webpage Design</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>

    <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">VORTEX STUDIOS</h2>
            </div>
            <h2 class="login-signup" style = " font-family: Monotype Corsiva, sans-serif;float: right; color: rgb(1, 4, 17); padding: 50px;">Login/Signup</h2>
            <div class = "container">
                <nav>
                    <ul>
                        <li onclick="showContent('Home')">Home</li>
                        <li onclick="showContent('products')">Products</li>
                        <li onclick="showContent('People')">People</li>
                        <li onclick="showContent('ContactUs')">Contact us</li>
                    </ul>
                 </nav>
            </div>
        </div> 
        <section id="Home" class="active">
            <div class = "center"> 
                <div class ="white-box">
                    <div class = "line">
                        <img src = "home.webp" alt="Home Image" style="width: 800px; height: 300px; padding-top: 100px; padding-left: 20px; border-radius: 10px; padding: 10px;">
                        <h2 style ="font-size: 30; font-family: Serief; padding: 20px; padding-top: 140px;">More Than Software, We're Architects of Digital Transformation, Building Bridges to a Smarter Future</h2>
                    </div>
                </div>
                <h2 style ="font-size: 70; font-family: Serief; padding-left: 400px;color: rgb(7, 7, 7);">"Invent. Inspire. Ignite."</h2>
            </div>
        </section>
        <section id="products">
            <div class = "center">
                <div class = "white-box">
                    <img src = "products.jpg" style="width: 900px; height: 300px; padding-top: 50px; padding-left: 160px;">
                </div>
                <h2 style ="font-size: 70; font-family: Serief; padding-left: 400px;color: rgb(10, 10, 10);">"Transforming Ideas into Visual Masterpieces."</h2>
            </div>
        </section>
        <section id="People">
            <div class = "center">
                <div class = "white-box">
                    <div class="line">
                        <div class="avatar">
                            <img src="07.jpg" alt="Avatar" style="width: 140px; height: 160px; padding-top: 75px;padding-right:10px; border-radius: 10px;">
                        </div>
                        <div class="avatar">
                            <img src="01.jpg" alt="Avatar" style="width: 140px; height: 160px; padding-top: 75px;padding-right:10px; border-radius: 10px;">
                        </div>
                        <div class="avatar">
                            <img src="02.jpg" alt="Avatar" style="width: 140px; height: 160px; padding-top: 75px;padding-right:10px; border-radius: 10px;">
                        </div>
                        <div class="avatar">
                            <img src="03.JPEG" alt="Avatar" style="width: 140px; height: 160px; padding-top: 75px;padding-right:10px; border-radius: 10px;">
                        </div>
                        <div class="avatar">
                            <img src="04.jpg" alt="Avatar" style="width: 140px; height: 160px; padding-top: 75px;padding-right:10px; border-radius: 10px;">
                        </div>
                        <div class="avatar">
                            <img src="06.jpg" alt="Avatar" style="width: 140px; height: 160px; padding-top: 75px;padding-right:10px; border-radius: 10px;">
                        </div>
                    </div>
                    
                    <div class="line">
                        <h4 style="font-family: Serif; padding-left: 100px; color: rgb(0, 0, 0);">CEO</h4>
                        <h4 style="font-family: Serif; padding-left: 145px; color: rgb(0, 0, 0);">CTO</h4>
                        <h4 style="font-family: Serif; padding-left: 170px; color: rgb(0, 0, 0);">CD</h4>
                        <h4 style="font-family: Serif; padding-left: 165px; color: rgb(0, 0, 0);">VP</h4>
                        <h4 style="font-family: Serif; padding-left: 165px; color: rgb(0, 0, 0);">PM</h4>
                        <h4 style="font-family: Serif; padding-left: 165px; color: rgb(0, 0, 0);">SE</h4>
                    </div>
                    
                </div>
                
            </div>
        </section>
        <section id="ContactUs">
            <div class = "center">
                <div class = "white-box">
                    `<div class="contact-form">
                        <h1>Contact Us</h1>
                        <form action="submit_form.php" method="POST">
                            <div class="form-group">
                                <input type="text" id="name" name="name" placeholder="Your Name" required>
                            </div>
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Your Email" required>
                            </div>
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>  
                </div>
            </div>
        </section>

    </div>
</body>
</html>
```
style.css
```
style.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia;
}

.navbar h2 {
  float: right;
  margin-right: 20px; 
}

.main {
  width: 100%;
  background: linear-gradient(to top, rgb(121, 172, 137) 0%, rgb(165, 207, 185) 30%);
  background-position: center;
  background-size: cover;
  height: 100vh;
}

.navbar {
  width: 1200px;
  height: 75px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  width: 200px;
}

.logo {
  color: #010d14;
  font-size: 45px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding-left: 40px;
  padding-top: 100px;
  margin-top: 5px;
}

.container {
  display: flex;
  align-items: center;
}

nav ul {
  font-family: Monotype Corsiva, sans-serif;
  display: flex;
}

nav ul li {
  padding: 0px 23px;
  margin: 3px;
  font-size: 23px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 0.5s;
}

nav ul li::after {
  content: '';
  background: rgb(247, 245, 245);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
  transform: top 0.5s, opacity 0.5s;
}

nav ul li:hover {
  color:rgb(247, 245, 245);
}

nav ul li:hover::after {
  top: 50%;
  opacity: 1;
}

.center {
  padding-left: 100px;
  padding-top: 100px;
}

.white-box {
  width: 1200px;
  height: 400px;
  background: linear-gradient(to top, rgb(216, 203, 140) 0%, rgb(169, 233, 200) 30%);
  border: 1px solid #0e0d0d;
  box-shadow: 0 0 10px rgba(243, 240, 240, 0.1);
}

section {
  display: none;
}

section.active {
  display: block;
}

.line {
  display: flex;
}

.line img {
  width: 140px;
  height: 160px;
  padding: 40px;
  border-radius: 50%;
}

.line h4 {
  font-family: 'Times New Roman';
  padding-left: 25px;
  color: rgb(0, 0, 0);
}

.contact-form {
  text-align: left;
  padding: 20px;
}

.form-group {
  margin: 10px 0;
}

input[type="text"],
input[type="email"],
textarea {
  width: 50%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #f3eeee;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #4d9cc9;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2b699e;
}
```
script.js
```
function showContent(option) 
{
    const HomeContentDiv = document.getElementById('Home');
    const ProductContentDiv = document.getElementById('products');
    const PeopleContentDiv = document.getElementById('People');
    const ContactContentDiv = document.getElementById('ContactUs');

    if (option === 'Home') {
        HomeContentDiv.style.display = 'block';
        ProductContentDiv.style.display = 'none';
        PeopleContentDiv.style.display = 'none';
        ContactContentDiv.style.display = 'none';
        
    }
    else if (option === 'products') {
        HomeContentDiv.style.display = 'none';
        ProductContentDiv.style.display = 'block';
        PeopleContentDiv.style.display = 'none';
        ContactContentDiv.style.display = 'none';
    }
    else if (option === 'People') {
        HomeContentDiv.style.display = 'none';
        ProductContentDiv.style.display = 'none';
        PeopleContentDiv.style.display = 'block';
        ContactContentDiv.style.display = 'none';
    }
    else if (option === 'ContactUs') {
        HomeContentDiv.style.display = 'none';
        ProductContentDiv.style.display = 'none';
        PeopleContentDiv.style.display = 'none';
        ContactContentDiv.style.display = 'block';
    }
}
```

## OUTPUT:
![Alt text](<Screenshot 2023-11-16 003608 - Copy.png>)
![Alt text](<Screenshot 2023-11-16 003616 - Copy.png>)
![Alt text](<Screenshot 2023-11-16 003623.png>)
![Alt text](<Screenshot 2023-11-16 003638.png>)

## RESULT:
The program for designing software company website using HTML and CSS is completed successfully.
