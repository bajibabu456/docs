const { CellWifi } = require("@material-ui/icons");
    module.exports = {
        docs: [
          {
            type: 'category',
            label: 'Knowledge Synthesis',
            items: [
              {
                type: 'category',
                label: 'Collections',
                items: [
                  'collections/getting_started',
		  'collections/about',
            	  {
              	    type: 'category',
                    label: 'Guides',
                    items:[
                      'collections/guides/index',
                      'collections/guides/how-to'
                    ]
                  },
                ]
              },
              {
                type: 'category',
                label: 'Documents',
                items: 
                [
                  'documents/index',
                  {
                    type: 'category',
                    label: 'Guides',
                    items:[
                      'documents/guides/user-guide',
                      'documents/guides/how-to',
                    ]
                  }
                ]
               },
             ]
          }
       ]
    };
