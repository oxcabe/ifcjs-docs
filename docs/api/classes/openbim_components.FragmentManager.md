---
id: "openbim_components.FragmentManager"
title: "Class: FragmentManager"
sidebar_label: "FragmentManager"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).FragmentManager

Object that can efficiently load binary files that contain
[fragment geometry](https://github.com/ifcjs/fragment).

## Hierarchy

- [`Component`](openbim_components.Component.md)<`Fragment`[]\>

  ↳ **`FragmentManager`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`UI`](../interfaces/openbim_components.UI.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/fragments/FragmentManager/index.ts:23](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L23)

___

### list

• **list**: `Object` = `{}`

All the created [fragments](https://github.com/ifcjs/fragment).

#### Index signature

▪ [guid: `string`]: `Fragment`

#### Defined in

[src/fragments/FragmentManager/index.ts:26](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L26)

## Accessors

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

The list of meshes of the created fragments.

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

#### Defined in

[src/fragments/FragmentManager/index.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L45)

## Methods

### dispose

▸ **dispose**(`disposeUI?`): `Promise`<`void`\>

[Component.get](openbim_components.Component.md#get)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `disposeUI` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/fragments/FragmentManager/index.ts:69](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L69)

___

### export

▸ **export**(`group`): `Uint8Array`

Export the specified fragments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | the fragments group to be exported. |

#### Returns

`Uint8Array`

the exported data as binary buffer.

#### Defined in

[src/fragments/FragmentManager/index.ts:134](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L134)

___

### get

▸ **get**(): `Fragment`[]

[Component.get](openbim_components.Component.md#get)

#### Returns

`Fragment`[]

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/fragments/FragmentManager/index.ts:64](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L64)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45)

___

### load

▸ **load**(`data`): `Promise`<`FragmentsGroup`\>

Loads one or many fragments into the scene.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | the bytes containing the data for the fragments to load. |

#### Returns

`Promise`<`FragmentsGroup`\>

the list of IDs of the loaded fragments.

#### Defined in

[src/fragments/FragmentManager/index.ts:113](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L113)

___

### reset

▸ **reset**(): `void`

Disposes all existing fragments

#### Returns

`void`

#### Defined in

[src/fragments/FragmentManager/index.ts:100](https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentManager/index.ts#L100)
