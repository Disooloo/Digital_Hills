 Features.register({"name":"Ecwid","code":"ecwid","version":"1.0.2","category":"integration","model":"Ecwid_Model_Ecwid","desktop_uri":"ecwid\/application\/","routes":[{"root":true,"state":"ecwid-index","controller":"EcwidIndexController","url":"ecwid\/index\/value_id\/:value_id","template":"l1\/index.html","cache":false},{"state":"ecwid-customer","controller":"EcwidCustomerController","url":"ecwid\/customer\/value_id\/:value_id","template":"l1\/customer.html","cache":false},{"state":"ecwid-newcustomer","controller":"EcwidNewcustomerController","url":"ecwid\/newcustomer\/value_id\/:value_id","template":"l1\/newcustomer.html","cache":false}],"icons":["icons\/ecwid1.png","icons\/ecwid2.png"],"files":["js\/controllers\/ecwid.js","js\/controllers\/ecwid-customer.js","js\/controllers\/ecwid-newcustomer.js","js\/factory\/ecwid.js","js\/service\/ecwid.js","scss\/ecwid.scss"],"is_ajax":true,"compile":true,"use_account":false,"only_once":false}, ['./features/ecwid/ecwid.bundle.min.js']); 