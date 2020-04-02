---
description: A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. 
---
# Search

A query tree structure, along with order and paging specifiers, allows a search to be performed against indexed documents held in ElasticSearch. The query API allows any required sub-query structure to be defined and a comprehensive selection of Operators enable individual field level evaluation.

* [Queries](#queries)
* [Location searches](#location-searches)
* [Sub-queries](#sub-queries)
* [Ordering](#ordering)
* [Paging](#paging)
* [Weighting](#weighting)
* [Specifying fields](#specifying-fields)
* [Ordering by distance](#ordering-by-distance)
* [Complete example](#complete-example)
* [HTTP GET queries](#http-get-queries)

## Queries

This example demonstrates a simple search using HTTP POST.

```json
POST: /api/delivery/projects/{projectId}/entries/search

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

Searches can also be carried out using [HTTP GET queries](#http-get-queries).

## Location searches

Search for locations within a radius of a specified location.

### Supported distance units

| Unit          | Search value                   |
|---------------|--------------------------------|
| Mile          | `mi` or `miles`                |
| Yard          | `yd` or `yards`                |
| Feet          | `ft` or `feet`                 |
| Inch          | `in` or `inch`                 |
| Kilometer     | `km` or `kilometers`           |
| Meter         | `m` or `meters`                |
| Centimeter    | `cm` or `centimeters`          |
| Millimeter    | `mm` or `millimeters`          |
| Nautical mile | `NM`, `nmi` or `nauticalmiles` |

### Example

Find all entries which have a location within 10.5 miles of Ludlow Castle's location.
Append the search value at the end of the distance specified, so for example "10.5mi" or "10.5miles".

```json
{
    "where": [{
        "field": "location",
        "distanceWithin": {
            "lat": "52.36700505",
            "lon": "-2.72304296",
            "distance": "10.5mi"
        }
    }]
}
```

When searching for a location field, you can also [order the results by distance](#ordering-by-distance).

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

The page number can also be specified to allow which set of results is to be returned. The page size is limited to a maximum of 10,000 however this is not recommended.

```json
{
    "pageSize": 50,
    "pageIndex": 1
}
```

## Specifying fields

### System fields

System fields such as id, contentTypeId, projectId, versionNo etc. are under the *sys* object and can be accessed using a dot notation, e.g. sys.id, sys.contentTypeId, sys.projectId, sys.version.versionNo.

The *entryTitle* and *entryDescription* fields are dynamic values, determined by the *EntryTitleField* and *EntryDescriptionField* values in the content type.

### Data fields

Fields defined in the content type for the entry can be accessed by their API id.

### All fields

All fields can be searched by specifying an asterisk (*) in the field id. Note, the only supported operator is FreeText.

#### Example

```json
POST: /api/delivery/projects/{projectId}/entries/search
{
    "where": [
        {
            "field": "*",
            "equalTo": "Interstellar"
        }
    ]
}
```

### Array fields

Searching on array fields is the same as searching on a child property of a field, you just use the dot notation. All operators support searching across array fields.

#### Example array field search

This example searches for a quote source of "Bruce Willis" within a quote array field called movieQuote.

```json
POST: /api/delivery/projects/{projectId}/entries/search
{
    "where": [
        {
            "field": "movieQuote.source",
            "equalTo": "Bruce Willis"
        }
    ]
}
```

## Ordering by distance

When [searching by location](#location-searches), to return the search results according to the distance of the location field in each entry from the distance specified in the distanceWithin search, add the location field to the [orderBy](#ordering) clause, e.g.

```json
{
    "where": [{
        "field": "location",
        "distanceWithin": {
            "lat": "52.36700505",
            "lon": "-2.72304296",
            "distance": "10.5mi"
        }
    }],
    "orderBy": [{
        "asc": "location"
    }]
}
```

The search results will include the distance from the location specified in the distanceWithin search to the location in the entry, in the same units that were specified in the search (but without the distance units). e.g.

```json
"location": {
        "lat" : 51.209347,
        "lon" : -2.6445979000000079,
        "distance" : 83.292260807739808
}
```

## Complete example

The following example combines the ordering, paging and weighting concepts.

```json
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

## Specifying fields to return

If you have large entries and only require a subset of fields it is worth limiting the fields returned in the results. This will reduce the size of the payload from the API which in turn will improve performance. The fields returned in the results can be specified using a "fields" clause. You can include fields by specifiying the field API ID or you can exclude fields by prefixing the field API ID with a -. Field limiting also applies to linked entries when specifying a linkDepth.

Example of returning the title and synopsis
```json
{
    "fields": [
        "title",
        "synopsis"
    ]
}
```
Example of returning all fields except for description and actors
```json
{
    "fields": [
        "-description",
        "-actors"
    ]
}
```

If no fields are specified then all the data fields and system fields for an entry will be returned.

### Data fields

Fields defined in the content type for the entry can be specified using their API ID.

### System fields

By default all system fields will be returned for an entry.

If you specify *-sys*, then the following system fields wil still be returned as they are the minimum set:

* sys.id
* sys.dataFormat
* sys.language
* sys.contentTypeId
* sys.uri

Specific system fields can be specified to be returned by being prefixed with *sys.*, e.g.

```json
{
    "fields": [
        "sys.uri",
        "sys.owner"
    ]
}
```

The optional system fields that can be specified are:

* sys.projectId
* sys.owner
* sys.slug
* sys.isPublished
* sys.availableLanguages
* sys.allUris
* sys.workflow
* sys.workflow.id
* sys.workflow.state
* sys.metadata
* sys.properties
* sys.version
* sys.version.publishedBy
* sys.version.createdBy
* sys.version.created
* sys.version.versionNo
* sys.version.modified
* sys.version.modifiedBy
* sys.version.published

It is not possible to specify individual fields within the *properties* and *metadata* fields.


## HTTP GET queries

Searches can also be carried out using an HTTP GET query, with the JSON for the individual sections of the query (*where*, *orderBy*, *pageSize*, *pageIndex*, *fields*) specified as querystring parameters.

This example demonstrates a simple search using HTTP GET:

```json
GET: /api/delivery/projects/{projectId}/entries/search?where=[{"field":"title","contains":"Batman"},{"field":"runtime","greaterThan":200}]
```

This example demonstrates a more complex search using all the search options:

```json
GET: /api/delivery/projects/{projectId}/entries/search?where=[{"field":"title","contains":"Batman"},{"field":"runtime","greaterThan":200}]&orderBy=[{"asc":"title"}]&pageSize=10&pageIndex=0&fields=["entryTitle","entryDescription"]
```

N.B. The querystring parameters will need to be URL encoded, this has not been done in the above examples for clarity. When URL encoded the examples look like this:

```json
GET: /api/delivery/projects/{projectId}/entries/search?where=%5B%7B%22field%22%3A%22title%22%2C%22contains%22%3A%22Batman%22%7D%2C%7B%22field%22%3A%22runtime%22%2C%22greaterThan%22%3A200%7D%5D
```

```json
GET: /api/delivery/projects/{projectId}/entries/search?where=%5B%7B%22field%22%3A%22title%22%2C%22contains%22%3A%22Batman%22%7D%2C%7B%22field%22%3A%22runtime%22%2C%22greaterThan%22%3A200%7D%5D%26orderBy%3D%5B%7B%22asc%22%3A%22title%22%7D%5D%26pageSize%3D10%26pageIndex%3D0%26fields%3D%5B%22entryTitle%22%2C%22entryDescription%22%5D
```
