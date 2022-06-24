import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {label: "email", type: "email", placeholder: "ali@gmail.com",},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // database look up
        if (
          credentials.username === "ali@gmail.com" &&
          credentials.password === "123456hH"
        ) {
          const user = {identifier: credentials.username, password: credentials.password}
          console.log('cred: ', user)
          const res = await fetch(`${process.env.API_URL}/api/auth/local`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
          })
          const resData = await res.json()
          console.log('user: ', resData)
          // If no error and we have user data, return it
          if (res.ok && resData) {
            // These propereties cann't be changed
            return {
              name: resData.user.username,
              email: resData.user.email,
              image: '15354545'
            }
          }
        }

        // login failed
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      // console.log('user inside jwt: ', user)
      // console.log('token inside jwt: ', token)
      return token
    },
    session: async ({ session, token }) => {
        // console.log('token inside jwt: ', token)
        // console.log('session inside jwt: ', session)
        session.user = token.user
        // session.user.jj = 'hussain' // To assign new attributes
        return session
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true, // ???
  },
  // Allows you to navigate to a custome signin page within pages/auth/signin.js
  pages: {
    signIn: "/auth/signin", // you have to create page called signin
    //signOut: "auth/signOut"
  },
  
});