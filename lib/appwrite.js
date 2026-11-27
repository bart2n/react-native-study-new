import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('6b0847eb002bb318fb96')
  .setPlatform('dev.netninja.sheflie')

export const account = new Account(client)
export const avatars = new Avatars(client)