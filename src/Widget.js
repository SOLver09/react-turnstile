import { Turnstile } from '@marsidev/react-turnstile'

export default function Widget() {
  return (
    <Turnstile
      as='aside'
      siteKey='0x4AAAAAAAcKZxM7TVIbjZfj7RNMELXGjeo'
      className='fixed bottom-4 right-4'
      options={{
        action: 'submit-form',
        theme: 'light',
        language: 'fr',
      }}
      scriptOptions={{
        appendTo: 'body'
      }}
    />
  )
}
