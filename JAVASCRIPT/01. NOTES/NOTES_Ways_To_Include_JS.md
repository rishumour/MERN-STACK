# Ways to include JavaScript in HTML

You can include JavaScript in HTML in three common ways: inline, internal, and external. The most common and recommended approach for larger projects is using an external `.js` file linked with the `<script>` tag. [web:21][web:30]

## 1) Inline JavaScript
This means writing JavaScript directly inside an HTML element using event attributes like `onclick`. It is simple for small actions, but it gets messy in bigger projects. [web:26]

```html
<!DOCTYPE html>
<html>
<body>

<button onclick="alert('Hello!')">Click me</button>

</body>
</html>
```

## 2) Internal JavaScript
This means writing JavaScript inside a `<script>` tag within the same HTML file. You can place it in the `<head>` or at the end of the `<body>`. [web:21][web:26]

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    function showMessage() {
      document.getElementById("demo").innerHTML = "Hello from JavaScript!";
    }
  </script>
</head>
<body>

<p id="demo">Original text</p>
<button onclick="showMessage()">Click me</button>

</body>
</html>
```

## 3) External JavaScript
This means writing JavaScript in a separate `.js` file and linking it using `src` in a `<script>` tag. This is the best choice for clean, reusable code. [web:21][web:30]

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <script src="script.js"></script>
</head>
<body>

<p id="demo">Original text</p>
<button onclick="showMessage()">Click me</button>

</body>
</html>
```

**script.js**
```javascript
function showMessage() {
  document.getElementById("demo").innerHTML = "Hello from external JavaScript!";
}
```

## Where to place the script

Scripts can be placed in the `<head>` or the `<body>`, and external files are often loaded in the `<head>` or before `</body>`. Putting scripts near the end of `<body>` can help the HTML load first. [web:21][web:26]