const User = require('./model');
const { loginTemplate, homeTemplate } = require('../helper/templates');

const login = (req, res) => res.status(200).send(loginTemplate);

const profile = (req, res) => res.send(homeTemplate(req));

const failure = (req, res) => res.send('Something went wrong...');

const logout = (req, res) => {
    req.logout(error => {
        if (error) error;
        req.session.destroy();
        res.redirect('/');
    });
};

const checkUser = async (profile) => {
    try {
        const { id = '', given_name = '', family_name = '', email = '' } = profile;
        const user = await User.findOne({ googleId: id });
        if (!user) {
            const addUser = new User({
                googleId: id,
                firstName: given_name,
                lastName: family_name,
                email
            });
            addUser.save();
        }
        return true;
    }
    catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    login,
    profile,
    failure,
    logout,
    checkUser
};