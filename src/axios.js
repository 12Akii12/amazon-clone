import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/cloneapp-6f7e8/us-central1/api'
    
});

export default instance;