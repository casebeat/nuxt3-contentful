import { defineEventHandler } from "h3"

export default defineEventHandler(async (event) => {
    return {message: 'lorem ipsum'}  
})