const resolvers = {
    Query: {
        // returns an array of tracks to populate the home page  grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.tracksForHome();
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;