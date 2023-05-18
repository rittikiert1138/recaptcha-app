import React, { useCallback, useEffect, useState } from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

function MyApp ({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LdHwWglAAAAAAcQZuLhjrC0D5zhqq2a8fY4Xz7m"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined
      }}
      language='th'
      useEnterprise='true'
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default MyApp