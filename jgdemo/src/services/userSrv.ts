
export async function query(): Promise<any> {
    return request('http://localhost:8000/api/user/getuserinfo');
  }

import axios from "axios"
export default async function request (options) {
    let response
    try {
        response = await axios(options)
        return response
    } catch (err) {
        return response
    }
}