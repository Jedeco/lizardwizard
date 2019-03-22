import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'About',
    icon: 'nb-help',
    link: '/pages/about',
  },
  {
    title: 'Contact',
    icon: 'nb-phone',
    link: '/pages/contact',
  },
  {
    title: 'JEREMY DE COCK',
    group: true,
  },
  {
    title: 'Wie ben ik?',
    icon: 'nb-person',
    children: [
      {
        title: 'Profiel',
        link: '/pages/jdc/profiel',
      },
      {
        title: 'CV',
        link: '/pages/jdc/cv',
      }
    ],
  },
  {
    title: 'Ervaring',
    icon: 'nb-lightbulb',
    children: [
      {
        title: 'Studie',
        link: '/pages/ervaring/studie',
      },
      {
        title: 'Projecten',
        link: '/pages/ervaring/projecten',
      },
      {
        title: 'Extra',
        link: '/pages/ervaring/extra',
      }
    ],
  },
  {
    title: 'Interesses',
    icon: 'nb-shuffle',
    children: [
      {
        title: 'Geluid',
        link: '/pages/interesses/geluid',
      },
      {
        title: 'Beeld',
        link: '/pages/interesses/beeld',
      },
      {
        title: 'Schrift',
        link: '/pages/interesses/schrift',
      }
    ],
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
