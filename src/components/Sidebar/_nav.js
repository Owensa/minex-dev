export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Account',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Funds',
      url: '/account/funds',
      icon: 'icon-drop',
    },
    {
      name: 'Portfolio',
      url: '/account/portfolio',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Exchange',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: 'Trade',
      url: '/trade',
      icon: 'icon-puzzle',
    },
    {
      name: 'Contracts',
      url: '/buttons',
      icon: 'icon-cursor',
    },
    {
      name: 'Futures',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Tools',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Candlestick',
          url: '/icons/flags',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        },
        {
          name: 'Estimators',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Fat Finger',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
          badge: { 
            variant: 'info',
            text: 'PREMIUM'
          }
        }
      ]
    },
    {
      name: 'Bot Editor',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Markov Chain',
          url: '/bot/markov',
          icon: 'icon-bell'
        },
        {
          name: 'Corpus Fed',
          url: '/bot/corpus',
          icon: 'icon-bell'
        },
        {
          name: 'Neural Network',
          url: '/bot/nn',
          icon: 'icon-bell',
          badge: { 
            variant: 'info',
            text: 'PREMIUM'
          }
        },
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Contests',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Development Version',
      url: 'http://mineq.co',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
  ]
};
