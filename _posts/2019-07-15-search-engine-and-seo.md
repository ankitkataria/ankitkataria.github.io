---
layout: post
title: "rake search:begin" 
author: "Ankit Kataria"
category: journal
image:
---

This week, I was working on implementing search improvements [#402](https://github.com/CircuitVerse/CircuitVerse/pull/402) and SEO [#406](https://github.com/CircuitVerse/CircuitVerse/pull/406) to our website. In the [previous](http://ankitkataria.me/journal/phase-2-init.html) blog, I had mentioned that we had decided to go with implementing search with both Postgres and sunspot. This week I was working on getting the Postgres part done. I extended pg_search support to the User model and did the required UI changes to accommodate both User and Project search. Also, Postgres bindings were added so that Projects could be found with author names and tags. Here's what the supercharged search bar looks like - 

<p align="center">
	<img src="/assets/img/search_bar_1.png" width="80%">
</p>

Also, this is our new search page -

<p align="center">
	<img src="/assets/img/search_bar_2.png" width="80%">
</p>

# <code style="font-size: 24px"> seo = [] </code>

Search Engine Optimization (or Witchcraft and Wizardry, as most people call it), is the processes of adopting practices to increase the quantity and quality of traffic on a website. The following are the four most basic approaches that one can take to get started with SEO. I implemented the same for CircuitVerse [#402](https://github.com/CircuitVerse/CircuitVerse/pull/402)

# <code style="font-size: 24px"> seo.push(:custom_error_pages) </code>

Custom error pages play a crucial role in improving SEO of a website. How the user behaves when he/she lands at a page that could not be found is also responsible for how a website does during searching. The scenario in which the users stays on the website after encountering a missing page is likely to improve how your website performs with SEs, than the scenario when the user immediately closes the webpage. So it is always recommended to have error pages modelled around the website. I customized the 404, 422 and 500 error pages. Here’s my favourite one - 

<p align="center">
	<img src="/assets/img/server_error_500.png" width="80%">
</p>

# <code style="font-size: 24px"> seo.push(:meta_tags) </code>

Meta tags help web crawlers to better understand the content of the page. They can also help in making content more discoverable on social platforms like Twitter and Facebook. After addition of Open Graph and Twitter meta tags, shared content on these platforms looked like this. 

<p align="center" style="display: flex">
	<img src="/assets/img/fb_card.png" style="width: 49%; height: 49%; padding: 10px">
	<img src="/assets/img/twitter_card.png" style="width: 40%; height: 40%; padding: 10px">
</p>

It’s a little tricky to test these meta tags for what cards they will produce. For testing, [Facebook URL Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) are used. But, these debuggers don’t work with local content. I used [localtunnel](https://github.com/localtunnel/localtunnel) to create a network tunnel to make localhost accessible publicly. Say, your server is running at port: 3000. Then the following generates a random URL that tunnels all traffic to your localhost. 


```
$ npm install -g localtunnel
$ lt --port 3000 
your url is: https://chilly-earwig-56.localtunnel.me
```

FB and Twitter debuggers can then be used to verify the validity of our meta tags.

# <code style="font-size: 24px"> seo.push(:structred_data) </code>

This is a standardized format provided by Google that helps it’s crawler understand content on the internet. It comes in two flavours - JSON-LD and Microdata. Google recommends using JSON-LD. Here is a sample for our projects page - 

```
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Article",
  "name" : "8-Bit Adder",
  "author" : {
    "@type" : "Person",
    "name" : "Quantyer"
  },
  "articleSection" : "Project",
  "articleBody" : "8-Bit\nAdder <BR/>\n</DIV><DIV>This 8-Bit Adder is made out of normal Full Adder and they are\nmade out of Half Adder. Normaly the Adder is part of the ALU (Arithmetic\nLogic Unit) witch does all the math in a modern Prozessor. Things to\nknow about the Adder: <BR/>\n</DIV><BLOCKQUOTE><BLOCKQUOTE><BLOCKQUOTE><BLOCKQUOTE><BLOCKQUOTE><BLOCKQUOTE><UL>\n<LI>With Carry in and outCan Add two Numbers between 1\nand 255 </LI>\n<LI>The Result can be with Carry out between 1 and 511(without\nbetween 1 and 255) </LI>\n<LI>Expandable to a Subtractor"
}
</script>
```

Structured data follows a strict vocabulary that is defined by [schema.org](https://schema.org/). Google provides a very intuitive [platform](https://search.google.com/structured-data/testing-tool/u/0/) for testing and creating structured data for your websites. 

# <code style="font-size: 24px"> seo.push(:sitemaps) </code>

Sitemaps are used by web crawlers to discover content over a web page and to provide the information about the website’s structure to the search engine. Sitemaps can be generated in rails very efficiently using [sitemap_generator](https://github.com/kjvarga/sitemap_generator) gem. Further, this sitemap needs to be registered with [Google’s Search Console](https://search.google.com/search-console)

<p align="center">
	<img src="/assets/img/search_console.png" width="80%">
</p>

PS. localtunnel helped here too. 

# <code style="font-size: 24px"> Week.next? </code>

In the coming days, I'll be focusing on wrapping up work with search and starting initial work on the next task for Phase 2. This week is going to be very challenging and there will be a lot of mistakes, experimentation and learning involved. I'll leave you this joke until the next one. 

```
- Knock Knock!
- An async function
- Who's there?
```

