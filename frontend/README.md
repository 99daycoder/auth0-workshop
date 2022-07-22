# Auth0 Workshop

Setup your

# React with Auth0 Installation

commands used to install components (in order)

Make sure you're in your React App directory:
`cd frontend`

Create React Default App
`npx create-react-app .`

Install dotenv, so that you can use your .env files to load the environmental variables using process.env
`npm i dotenv`

Install the Auth0 React SDK
`npm install @auth0/auth0-react`

Install React Router Dom v6
`npm i react-router-dom`

Create a `.env` file (you can use the provided `.env-example`)

Fill in the following with your own credentials:

```
REACT_APP_AUTH_DOMAIN=
REACT_APP_AUTH_CLIENTID=
REACT_APP_AUTH_AUDIENCE=
REACT_APP_AUTH_SCOPE=
```

You can find the credentials from your App setting's page on Auth0s dashboard.


![image](https://user-images.githubusercontent.com/103944777/180312686-d11d813d-4767-45fb-9108-5e2e4d175238.png)



# Resources

Step 1)
https://auth0.com/docs/quickstart/spa/react/interactive

Step 2)
https://auth0.com/blog/complete-guide-to-react-user-authentication/
