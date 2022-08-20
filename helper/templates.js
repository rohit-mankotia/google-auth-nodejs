const loginTemplate = `<form action="/auth/google"><input type="submit" value="Signin with Google" /></form>`;
const homeTemplate = req => `Hello ${req.user.displayName}<form action="/logout"><input type="submit" value="Logout" /></form>`;
const forbiddenTemplate = `Please login first <form action="/auth/google"><input type="submit" value="Signin with Google" /></form>`;

module.exports = {
    loginTemplate,
    homeTemplate,
    forbiddenTemplate
};