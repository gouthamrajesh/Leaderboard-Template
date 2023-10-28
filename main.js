//Replace the following URL with the published CSV URL of the Google Sheet
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vT5YamgseQccfAl0tvxezJNwBBqlmMqpo_NtqBXwIE4csd8sBPvQ9OosWNrBONGWt12RfnM_9eFPu2p/pub?output=csv')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const leaderboard = document.querySelector('#leaderboard tbody'); //The place where data from sheet to be written is fetched here
//Traversing, Fetching and Writing data from the Google Sheet to the HTML Page
        for (let i = 2; i < lines.length; i++) {
            const [rank, name, score] = lines[i].split(',');
            leaderboard.innerHTML += `
                <tr>
                    <td>${rank}</td>
                    <td>${name}</td>
                    <td>${score}</td>
                </tr>
            `;
        }
        
        // Get the last updated date from the Google Sheet (cell A1)
        const manuallyUpdatedDate = lines[0].split(',')[0];
        
        // Display the manually updated last updated date on the webpage
        const lastUpdatedElement = document.querySelector('#last-updated');
        
        // Parse the date and format it (assuming the date format is "DD-MM-YYYY")
        const dateParts = manuallyUpdatedDate.split('-');
        const formattedDate = `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
        lastUpdatedElement.textContent = `Last Updated: ${formattedDate}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
