function createUserSession(req, user, action) {
    req.session.uid = user._id.toString();
    req.session.save(action);
}

function destroyUserAuthSession(req) {
    req.session.uid = null;
}

module.exports = {
    createUserSession,
    destroyUserAuthSession,
};
