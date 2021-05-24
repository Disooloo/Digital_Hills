 Features.register({"name":"Migalock","code":"migalock","version":"1.0.0","category":"integration","model":"Migalock_Model_Migalock","desktop_uri":"migalock\/application\/","routes":[{"root":true,"state":"migalock-view","controller":"MigalockViewController","url":"migalock\/mobile_view\/index\/value_id\/:value_id","template":"l1\/view.html","cache":false},{"state":"app-locked","controller":"MigalockViewController","url":"migalock\/mobile_view\/applocked\/value_id\/:value_id","template":"l1\/app_locked.html","cache":false}],"icons":["icons\/migalock1.png","icons\/migalock2.png","icons\/migalock3.png"],"files":["js\/controllers\/migalock.js","js\/factory\/migalock.js","scss\/migalock.scss"],"is_ajax":true,"compile":true,"use_account":true,"only_once":true,"load_on_start":true,"on_start_factory":"Migalock"}, ['./features/migalock/migalock.bundle.min.js']); 