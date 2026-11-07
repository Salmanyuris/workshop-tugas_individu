# Web-Based Voting System

**Simple Candidate Voting Application | HTML, CSS & JavaScript**

A simple web-based voting application that allows users to cast votes for multiple candidates and view voting results in real time. This project uses JavaScript and Browser Local Storage to manage, store, and calculate voting data without requiring a backend server or database.

---

## 1. Project Overview

The Web-Based Voting System is a frontend application designed to simulate a basic candidate election process.

Users can select one of the available candidates by clicking the **Vote** button. The application automatically updates the total votes and calculates each candidate's voting percentage.

Voting data is stored in the browser's Local Storage, allowing the results to remain available even after the page is refreshed.

The application also provides a reset feature to clear all stored voting data and restart the voting process.

## 2. Key Features

- **Candidate Display:** Displays candidate profiles, including photographs, names, educational backgrounds, and universities.
- **Voting Functionality:** Allows users to cast votes for their preferred candidates.
- **Real-Time Vote Calculation:** Automatically calculates the total votes and percentage for each candidate.
- **Progress Visualization:** Displays voting percentages through HTML progress bars.
- **Local Data Storage:** Stores voting results using Browser Local Storage.
- **Reset Voting:** Provides functionality to clear all voting records and reset the results.

## 3. Technology Stack

| Technology | Description |
|---|---|
| HTML5 | Defines the application structure and content. |
| CSS3 | Handles styling, layout, and visual presentation. |
| JavaScript | Implements voting logic and result calculations. |
| Bootstrap | Provides utility classes and frontend styling support. |
| Local Storage | Stores voting data directly in the browser. |

## 4. Application Preview

The application displays three candidates with their respective profiles and voting results.

Each candidate section contains:

- Candidate photograph.
- Candidate name.
- Educational background.
- University information.
- Vote button.
- Voting percentage and progress bar.

A reset button is available at the bottom of the application to clear the voting data.

## 5. Project Structure

```text
voting-system/
│
├── assets/
│   └── img/
│       ├── 1.jpg
│       ├── 2.jpg
│       └── 3.jpg
│
├── index.html
├── style.css
├── script.js
├── bootstrap.css
└── bootstrap.bundle.min.js
```

| File / Directory | Description |
|---|---|
| `index.html` | Main application structure and candidate information. |
| `style.css` | Custom CSS for application layout and styling. |
| `script.js` | JavaScript logic for voting, calculations, and resetting data. |
| `bootstrap.css` | Bootstrap stylesheet. |
| `bootstrap.bundle.min.js` | Bootstrap JavaScript bundle. |
| `assets/img/` | Directory containing candidate photographs. |

## 6. Application Workflow

The application follows a straightforward voting process:

```text
        Start Application
               |
               v
       Display Candidates
               |
               v
        User Selects
          Candidate
               |
               v
        Click Vote Button
               |
               v
       Update Vote Count
               |
               v
       Store Data in
        Local Storage
               |
               v
      Calculate Voting
         Percentage
               |
               v
       Update Progress Bar
               |
               v
       Display Vote Results
```

## 7. Core Functionality

### 7.1 Voting Process

The `vote()` function handles the voting process when a user clicks the Vote button.

The function:
1. Retrieves the candidate's current vote count.
2. Increments the vote count by one.
3. Saves the updated value to Local Storage.
4. Recalculates the voting percentage.
5. Updates the progress bars and displayed results.

### 7.2 Voting Percentage Calculation

The `count()` function calculates the percentage of votes received by each candidate.

The calculation uses the following formula:

\[
\text{Percentage} =
\frac{\text{Candidate Votes}}{\text{Total Votes}}
\times 100
\]

The result is formatted to two decimal places.

### 7.3 Progress Bar Update

The `percentage()` function updates the HTML progress element according to the calculated voting percentage.

This allows users to visualize the voting results through graphical progress indicators.

### 7.4 Local Storage

The application uses Browser Local Storage to save voting data.

Each candidate has an individual storage key:

- `calon1`
- `calon2`
- `calon3`

This approach allows voting results to persist across page reloads within the same browser.

### 7.5 Reset Voting

The `reset()` function clears the stored voting data using:

```javascript
localStorage.clear();
```

After resetting, the voting percentages and progress bars are updated to reflect the cleared results.

## 8. Installation and Usage

No additional installation or backend configuration is required.

**Steps to run the application:**

1. Clone or download this repository.
2. Extract the project files if downloaded as a ZIP archive.
3. Open the project directory.
4. Ensure all required files and candidate images are available.
5. Open `index.html` in a web browser.
6. Select a candidate and click the **Vote** button.
7. Observe the updated voting results.
8. Click **Reset Pemungutan Suara** to clear the voting data.

## 9. Technical Limitations

This project is designed as a frontend learning application and has several limitations:

- Voting data is stored locally in the user's browser.
- Data is not synchronized between different browsers or devices.
- Users can modify Local Storage through browser developer tools.
- There is no authentication or user verification system.
- The application does not use a centralized database or backend server.

**Note:** This implementation is intended for educational and demonstration purposes. It is not designed for official elections or applications requiring secure and verifiable voting.

## 10. Project Information

| Attribute | Details |
|---|---|
| Project Name | Web-Based Voting System |
| Category | Web Development |
| Application Type | Frontend Web Application |
| Programming Languages | HTML, CSS, JavaScript |
| Framework / Library | Bootstrap |
| Data Storage | Browser Local Storage |
| Backend | Not Implemented |
| Database | Not Implemented |

---

**Project Focus:** Frontend Development, JavaScript DOM Manipulation, Local Storage Management, and Dynamic Data Visualization.
