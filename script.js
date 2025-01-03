// Ensure leanplum is defined
 // Initialize Leanplum
 Leanplum.setAppIdForProductionMode('app_y2XiC7zWyC7Q89pm6Rx07YI6sz5N91WmkQeTJBBqDjI', 'prod_lIS9NZFo0N6rMhi0laGeiLQnV2i8gbekmBmY6gPN0o4'); 

 // Start Leanplum when the page loads
 Leanplum.start(function(success) {
  console.log('Success: ' + success);
  console.log('Variables', Leanplum.getVariables());
 });
if (typeof Leanplum !== 'undefined') {
  // Track Event
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('eventBtn').addEventListener('click', function() {
        Leanplum.track('Button Clicked');
    });
  });

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