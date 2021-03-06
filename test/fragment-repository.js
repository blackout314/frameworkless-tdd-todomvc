'use strict';

describe('the fragment repository', function() {
  var repository, document;

  beforeEach(function() {
    fakeLocalStorage.clear();
    document = { location: {}};
    repository = new FragmentRepository(fakeLocalStorage, document);
  })

  it('saves the fragment when it changes', function() {
    document.location.hash = 'frotz';
    window.onpopstate();

    document.location.hash = undefined;
    repository.restore();

    expect(document.location.hash).equal('frotz');
  });

  it('does nothing when no fragment was saved', function() {
    document.location.hash = 'previous';

    repository.restore();

    expect(document.location.hash).equal('previous');
  });

});
