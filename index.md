---
layout: default
title: butir
---

# butir

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input"  autocomplete="on" placeholder="search..." />
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script src="{{site.baseurl}}/assets/js/simple-jekyll-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<tt><a href="{url}" tabindex="1">{title}</a></tt> ',
  noResultsText: 'No results found!',
  json: '{{site.baseurl}}/search.json'
})
</script>

{% comment %}
<!--
20201122
1112 Try again. Still not.
20201119
1818 Still error

simple-jekyll-search.min.js:6 Uncaught Error: SimpleJekyllSearch --- failed to get JSON (/search.json)
    at S (simple-jekyll-search.min.js:6)
    at simple-jekyll-search.min.js:6
    at XMLHttpRequest.<anonymous> (simple-jekyll-search.min.js:6)

Try to see https://blog.webjeda.com/instant-jekyll-search/ later
-->

<!-- 20210501 Try twitter plugin -->
<!--div class='jekyll-twitter-plugin' align="justify">
    {% twitter https://twitter.com/6unpnp maxwidth=400 limit=5 %}
</div-->
{% endcomment %}

