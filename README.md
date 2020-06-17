# Live - Search 
user can type a query into an input element,
a corresponding list of items matching the query is rendered below the input,
an http request is made only for a so-called stable query (the required time has to elapse since a user stopped typing),
an http request should not be performed if a stable query has not changed,
a race condition has to be handled so that stale results are not rendered.
