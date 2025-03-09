import  {  Config,  getFunctions,  getSchemaCreator  }  from  "nobox-client";

export const config: Config = {
endpoint:  "https://api.nobox.cloud", // or http://localhost:8000 if you are running local
project:  "[yourproject]", //Replace [yourProject] with your desired project name
token: "[yourToken]", //Replace [yourtoken] with the token you copied in step 2
};

export const createRowSchema = getSchemaCreator(config, { type: "rowed" });

export const createKeyGroupSchema = getSchemaCreator(config, { type: "key-group" });

export  const  Nobox  =  getFunctions(config);