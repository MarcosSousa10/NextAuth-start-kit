import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from    'next-auth/providers/credentials'
export default NextAuth({
    providers:[
        GithubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        CredentialsProvider({
           name:"NextAuthCredentials",
           credentials:{},
            async authorize(credentials) {
                console.log(credentials)
                return{
                    id: "1",
                    name:"marcos",
                    email:"marcospegodesousa10@gmail.com",
                    image:"gsds"
                };
            },
           
})
       
    ],
    secret: '64dcas3das145da34da4d5a4da535dsas4da4d5a4d53s4ad5a4d4as68d4a6d4asd',
})