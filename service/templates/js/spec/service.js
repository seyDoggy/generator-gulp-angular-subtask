describe('Service: <%= scriptClassName %>', function() {
  var <%= scriptClassName %>;
  beforeEach(module('<%= scriptAppName %>'));
  beforeEach(inject(function(_<%= scriptClassName %>_) {
  <%= scriptClassName %> = _<%= scriptClassName %>_;
  }));

  it('should attach a list of awesomeThings to the service', function() {
    expect(<%= scriptClassName %>.awesomeThings.length).toBe(3);
  });

});