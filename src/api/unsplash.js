import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID e6nfxo5fDs2pw_T10rfSuI5QIEPcvfrm0crGYhQ8TuU",
  },
});
