import { useCallback } from "react"

const urlBase = process.env.NEXT_PUBLIC_API_URL

export default function useApi() {
  const httpGet = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`
    const fullUrl = `${urlBase}${uri}`

    const response = await fetch(fullUrl)
    return extractData(response)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const httpPost = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith("/") ? path : `/${path}`
    const fullUrl = `${urlBase}${uri}`

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    return extractData(response)
  }, [])

  async function extractData(response: Response) {
    let content = ""
    try {
      content = await response.text()
      return JSON.parse(content)
    } catch (e) {
      console.error(e)
      return content
    }
  }

  return { httpGet, httpPost }
}
