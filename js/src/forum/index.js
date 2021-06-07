import { extend } from 'flarum/extend';
import DiscussionPage from 'flarum/components/DiscussionPage';

app.initializers.add('block-cat/similar-discussions', () => {
  extend(DiscussionPage.prototype, 'view', function() {
    // tags name of current discussion
    let discussionTagsName = [];

    // extract all tags name from current discussion
    app.store.all('tags').map((tag) => {
      try {
        for (let elem of this.discussion.data.relationships.tags.data) {
          if (elem.id === tag.id()) {
            discussionTagsName.push(tag.name());
          }
        }
      } catch {}
    });

    // check if current discussion haven't any tags
    if (discussionTagsName.length === 0) {
      // hide all discussions with tags
      app.store.all('tags').map((tag) => {
        $('.DiscussionPage-list .DiscussionListItem:contains(' + tag.name() + ')').css('display','none');
      });
      return;
    }

    // hide all discussions from pane
    $('.DiscussionPage-list .DiscussionListItem').css('display','none');
    
    // unhide just discussions with discussionTagsName
    for (let name of discussionTagsName) {
      $('.DiscussionPage-list .DiscussionListItem:contains(' + name + ')').css('display','block');
    }
  });
});