export const helpers = {
  methods: {
    checkEmpty(object) {
      return Object.keys(object).length === 0 && object.constructor === Object;
    },
  },
};

export default helpers;
