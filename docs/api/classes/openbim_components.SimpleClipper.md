---
id: "openbim_components.SimpleClipper"
title: "Class: SimpleClipper<T>"
sidebar_label: "SimpleClipper"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimpleClipper

A lightweight component to easily create and handle
[clipping planes](https://threejs.org/docs/#api/en/materials/Material.clippingPlanes).

**`Param`**

the instance of [Components](openbim_components.Components.md) used.

**`Param`**

the type of plane to be used by the clipper.
E.g. [SimplePlane](openbim_components.SimplePlane.md).

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SimplePlane`](openbim_components.SimplePlane.md) |

## Hierarchy

- [`Component`](openbim_components.Component.md)<`T`[]\>

  ↳ **`SimpleClipper`**

  ↳↳ [`EdgesClipper`](openbim_components.EdgesClipper.md)

## Implements

- [`Createable`](../interfaces/openbim_components.Createable.md)
- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`Hideable`](../interfaces/openbim_components.Hideable.md)
- [`UI`](../interfaces/openbim_components.UI.md)

## Properties

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](openbim_components.Event.md)<`T`\>

[Createable.onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Defined in

[src/core/SimpleClipper/index.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L35)

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](openbim_components.Event.md)<`T`\>

[Createable.onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Defined in

[src/core/SimpleClipper/index.ts:38](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L38)

___

### onAfterDrag

• `Readonly` **onAfterDrag**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Defined in

[src/core/SimpleClipper/index.ts:44](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L44)

___

### onBeforeDrag

• `Readonly` **onBeforeDrag**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Defined in

[src/core/SimpleClipper/index.ts:41](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L41)

___

### orthogonalY

• **orthogonalY**: `boolean` = `false`

Whether to force the clipping plane to be orthogonal in the Y direction
(up). This is desirable when clipping a building horizontally and a
clipping plane is created in it's roof, which might have a slight
slope for draining purposes.

#### Defined in

[src/core/SimpleClipper/index.ts:60](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L60)

___

### toleranceOrthogonalY

• **toleranceOrthogonalY**: `number` = `0.7`

The tolerance that determines whether a horizontallish clipping plane
will be forced to be orthogonal to the Y direction. [orthogonalY](openbim_components.SimpleClipper.md#orthogonaly)
has to be `true` for this to apply.

#### Defined in

[src/core/SimpleClipper/index.ts:67](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L67)

___

### uiElement

• **uiElement**: [`UIElement`](openbim_components.UIElement.md)<{ `main`: `Button`  }\>

[UI.uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/openbim_components.UI.md).[uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Defined in

[src/core/SimpleClipper/index.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L52)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[src/core/SimpleClipper/index.ts:85](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L85)

• `set` **enabled**(`state`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[src/core/SimpleClipper/index.ts:90](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L90)

___

### material

• `get` **material**(): `Material`

The material of the clipping plane representation.

#### Returns

`Material`

#### Defined in

[src/core/SimpleClipper/index.ts:115](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L115)

• `set` **material**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Defined in

[src/core/SimpleClipper/index.ts:120](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L120)

___

### size

• `get` **size**(): `number`

The size of the geometric representation of the clippings planes.

#### Returns

`number`

#### Defined in

[src/core/SimpleClipper/index.ts:128](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L128)

• `set` **size**(`size`): `void`

The size of the geometric representation of the clippings planes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/core/SimpleClipper/index.ts:133](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L133)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[src/core/SimpleClipper/index.ts:102](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L102)

• `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[src/core/SimpleClipper/index.ts:107](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L107)

## Methods

### create

▸ **create**(): `void`

[Createable.create](../interfaces/openbim_components.Createable.md#create)

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[create](../interfaces/openbim_components.Createable.md#create)

#### Defined in

[src/core/SimpleClipper/index.ts:179](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L179)

___

### createFromNormalAndCoplanarPoint

▸ **createFromNormalAndCoplanarPoint**(`normal`, `point`): `T`

Creates a plane in a certain place and with a certain orientation,
without the need of the mouse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `normal` | `Vector3` | the orientation of the clipping plane. |
| `point` | `Vector3` | the position of the clipping plane. |

#### Returns

`T`

#### Defined in

[src/core/SimpleClipper/index.ts:195](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L195)

___

### delete

▸ **delete**(`plane?`): `void`

[Createable.delete](../interfaces/openbim_components.Createable.md#delete)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane?` | `T` | the plane to delete. If undefined, the the first plane found under the cursor will be deleted. |

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[delete](../interfaces/openbim_components.Createable.md#delete)

#### Defined in

[src/core/SimpleClipper/index.ts:210](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L210)

___

### deleteAll

▸ **deleteAll**(): `void`

Deletes all the existing clipping planes.

#### Returns

`void`

#### Defined in

[src/core/SimpleClipper/index.ts:222](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L222)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/SimpleClipper/index.ts:160](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L160)

___

### get

▸ **get**(): `T`[]

[Component.get](openbim_components.Component.md#get)

#### Returns

`T`[]

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/SimpleClipper/index.ts:155](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L155)

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
