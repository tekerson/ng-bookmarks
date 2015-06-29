beforeEach(function() {
  jasmine.addMatchers({

    toBeError: function (util, eq) {
      return {
        compare: function (actual, expected) {
          var result = {
            pass: (actual instanceof Error) &&
              (!expected || util.equals(actual.message, expected, eq))
          };
          if (!result.pass) {
            result.message = util.buildFailureMessage('toBeError', false, actual, expected);
          }
          return result;
        }
      };
    }

  });
});
