<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo "New Project"?></title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        h1{
            text-align:center;
            font-size:48px;
            background-color: yellowgreen;
            color: white;
            font-family: bahnschrift, arial,times new roman;
            padding: 10px 25px;
            text-shadow: 0 0 5px black;
        }
    </style>
</head>
<body>
    <h1>Hello World</h1>
    <script>
        let heading = document.getElementsByTagName("h1")[0];
        let timer = setInterval(() => {
            heading.style.letterSpacing = "25px";
            heading.style.transition = "all 0.5s ease-in-out";
        }, 2000);
        setInterval(() => {
            heading.style.letterSpacing = "0px";
            heading.style.transition = "all 0.5s ease-in-out";     
        }, 4000)
    </script>

    <script src="testfile.js"></script>git add  
</body>
</html>