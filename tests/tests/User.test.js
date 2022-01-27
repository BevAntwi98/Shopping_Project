const { sequelize } = require("../sequelize_index");
const { User } = require("../src/User");



describe('User', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    test('can create a user', async () => {
        const user = await User.create({ name: 'Sasha' });
        expect(user.name).toBe('Sasha')
    })
})

//FAILING