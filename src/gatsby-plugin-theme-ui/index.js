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
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    textTransform: 'uppercase',
    color: 'primary',
    py: 2,
    my: 2
  },
  text: {
    default: {
      color: 'text',
      mb: 5
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
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
  }
}
