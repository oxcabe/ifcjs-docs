---
id: "openbim_components.MaterialManager"
title: "Class: MaterialManager"
sidebar_label: "MaterialManager"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).MaterialManager

A tool to easily handle the materials of massive amounts of
objects and scene background easily.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`string`[]\>

  ↳ **`MaterialManager`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/core/MaterialManager/index.ts:17](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L17)

## Methods

### addMaterial

▸ **addMaterial**(`id`, `material`): `void`

Creates a new material style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the identifier of the style to create. |
| `material` | `Material` | the material of the style. |

#### Returns

`void`

#### Defined in

[src/core/MaterialManager/index.ts:120](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L120)

___

### addMeshes

▸ **addMeshes**(`id`, `meshes`): `void`

Assign meshes to a certain style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the identifier of the style. |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | the meshes to assign to the style. |

#### Returns

`void`

#### Defined in

[src/core/MaterialManager/index.ts:132](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L132)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/MaterialManager/index.ts:80](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L80)

___

### get

▸ **get**(): `string`[]

[Component.get](openbim_components.Component.md#get).

#### Returns

`string`[]

list of created materials.

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/MaterialManager/index.ts:44](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L44)

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

### resetBackgroundColor

▸ **resetBackgroundColor**(): `void`

Resets the scene background to the color that was being used
before applying the material manager.

#### Returns

`void`

#### Defined in

[src/core/MaterialManager/index.ts:108](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L108)

___

### set

▸ **set**(`active`, `ids?`): `void`

Turns the specified material styles on or off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to turn it on or off. |
| `ids` | `string`[] | the ids of the style to turn on or off. |

#### Returns

`void`

#### Defined in

[src/core/MaterialManager/index.ts:54](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L54)

___

### setBackgroundColor

▸ **setBackgroundColor**(`color`): `void`

Sets the color of the background of the scene.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[src/core/MaterialManager/index.ts:94](https://github.com/ifcjs/components/blob/e46138a/src/core/MaterialManager/index.ts#L94)
