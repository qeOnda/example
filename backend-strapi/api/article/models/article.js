'use strict';
<<<<<<< HEAD

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {};
=======
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: `${process.env.GITHUB_TOKEN}` });

module.exports = {
  lifecycles: {
    async afterCreate(data) {			
	  await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
	    owner: 'qeOnda',
	    repo: 'example',
	    event_type: 'created'
	  })
	},
	async afterUpdate(data) {			
	  await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
	    owner: 'qeOnda',
        repo: 'example',
	    event_type: 'updated'
	  })
	},
  }
};
>>>>>>> 24d6e45bf92f4ed9cf14785a703bef3ea54a21f3
