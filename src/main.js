import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Create Vue application instance
const app = createApp(App);

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error("Global error:", err);
  console.error("Error info:", info);
};

// Global warn handler
app.config.warnHandler = (msg, vm, trace) => {
  console.warn("Global warning:", msg);
  console.warn("Warning trace:", trace);
};

// Use router
app.use(router);

// Mount the application
app.mount("#app");
