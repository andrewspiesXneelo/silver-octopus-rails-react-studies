[Documentation - v1.0.0](../README.md) / [Modules](../modules.md) / [services/user](../modules/services_user.md) / default

# Class: default

[services/user](../modules/services_user.md).default

## Hierarchy

- [`default`](services_api.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](services_user.default.md#constructor)

### Methods

- [createUser](services_user.default.md#createuser)
- [deleteUser](services_user.default.md#deleteuser)
- [getUser](services_user.default.md#getuser)
- [getUsers](services_user.default.md#getusers)
- [request](services_user.default.md#request)
- [updateUser](services_user.default.md#updateuser)

## Constructors

### constructor

• **new default**()

#### Overrides

[default](services_api.default.md).[constructor](services_api.default.md#constructor)

#### Defined in

[services/user.ts:12](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/user.ts#L12)

## Methods

### createUser

▸ **createUser**(`user`): `Promise`<[`User`](../interfaces/services_user.User.md)\>

createUser(user: User)

Create new user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`User`](../interfaces/services_user.User.md) | User object |

#### Returns

`Promise`<[`User`](../interfaces/services_user.User.md)\>

Promise object represents user

#### Defined in

[services/user.ts:51](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/user.ts#L51)

___

### deleteUser

▸ **deleteUser**(`id`): `Promise`<[`User`](../interfaces/services_user.User.md)\>

deleteUser(id: number)

Delete user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | User id |

#### Returns

`Promise`<[`User`](../interfaces/services_user.User.md)\>

Promise object represents user

#### Defined in

[services/user.ts:75](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/user.ts#L75)

___

### getUser

▸ **getUser**(`id`): `Promise`<[`User`](../interfaces/services_user.User.md)\>

getUser(id: number)

Get user by id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | User id |

#### Returns

`Promise`<[`User`](../interfaces/services_user.User.md)\>

Promise object represents user

#### Defined in

[services/user.ts:36](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/user.ts#L36)

___

### getUsers

▸ **getUsers**(): `Promise`<[`User`](../interfaces/services_user.User.md)[]\>

getUsers()

Get all users

#### Returns

`Promise`<[`User`](../interfaces/services_user.User.md)[]\>

Promise object represents users

Promise object represents users

#### Defined in

[services/user.ts:24](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/user.ts#L24)

___

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

#### Inherited from

[default](services_api.default.md).[request](services_api.default.md#request)

#### Defined in

[services/api.ts:33](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/api.ts#L33)

___

### updateUser

▸ **updateUser**(`user`): `Promise`<[`User`](../interfaces/services_user.User.md)\>

updateUser(user: User)

Update user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`User`](../interfaces/services_user.User.md) | User object |

#### Returns

`Promise`<[`User`](../interfaces/services_user.User.md)\>

Promise object represents user

#### Defined in

[services/user.ts:63](https://github.com/andrewspiesXneelo/silver-octopus-rails-react-studies/blob/0ed22d3/client_app/src/services/user.ts#L63)
