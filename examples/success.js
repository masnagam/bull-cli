'use strict';

module.exports = function(job) {
  // job.data contains parameters for this job.

  // joq.queue.name, job.name and job.id may be useful for logging.

  job.progress(100);

  // Return value of this function is treated as the return value of this job.
  return { result: 'OK' };
};
