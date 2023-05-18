import React,{useCallback} from 'react'
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3'

const Homepage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    try {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available')
        AlertUtils.error('Execute recaptcha not yet available')
        return
      }

      const token = await executeRecaptcha('dsaronline')

      console.log('token', token)

      let response = await fetch(`/api/verifyRecaptCha`, {
        method: 'POST',
        body: JSON.stringify({
            token: token
        })
      })

      let res = await response.json()

      console.log('res score ==>', res)

    } catch (error) {
      console.log('error', error.message)
    } 
  }, [executeRecaptcha])

  return <div>Homepage
    <button onClick={handleReCaptchaVerify}>Click</button>
  </div>
}

export default Homepage
