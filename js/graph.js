var graph3 = c3.generate({

  bindto: '#graph-feed',

  data: {

    type: 'line',
    json: [
      {name:"Nunez Rush",age:"23"},
          {name:"Nannie Shelton",age:"37"},
          {name:"Kirkland Moss",age:"29"},
          {name:"Walker Hughes",age:"25"},
          {name:"Barnes Fuentes",age:"20"},
],
    keys: {
      x: 'name',
      value: ['age'],
    },

    names:{
      'name':'Name', 'age':'Age'},

  },

  axis: {
       x: {
           type: 'category'
       },
  },

});
