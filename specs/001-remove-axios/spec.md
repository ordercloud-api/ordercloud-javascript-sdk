# Feature Specification: Remove axios from the SDK

**Feature Branch**: `001-remove-axios`
**Created**: 2026-10-14
**Status**: Draft
**Input**: Remove axios as a peer dependency of `ordercloud-javascript-sdk` so a major release no longer requires callers to install, intercept, or cancel through axios.

## Summary

Callers install the SDK and call OrderCloud resources without installing axios. The SDK sends HTTP with the platform `fetch` implementation in both the browser and Node. Cancellation, timeouts, request hooks, and API errors keep working, with new public types that do not import axios.

This is a major-version breaking change. It ships in `14.0.0`.

## User Scenarios & Testing

### User Story 1 - Install the SDK without axios (Priority: P1)

A caller adds `ordercloud-javascript-sdk` to an application that does not use axios. Installation and a normal authenticated API call succeed with no axios package present.

**Why this priority**: The peer dependency is the thing being removed. If axios is still required to boot the SDK, the feature missed its purpose.

**Independent Test**: Install the SDK in a project whose lockfile has no `axios` entry, call `Products.List` against a mocked `fetch`, and confirm the call resolves.

**Acceptance Scenarios**:

1. **Given** a project with the SDK and no axios installed, **When** the caller imports a resource and makes a request, **Then** the SDK does not throw a missing-peer-dependency error.
2. **Given** the published package manifest, **When** a caller inspects `dependencies` and `peerDependencies`, **Then** axios is absent from both.
3. **Given** the SDK source and generated output, **When** those files are searched, **Then** none of them import `axios`.

### User Story 2 - Call the API the same way (Priority: P1)

A caller who never used axios cancellation, interceptors, or adapters upgrades the major version and keeps using resource methods, `Configuration.Set`, access tokens, and impersonation. Request URLs, query strings, JSON bodies, and bearer tokens match the previous SDK.

**Why this priority**: Most callers never touch axios directly. Their calls have to keep working.

**Independent Test**: Replay a representative GET with filters and a POST with a JSON body through the existing test suite, with `fetch` mocked, and compare the URL, query string, headers, and body with the current serializer.

**Acceptance Scenarios**:

1. **Given** `Configuration.Set({ baseApiUrl, timeoutInMilliseconds, clientID })`, **When** a resource method runs, **Then** the request uses that base URL, API version, and timeout.
2. **Given** an access token stored by the SDK, **When** a resource method runs, **Then** the request carries `Authorization: Bearer <token>`.
3. **Given** an expired access token and a refresh token, **When** a resource method runs, **Then** the SDK refreshes the token before the resource request, as it does today.
4. **Given** `requestOptions.accessToken`, **When** a resource method runs, **Then** that token is sent instead of the token stored on the SDK.
5. **Given** list options that include filters, search, sort, and paging, **When** the request is built, **Then** the query string matches today's `paramsSerializer` output, including repeated filter keys and the omission of null, undefined, and empty-string filter values.
6. **Given** an OAuth path, **When** the request is built, **Then** the URL is `{baseApiUrl}/{path}` and does not insert the API version segment. Other paths stay `{baseApiUrl}/{apiVersion}{path}`.

### User Story 3 - Cancel an in-flight request (Priority: P1)

A caller starts a list request and abandons it when the user navigates away. The caller passes an `AbortSignal` and aborts it. The SDK rejects that call and does not treat the abort as an OrderCloud API error.

**Why this priority**: `requestOptions.cancelToken` is on every generated resource method. Removing it without a replacement drops a documented feature.

**Independent Test**: Start a request with an `AbortController` signal, abort before the mock responds, and assert the rejection is a cancellation rather than an `OrderCloudError`.

**Acceptance Scenarios**:

1. **Given** `requestOptions.signal` from an `AbortController`, **When** the caller aborts, **Then** the in-flight request is cancelled and the returned promise rejects.
2. **Given** a cancelled request, **When** the caller inspects the rejection, **Then** it is identifiable as a cancellation and is not an `OrderCloudError`.
3. **Given** existing callers passing `cancelToken`, **When** they compile against the new types, **Then** `cancelToken` is not part of `RequestOptions`. The migration guide shows the `AbortSignal` replacement.

### User Story 4 - See OrderCloud errors (Priority: P1)

A caller handles a failed API call through `OrderCloudError`. Status, status text, error code, message, and the `errors` array still describe the OrderCloud error payload.

**Why this priority**: Application error handling depends on this shape. A transport swap that only preserves the happy path is incomplete.

**Independent Test**: Mock `fetch` with a non-2xx OrderCloud error body and assert `isOrderCloudError`, `status`, `errorCode`, `message`, and `errors`.

**Acceptance Scenarios**:

1. **Given** a response status outside 2xx with an OrderCloud `Errors` array, **When** the call rejects, **Then** the rejection is an `OrderCloudError` with `status`, `statusText`, `errorCode`, `errors`, and `isOrderCloudError === true`.
2. **Given** an error body that is a JSON string, including one with a leading BOM, **When** the SDK parses it, **Then** `errors` is the parsed `Errors` array.
3. **Given** a response body with no `Errors` entry, **When** the call rejects, **Then** the message falls back to the status text and `errors` is empty.
4. **Given** a network failure or timeout with no HTTP response, **When** the call rejects, **Then** the rejection is not presented as an OrderCloud API error with a forged status.

### User Story 5 - Observe or change a call without axios (Priority: P2)

A caller who previously registered global axios interceptors can log, rewrite, or retry a call through an SDK configuration hook. The hook does not require axios.

**Why this priority**: Interceptors are a documented extension point. Dropping them with no replacement is a silent capability loss. The hook's exact type is a design decision for the planning stage.

**Independent Test**: Register a request hook that adds a header and a response hook that records the status. Make one call and assert both hooks ran.

**Acceptance Scenarios**:

1. **Given** a request hook configured on the SDK, **When** a resource method runs, **Then** the hook sees the outgoing request and its return value is what gets sent.
2. **Given** a response hook configured on the SDK, **When** a response arrives, **Then** the hook runs before the SDK returns data or throws `OrderCloudError`.
3. **Given** the published package, **When** a caller reads the README, **Then** axios interceptors are not documented as the way to log, rewrite, or retry calls.

### User Story 6 - Replace a custom axios adapter (Priority: P3)

A caller who set `Configuration.Set({ axiosAdapter })` to mock, cache, or reroute HTTP can supply a custom `fetch` implementation instead. `axiosAdapter` is removed.

**Why this priority**: Adapters are optional and less common than cancellation, but they are public configuration. The migration has to name the replacement.

**Independent Test**: Set a custom `fetch` that returns a canned product list and assert `Products.List` resolves to that payload.

**Acceptance Scenarios**:

1. **Given** a custom `fetch` function set on the SDK configuration, **When** a resource method runs, **Then** that function handles the request instead of the global `fetch`.
2. **Given** existing callers passing `axiosAdapter`, **When** they compile against the new types, **Then** `axiosAdapter` is not part of `SdkConfiguration`.

### Edge Cases

- A request aborted before `fetch` is called rejects as a cancellation and does not send.
- A timeout uses the same default as today: 10 seconds when `timeoutInMilliseconds` is omitted.
- `timeoutInMilliseconds` and a caller-supplied `AbortSignal` both apply. Either one aborting cancels the request.
- Filter values of `false` and `0` are still serialized. Null, undefined, and empty string are still omitted.
- Non-filter params keep today's truthiness rule: `false` and `0` are omitted there, matching the current serializer.
- Impersonation still selects the impersonation token when the call is marked as impersonating.
- Auth methods (`Login`, `ElevatedLogin`, `ClientCredentials`, `Anonymous`, `RefreshToken`) use the same transport as resource methods, including the missing-axios guard that exists in `Auth.ts` today.
- Response bodies that are not JSON do not crash the error parser; `errors` is empty.
- The SDK still runs in the browser and in Node. The supported Node version is one that provides global `fetch`.

## Requirements

### Functional Requirements

- **FR-001**: The package MUST NOT declare axios as a dependency or a peer dependency.
- **FR-002**: SDK source, codegen templates, and build output MUST NOT import axios.
- **FR-003**: The SDK MUST perform HTTP with `fetch`, using the global implementation unless the caller supplies a replacement.
- **FR-004**: Callers MUST be able to run the SDK in the browser and in Node without installing an HTTP library.
- **FR-005**: Resource methods MUST keep their current arguments and return the response data on success.
- **FR-006**: The SDK MUST send `Authorization: Bearer <token>` using the same token resolution order as today: per-request `accessToken`, then impersonation token, then the stored access token.
- **FR-007**: The SDK MUST refresh an expired access token before the resource request when a refresh token is available.
- **FR-008**: Query strings MUST match the current `paramsSerializer` output for filters and other list parameters.
- **FR-009**: OAuth paths MUST omit the API version segment. All other paths MUST include it.
- **FR-010**: `RequestOptions` MUST accept an `AbortSignal` as `signal` and MUST NOT accept `cancelToken`.
- **FR-011**: Aborting that signal MUST cancel the in-flight request and reject with a cancellation the caller can distinguish from `OrderCloudError`.
- **FR-012**: `timeoutInMilliseconds` MUST abort the request when elapsed. The default MUST remain 10,000 milliseconds.
- **FR-013**: Failed OrderCloud responses MUST reject with `OrderCloudError` carrying `isOrderCloudError`, `status`, `statusText`, `errorCode`, `errors`, and `response`.
- **FR-014**: `OrderCloudError` MUST keep parsing JSON object bodies, JSON string bodies, and a leading BOM.
- **FR-015**: The SDK MUST expose a configuration hook for observing or modifying a request before it is sent and a response before the SDK handles it, without axios.
- **FR-016**: `SdkConfiguration` MUST NOT include `axiosAdapter`. Callers MUST be able to supply a custom `fetch` implementation for mocking, caching, or rerouting.
- **FR-017**: The README and migration guide MUST document the removed peer dependency, the `AbortSignal` replacement, the removal of axios interceptors, and the removal of `axiosAdapter`.
- **FR-018**: Generated docs for `cancelToken` MUST be replaced with the `signal` documentation. Codegen templates MUST emit that text so the next API sync does not restore the axios wording.
- **FR-019**: Existing unit tests that mock axios MUST be updated to mock `fetch` and MUST cover success, OrderCloud errors, cancellation, and timeout.

### Key Entities

- **RequestOptions**: Per-call options. Keeps `accessToken` and `requestType`. Replaces `cancelToken` with `signal`.
- **SdkConfiguration**: SDK-wide options. Keeps `baseApiUrl`, `apiVersion`, `clientID`, `timeoutInMilliseconds`, and `cookieOptions`. Replaces `axiosAdapter` with a custom `fetch` and the request/response hooks.
- **OrderCloudError**: Caller-facing API error. Keeps the fields callers already read. The transport-specific `request` value may change type because it will no longer be an axios `XMLHttpRequest` or Node `ClientRequest`. The migration guide states that.

## Success Criteria

- **SC-001**: A fresh install of the SDK in a project with no axios can complete an authenticated resource call.
- **SC-002**: `npm ls axios` in that project does not show axios required by `ordercloud-javascript-sdk`.
- **SC-003**: The current server and browser test suites pass against the `fetch` transport, including auth, filters, errors, cancellation, and timeout.
- **SC-004**: TypeScript compilation of a sample that uses `cancelToken` or `axiosAdapter` fails, and the migration guide shows the replacement for each.
- **SC-005**: A sample that only calls resource methods, sets configuration, and reads `OrderCloudError` fields compiles and behaves as before.

## Assumptions

- This change ships in `14.0.0`.
- There is no compatibility layer that still accepts an axios `CancelToken` or `AxiosAdapter`. Callers update at the major bump.
- Global `fetch` is available in the supported browser and Node targets. The planning stage names the minimum Node version.
- Cookie options stay in `SdkConfiguration`. How cookies are stored on each platform is unchanged by this spec.
- The public resource method list is unchanged. Only transport types, configuration, errors' transport-specific fields, and docs change.

## Out of Scope

- The custom-role auth signature change and the nested model generic change already staged for `14.0.0`.
- Rewriting resource methods by hand. Cancellation docs and types stay generated.
- Choosing a third-party HTTP client to replace axios.
- Supporting axios interceptors or adapters alongside `fetch`.
- Implementation design: the `fetch` wrapper, hook function signatures, and test doubles belong in the planning stage.

## Dependencies

- Platform `fetch` and `AbortController` in the browser and in the supported Node version.
- Codegen templates under `codegen/templates`, because `cancelToken` text is generated into every resource method.
- The migration guide and README, which currently instruct callers to install axios and use its interceptors, cancel tokens, and adapters.
