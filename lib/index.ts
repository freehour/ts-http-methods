
/**
 * HTTP defines a set of request methods to indicate the purpose of the request and what is expected if the request is successful.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export enum HttpMethod {

    /**
     * The `GET` method requests a representation of the specified resource.
     * Requests using `GET` should only retrieve data and should not contain a request content.
     */
    Get = 'GET',

    /**
     * The `HEAD` method asks for a response identical to a `GET` request, but without a response body.
     */
    Head = 'HEAD',

    /**
     * The `POST` method submits an entity to the specified resource,
     * often causing a change in state or side effects on the server.
     */
    Post = 'POST',

    /**
     * The `PUT` method replaces all current representations of the target resource with the request content.
     */
    Put = 'PUT',

    /**
     * The `DELETE` method deletes the specified resource.
     */
    Delete = 'DELETE',

    /**
     * The `CONNECT` method establishes a tunnel to the server identified by the target resource.
     */
    Connect = 'CONNECT',

    /**
     * The `OPTIONS` method is used to describe the communication options for the target resource.
     */
    Options = 'OPTIONS',

    /**
     * The `TRACE` method performs a message loop-back test along the path to the target resource.
     */
    Trace = 'TRACE',

    /**
     * The `PATCH` method is used to apply partial modifications to a resource
     */
    Patch = 'PATCH',
}
