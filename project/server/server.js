const {ApolloServer,gql} = require("apollo-server");

const typeDefs = gql`
# schema {
#     query:Query
# }

type Query {
    greeting: String,
    message: String,
    id: ID
}
`;


const resolvers = {
    Query:{
        greeting:()=> "Hey this is exciting",
        message:()=> "Hey this is your message",
        id:()=>Math.random().toString(),
    }
};



const server = new ApolloServer({typeDefs , resolvers});

server.listen({port:9000})
.then((serverInfo)=>console.log(`Server runng at ${serverInfo.url}`))

console.log(typeDefs);
