/* tabs */
// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'buy',
        triggerEl: document.querySelector('#buy-tab-example'),
        targetEl: document.querySelector('#buy-example')
    },
    {
        id: 'rent',
        triggerEl: document.querySelector('#rent-tab-example'),
        targetEl: document.querySelector('#rent-example')
    },
    {
        id: 'sell',
        triggerEl: document.querySelector('#sell-tab-example'),
        targetEl: document.querySelector('#sell-example')
    },
  ];
  
  // options with default values
  const options = {
    defaultTabId: 'buy',
    activeClasses: 'text-orange-500 hover:text-orange-600',
    inactiveClasses: 'text-text hover:text-gray-600',
    onShow: () => {
        console.log('tab is shown');
    }
  };
  
  /*
  * tabElements: array of tab objects
  * options: optional
  */
  const tabs = new Tabs(tabElements, options);
  
  // shows another tab element
/*   tabs.show('buy'); */