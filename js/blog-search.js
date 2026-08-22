/* Client-side search for the Jupyter blog.
 * Filters the server-rendered post list against a JSON index of full post
 * text (blog/search.json), so the page works without JavaScript and search
 * works without a server. */
(function () {
  'use strict';

  var input = document.getElementById('blog-search-input');
  var list = document.getElementById('blog-post-list');
  var status = document.getElementById('blog-search-status');
  var noResults = document.getElementById('blog-no-results');
  if (!input || !list) {
    return;
  }

  var items = Array.prototype.slice.call(
    list.querySelectorAll('.blog-list-item')
  );
  var index = null; // url -> searchable text, populated lazily

  function loadIndex() {
    if (index) {
      return;
    }
    index = {};
    var request = new XMLHttpRequest();
    request.open('GET', list.getAttribute('data-search-index') || '/blog/search.json');
    request.onload = function () {
      if (request.status < 200 || request.status >= 300) {
        return;
      }
      var posts;
      try {
        posts = JSON.parse(request.responseText);
      } catch (e) {
        return;
      }
      posts.forEach(function (post) {
        index[post.url] = (
          post.title + ' ' + post.author + ' ' + post.date + ' ' +
          post.tags + ' ' + post.content
        ).toLowerCase();
      });
      // Re-run the current query now that full-text data is available.
      applyFilter(input.value);
    };
    request.send();
  }

  function itemText(item) {
    var url = item.getAttribute('data-url');
    if (index && index[url]) {
      return index[url];
    }
    // Fall back to the visible text until the index has loaded.
    return item.textContent.toLowerCase();
  }

  function applyFilter(query) {
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (item) {
      var text = itemText(item);
      var match = terms.every(function (term) {
        return text.indexOf(term) !== -1;
      });
      item.hidden = !match;
      if (match) {
        shown += 1;
      }
    });
    if (noResults) {
      noResults.hidden = shown !== 0;
    }
    if (status) {
      if (terms.length === 0) {
        status.textContent = '';
      } else if (shown === 1) {
        status.textContent = '1 matching post';
      } else {
        status.textContent = shown + ' matching posts';
      }
    }
  }

  input.addEventListener('focus', loadIndex);
  input.addEventListener('input', function () {
    loadIndex();
    applyFilter(input.value);
  });
})();
