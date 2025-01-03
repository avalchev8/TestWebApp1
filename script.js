// Track Event
document.getElementById('eventBtn').addEventListener('click', function() {
    leanplum.track('Button Clicked');
  });
  
  // Set User Attribute
  document.getElementById('attrBtn').addEventListener('click', function() {
    leanplum.setUserAttributes({
      'username': 'testuser',
      'age': 30 
    });
  });