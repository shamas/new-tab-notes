# **New Tab Notes Chrome Extension**

## **Overview**

This is a simple Chrome extension that replaces the new tab page with a notepad. The notes you write are saved locally, and the size of the textarea is customizable and persistent.

## **Features**

- Simple, clean UI
- Persistent notes
- Resizable textarea
- Customizable and saved textarea size

## **Installation**

1. **Clone the Repository**
    
    ```bash
    git clone https://github.com/shamas/new-tab-notes.git
    
    ```
    
2. **Navigate to Chrome Extensions**
    - Open Google Chrome and go to **`chrome://extensions/`**.
3. **Enable Developer Mode**
    - Toggle the "Developer mode" switch in the top-right corner.
4. **Load the Extension**
    - Click on "Load unpacked" and select the directory where you cloned the repository.

## **File Structure**

- **`newtab.html`**: The HTML file that replaces the new tab page.
- **`styles.css`**: The stylesheet for the extension.
- **`script.js`**: The JavaScript file for handling note persistence and textarea resizing.

## **Usage**

- Open a new tab to access the notepad.
- Type your notes in the textarea.
- Resize the textarea as needed; the size will be saved for future new tabs.
