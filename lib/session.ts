import { getServerSession } from "next-auth";
import { NextAuthOptions,User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google'
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";


export const authOption : NextAuthOptions={
    providers : [
        GoogleProvider({
            clientId : "",
            clientSecret:""
        })
    ],
    jwt :{
        encode:({secret,token})=>{

        },
        decode: async({secret,token})=>{
            
        }
    },
    theme:{
        colorScheme : "light",
        logo: '/logo.png'
    },
    callbacks : {
        async sessions({sessions}) {
            
        },
        async signIn({user}){

        }
    }
}