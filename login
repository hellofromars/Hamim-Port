const html = `
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Office 365 Login and Password Reset</title>
    <link rel=\"icon\" href=\"https://cdn-icons-png.flaticon.com/512/5145/5145934.png\" type=\"image/png\">
    <link href=\"https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap\" rel=\"stylesheet\">
    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\" rel=\"stylesheet\">
    <style>
        :root {
            --background-dark: #121212;
            --text-dark: #ffffff;
            --primary-color: #0078d4;
            --hover-color: #005a9e;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Merriweather Sans', sans-serif;
            background: var(--background-dark);
            color: var(--text-dark);
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            align-items: center;
        }

        .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }

        .background-animation span {
            position: absolute;
            display: block;
            width: 15px;
            height: 15px;
            background: rgba(255, 255, 255, 0.1);
            animation: float 20s linear infinite;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .background-animation span:nth-child(odd) {
            background: rgba(0, 128, 255, 0.3);
        }

        .background-animation span:nth-child(even) {
            background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
            0% {
                transform: translateY(100vh) translateX(0) scale(0.8);
            }
            50% {
                transform: translateY(50vh) translateX(50px) scale(1.2);
            }
            100% {
                transform: translateY(0) translateX(-50px) scale(0.8);
            }
        }

        header {
            text-align: center;
            margin: 20px 0;
        }

        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        header p {
            font-size: 1.2em;
        }

        .buttons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin: 40px 0;
        }

        .buttons a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 15px 30px;
            font-size: 1em;
            color: var(--text-dark);
            background: var(--primary-color);
            text-decoration: none;
            border-radius: 5px;
            transition: background 0.3s, transform 0.2s;
            flex: 1;
            max-width: 150px;
        }

        .buttons a span {
            white-space: nowrap;
        }

        .buttons a:hover {
            background: var(--hover-color);
            transform: scale(1.1);
        }

        .note {
            margin: 20px 0;
            font-size: 1em;
            text-align: center;
            padding: 0 20px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 100% { color: red; }
            50% { color: white; }
        }

        .social-icons {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin: 30px 0;
        }

        .social-icons a {
            color: var(--text-dark);
            font-size: 1.5em;
            transition: color 0.3s;
        }

        .social-icons a:hover {
            color: var(--primary-color);
        }

        .help-text {
            margin: 20px 0;
            font-size: 1em;
            text-align: center;
            padding: 0 20px;
        }

        .typing-animation {
            font-family: 'Courier New', monospace;
            font-size: 16px;
            line-height: 1.8em;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            margin-bottom: 20px;
            padding: 0 20px;
        }

        footer {
            text-align: center;
            margin-top: auto;
            padding: 10px 20px;
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            header p {
                font-size: 1em;
            }

            .buttons a {
                font-size: 0.9em;
                padding: 10px 20px;
            }

            .social-icons a {
                font-size: 1.2em;
            }

            .typing-animation {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="background-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>

    <header>
        <h1>Welcome to Office 365 Portal</h1>
        <p>Access your Office 365 account or reset your password</p>
    </header>

    <div class="buttons">
        <a href="https://login.microsoftonline.com/"><i class="fas fa-sign-in-alt"></i> <span>Login</span></a>
        <a href="https://passwordreset.microsoftonline.com/?ru=https%3a%2f%2flogin.microsoftonline.com%2fcommon%2freprocess"><i class="fas fa-key"></i> <span>Reset Password</span></a>
    </div>

    <div class="note">
        <p><strong>Note:</strong> After logging in, kindly change your password for better security.</p>
    </div>

    <div class="buttons">
        <a href="https://mysignins.microsoft.com/security-info/password/change"><i class="fas fa-lock"></i> <span>Change Password</span></a>
    </div>

    <div class="social-icons">
        <a href="https://facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://messenger.com/" target="_blank"><i class="fab fa-facebook-messenger"></i></a>
        <a href="https://viber.com/" target="_blank"><i class="fab fa-viber"></i></a>
        <a href="https://telegram.me/" target="_blank"><i class="fab fa-telegram"></i></a>
        <a href="mailto:hamimifty@cyberspacebd.onmicrosoft.com" target="_blank"><i class="fas fa-envelope"></i></a>
        <a href="https://forms.office.com/r/D55ARED8d1" target="_blank"><i class="fas fa-file-alt"></i></a>
    </div>

    <div class="help-text">
        If you cannot change or forget your password, or your mail is locked, or for any other issues, please <a href="mailto:hamimifty@cyberspacebd.onmicrosoft.com">email me</a> or <a href="https://forms.office.com/r/D55ARED8d1" target="_blank">submit the form</a>.
    </div>

    <div class="typing-animation" id="typing-animation"></div>

    <footer>
        <p>&copy; 2024 All rights reserved by CSBD</p>
        <p>Made in Bangladesh ❤️</p>
    </footer>

    <script>
        const typingContent = [
            "Thank You",
        ];

        const typingContainer = document.getElementById("typing-animation");
        let currentLine = 0;
        let currentChar = 0;

        function type() {
            if (currentLine < typingContent.length) {
                if (currentChar < typingContent[currentLine].length) {
                    typingContainer.textContent += typingContent[currentLine][currentChar];
                    currentChar++;
                } else {
                    currentChar = 0;
                    currentLine++;
                    typingContainer.textContent += "\n";
                }
            } else {
                currentLine = 0; // Reset animation
                typingContainer.textContent = "";
            }
            setTimeout(type, 100); // Adjust typing speed
        }

        type();
    </script>
</body>
</html>
`;

export default {
    async fetch(request) {
        return new Response(html, {
            headers: { 'Content-Type': 'text/html;charset=UTF-8' },
        });
    },
};
