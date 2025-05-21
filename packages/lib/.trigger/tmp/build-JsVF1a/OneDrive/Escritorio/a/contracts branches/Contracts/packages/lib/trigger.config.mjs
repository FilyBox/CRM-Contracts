import {
  defineConfig
} from "../../../../../../../chunk-F2LHJZUF.mjs";
import {
  init_esm
} from "../../../../../../../chunk-X4WC7F2Z.mjs";

// trigger.config.ts
init_esm();
var trigger_config_default = defineConfig({
  project: "proj_ybnmrcchantwjppvcnoi",
  runtime: "node",
  logLevel: "log",
  // The max compute seconds a task is allowed to run. If the task run exceeds this duration, it will be stopped.
  // You can override this on an individual task.
  // See https://trigger.dev/docs/runs/max-duration
  maxDuration: 3600,
  build: {},
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 1e4,
      factor: 2,
      randomize: true
    }
  },
  dirs: ["trigger"]
});
var resolveEnvVars = void 0;
export {
  trigger_config_default as default,
  resolveEnvVars
};
//# sourceMappingURL=trigger.config.mjs.map
