export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'teal',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: 'teal'
      }
    }
  },
  body: {
    mb: [8, 12, 16]
  },
  links: {
    nav: {
      color: 'white',
      transition: '0.5s all ease',
      '&:hover, &:focus': {
        transform: 'scale(1.1)',
        color: 'white'
      }
    }
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  text: {
    default: {
      color: 'text',
      mb: 5
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      color: 'primary',
      py: 2,
      my: 2
    }
  }
}
