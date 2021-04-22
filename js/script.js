var app = new Vue({
  el: '#root',
  data: {
    indiceAttivo: 0,
    companyInfo: [
      {
        openingDays: 'Mon - Sat',
        openingHours: '9.00 - 18.00',
        phoneNumber: '+1 (305)1234-5678',
        email: 'hello@nexgen.com',
        address: 'Main Avenue, 987',
        googleMap: 'https://www.google.it/maps'
      }
    ],
    heroList: [
      {
        title: 'HOME',
        url: 'https://www.google.it',
      },
      {
        title: 'ABOUT',
        url: 'https://www.google.it',
      },
      {
        title: 'PROJECT',
        url: 'https://www.google.it',
      },
      {
        title: 'PROCESS',
        url: 'https://www.google.it',
      },
      {
        title: 'TESTIMONIALS',
        url: 'https://www.google.it',
      },
    ],
    timeline: [
      {
        number: '01',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '02',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '03',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '04',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '05',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      }
    ],
    boxTop: [
      {
        icon: 'far fa-user',
        title: 'Human Capital',
        paragrap: 'Humanazing business: Harness the power of technology to improve the way people work.'
      },
      {
        icon: 'fas fa-chart-pie',
        title: 'Core Business',
        paragrap: 'It takes innovative approaches to transform, modernize and run existing platform.'
      },
      {
        icon: 'far fa-clock',
        title: 'Performance',
        paragrap: 'Achieving maximun impact and value from investments in finance and supply chain.'
      }
    ],
    gridImages: [
      {
        topRow: [
          {
            img: 'img/project-1.jpg',
            paragraph: 'Academic professional program in social media'
          },
          {
            img: 'img/project-2.jpg',
            paragraph: 'President\'s speech at the annual meeting'
          },
          {
            img: 'img/project-3.jpg',
            paragraph: 'International business trip in Shangai'
          }
        ],
        bottomRow: [
          {
            img: 'img/project-4.jpg',
            paragraph: 'Technology workshop with education theme'
          },
          {
            img: 'img/project-5.jpg',
            paragraph: 'Donation of clothes and food to the partner NGO'
          },
          {
            img: 'img/project-6.jpg',
            paragraph: 'Confraternization of the procurement team'
          },
        ]
      }  
    ],
    boxBottom: [
      {
        img: 'img/logo-1.png',
        paragraph: 'Humanazing business: Harness the power of technology to improve the way people work.',
        icon: 'fas fa-quote-right'
      },
      {
        img: 'img/logo-2.png',
        paragraph: 'It takes innovative approaches to transform, modernize and run existing platform.',
        icon: 'fas fa-quote-right'
      },
      {
        img: 'img/logo-3.png',
        paragraph: 'Achieving maximun impact and value from investments in finance and supply chain.',
        icon: 'fas fa-quote-right'
      }
    ]
  }
}
);
