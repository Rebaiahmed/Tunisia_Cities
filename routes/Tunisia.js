var express = require('express');
var router = express.Router();



var list =[
  {
    rank : 1,
    name :'Tunis',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },


    //****************//
  {
    rank : 2,
    name :'Ariana',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //*************************//
  {
    rank : 3,
    name :'Ben Arous',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },
    //******************************//
  {
    rank : 4,
    name :'Manouba',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },
    //***************************//
  {
    rank : 5,
    name :'Nabeul',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //***************************//
  {
    rank : 6,
    name :'Zagouan',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //*****************************//
  {
    rank : 7,
    name :'Bizerte',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //************************//
  {
    rank : 8,
    name :'Béja',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //******************

  {
    rank : 9,
    name :'Jendouba',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //***************************//
  {
    rank : 10,
    name :'Kef',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //*****************//
  {
    rank : 11,
    name :'Siliana',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

  //*****************//
  {
    rank : 12,
    name :'Sousse',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },


    //****************************//
  //*****************//
  {
    rank : 13,
    name :'Monstir',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

  //*****************//
  {
    rank : 14,
    name :'Mahdia',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },


  //*****************//
  {
    rank : 15,
    name :'Sfax',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //*************************//
  //*****************//
  {
    rank : 16,
    name :'kairouan',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },


    //****************************//
  //*****************//
  {
    rank : 17,
    name :'Kasserine',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

  //*****************//
  {
    rank : 18,
    name :'Sidi Bouzid',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //************************//
  //*****************//
  {
    rank : 19,
    name :'Gabés',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //********************//
  //*****************//
  {
    rank : 20,
    name :'Medenine',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

  //*****************//
  {
    rank : 21,
    name :'Tataouine',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },


  //*****************//
  {
    rank : 22,
    name :'Gafsa',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //*********************//
  //*****************//
  {
    rank : 23,
    name :'Touzeur',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },

    //***************
  //*****************//
  {
    rank : 24,
    name :'Kebili',
    Country :'Tunisia',
    'Founded by':'Berbers',
    Area :{
      City :'212.63 km2',
      Metro :'2,668 km2'
    },

    municipalities :[
      {
        code :1111,
        municapility :'Tunis',
        population :638.845
      },
      {
        code :1111,
        municapility :'Bardo',
        population :638.845
      },
      {
        code :1111,
        municapility :'Le Kram',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Goulette',
        population :638.845
      },
      {
        code :1111,
        municapility :'Carthage',
        population :638.845
      },
      {
        code :1111,
        municapility :'Sidi Bou Said',
        population :638.845
      },
      {
        code :1111,
        municapility :'La Marsa',
        population :638.845
      },  {
        code :1111,
        municapility :'Sidi Hassine',
        population :638.845
      }
    ]
  },





]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(list);
});

module.exports = router;
