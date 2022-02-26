# **This is an example blog written by myself Ryan Speciale with Next.js**

## The technologies used in this blog are as follows.

### 1.Next.js with a Postgresql backend.

### 2. Next-auth for authentication.

### 3. Prisma ORM for interacting with the Postgresql database.

To use this blog as your own you will need to create 2 seprate .env files, one name .env and the other named .env.local. The reason for this is because Next.js uses .env.local by default but prisma and next-auth use .env by default. You could figure out how to combine them into one but it was just as easy for me to create 2 seperate ones. What you will need in both those files are as follows.

**.env**

1. You will need your database connection url
2. You will need your next-auth url, this will be localhost:3000 while in development if using default Next.js settings.
3. You will need a next-auth secret, this string will be used to sign your JWT's
4. You will need all you ID's and SECRET's for the providers that you will use for next-auth, they have all the details on their site on how to register your app with a Provider

**.env.local**

1. NODE.ENV variable, set to either production or development
2. Any sites for pulling in images that use an ID and Secret, ie. Unsplash

Happy Coding! :computer:
