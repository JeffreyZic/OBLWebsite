# OBL
Website for Online OOTP Orange and Blue League Baseball

## Synopsis
This is a web site being designed for my online OOTP league, however I intend
it to be able to be used for anyone else who wantes a web site for their league
as well. It will not be as robust as StatsLab at first, however I hope that to
make it so.

StatsLab however, is not easily cusomizable so I thought it would be nice if
there was some way to have more modern looking web pages for leagues that can
be customized to fit your leagues colors and logos and just be easier to
peruse for information on players and teams.

This is being built with Apache, NodeJS and SQL, and is using Digital Ocean and
Jenkins for CD/CI.

## Build Instructions
You should be able to clone and use NPM install to install the dependencies.

## To Do
- Create tests and functions for db
- Organize teams into their respective leagues and divisions
- Calculate and display the current standings
- Allow news articles to be written to a DB
- Retreive select player stats from DB and display them
- Create a login method - hopefully shared with StatsLab
- Create a trade submission module
- Create a team file upload module