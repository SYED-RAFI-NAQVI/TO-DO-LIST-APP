# ✅ To-Do List App

A browser-based to-do list app built with HTML, CSS, and jQuery — one of my early interactive frontend projects from undergrad (~2018). Features a clean card UI with a purple gradient background, smooth animations, and three core interactions: add, complete, and delete tasks.

## ✨ Features

- ➕ **Add tasks** — type in the input and press `Enter` to add a new to-do
- ✔️ **Complete tasks** — click any item to toggle it red with a strikethrough
- 🗑️ **Delete tasks** — hover over an item to reveal a trash icon, click it to fade-remove the item
- 👁️ **Toggle input** — click the `+` icon in the header to show/hide the input field
- 🎨 **Striped list** — alternating row colors via CSS `nth-child`
- 💜 **Purple gradient background** — sleek, modern look using a CSS linear gradient

## 🖥️ Preview

The app renders as a centered card (400px wide) with:
- A purple header with the **Eater** cursive font and a `+` icon
- A full-width input field in **Courgette** font
- A striped task list in **Vollkorn SC** serif font
- A deep purple-to-magenta gradient background

## 🚀 How to Run

No build tools or dependencies. Just open in your browser:

```bash
open web.html
```

Or drag and drop `web.html` into any modern browser. Requires an internet connection to load jQuery, Font Awesome, and Google Fonts from CDN.

## 🛠️ Built With

- **HTML5** — Semantic structure, `ul/li` for the task list
- **CSS3** — Linear gradient background, `box-shadow`, `nth-child` striping, CSS `transition` for smooth trash icon reveal on hover, Google Fonts
- **jQuery 3.2.1** — Event delegation, `.fadeOut()` + `.remove()`, `.fadeToggle()`, `.css()` for toggling completed state
- **Font Awesome 4.7** — Trash icon (`fa-trash`) and plus icon (`fa-plus-circle`)

## 📁 Project Structure

```
TO-DO-LIST-APP/
├── web.html    # Main page — structure & CDN links
├── ui.css      # Styles — layout, gradient, animations
└── fun.js      # Logic — add, complete, delete interactions
```

## 💡 How It Works

```js
// Add on Enter key
$("input").keypress(function(e) {
  if (e.which === 13) {
    $("ul").append("<li> " + $(this).val() + " <span><i class='fa fa-trash'></i></span> </li>")
  }
});

// Toggle complete on click
$("ul").on("click", "li", function() {
  $(this).css({ color: "red", textDecoration: "line-through" });
});

// Delete with fade on trash icon click
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(300, function() { $(this).remove(); });
  e.stopPropagation(); // prevent triggering the li click
});
```

Uses **event delegation** (`$("ul").on("click", "li", ...)`) so that dynamically added items are automatically handled — a key jQuery pattern.

## 💡 What I Learned

Built during undergrad (~2018) while getting comfortable with DOM manipulation and jQuery. Key concepts practiced:

- **Event delegation** — attaching listeners to a parent so dynamically created children are handled automatically
- **`stopPropagation()`** — preventing the trash icon click from also triggering the parent `li` click (complete toggle)
- **`.fadeOut()` + callback** — chaining an animation with a DOM removal for a smooth delete UX
- **`.fadeToggle()`** — toggling visibility with a fade animation
- **CSS `nth-child`** — zebra-striping a list without JavaScript
- **CSS `transition`** on the trash icon span — revealing it smoothly on hover

---

*The classic beginner project, done with style. 💜*
