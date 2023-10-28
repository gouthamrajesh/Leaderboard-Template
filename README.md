# Leaderboard-Template

This is a Leaderboard Template which display the leaderboard data directly fetched from Google Sheet using the Google Sheet API.

<h2>Step 1 :</h2>

* Clone this repository and format your leaderboard headings accordingly.

* While personalizing make sure the number and heading of columns are changed in `index.html`, `style.css`, and `main.js`.

<h2>Step 2 : </h2>

* Create the Google Sheet in the given template : <a href="https://docs.google.com/spreadsheets/d/1-fLO-bsHgbEN6A1J-Gzm1n87-IQbyq8aKe_S8ZEVMdY/edit?usp=sharing">`Template`</a>

* Make sure the <strong>Name</strong> in the Google Sheet is same as that of the HTML Document.

<h2>Step 3 : </h2>

* Now make the Google Sheet ready for deployment. Follow the below given steps.

<h3>Step 3.1 :: </h3>

<img src=screenshot/ss1.png>

* Click the `File` tab in the menu bar.
* `File` -> `Publish to Web`

<h3>Step 3.2 :: </h3>

<img src=screenshot/ss2.png>

* Publish the Entire Document by clicking on the `Publish` Button.
* After Publishing choose the content to type as `Comma Seperated Value` under the drop-down box.
* Copy the published CSV link to the clipboard.

<h2>Step 4 : </h2>

* Paste the copied public URL of Google Sheets in the first line code of the `main.js`
* Wait a couple of seconds for the Website get updated with the latest data.
* Output Goes Like This : 
<img src=screenshot/ss3.png>