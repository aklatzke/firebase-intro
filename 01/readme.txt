Instructions:

First, install the Firebase CLI Tools by running the following command in your terminal:

npm install -g firebase-tools

Next, setup a project within Firebase by going to the following link:

https://console.firebase.google.com/u/0/

> Click "Add Project"
> Name the project whatever you want
> Change the project ID if you wish
> Select "United States" for country/region

Once the project is ready, click continue and you should see a page that says "Welcome to Firebase!."

Click "Add Firebase to Your Web App" and a bunch of code should pop up. Copy this code to your clipboard, and paste it somewhere where you can easily access it.

> Now, close this window and go down to "Database" and click "Get Started."
> Click "Get Started" under "Realtime Database."
> Go over to "Rules"

We are going to make the database public so that we don't have to worry about authentication.

Where it says "auth !== null", replace these with "true" (without quotes).

Your rules should look like this:

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

Click "Publish."



