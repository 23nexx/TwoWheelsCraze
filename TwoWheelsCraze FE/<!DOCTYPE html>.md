<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Routes</title>
    <style>
        .cta-buttons a {
            text-decoration: none;
            padding: 15px 30px;
            font-size: 18px;
            color: rgb(0, 0, 0);
            background-color: #ffffff;
            border-radius: 8px;
            position: relative;
            overflow: hidden;
            transition: background-color 0.3s;
        }

        .cta-buttons a:hover {
            background-color: #0056b3;
        }

        .cta-buttons a::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(255, 255, 255, 0.3);
            transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
            border-radius: 50%;
            z-index: 0;
            transform: translate(-50%, -50%);
        }

        .cta-buttons a:hover::after {
            width: 0;
            height: 0;
            top: 50%;
            left: 50%;
        }

        .cta-buttons a span {
            position: relative;
        }
    </style>
</head>
<body>
    <div class="content-wrapper">
        <!-- Header Section -->
        <header>
            <!-- Removido o texto "Routes" -->
        </header>

        <div class="quick-nav">
            <a href="Routes.html" class="nav-item">Rᴏᴜᴛᴇs</a>
        </div>

        <!-- Routes Content -->
        <div class="content">
            <h2>Rᴏᴜᴛᴇs</h2>
            <p>Welcome to the routes page!</p>
        </div>
    </div>
</body>
</html>