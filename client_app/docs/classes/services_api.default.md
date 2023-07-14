[Documentation - v1.0.0](../README.md) / [Modules](../modules.md) / [services/api](../modules/services_api.md) / default

# Class: default

[services/api](../modules/services_api.md).default

## Hierarchy

- **`default`**

  ↳ [`default`](services_user.default.md)

## Table of contents

### Constructors

- [constructor](services_api.default.md#constructor)

### Properties

- [apiUrl](services_api.default.md#apiurl)
- [config](services_api.default.md#config)
- [headers](services_api.default.md#headers)

### Methods

- [request](services_api.default.md#request)

## Constructors

### constructor

• **new default**()

#### Defined in

[services/api.ts:21](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/api.ts#L21)

## Properties

### apiUrl

• `Private` **apiUrl**: `string` = `''`

#### Defined in

[services/api.ts:14](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/api.ts#L14)

___

### config

• `Private` **config**: `Config`

#### Defined in

[services/api.ts:15](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/api.ts#L15)

___

### headers

• `Private` **headers**: `Headers`

#### Defined in

[services/api.ts:19](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/api.ts#L19)

## Methods

### request

▸ **request**(`type`, `path`, `data?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `path` | `string` |
| `data?` | `any` |

#### Returns

`Promise`<`any`\>

#### Defined in

[services/api.ts:33](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/api.ts#L33)
