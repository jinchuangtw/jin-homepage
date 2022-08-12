import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jin Chuang. All Rights Reserved. Powered
      by{' '}
      <Link href="https://www.craftz.dog" target="_blank">
        @craftzdog
      </Link>
    </Box>
  )
}

export default Footer
