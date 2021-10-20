import { createServer } from "http"
import {App} from "./app.js"

const server = createServer(App)

server.listen("3001" || process.env.PORT)