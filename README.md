# azizrady.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>

    <!-- CSS -->
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: #222;
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav {
            background-color: #444;
            padding: 10px;
            text-align: center;
        }

        nav a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            color: #00ffcc;
        }

        section {
            padding: 20px;
        }

        .card {
            background: white;
            padding: 20px;
            margin: 20px auto;
            max-width: 600px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        button {
            padding: 10px 15px;
            background-color: #222;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #555;
        }

        footer {
            text-align: center;
            padding: 10px;
            background-color: #222;
            color: white;
        }
    </style>
</head>

<body>

    <header>
        <h1>Welcome to My Website</h1>
        <p>Simple HTML, CSS, and JavaScript</p>
    </header>

    <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>

    <section id="about">
        <div class="card">
            <h2>About Me</h2>
            <p>
                Hello! This is my personal website.
                I am learning web development and cybersecurity.
            </p>
        </div>
    </section>

    <section id="projects">
        <div class="card">
            <h2>My Projects</h2>
            <ul>
                <li>Cybersecurity Labs</li>
                <li>SOC Practice</li>
                <li>GitHub Pages Website</li>
            </ul>

            <button onclick="showMessage()">Click Me</button>
            <p id="message"></p>
        </div>
    </section>

    <section id="contact">
        <div class="card">
            <h2>Contact</h2>
            <p>Email: example@email.com</p>
        </div>
    </section>

    <footer>
        <p>© 2026 My Website</p>
    </footer>

    <!-- JavaScript -->
    <script>
        function showMessage() {
            document.getElementById("message").innerText =
                "Button clicked! JavaScript is working 👍";
        }
    </script>

</body>
</html>
