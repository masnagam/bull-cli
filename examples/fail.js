'use strict';

module.exports = function(job) {
  // Throwing an exception fails this job.
  throw new Error();
};
