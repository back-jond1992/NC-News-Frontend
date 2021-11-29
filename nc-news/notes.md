# Checklist for Northcoders News Front End

​

## README - write your own and make sure that it:

​

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)
      ​

## General

​

- [ ] "un-nest" the folder structure of the repo (move everything out of `nc-news` into the root)
      ​

## UX

​

- [tick] Responsive design
- [tick] Items aligned
- [tick] Content legible (not too wide, obstructed, etc)
- [tick] Refreshing doesn’t cause an issue on sub-pages
- [tick] No errors in the console
- [ ] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
      ​

## Functionality

​

### Login

​

- [tick] Add a button to log out
- [tick] Make sure the user avatar is circular
  ​

### Articles

​

- [tick] I would advise using routing / links to navigate between topics
- [tick] Make sure the "sort" select displays what option has been selected
  ​

### Individual Article / Comments

​

- [tick] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [tick] Votes are persistent when page is refreshed
- [ ] Add newly posted comments to the top of the comments list, rather than in a separate section
      ​

## Error Handling

​

- [ ] Bad url
- [tick] Bad topic slug in url
- [tick] Bad article id in url
- [ ] Post comment: No text in comment body
      ​

## Code

​

- [ ] I think that articles could be stored lower in the component tree
- [tick] Components reused where possible (`Articles` / `Voter`...)
- [tick] Make sure state is initialised with the same data type that it will become (e.g. chosenTopic starts as an array before being set to a string)
- [ ] No `console.log`s / comments
      ​

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END
