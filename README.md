# HospitalAPI
To designed an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients.

# Routes
1. Register a Doctor: [POST]: /doctor/register
2. Login for Doctor: [POST]: /doctor/login
3. Register a patient: [POST]: /patients/registers
4. Create Report of patient: [POST]: /patients/:id/create_report
5. Fetch All Reports of a Patient [GET]: /patients/:id/all_report
6. Fetch the Reports Based on a Status: [GET]: /reports/:status

# Tech Stack
- NodeJS
- MongoDB
- Express

# To start the project in local system, write two commands in the terminal
- npm install, Then after installing all the dependencies, write
- node .\index.js or nodemon .\index.js.
