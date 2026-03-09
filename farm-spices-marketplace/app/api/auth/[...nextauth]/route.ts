import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import connectDB from "@/lib/mongodb"
import User from "@/models/User"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {}
      },

      async authorize(credentials) {

        await connectDB()

        const user = await User.findOne({
          email: credentials?.email
        })

        if (!user) return null

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role
        }
      }

    })
  ],

  session: {
    strategy: "jwt"
  }
})

export { handler as GET, handler as POST }