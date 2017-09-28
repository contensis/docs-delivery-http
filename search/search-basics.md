# Search
A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. The query API allows any required sub-query structure to be defined and a comprehensive selection of Operators enable individual field level evaluation.

- [Queries](#queries)
- [Sub-queries](#sub-queries)
- [Ordering](#ordering)
- [Paging](#paging)
- [Weighting](#weighting)
- [Specifying fields](#specifying-fields)
- [Complete example](#complete-example)


## Queries
This example demonstrates a simple search.

```http
POST: /api/search

{
    "where": [
        {
            "field": "title",
            "contains": "Batman"
        },
        {
            "field": "runtime",
            "greaterThan": 200
        }
    ]
}
```

## Sub-queries
A sub-query is a query within another query that is used as a condition to further restrict the results. Effectively they are defined by an explicit nesting of [logical operators](query-operators.md#logical-operators).

This example demonstrates a simple search with a sub-query:

```json
{
    "where": [
        {
            "field": "title",
            "contains": "Batman"
        },
        {
            "or": [
                {
                    "field": "releaseDate",
                    "greaterThan": 1960
                },
                {
                    "field": "tagline",
                    "contains": "gotham"
                }
            ]
        }
    ]
}
```

## Ordering
Results can be ordered by one or more fields in an ascending or descending direction. Order clauses are prioritised in the order that they are added. By default, if no order clauses are specified then the entry results are ordered by the EntryTitle in an ascending direction.

### Ascending order
Order by *releaseDate* in an ascending direction.

```json
{
    "orderBy": [{
        "asc": "releaseDate"
    }],
}
```



### Descending order
Order by *releaseDate* in a descending direction.
```json
{
    "orderBy": [{
        "desc": "releaseDate"
    }],
}
```

## Paging
Paging allows the number of results to be restricted to a defined count so that the results are easier to handle and ensures a response is returned quickly.

The page number can also be specified to allow which set of results is to be returned.

```json
{
    "pageSize": 50,
    "pageIndex": 1
}
```

## Weighting

@TODO: This needs fleshing out

## Specifying fields

### System fields
System fields such as id, contentTypeId, projectId, versionNo etc. are under the *sys* object and can be accessed using a dot notation, e.g. sys.id, sys.contentTypeId, sys.projectId, sys.version.versionNo.

The *entryTitle* field is a dynamic value, determined by the *EntryTitleField* value in the content type.

### Data fields
Fields defined in the content type for the entry can be accessed by their API id.


## Complete example
The following example combines the ordering, paging and weighting concepts.


```http
POST: /api/delivery/projects/{projectId}/entries/search
{
    "where": [
        {
            "field": "title",
            "contains": "Batman",
            "weight": 100
        },
        {
            "field": "synopsis",
            "freeText": "gotham",
            "weight": 30
        },
        {
            "field": "runtime",
            "greaterThan": 200
        }
    ],
    "orderBy": [
        {
            "desc": "releaseDate"
        }
    ],
    "pageIndex": 1,
    "pageSize": 50
}
```
