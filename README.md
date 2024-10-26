# ts-http-methods

Enum of HTTP methods for TypeScript.

## Installation

```bash
npm install ts-http-methods
```

## Usage

```typescript
import { HttpMethod } from 'ts-http-methods';

console.log(HttpMethod.Get); // 'GET'
console.log(HttpMethod.Head); // 'HEAD'
console.log(HttpMethod.Post); // 'POST'
console.log(HttpMethod.Put); // 'PUT'
console.log(HttpMethod.Delete); // 'DELETE'
console.log(HttpMethod.Connect); // 'CONNECT'
console.log(HttpMethod.Options); // 'OPTIONS'
console.log(HttpMethod.Trace); // 'TRACE'
console.log(HttpMethod.Patch); // 'PATCH'
```

## Http Methods

```typescript
export enum HttpMethod {
    Get = 'GET',
    Head = 'HEAD',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE',
    Connect = 'CONNECT',
    Options = 'OPTIONS',
    Trace = 'TRACE',
    Patch = 'PATCH'
}
```