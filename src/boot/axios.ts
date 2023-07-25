import { boot } from "quasar/wrappers";
import axios, { AxiosInstance } from "axios";
import axiosRetry from "axios-retry";

const http: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.API,
})

let axiosInstance = axios;
let axiosRetryInstance = axios;

export default boot(({ app, store }) => {
  function formatDates(element) {
    if (element.created_at) element.created_at = new Date(element.created_at);
    if (element.updated_at) element.updated_at = new Date(element.updated_at);
    if (element.need_date) element.need_date = new Date(element.need_date);
    if (element.start_date) element.start_date = new Date(element.start_date);
    if (element.finish_date)
      element.finish_date = new Date(element.finish_date);
    if (element.baseline_start)
      element.baseline_start = new Date(element.baseline_start);
    if (element.baseline_finish)
      element.baseline_finish = new Date(element.baseline_finish);
    return element;
  }

  app.config.globalProperties.$axios = axiosInstance;

  const axiosRetryInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.API,
  });
  axiosRetryInstance.interceptors.response.use((response) => {
    if (typeof response.data.data !== "undefined") {
      if (typeof response.data.data.length === "undefined") {
        response.data.data = formatDates(response.data.data);
        return response;
      } else {
        response.data.data.forEach((element) => {
          element = formatDates(element);
        });
        return response;
      }
    }
    return response;
  });
  axiosRetry(axiosRetryInstance, { retries: 3 });
  app.config.globalProperties.$axiosRetry = axiosRetryInstance;

  app.config.globalProperties.$http = http
});

export { axiosInstance, axiosRetryInstance, http };
