---
id: "openbim_components.SimpleRaycaster"
title: "Class: SimpleRaycaster"
sidebar_label: "SimpleRaycaster"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimpleRaycaster

A simple [raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
that allows to easily get items from the scene using the mouse and touch
events.

## Hierarchy

- `BaseRaycaster`

  ↳ **`SimpleRaycaster`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

BaseRaycaster.enabled

#### Defined in

[src/core/SimpleRaycaster/index.ts:13](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleRaycaster/index.ts#L13)

___

### mouse

• `Readonly` **mouse**: [`Mouse`](openbim_components.Mouse.md)

The position of the mouse in the screen.

#### Defined in

[src/core/SimpleRaycaster/index.ts:16](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleRaycaster/index.ts#L16)

## Methods

### castRay

▸ **castRay**(`items?`): ``null`` \| `Intersection`<`Object3D`<`Event`\>\>

Throws a ray from the camera to the mouse or touch event point and returns
the first item found. This also takes into account the clipping planes
used by the renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | the [meshes](https://threejs.org/docs/#api/en/objects/Mesh) to query. If not provided, it will query all the meshes stored in [Components.meshes](openbim_components.Components.md#meshes). |

#### Returns

``null`` \| `Intersection`<`Object3D`<`Event`\>\>

#### Overrides

BaseRaycaster.castRay

#### Defined in

[src/core/SimpleRaycaster/index.ts:46](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleRaycaster/index.ts#L46)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Overrides

BaseRaycaster.dispose

#### Defined in

[src/core/SimpleRaycaster/index.ts:33](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleRaycaster/index.ts#L33)

___

### get

▸ **get**(): `Raycaster`

[Component.get](openbim_components.Component.md#get)

#### Returns

`Raycaster`

#### Overrides

BaseRaycaster.get

#### Defined in

[src/core/SimpleRaycaster/index.ts:28](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleRaycaster/index.ts#L28)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

BaseRaycaster.hasUI

#### Defined in

[src/base-types/component.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

BaseRaycaster.isConfigurable

#### Defined in

[src/base-types/component.ts:57](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

BaseRaycaster.isDisposeable

#### Defined in

[src/base-types/component.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

BaseRaycaster.isHideable

#### Defined in

[src/base-types/component.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

BaseRaycaster.isResizeable

#### Defined in

[src/base-types/component.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

BaseRaycaster.isUpdateable

#### Defined in

[src/base-types/component.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45)
