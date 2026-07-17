# Mouse Events in JavaScript – Notes

## Overview
Mouse events are DOM events that fire when a user interacts with a web page using a mouse (or other pointing device). They are essential for building interactive UIs like buttons, menus, drag-and-drop, tooltips, and custom cursor behavior.

---

## Common Mouse Events

### Click-related
- `click`  
  - Fires after a full press-and-release on the same element (usually left button).  
  - Used for buttons, links, toggles.

- `dblclick`  
  - Fires on a double-click.  
  - Often used for “open” or “edit” actions.

- `contextmenu`  
  - Fires when the context menu is about to open (commonly right-click).  
  - Use `event.preventDefault()` to implement custom right-click menus.

---

### Press / Release
- `mousedown`  
  - Fires when a mouse button is pressed down on an element.  
  - Good for starting drag operations.

- `mouseup`  
  - Fires when a mouse button is released.  
  - Good for ending drag/drop logic.

---

### Hover / Enter / Leave
- `mouseover`  
  - Fires when the pointer enters an element **or one of its children**.  
  - Can fire many times as you move over descendants.

- `mouseout`  
  - Fires when the pointer leaves an element (including when moving to a child).  

- `mouseenter`  
  - Fires only when the pointer enters the element itself.  
  - **Does not fire for children** and **does not bubble**.  
  - Preferred for hover effects.

- `mouseleave`  
  - Fires when the pointer truly leaves the element (ignoring child movements).  
  - Also **does not bubble**.

> Rule: Use `mouseenter`/`mouseleave` for stable hover behavior; use `mouseover`/`mouseout` when you specifically need child-element behavior.

---

### Movement & Scroll
- `mousemove`  
  - Fires continuously as the mouse moves over an element.  
  - Provides cursor coordinates (`clientX`, `clientY`, `pageX`, `pageY`).  
  - Can be performance-heavy; throttle/debounce in real apps.

- `wheel`  
  - Fires when the mouse wheel or trackpad scroll occurs on an element.  
  - Used for custom scrolling, zooming, etc.

---

### Drag-and-Drop (related)
Common drag-and-drop events (often combined with mouse events):
- `dragstart`, `drag`, `dragover`, `dragenter`, `dragleave`, `drop`, `dragend`.

---

## MouseEvent Object Properties

Inside an event handler, you receive a `MouseEvent` object with useful properties:

- Coordinates:
  - `event.clientX`, `event.clientY` – relative to the viewport.
  - `event.pageX`, `event.pageY` – relative to the document.

- Button info:
  - `event.button` – which button was pressed:
    - `0` = left
    - `1` = middle
    - `2` = right
  - `event.buttons` – bitmask of currently pressed buttons (useful in `mousemove`).

- Target:
  - `event.target` – element that originally received the event.
  - `event.currentTarget` – element where the listener is attached.

- Modifier keys:
  - `event.shiftKey`, `event.ctrlKey`, `event.altKey`, `event.metaKey` – booleans.

---

## Example Usage

```js
const box = document.querySelector('#box');

// Click
box.addEventListener('click', (e) => {
  console.log('Clicked at:', e.clientX, e.clientY);
  if (e.button === 0) console.log('Left click');
  if (e.ctrlKey) console.log('Ctrl held');
});

// Hover (preferred)
box.addEventListener('mouseenter', () => {
  console.log('Mouse entered box');
});

box.addEventListener('mouseleave', () => {
  console.log('Mouse left box');
});

// Movement
box.addEventListener('mousemove', (e) => {
  // In real code, throttle this
  console.log('Mouse at:', e.pageX, e.pageY);
});

// Right-click menu
box.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log('Custom context menu at', e.clientX, e.clientY);
});
```

---

## Event Bubbling Behavior

- Most mouse events **bubble**: `click`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`, `wheel`, etc.
- `mouseenter` and `mouseleave` **do not bubble**.

Implications:
- A `click` on a child also triggers `click` handlers on ancestors (unless stopped).
- `mouseenter`/`mouseleave` are safer for component-level hover logic because they don’t fire due to child movements.

---

## Tips & Best Practices

- Prefer `mouseenter`/`mouseleave` for hover UIs (tooltips, highlights).
- Use `mousedown`/`mouseup` when you need separate press/release logic (e.g., drag start/end).
- Throttle/debounce `mousemove` and `wheel` handlers to avoid performance issues.
- Use `event.preventDefault()` to suppress default behavior (e.g., context menu, link navigation).
- For cross-device input (mouse + touch + pen), consider **Pointer Events** (`pointerdown`, `pointermove`, `pointerup`, etc.) in modern apps.

---

## Quick Reference Table

| Event          | Bubbles | Typical Use                          |
|----------------|---------|--------------------------------------|
| `click`        | Yes     | Buttons, links, toggles              |
| `dblclick`     | Yes     | Double-click actions                 |
| `contextmenu`  | Yes     | Custom right-click menus             |
| `mousedown`    | Yes     | Start drag, press detection          |
| `mouseup`      | Yes     | End drag, release detection          |
| `mouseover`    | Yes     | Hover including children             |
| `mouseout`     | Yes     | Leave including to children          |
| `mouseenter`   | No      | Stable hover on element              |
| `mouseleave`   | No      | Stable leave on element              |
| `mousemove`    | Yes     | Tracking cursor position             |
| `wheel`        | Yes     | Custom scroll/zoom behavior          |