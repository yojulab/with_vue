import axios from "axios";
const coronaMixin = {
  methods: {
    async fetchCoronaData(method, uri, params) {
      const response = await axios[method](uri, { params });
      //   console.log(method, uri, response);
      return response.data;
    },
  },
};

export default coronaMixin;
