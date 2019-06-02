export default {
  clean: () => {
    localStorage.removeItem('user');
  },
  get: () => {
    try {
      const rawUser = localStorage.getItem('user');
      if (!rawUser) {
        return undefined;
      }
      return JSON.parse(rawUser);
    } catch (e) {
      localStorage.removeItem('user');
      return undefined;
    }
  },
  set: (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  }
};
