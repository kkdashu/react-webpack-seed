let users = [
  { id: 1, name: 'kkdashu', email: 'wmeng17@gmail.com' },
  { id: 2, name: 'rourou', email: 'rourou@gmail.com' },
  { id: 3, name: '撒山', email: 'sashan@gmail.com' },
  { id: 4, name: '李四', email: 'lisi@gmail.com' },
  { id: 5, name: '李逍遥', email: 'lixiaoyao@gmail.com' },
  { id: 6, name: '过儿', email: 'goer@gmail.com' },
];
users.editById = function(id, newUser) {
  users = users.map(function(u) {
    if(u.id === id) {
      newUser.id = id;
      return newUser;
    }
    return u;
  });
};

users.getAll = function() {
  return users;
};

users.add = function(user) {
  user.id = users.length + 1;
  users.push(user);
};

users.deleteById = function(userId) {
  users = users.filter(function(user) {
    return user.id !== userId;
  });
};
export default users;
