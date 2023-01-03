import { Meteor } from 'meteor/meteor';
import { Issues } from '/imports/api/Issues';

async function insert({ title, url }) {
  await Issues.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  if (await Issues.find().countAsync() === 0) {
    await insert({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

   
  }
});


