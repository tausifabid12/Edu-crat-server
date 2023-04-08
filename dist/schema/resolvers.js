import jwt from 'jsonwebtoken';
const { sign } = jwt;
export const resolvers = {
    Query: {},
    Mutation: {
        signUp: (parent, args) => {
            // send args to the database to save user
            const { email } = args?.signUpInput;
            const token = sign({ email }, process.env.ACCESS_TOKEN, {
                expiresIn: "1d",
            });
            console.log(token);
            return {
                token
            };
        },
        login: (parent, args) => {
            const { email } = args;
            // check if user is on the data base 
            //if exists
            const token = sign({ email }, process.env.ACCESS_TOKEN, {
                expiresIn: "1d",
            });
            console.log(token);
            return {
                token
            };
        }
    }
};
