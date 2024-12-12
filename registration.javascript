<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Online Grocery Store</title>
  <link href="css/main.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
  <div id="wrapper">
  <header>
    <h1>Online Grocery Store</h1>
    <menu>
      <ul>
          <div class="menu-container">
                <li><a href="index.html"><i class="fa fa-fw fa-home"></i>Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="contact.html"><i class="fa fa-fw fa-envelope"></i>Contact Us</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="login.html"><i class="fa fa-fw fa-user"></i>Login</a></li>
                <li><a href="registration.html">Register</a></li>
                <li> 
                  <form class="example" action="#" method="post">
                    <input type="text" placeholder="Search.." name="search">
                    <button type="submit"><i class="fa fa-search"></i></button>
                  </form>
                </li>
          </div>
      </ul>
    </menu>
  </header>
  <main>
<div id="register" class="form-div">
  <h1>-- Registration Form --</h1>
  <div class="container">
    <form name="register" id="register" action="" method="post" enctype="multipart/form-data" onsubmit="return handleSubmit(event)">
        <label for="name">FullName</label>
        <input name="fullname" id="name" type="text" placeholder="Full Name" required>
        
        <label for="address">Address</label>
        <input name="address" type="text" id="address" placeholder="Address">
        
        <label for="contact">Contact No</label>
        <input name="contact" type="text" id="contact" placeholder="Contact">
        
        <label for="email">Email</label>
        <input name="email" type="text" id="email" placeholder="Email">       

        <label for="username">Username</label>
        <input name="username" type="text" id="username" placeholder="Username" required>
        
        <label for="password">Password</label>
        <input name="password" type="password" id="password" placeholder="Password" required>

        <label for="confirm-password">Confirm Password</label>
        <input name="confirm-password" type="password" id="confirm-password" placeholder="Confirm Password" required>

        <button type="submit">Register</button>
    </form>
  </div>
</div>
<script>
  async function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('config.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        alert('Successfully Added!');
      } else {
        alert('Error: ' + result.error);
      }
    } else {
      alert('Network error');
    }
  }
</script>
</body>
</html>

