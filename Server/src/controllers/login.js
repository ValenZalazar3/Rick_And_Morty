const { users } = require("./../utils/users");

const loginCotroller = (res, req) => {
  const { email, password } = req.query;
  const user = users.find(
    (user) => user.email == email && user.password == password
  );
  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.export = {
  loginCotroller,
};
