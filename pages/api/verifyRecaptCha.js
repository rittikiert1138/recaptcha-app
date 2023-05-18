import axios from 'axios'

export default async function handler (req, res) {
  try {
    let params = JSON.parse(req.body)
    // let url = `${process.env.REACT_APP_DOMAIN_DSAR}/verifyRecaptCha`
    let url = `https://www.google.com/recaptcha/api/siteverify?secret=6LdHwWglAAAAAM2M2CSvjqGkkhW1C9EepS6mCZe5&response=${params.token}`
    // console.log('url verify ==>', url)
    // const resp = await axios.post(url, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // })

    const resp = await axios.post(url, {
      timeout: 10000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })

    if (resp.status === 200) {
      res.status(200).json(resp.data)
    }
  } catch (e) {
    console.log('catch => verifyToken', e.message)
    res.status(500).json(e)
  }
}