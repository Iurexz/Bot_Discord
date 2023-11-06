import { Command } from "@/discord/base";
import { ApplicationCommandOptionType, ApplicationCommandType, GuildMemberFlags} from "discord.js";

new Command({
    name: "adicionar cargo",
    description: "Comando de adicionar cargo em alguém",
    dmPermission:true,
    type: ApplicationCommandType.ChatInput,
    options:[
        {
            name:"Menção",
            description:"membro",
            type: ApplicationCommandOptionType.Integer,
        },

        {
            name:"Cargo",
            description:"Cargo a ser adicionado no membro",
            type: ApplicationCommandOptionType.Integer,
        },
    ],



    async run(interaction){
    }}
);