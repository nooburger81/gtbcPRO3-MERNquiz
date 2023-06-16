const { Users }  = require('../models/Users');

const resolvers = () => {
    Query: {
        viewUsers: async () => {
            return await Users.find();
    }
}
};

module.exports = resolvers;