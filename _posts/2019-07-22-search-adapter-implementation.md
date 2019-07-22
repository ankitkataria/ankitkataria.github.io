---
layout: post
title: "Adapters, Factories and Search" 
author: "Ankit Kataria"
category: journal
image:
---

`puts “Hello Folks!”` This week, I was working on several small things. Firstly, I was working on perfecting the improvements PR [#402](https://github.com/CircuitVerse/CircuitVerse/pull/402) (awaiting feedback). The current structure that I’ve proposed follows the adapter design pattern. The basic idea is having two different adapters for `solr` and `pg` and doing dependency injection in the search module with the required adapter according to the production environment. 

```
class Adapter
  def initialize(relation)
    @relation = relation
    # Condition to change adapters will go here
    @adapter = ENV['USE_SOLR'] == 'true' ? SolrAdapter : PGAdapter
  end

  def call(query)
    @adapter.send("search_#{@relation.name.downcase}", @relation, query)
  end
End

class PGAdapter
  def self.search_project(relation, query)
     # pg specific search logic for project
  end

  def self.search_user(relation, query)
     # pg specific search logic for users
  end
end

# Similarly, a SolrAdapter will be defined
```

This adapter will be used inside the query object for the model like so:

```
# inside constructor of ProjectQuery
@adapter = Adapter.new(relation)

# Querying a resource
@adapter.call(query)
```

This method of adapter implementation scales very easily across no of adapters and query models. It also follows the [SOLID](https://thoughtbot.com/blog/back-to-basics-solid) rule of developement. All the changes regarding this proposal can be found in [#8345f3](https://github.com/CircuitVerse/CircuitVerse/pull/402/commits/8345f3bc5746fdd48ec348b25206bd82b56b470d)

So now the search operates basically in 4 layers - 

1. `SearchController` - Here, `SearchHelper` is used to get the search result.

2. `SearchHelper` - Acts as a factory for query objects corresponding to each model. The [factory design pattern](https://www.geeksforgeeks.org/design-patterns-set-2-factory-method/) is also very common in Java.

3. `ProjectQuery` & `UserQuery` - Calls on instance of `Adapter` to execute query.

4. `Adapter` - Has either of `PGAdapter` or `SolrAdapter` injected, which have the environment-specific logic for querying.

<p align="center">
	<img src="/assets/img/search-flow.png" width="50%">
</p>
 
Before arriving at this approach, I experimented with a lot of different approaches and as it is so rightly said,

> Failure is simply an opportunity to begin again, this time more intelligently. 

I would like to talk about one another approach that I implemented in [#6c93d8](https://github.com/CircuitVerse/CircuitVerse/pull/402/commits/6c93d8fc837210356466f0de5011a7dee0d75248) using Ruby mixins. 

```
module GenericQuery
  MAX_RESULTS_PER_PAGE = 5

  def call(query_params, relation = nil)
    object = relation.present? ? new(relation) : new
    object.query(query_params[:q]).paginate(page: query_params[:page],
        per_page: MAX_RESULTS_PER_PAGE)
  end
end

class ProjectsQuery
  extend GenericQuery

  attr_reader :relation

  def initialize(relation = Project.all)
    @relation = relation
  end

  def query(query)
    relation.includes(:author, :tags).search(query).
      select("id,author_id,image_preview,name,description,view")
  end
end
```

Now projects can be queried like so:

```
ProjectsQuery.call(query_params, Project.public_and_not_forked)
```

But, Ruby mixins are in essence, similar to inheritance, and composition (used in the previous approach) is usually preferred over inheritance in software development. More about it [here.](https://en.wikipedia.org/wiki/Composition_over_inheritance)

# <code style="font-size: 24px"> rake interactive_book:ci:install </code>

The [Interactive-Book](http://learn.circuitverse.org), is an awesome effort CircuitVerse to provide the youngsters with a comprehensive understanding of digital logic design through various plug and play demonstrations. It is also open-source and is being worked on by [Aman Singla](http://github.com/amansingla97/). I worked on adding a basic circle-ci config [#11](https://github.com/CircuitVerse/Interactive-Book/pull/11) to tests builds against various contributions that are being made to it.

# <code style="font-size: 24px"> Work.next? </code>

The second evaluation begins from today and ends on the 26th. Meanwhile, I’ll be working on my bucket list [#412](https://github.com/CircuitVerse/CircuitVerse/issues/412). The first task in the list that I’ll be tackling is:

- Create an attributed subscribed (boolean) in users, set it to true, have a page either in rails admin or some other place to send emails to all users who are subscribed (admins only). The email should have an unsubscribe button.

Until the next update, 

> Hasta la vista!



