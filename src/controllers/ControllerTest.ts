import { Start, Command, TFController, TFContext, Hears, TFMessage, Enter } from 'ts-telegraf-decorators'
import { TestService } from '../services/TestService';
import {Chat, IncomingMessage} from 'telegraf/typings/telegram-types';
import { Inject } from "typedi";

@TFController()
export class ControllerTest {
 
    @Inject()
    service: TestService
    
    @Start()
    start(@TFContext() ctx, @TFMessage() msg){
        console.warn(msg)
        ctx.reply(`Hello ${msg.from.first_name} ${msg.from.last_name}`)
    }
    
    @Command('ping')
    ping(@TFContext() ctx){
        ctx.reply('pong')
    }

    @Hears('test')
    hears(@TFContext() ctx){
        ctx.reply('test test')
    }
}