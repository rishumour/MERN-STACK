# JavaScript Outputs

JavaScript can show output in different ways, such as the browser console, alert boxes, writing directly into HTML, and updating page content with elements like `innerHTML` or `textContent`. The most common method for learning and debugging is `console.log()`. [web:35][web:36]

## 1) Console output
`console.log()` prints messages in the browser’s developer console, which is useful for debugging and checking values. [web:31][web:35]

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    console.log("Hello, console!");
    console.log(5 + 6);
  </script>
</body>
</html>
```

**Output in console:**
```text
Hello, console!
11
```

## 2) Alert output
`alert()` shows a popup message in the browser window. It is useful for attention-grabbing messages, but should not be overused. [web:35][web:36]

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    alert("Hello from JavaScript!");
  </script>
</body>
</html>
```

**Output:** A popup box with the message `Hello from JavaScript!`

## 3) HTML element output
You can write output directly into the webpage by changing an element’s content using `innerHTML` or `textContent`. This is useful when you want the result to appear on the page itself. [web:35][web:36]

```html
<!DOCTYPE html>
<html>
<body>
  <p id="demo"></p>

  <script>
    document.getElementById("demo").innerHTML = "Hello, webpage!";
  </script>
</body>
</html>
```

**Output on page:** `Hello, webpage!`

## 4) document.write()
`document.write()` writes directly to the HTML document. It is mostly used for simple testing, because using it after the page has loaded can overwrite the page content. [web:35][web:36]