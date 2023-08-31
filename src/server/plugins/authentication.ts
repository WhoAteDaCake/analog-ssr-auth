import type { NitroAppPlugin } from 'nitropack'

export default <NitroAppPlugin> ((nitroApp) => {
  console.log('Nitro plugin');
  // nitroApp.hooks.hook("config4", (event) => {
  //   console.log("on request", event.path);
  // });

})
