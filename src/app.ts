import { buildBot } from "ts-telegraf-decorators";
import { ControllerTest } from "./controllers/ControllerTest";
import { Config } from './config'
 
buildBot({
    token: Config.BOT_TOKEN,
    // bot: bot                 bot instance
    // session: session()       custom session
    controllers: [ControllerTest],
    // or controllers: [ControllerTest],
}).startPolling()