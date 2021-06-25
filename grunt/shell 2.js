'use strict'

const checkGitIgnore = `
 if !(git ls-files --error-unmatch node_modules) && [ -f .gitignore ];
   then true;
   else printf "\n\nWARNING: .gitignore is wrong or missing.
   Ask an instructor for assistance!\n\n" && false; fi
`

const ghPagesList = [
  'index.html',
  'favicon.ico',
  'public'
].join(' ')

module.exports = {
  'check-gitignore': {
    command: checkGitIgnore
  },
  'git-is-clean': {
    command: 'test -z "$(git status --porcelain)"  || (git status && false)'
  },
  'git-push-master': {
    command: 'git push origin master || (git clean -f && false)'
  },
  'git-checkout-master': {
    command: 'git checkout master'
  },
  'deploy-prepare': {
    command: [
      'git branch -D gh-pages || echo "so not removed"',
      'git checkout --orphan gh-pages',
      'git rm --cached \'*\''
    ].join(' && ')
  },
  'deploy-publish': {
    command: [
      'touch .nojekyll',
      `git add --force .nojekyll ${ghPagesList}`,
      'git commit -m "deploy task"',
      'git push origin gh-pages --force',
      'git clean -x -d --force --exclude=node_modules',
      'git checkout master'
    ].join(' && ')
  }
}
