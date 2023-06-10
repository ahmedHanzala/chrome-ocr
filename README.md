 <h1>Image to Text Chrome Extension</h1>
 <a href="LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License">
</a>

  <p>
    The Screen to Text Chrome Extension is a simple yet powerful tool that allows users to capture screenshots of their screens and convert the captured images into text. With this extension, users can easily extract text from images and save time on manual transcription or typing.
  </p>

  <h2>Key Features</h2>
  <ul>
    <li>
      <strong>Screen Capture:</strong> The extension provides a user-friendly interface for capturing screenshots of the user's screen. Users can capture either the entire screen or a specific region.
    </li>
    <li>
      <strong>Image-to-Text Conversion:</strong> After capturing a screenshot, the extension utilizes Tesseract (OCR) to extract text from the image. This process is quick and efficient, enabling users to obtain text content almost instantly.
    </li>
    <li>
      <strong>Text Output:</strong> Once the text has been extracted, it is automatically copied to the users clipboard
    </li>
    <li>
      <strong>Customization Options:</strong> The extension can customizable settings to enhance the user experience. If you want to include multiple language OCR Tesseract provides that but inorder to keep it simple i've maintained the scope to only english.
    </li>
    <li>
      <strong>Privacy and Security:</strong> The extension prioritizes user privacy. All screenshots are temporarily saved using chrome's storage or they might be stored in clipboard if the user so chooses. The images are wiped after one OCR operation if the user doesn't explicitly asks to save them.
    </li>
  </ul>
<h2>Motivation</h2>
<p> I was getting annoyed while doing a survey which did not allow for specific words to be copied (I am a non english speaker so i have to google certain words to know their meanings :D) so this extension helped me get through that problem. I have made no intellectual contribution
to the tesseract model, i have merely peiced different things to make this extension. I also am aware of possibility of using this for online quizzess and stuff, to counter that, the tabs in which the website doesn't allow for copying I have prohibited. I do not condone using this for any malicious practices. </p>
  <h2>Usage</h2>
  <p>
    To use the Image to Text Chrome Extension, follow these steps:
  </p>
  <ol>
    <li>Clone this repository to your local machine using the command: <code>git clone https://github.com/ahmedHanzala/chrome-ocr.git</code></li>
    <li>In Google Chrome, navigate to <strong>chrome://extensions/</strong> (or go to the menu > More Tools > Extensions).</li>
    <li>Enable the <strong>Developer mode</strong> (usually located in the top right corner).</li>
    <li>Click on the <strong>"Load unpacked"</strong> button.</li>
    <li>Select the folder where you cloned the repository (the folder containing the extension files).</li>
    <li>The extension should now be installed and visible in the extensions list.</li>
    <li>Click on the extension icon in the Chrome toolbar to capture a screenshot and convert it to text.</li>
  </ol>
  
  <h2> How To Use </h2>
  <div>
 <h3>Step 1: Click on the extension</h3>
    <div>
      <img style="width: 70%;" src="https://github.com/ahmedHanzala/chrome-ocr/assets/105395393/e0489166-d953-4a97-9d29-d23f7f50af57" alt="Usage Example 1">
    </div>
 <div style="display:flex">
   <h3>Step 2: Select Area you want to OCR</h3>
    <div>
      <img style="width: 70%;" src="https://github.com/ahmedHanzala/chrome-ocr/assets/105395393/d503ddee-84ed-4b5c-8dff-79180c7f4763" alt="Usage Example 2">
    </div>
   <h3>Step 3: You can either Copy image using "copy" or Copy Text (OCR) using "Copy Text" button</h3>
    <div>
      <img style="width: 70%;" src="https://github.com/ahmedHanzala/chrome-ocr/assets/105395393/a356ce1b-0009-4bd2-8a42-fde50baea592" alt="Usage Example 3">
    </div>
 </div>
  <h3>Step 4: Copied to clipboard</h3>
    <div>
      <img style="width: 70%;" src="https://github.com/ahmedHanzala/chrome-ocr/assets/105395393/1de1ee47-c136-41be-b53e-8222a04d6abd" alt="Usage Example 4">
    </div>
  <h2>Contributing</h2>
  <p>
   This code has been sitting with me for a year now and i kept forgetting to make a repo of this. Contributions to the Extension are welcome! If you have any ideas, bug reports, or feature requests, please submit them as issues or create a pull request on the GitHub repository. 
  </p>

  <h2>License</h2>
  <p>
    The Screen to Text Chrome Extension is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.
  </p>
