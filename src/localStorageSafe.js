const initTypeData = (data, type) => {
  switch (type) {
    case 'array':
      if (!Array.isArray(data)) {
        return [];
      } else {
        return data;
      }

    case 'object':
      if (typeof data !== 'object' || Array.isArray(data) || data === null) {
        return {};
      } else {
        return data;
      }

    case 'string':
      if (typeof data !== 'string') {
        return '';
      } else {
        return data;
      }
    case 'number':
      try {
        const numberData = JSON.parse(data);
        if (numberData !== 'number') {
          return 0;
        } else {
          return numberData;
        }
      } catch (err) {
        return 0;
      }
    default:
      if (data) {
        return null;
      } else {
        return data;
      }
  }
};

const localStorageSafe = {
  getItem: (key, type) => {
    try {
      const item = JSON.parse(localStorage.getItem(key));
      if (item.expiresTime) {
        return new Date().getTime() > item.expiresTime
          ? initTypeData(null, type)
          : initTypeData(item.data, type);
      } else {
        return initTypeData(item, type);
      }
    } catch (err) {
      return localStorage.getItem(key)
        ? initTypeData(localStorage.getItem(key), type)
        : initTypeData(null, type);
    }
  },
  setItem: (key, data, expires) => {
    if (expires) {
      localStorage.setItem(
        key,
        JSON.stringify({data, expiresTime: new Date().getTime() + expires}),
      );
    } else {
      localStorage.setItem(
        key,
        typeof data === 'object' ? JSON.stringify(data) : data,
      );
    }
  },
};

try {
  if (window) {
    window.localStorageSafe = localStorageSafe;
  }
} catch (err) {
  console.log(err);
}

export default localStorageSafe;
