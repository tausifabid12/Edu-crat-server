export  const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type User {
     id: ID!
    username: String!
    email: String!
    mobile: String!
    name: String
    avatar: String
    bio: String
    location: String
  }


  type Query {
    books: [Book]
  }


  input SignUpInput {
  name: String
  username: String!
  email: String!
  phone: String!
  }

 input LoginInput {
  username: String
  email: String!
  }

type Token {
token : String!
}


type Mutation {
signUp(signUpInput: SignUpInput): Token!
login(loginInput: LoginInput): Token!

}

`;


