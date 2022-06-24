import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth h-full">
            <Head />
        <body className="text-black antialiased dark:bg-gray-900 dark:text-white">
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument