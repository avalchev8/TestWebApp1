// Ensure leanplum is defined
 // Initialize Leanplum
 Leanplum.setAppIdForProductionMode('app_K7F1SOXrxAx7DqUTh4PBkE4WiwQxUKDT54KdzQVC0uY', 'prod_6wqZ4KgWlhUDNVI3kzLAZHPoiYBRvx7NRwRiqWZTQSg'); 

 // Start Leanplum when the page loads
 Leanplum.start(function(success) {
  console.log('Success: ' + success);
  console.log('Variables', Leanplum.getVariables());
  clevertap.setLogLevel(3);
 });
if (typeof Leanplum !== 'undefined') {
  // Track Event
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('eventBtn').addEventListener('click', function() {
        Leanplum.track('Button:Clicked');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getInboxMessagesBtn').addEventListener('click', function() {
      clevertap.getAllInboxMessages() 
    });
  }
  );
  

  // Set User Attribute
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('attrBtn').addEventListener('click', function() {
      Leanplum.setUserAttributes({
        'username': 'testuser',
        'age': 30 
      });
    });
  });
} else {
  console.error('leanplum is not defined');
}