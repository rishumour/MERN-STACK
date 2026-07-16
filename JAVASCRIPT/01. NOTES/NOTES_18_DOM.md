# DOM in JavaScript

The DOM, or Document Object Model, is how JavaScript sees and controls a web page. It represents the page as a tree of nodes, so you can read, change, add, and remove elements dynamically. 

## Main topics

- DOM basics: what the DOM is, DOM tree, node types, DOM vs BOM. 
- Selecting elements: `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `querySelector()`, `querySelectorAll()`. 
- Reading and changing content: `innerHTML`, `textContent`, `innerText`, `value`, `src`, `href`. 
- Attributes and classes: `getAttribute()`, `setAttribute()`, `removeAttribute()`, `className`, `classList`. 
- Styling: `.style`, `getComputedStyle()`. 
- Creating and removing elements: `createElement()`, `appendChild()`, `append()`, `removeChild()`, `replaceChild()`, `cloneNode()`, `insertBefore()`. 
- Traversing the DOM: `parentNode`, `childNodes`, `children`, `firstElementChild`, `nextElementSibling`, `previousElementSibling`. 
- Events: `addEventListener()`, `removeEventListener()`, bubbling, capturing, `stopPropagation()`, `preventDefault()`. 
- Advanced topics: event delegation, custom events, mutation observers, `dataset`, `DOMContentLoaded` vs `load`. 
- Forms: reading form values, validation, `submit`, `reset`, `FormData`. 

## Simple examples

### 1) Select an element
```javascript
let title = document.getElementById("title");
```

### 2) Change text
```javascript
title.textContent = "Welcome";
```

### 3) Add a class
```javascript
title.classList.add("highlight");
```

### 4) Create a new element
```javascript
let p = document.createElement("p");
p.textContent = "New paragraph";
document.body.appendChild(p);
```

### 5) Add an event
```javascript
button.addEventListener("click", function () {
  alert("Clicked!");
});
```