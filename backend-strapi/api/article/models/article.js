'use strict';
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
	}
  }
};