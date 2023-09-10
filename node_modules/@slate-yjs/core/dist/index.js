var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/plugins/withYjs.ts
import { Editor as Editor3 } from "slate";
import * as Y8 from "yjs";

// src/applyToSlate/index.ts
import { Editor as Editor2 } from "slate";
import * as Y4 from "yjs";

// src/applyToSlate/textEvent.ts
import { Node as Node3, Path as Path2, Text as Text4 } from "slate";
import * as Y3 from "yjs";

// src/utils/convert.ts
import { Text as Text2 } from "slate";
import * as Y from "yjs";

// src/utils/object.ts
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  if (!isObject(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (ctor === void 0) {
    return true;
  }
  const prot = ctor.prototype;
  if (isObject(prot) === false) {
    return false;
  }
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function deepEquals(node, another) {
  for (const key in node) {
    const a = node[key];
    const b = another[key];
    if (isPlainObject(a) && isPlainObject(b)) {
      if (!deepEquals(a, b)) {
        return false;
      }
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length)
        return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
    } else if (a !== b) {
      return false;
    }
  }
  for (const key in another) {
    if (node[key] === void 0 && another[key] !== void 0) {
      return false;
    }
  }
  return true;
}
function pick(obj, ...keys) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}
function omit(obj, ...keys) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
}
function omitNullEntries(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== null));
}

// src/utils/delta.ts
function normalizeInsertDelta(delta) {
  var _a, _b;
  const normalized = [];
  for (const element of delta) {
    if (typeof element.insert === "string" && element.insert.length === 0) {
      continue;
    }
    const prev = normalized[normalized.length - 1];
    if (!prev || typeof prev.insert !== "string" || typeof element.insert !== "string") {
      normalized.push(element);
      continue;
    }
    const merge = prev.attributes === element.attributes || !prev.attributes === !element.attributes && deepEquals((_a = prev.attributes) != null ? _a : {}, (_b = element.attributes) != null ? _b : {});
    if (merge) {
      prev.insert += element.insert;
      continue;
    }
    normalized.push(element);
  }
  return normalized;
}
function yTextToInsertDelta(yText) {
  return normalizeInsertDelta(yText.toDelta());
}
function getInsertLength({ insert }) {
  return typeof insert === "string" ? insert.length : 1;
}
function getInsertDeltaLength(delta) {
  return delta.reduce((curr, element) => curr + getInsertLength(element), 0);
}
function sliceInsertDelta(delta, start, length) {
  if (length < 1) {
    return [];
  }
  let currentOffset = 0;
  const sliced = [];
  const end = start + length;
  for (let i = 0; i < delta.length; i++) {
    if (currentOffset >= end) {
      break;
    }
    const element = delta[i];
    const elementLength = getInsertLength(element);
    if (currentOffset + elementLength <= start) {
      currentOffset += elementLength;
      continue;
    }
    if (typeof element.insert !== "string") {
      currentOffset += elementLength;
      sliced.push(element);
      continue;
    }
    const startOffset = Math.max(0, start - currentOffset);
    const endOffset = Math.min(elementLength, elementLength - (currentOffset + elementLength - end));
    sliced.push(__spreadProps(__spreadValues({}, element), {
      insert: element.insert.slice(startOffset, endOffset)
    }));
    currentOffset += elementLength;
  }
  return sliced;
}

// src/utils/slate.ts
import { Text } from "slate";
function getProperties(node) {
  return omit(node, Text.isText(node) ? "text" : "children");
}

// src/utils/convert.ts
function yTextToSlateElement(yText) {
  const delta = yTextToInsertDelta(yText);
  const children = delta.length > 0 ? delta.map(deltaInsertToSlateNode) : [{ text: "" }];
  return __spreadProps(__spreadValues({}, yText.getAttributes()), { children });
}
function deltaInsertToSlateNode(insert) {
  if (typeof insert.insert === "string") {
    return __spreadProps(__spreadValues({}, insert.attributes), { text: insert.insert });
  }
  return yTextToSlateElement(insert.insert);
}
function slateNodesToInsertDelta(nodes) {
  return nodes.map((node) => {
    if (Text2.isText(node)) {
      return { insert: node.text, attributes: getProperties(node) };
    }
    return { insert: slateElementToYText(node) };
  });
}
function slateElementToYText(_a) {
  var _b = _a, {
    children
  } = _b, attributes = __objRest(_b, [
    "children"
  ]);
  const yElement = new Y.XmlText();
  Object.entries(attributes).forEach(([key, value]) => {
    yElement.setAttribute(key, value);
  });
  yElement.applyDelta(slateNodesToInsertDelta(children), { sanitize: false });
  return yElement;
}

// src/utils/location.ts
import { Text as Text3 } from "slate";
import * as Y2 from "yjs";
function getSlateNodeYLength(node) {
  if (!node) {
    return 0;
  }
  return Text3.isText(node) ? node.text.length : 1;
}
function slatePathOffsetToYOffset(element, pathOffset) {
  return element.children.slice(0, pathOffset).reduce((yOffset, node) => yOffset + getSlateNodeYLength(node), 0);
}
function getYTarget(yRoot, slateRoot, path) {
  var _a;
  if (path.length === 0) {
    throw new Error("Path has to a have a length >= 1");
  }
  if (Text3.isText(slateRoot)) {
    throw new Error("Cannot descent into slate text");
  }
  const [pathOffset, ...childPath] = path;
  const yOffset = slatePathOffsetToYOffset(slateRoot, pathOffset);
  const targetNode = slateRoot.children[pathOffset];
  const delta = yTextToInsertDelta(yRoot);
  const targetLength = getSlateNodeYLength(targetNode);
  const targetDelta = sliceInsertDelta(delta, yOffset, targetLength);
  if (targetDelta.length > 1) {
    throw new Error("Path doesn't match yText, yTarget spans multiple nodes");
  }
  const yTarget = (_a = targetDelta[0]) == null ? void 0 : _a.insert;
  if (childPath.length > 0) {
    if (!(yTarget instanceof Y2.XmlText)) {
      throw new Error("Path doesn't match yText, cannot descent into non-yText");
    }
    return getYTarget(yTarget, targetNode, childPath);
  }
  return {
    yParent: yRoot,
    textRange: { start: yOffset, end: yOffset + targetLength },
    yTarget: yTarget instanceof Y2.XmlText ? yTarget : void 0,
    slateParent: slateRoot,
    slateTarget: targetNode,
    targetDelta
  };
}
function yOffsetToSlateOffsets(parent, yOffset, opts = {}) {
  const { assoc = 0, insert = false } = opts;
  let currentOffset = 0;
  let lastNonEmptyPathOffset = 0;
  for (let pathOffset = 0; pathOffset < parent.children.length; pathOffset++) {
    const child2 = parent.children[pathOffset];
    const nodeLength = Text3.isText(child2) ? child2.text.length : 1;
    if (nodeLength > 0) {
      lastNonEmptyPathOffset = pathOffset;
    }
    const endOffset = currentOffset + nodeLength;
    if (nodeLength > 0 && (assoc >= 0 ? endOffset > yOffset : endOffset >= yOffset)) {
      return [pathOffset, yOffset - currentOffset];
    }
    currentOffset += nodeLength;
  }
  if (yOffset > currentOffset + (insert ? 1 : 0)) {
    throw new Error("yOffset out of bounds");
  }
  if (insert) {
    return [parent.children.length, 0];
  }
  const child = parent.children[lastNonEmptyPathOffset];
  const textOffset = Text3.isText(child) ? child.text.length : 1;
  return [lastNonEmptyPathOffset, textOffset];
}
function getSlatePath(sharedRoot, slateRoot, yText) {
  const yNodePath = [yText];
  while (yNodePath[0] !== sharedRoot) {
    const { parent: yParent } = yNodePath[0];
    if (!yParent) {
      throw new Error("yText isn't a descendant of root element");
    }
    if (!(yParent instanceof Y2.XmlText)) {
      throw new Error("Unexpected y parent type");
    }
    yNodePath.unshift(yParent);
  }
  if (yNodePath.length < 2) {
    return [];
  }
  let slateParent = slateRoot;
  return yNodePath.reduce((path, yParent, idx) => {
    const yChild = yNodePath[idx + 1];
    if (!yChild) {
      return path;
    }
    let yOffset = 0;
    const currentDelta = yTextToInsertDelta(yParent);
    for (const element of currentDelta) {
      if (element.insert === yChild) {
        break;
      }
      yOffset += typeof element.insert === "string" ? element.insert.length : 1;
    }
    if (Text3.isText(slateParent)) {
      throw new Error("Cannot descent into slate text");
    }
    const [pathOffset] = yOffsetToSlateOffsets(slateParent, yOffset);
    slateParent = slateParent.children[pathOffset];
    return path.concat(pathOffset);
  }, []);
}

// src/applyToSlate/textEvent.ts
function applyDelta(node, slatePath, delta) {
  const ops = [];
  let yOffset = delta.reduce((length, change) => {
    if ("retain" in change) {
      return length + change.retain;
    }
    if ("delete" in change) {
      return length + change.delete;
    }
    return length;
  }, 0);
  delta.reverse().forEach((change) => {
    var _a;
    if ("attributes" in change && "retain" in change) {
      const [startPathOffset, startTextOffset] = yOffsetToSlateOffsets(node, yOffset - change.retain);
      const [endPathOffset, endTextOffset] = yOffsetToSlateOffsets(node, yOffset, { assoc: -1 });
      for (let pathOffset = endPathOffset; pathOffset >= startPathOffset; pathOffset--) {
        const child = node.children[pathOffset];
        const childPath = [...slatePath, pathOffset];
        if (!Text4.isText(child)) {
          continue;
        }
        const newProperties = change.attributes;
        const properties = pick(node, ...Object.keys(change.attributes));
        if (pathOffset === startPathOffset || pathOffset === endPathOffset) {
          const start = pathOffset === startPathOffset ? startTextOffset : 0;
          const end = pathOffset === endPathOffset ? endTextOffset : child.text.length;
          if (end !== child.text.length) {
            ops.push({
              type: "split_node",
              path: childPath,
              position: end,
              properties: getProperties(child)
            });
          }
          if (start !== 0) {
            ops.push({
              type: "split_node",
              path: childPath,
              position: start,
              properties: omitNullEntries(__spreadValues(__spreadValues({}, getProperties(child)), newProperties))
            });
            continue;
          }
        }
        ops.push({
          type: "set_node",
          newProperties,
          path: childPath,
          properties
        });
      }
    }
    if ("retain" in change) {
      yOffset -= change.retain;
    }
    if ("delete" in change) {
      const [startPathOffset, startTextOffset] = yOffsetToSlateOffsets(node, yOffset - change.delete);
      const [endPathOffset, endTextOffset] = yOffsetToSlateOffsets(node, yOffset, { assoc: -1 });
      for (let pathOffset = endTextOffset === 0 ? endPathOffset - 1 : endPathOffset; pathOffset >= startPathOffset; pathOffset--) {
        const child = node.children[pathOffset];
        const childPath = [...slatePath, pathOffset];
        if (Text4.isText(child) && (pathOffset === startPathOffset || pathOffset === endPathOffset)) {
          const start = pathOffset === startPathOffset ? startTextOffset : 0;
          const end = pathOffset === endPathOffset ? endTextOffset : child.text.length;
          ops.push({
            type: "remove_text",
            offset: start,
            text: child.text.slice(start, end),
            path: childPath
          });
          yOffset -= end - start;
          continue;
        }
        ops.push({
          type: "remove_node",
          node: child,
          path: childPath
        });
        yOffset -= getSlateNodeYLength(child);
      }
      return;
    }
    if ("insert" in change) {
      const [pathOffset, textOffset] = yOffsetToSlateOffsets(node, yOffset, {
        insert: true
      });
      const child = node.children[pathOffset];
      const childPath = [...slatePath, pathOffset];
      if (Text4.isText(child)) {
        const lastOp = ops[ops.length - 1];
        const currentProps = lastOp != null && lastOp.type === "insert_node" ? lastOp.node : getProperties(child);
        let lastPath = [];
        if (lastOp != null && (lastOp.type === "insert_node" || lastOp.type === "insert_text" || lastOp.type === "split_node" || lastOp.type === "set_node")) {
          lastPath = lastOp.path;
        }
        if (typeof change.insert === "string" && deepEquals((_a = change.attributes) != null ? _a : {}, currentProps) && Path2.equals(childPath, lastPath)) {
          return ops.push({
            type: "insert_text",
            offset: textOffset,
            text: change.insert,
            path: childPath
          });
        }
        const toInsert = deltaInsertToSlateNode(change);
        if (textOffset === 0) {
          return ops.push({
            type: "insert_node",
            path: childPath,
            node: toInsert
          });
        }
        if (textOffset < child.text.length) {
          ops.push({
            type: "split_node",
            path: childPath,
            position: textOffset,
            properties: getProperties(child)
          });
        }
        return ops.push({
          type: "insert_node",
          path: Path2.next(childPath),
          node: toInsert
        });
      }
      return ops.push({
        type: "insert_node",
        path: childPath,
        node: deltaInsertToSlateNode(change)
      });
    }
  });
  return ops;
}
function translateYTextEvent(sharedRoot, editor, event) {
  const { target, changes } = event;
  const delta = event.delta;
  if (!(target instanceof Y3.XmlText)) {
    throw new Error("Unexpected target node type");
  }
  const ops = [];
  const slatePath = getSlatePath(sharedRoot, editor, target);
  const targetElement = Node3.get(editor, slatePath);
  if (Text4.isText(targetElement)) {
    throw new Error("Cannot apply yTextEvent to text node");
  }
  const keyChanges = Array.from(changes.keys.entries());
  if (slatePath.length > 0 && keyChanges.length > 0) {
    const newProperties = Object.fromEntries(keyChanges.map(([key, info]) => [
      key,
      info.action === "delete" ? null : target.getAttribute(key)
    ]));
    const properties = Object.fromEntries(keyChanges.map(([key]) => [key, targetElement[key]]));
    ops.push({ type: "set_node", newProperties, properties, path: slatePath });
  }
  if (delta.length > 0) {
    ops.push(...applyDelta(targetElement, slatePath, delta));
  }
  return ops;
}

// src/applyToSlate/index.ts
function translateYjsEvent(sharedRoot, editor, event) {
  if (event instanceof Y4.YTextEvent) {
    return translateYTextEvent(sharedRoot, editor, event);
  }
  throw new Error("Unexpected Y event type");
}
function applyYjsEvents(sharedRoot, editor, events) {
  Editor2.withoutNormalizing(editor, () => {
    events.forEach((event) => {
      translateYjsEvent(sharedRoot, editor, event).forEach((op) => {
        editor.apply(op);
      });
    });
  });
}

// src/applyToYjs/node/insertNode.ts
import { Text as Text5 } from "slate";
function insertNode(sharedRoot, slateRoot, op) {
  const { yParent, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
  if (Text5.isText(op.node)) {
    return yParent.insert(textRange.start, op.node.text, getProperties(op.node));
  }
  yParent.insertEmbed(textRange.start, slateElementToYText(op.node));
}

// src/applyToYjs/node/mergeNode.ts
import { Node as Node6, Path as Path3, Text as Text7 } from "slate";

// src/utils/clone.ts
import * as Y5 from "yjs";
function cloneInsertDeltaDeep(delta) {
  return delta.map((element) => {
    if (typeof element.insert === "string") {
      return element;
    }
    return __spreadProps(__spreadValues({}, element), { insert: cloneDeep(element.insert) });
  });
}
function cloneDeep(yText) {
  const clone = new Y5.XmlText();
  const attributes = yText.getAttributes();
  Object.entries(attributes).forEach(([key, value]) => {
    clone.setAttribute(key, value);
  });
  clone.applyDelta(cloneInsertDeltaDeep(yTextToInsertDelta(yText)), {
    sanitize: false
  });
  return clone;
}

// src/utils/position.ts
import { Node as Node5, Text as Text6 } from "slate";
import * as Y6 from "yjs";

// src/utils/yjs.ts
function assertDocumentAttachment(sharedType) {
  if (!sharedType.doc) {
    throw new Error("shared type isn't attached to a document");
  }
}

// src/utils/position.ts
var STORED_POSITION_PREFIX = "__slateYjsStoredPosition_";
function slatePointToRelativePosition(sharedRoot, slateRoot, point) {
  const { yTarget, yParent, textRange } = getYTarget(sharedRoot, slateRoot, point.path);
  if (yTarget) {
    throw new Error("Slate point points to a non-text element inside sharedRoot");
  }
  const index = textRange.start + point.offset;
  return Y6.createRelativePositionFromTypeIndex(yParent, index, index === textRange.end ? -1 : 0);
}
function absolutePositionToSlatePoint(sharedRoot, slateRoot, { type, index, assoc }) {
  if (!(type instanceof Y6.XmlText)) {
    throw new Error("Absolute position points to a non-XMLText");
  }
  const parentPath = getSlatePath(sharedRoot, slateRoot, type);
  const parent = Node5.get(slateRoot, parentPath);
  if (Text6.isText(parent)) {
    throw new Error("Absolute position doesn't match slateRoot, cannot descent into text");
  }
  const [pathOffset, textOffset] = yOffsetToSlateOffsets(parent, index, {
    assoc
  });
  const target = parent.children[pathOffset];
  if (!Text6.isText(target)) {
    return null;
  }
  return { path: [...parentPath, pathOffset], offset: textOffset };
}
function relativePositionToSlatePoint(sharedRoot, slateRoot, pos) {
  if (!sharedRoot.doc) {
    throw new Error("sharedRoot isn't attach to a yDoc");
  }
  const absPos = Y6.createAbsolutePositionFromRelativePosition(pos, sharedRoot.doc);
  return absPos && absolutePositionToSlatePoint(sharedRoot, slateRoot, absPos);
}
function getStoredPosition(sharedRoot, key) {
  const rawPosition = sharedRoot.getAttribute(STORED_POSITION_PREFIX + key);
  if (!rawPosition) {
    return null;
  }
  return Y6.decodeRelativePosition(rawPosition);
}
function getStoredPositions(sharedRoot) {
  return Object.fromEntries(Object.entries(sharedRoot.getAttributes()).filter(([key]) => key.startsWith(STORED_POSITION_PREFIX)).map(([key, position]) => [
    key.slice(STORED_POSITION_PREFIX.length),
    Y6.createRelativePositionFromJSON(position)
  ]));
}
function getStoredPositionsAbsolute(sharedRoot) {
  assertDocumentAttachment(sharedRoot);
  return Object.fromEntries(Object.entries(sharedRoot.getAttributes()).filter(([key]) => key.startsWith(STORED_POSITION_PREFIX)).map(([key, position]) => [
    key.slice(STORED_POSITION_PREFIX.length),
    Y6.createAbsolutePositionFromRelativePosition(Y6.decodeRelativePosition(position), sharedRoot.doc)
  ]).filter(([, position]) => position));
}
function removeStoredPosition(sharedRoot, key) {
  sharedRoot.removeAttribute(STORED_POSITION_PREFIX + key);
}
function setStoredPosition(sharedRoot, key, position) {
  sharedRoot.setAttribute(STORED_POSITION_PREFIX + key, Y6.encodeRelativePosition(position));
}
function getAbsolutePositionsInTextRange(absolutePositions, yTarget, textRange) {
  return Object.fromEntries(Object.entries(absolutePositions).filter(([, position]) => {
    if (position.type !== yTarget) {
      return false;
    }
    if (!textRange) {
      return true;
    }
    return position.assoc >= 0 ? position.index >= textRange.start && position.index < textRange.end : position.index > textRange.start && position.index >= textRange.end;
  }));
}
function getAbsolutePositionsInYText(absolutePositions, yText, parentPath = "") {
  const positions = {
    [parentPath]: getAbsolutePositionsInTextRange(absolutePositions, yText)
  };
  const insertDelta = yTextToInsertDelta(yText);
  insertDelta.forEach(({ insert }, i) => {
    if (insert instanceof Y6.XmlText) {
      Object.assign(positions, getAbsolutePositionsInYText(absolutePositions, insert, parentPath ? `${parentPath}.${i}` : i.toString()));
    }
  });
  return positions;
}
function getStoredPositionsInDeltaAbsolute(sharedRoot, yText, delta, deltaOffset = 0) {
  const absolutePositions = getStoredPositionsAbsolute(sharedRoot);
  const positions = {
    "": getAbsolutePositionsInTextRange(absolutePositions, yText, {
      start: deltaOffset,
      end: deltaOffset + getInsertDeltaLength(delta)
    })
  };
  delta.forEach(({ insert }, i) => {
    if (insert instanceof Y6.XmlText) {
      Object.assign(positions, getAbsolutePositionsInYText(absolutePositions, insert, i.toString()));
    }
  });
  return positions;
}
function restoreStoredPositionsWithDeltaAbsolute(sharedRoot, yText, absolutePositions, delta, newDeltaOffset = 0, previousDeltaOffset = 0, path = "") {
  const toRestore = absolutePositions[path];
  if (toRestore) {
    Object.entries(toRestore).forEach(([key, position]) => {
      setStoredPosition(sharedRoot, key, Y6.createRelativePositionFromTypeIndex(yText, position.index - previousDeltaOffset + newDeltaOffset, position.assoc));
    });
  }
  delta.forEach(({ insert }, i) => {
    if (insert instanceof Y6.XmlText) {
      restoreStoredPositionsWithDeltaAbsolute(sharedRoot, insert, absolutePositions, yTextToInsertDelta(insert), 0, 0, path ? `${path}.${i}` : i.toString());
    }
  });
}
function slateRangeToRelativeRange(sharedRoot, slateRoot, range) {
  return {
    anchor: slatePointToRelativePosition(sharedRoot, slateRoot, range.anchor),
    focus: slatePointToRelativePosition(sharedRoot, slateRoot, range.focus)
  };
}
function relativeRangeToSlateRange(sharedRoot, slateRoot, range) {
  const anchor = relativePositionToSlatePoint(sharedRoot, slateRoot, range.anchor);
  if (!anchor) {
    return null;
  }
  const focus = relativePositionToSlatePoint(sharedRoot, slateRoot, range.focus);
  if (!focus) {
    return null;
  }
  return { anchor, focus };
}

// src/applyToYjs/node/mergeNode.ts
function mergeNode(sharedRoot, slateRoot, op) {
  const target = getYTarget(sharedRoot, slateRoot, op.path);
  const prev = getYTarget(target.yParent, target.slateParent, Path3.previous(op.path.slice(-1)));
  if (!target.yTarget !== !prev.yTarget) {
    throw new Error("Cannot merge y text with y element");
  }
  if (!prev.yTarget || !target.yTarget) {
    const { yParent: parent, textRange, slateTarget } = target;
    if (!slateTarget) {
      throw new Error("Expected Slate target node for merge op.");
    }
    const prevSibling = Node6.get(slateRoot, Path3.previous(op.path));
    if (!Text7.isText(prevSibling)) {
      throw new Error("Path points to Y.Text but not a Slate text node.");
    }
    const targetProps = getProperties(slateTarget);
    const prevSiblingProps = getProperties(prevSibling);
    const unsetProps = Object.keys(targetProps).reduce((acc, key) => {
      const prevSiblingHasProp = key in prevSiblingProps;
      return prevSiblingHasProp ? acc : __spreadProps(__spreadValues({}, acc), { [key]: null });
    }, {});
    return parent.format(textRange.start, textRange.end - textRange.start, __spreadValues(__spreadValues({}, unsetProps), prevSiblingProps));
  }
  const deltaApplyYOffset = prev.yTarget.length;
  const targetDelta = yTextToInsertDelta(target.yTarget);
  const clonedDelta = cloneInsertDeltaDeep(targetDelta);
  const storedPositions = getStoredPositionsInDeltaAbsolute(sharedRoot, target.yTarget, targetDelta, deltaApplyYOffset);
  const applyDelta2 = [{ retain: deltaApplyYOffset }, ...clonedDelta];
  prev.yTarget.applyDelta(applyDelta2, {
    sanitize: false
  });
  target.yParent.delete(target.textRange.start, target.textRange.end - target.textRange.start);
  restoreStoredPositionsWithDeltaAbsolute(sharedRoot, prev.yTarget, storedPositions, clonedDelta, deltaApplyYOffset);
}

// src/applyToYjs/node/moveNode.ts
import { Node as Node7, Path as Path4, Text as Text8 } from "slate";
function moveNode(sharedRoot, slateRoot, op) {
  const newParentPath = Path4.parent(op.newPath);
  const newPathOffset = op.newPath[op.newPath.length - 1];
  const parent = Node7.get(slateRoot, newParentPath);
  if (Text8.isText(parent)) {
    throw new Error("Cannot move slate node into text element");
  }
  const normalizedNewPath = [
    ...newParentPath,
    Math.min(newPathOffset, parent.children.length)
  ];
  const origin = getYTarget(sharedRoot, slateRoot, op.path);
  const target = getYTarget(sharedRoot, slateRoot, normalizedNewPath);
  const insertDelta = cloneInsertDeltaDeep(origin.targetDelta);
  const storedPositions = getStoredPositionsInDeltaAbsolute(sharedRoot, origin.yParent, origin.targetDelta);
  origin.yParent.delete(origin.textRange.start, origin.textRange.end - origin.textRange.start);
  const targetLength = getInsertDeltaLength(yTextToInsertDelta(target.yParent));
  const deltaApplyYOffset = Math.min(target.textRange.start, targetLength);
  const applyDelta2 = [{ retain: deltaApplyYOffset }, ...insertDelta];
  target.yParent.applyDelta(applyDelta2, { sanitize: false });
  restoreStoredPositionsWithDeltaAbsolute(sharedRoot, target.yParent, storedPositions, insertDelta, deltaApplyYOffset, origin.textRange.start);
}

// src/applyToYjs/node/removeNode.ts
function removeNode(sharedRoot, slateRoot, op) {
  const { yParent: parent, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
  parent.delete(textRange.start, textRange.end - textRange.start);
}

// src/applyToYjs/node/setNode.ts
function setNode(sharedRoot, slateRoot, op) {
  const { yTarget, textRange, yParent } = getYTarget(sharedRoot, slateRoot, op.path);
  if (yTarget) {
    Object.entries(op.newProperties).forEach(([key, value]) => {
      if (value === null) {
        return yTarget.removeAttribute(key);
      }
      yTarget.setAttribute(key, value);
    });
    return Object.entries(op.properties).forEach(([key]) => {
      if (!op.newProperties.hasOwnProperty(key)) {
        yTarget.removeAttribute(key);
      }
    });
  }
  const unset = Object.fromEntries(Object.keys(op.properties).map((key) => [key, null]));
  const newProperties = __spreadValues(__spreadValues({}, unset), op.newProperties);
  yParent.format(textRange.start, textRange.end - textRange.start, newProperties);
}

// src/applyToYjs/node/splitNode.ts
import { Text as Text9 } from "slate";
import * as Y7 from "yjs";
function splitNode(sharedRoot, slateRoot, op) {
  const target = getYTarget(sharedRoot, slateRoot, op.path);
  if (!target.slateTarget) {
    throw new Error("Y target without corresponding slate node");
  }
  if (!target.yTarget) {
    if (!Text9.isText(target.slateTarget)) {
      throw new Error("Mismatch node type between y target and slate node");
    }
    const unset = {};
    target.targetDelta.forEach((element) => {
      if (element.attributes) {
        Object.keys(element.attributes).forEach((key) => {
          unset[key] = null;
        });
      }
    });
    return target.yParent.format(target.textRange.start, target.textRange.end - target.textRange.start, __spreadValues(__spreadValues({}, unset), op.properties));
  }
  if (Text9.isText(target.slateTarget)) {
    throw new Error("Mismatch node type between y target and slate node");
  }
  const splitTarget = getYTarget(target.yTarget, target.slateTarget, [
    op.position
  ]);
  const ySplitOffset = target.slateTarget.children.slice(0, op.position).reduce((length2, child) => length2 + getSlateNodeYLength(child), 0);
  const length = target.slateTarget.children.reduce((current, child) => current + getSlateNodeYLength(child), 0);
  const splitDelta = sliceInsertDelta(yTextToInsertDelta(target.yTarget), ySplitOffset, length - ySplitOffset);
  const clonedDelta = cloneInsertDeltaDeep(splitDelta);
  const storedPositions = getStoredPositionsInDeltaAbsolute(sharedRoot, target.yTarget, splitDelta, ySplitOffset);
  const toInsert = new Y7.XmlText();
  toInsert.applyDelta(clonedDelta, {
    sanitize: false
  });
  Object.entries(op.properties).forEach(([key, value]) => {
    toInsert.setAttribute(key, value);
  });
  target.yTarget.delete(splitTarget.textRange.start, target.yTarget.length - splitTarget.textRange.start);
  target.yParent.insertEmbed(target.textRange.end, toInsert);
  restoreStoredPositionsWithDeltaAbsolute(sharedRoot, toInsert, storedPositions, clonedDelta, 0, ySplitOffset);
}

// src/applyToYjs/node/index.ts
var NODE_MAPPER = {
  insert_node: insertNode,
  remove_node: removeNode,
  set_node: setNode,
  merge_node: mergeNode,
  move_node: moveNode,
  split_node: splitNode
};

// src/applyToYjs/text/insertText.ts
import { Node as Node9, Text as Text10 } from "slate";
function insertText(sharedRoot, slateRoot, op) {
  const { yParent: target, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
  const targetNode = Node9.get(slateRoot, op.path);
  if (!Text10.isText(targetNode)) {
    throw new Error("Cannot insert text into non-text node");
  }
  target.insert(textRange.start + op.offset, op.text, getProperties(targetNode));
}

// src/applyToYjs/text/removeText.ts
function removeText(sharedRoot, slateRoot, op) {
  const { yParent: target, textRange } = getYTarget(sharedRoot, slateRoot, op.path);
  target.delete(textRange.start + op.offset, op.text.length);
}

// src/applyToYjs/text/index.ts
var TEXT_MAPPER = {
  insert_text: insertText,
  remove_text: removeText
};

// src/applyToYjs/index.ts
var NOOP = () => {
};
var opMappers = __spreadProps(__spreadValues(__spreadValues({}, TEXT_MAPPER), NODE_MAPPER), {
  set_selection: NOOP
});
function applySlateOp(sharedRoot, slateRoot, op) {
  const apply = opMappers[op.type];
  if (!apply) {
    throw new Error(`Unknown operation: ${op.type}`);
  }
  apply(sharedRoot, slateRoot, op);
}

// src/plugins/withYjs.ts
var DEFAULT_LOCAL_ORIGIN = Symbol("slate-yjs-operation");
var DEFAULT_POSITION_STORAGE_ORIGIN = Symbol("slate-yjs-position-storage");
var ORIGIN = /* @__PURE__ */ new WeakMap();
var LOCAL_CHANGES = /* @__PURE__ */ new WeakMap();
var CONNECTED = /* @__PURE__ */ new WeakSet();
var YjsEditor = {
  isYjsEditor(value) {
    return Editor3.isEditor(value) && value.sharedRoot instanceof Y8.XmlText && "localOrigin" in value && "positionStorageOrigin" in value && typeof value.applyRemoteEvents === "function" && typeof value.storeLocalChange === "function" && typeof value.flushLocalChanges === "function" && typeof value.isLocalOrigin === "function" && typeof value.connect === "function" && typeof value.disconnect === "function";
  },
  localChanges(editor) {
    var _a;
    return (_a = LOCAL_CHANGES.get(editor)) != null ? _a : [];
  },
  applyRemoteEvents(editor, events, origin) {
    editor.applyRemoteEvents(events, origin);
  },
  storeLocalChange(editor, op) {
    editor.storeLocalChange(op);
  },
  flushLocalChanges(editor) {
    editor.flushLocalChanges();
  },
  connected(editor) {
    return CONNECTED.has(editor);
  },
  connect(editor) {
    editor.connect();
  },
  disconnect(editor) {
    editor.disconnect();
  },
  isLocal(editor) {
    return editor.isLocalOrigin(YjsEditor.origin(editor));
  },
  origin(editor) {
    const origin = ORIGIN.get(editor);
    return origin !== void 0 ? origin : editor.localOrigin;
  },
  withOrigin(editor, origin, fn) {
    const prev = YjsEditor.origin(editor);
    ORIGIN.set(editor, origin);
    fn();
    ORIGIN.set(editor, prev);
  },
  storePosition(editor, key, point) {
    const { sharedRoot, positionStorageOrigin: locationStorageOrigin } = editor;
    assertDocumentAttachment(sharedRoot);
    const position = slatePointToRelativePosition(sharedRoot, editor, point);
    sharedRoot.doc.transact(() => {
      setStoredPosition(sharedRoot, key, position);
    }, locationStorageOrigin);
  },
  removeStoredPosition(editor, key) {
    const { sharedRoot, positionStorageOrigin: locationStorageOrigin } = editor;
    assertDocumentAttachment(sharedRoot);
    sharedRoot.doc.transact(() => {
      removeStoredPosition(sharedRoot, key);
    }, locationStorageOrigin);
  },
  position(editor, key) {
    const position = getStoredPosition(editor.sharedRoot, key);
    if (!position) {
      return void 0;
    }
    return relativePositionToSlatePoint(editor.sharedRoot, editor, position);
  },
  storedPositionsRelative(editor) {
    return getStoredPositions(editor.sharedRoot);
  }
};
function withYjs(editor, sharedRoot, {
  localOrigin,
  positionStorageOrigin,
  autoConnect = false
} = {}) {
  const e = editor;
  e.sharedRoot = sharedRoot;
  e.localOrigin = localOrigin != null ? localOrigin : DEFAULT_LOCAL_ORIGIN;
  e.positionStorageOrigin = positionStorageOrigin != null ? positionStorageOrigin : DEFAULT_POSITION_STORAGE_ORIGIN;
  e.applyRemoteEvents = (events, origin) => {
    YjsEditor.flushLocalChanges(e);
    Editor3.withoutNormalizing(e, () => {
      YjsEditor.withOrigin(e, origin, () => {
        applyYjsEvents(e.sharedRoot, e, events);
      });
    });
  };
  e.isLocalOrigin = (origin) => origin === e.localOrigin;
  const handleYEvents = (events, transaction) => {
    if (e.isLocalOrigin(transaction.origin)) {
      return;
    }
    YjsEditor.applyRemoteEvents(e, events, transaction.origin);
  };
  let autoConnectTimeoutId = null;
  if (autoConnect) {
    autoConnectTimeoutId = setTimeout(() => {
      autoConnectTimeoutId = null;
      YjsEditor.connect(e);
    });
  }
  e.connect = () => {
    if (YjsEditor.connected(e)) {
      throw new Error("already connected");
    }
    e.sharedRoot.observeDeep(handleYEvents);
    const content = yTextToSlateElement(e.sharedRoot);
    e.children = content.children;
    CONNECTED.add(e);
    Editor3.normalize(editor, { force: true });
    if (!editor.operations.length) {
      editor.onChange();
    }
  };
  e.disconnect = () => {
    if (autoConnectTimeoutId) {
      clearTimeout(autoConnectTimeoutId);
    }
    YjsEditor.flushLocalChanges(e);
    e.sharedRoot.unobserveDeep(handleYEvents);
    CONNECTED.delete(e);
  };
  e.storeLocalChange = (op) => {
    LOCAL_CHANGES.set(e, [
      ...YjsEditor.localChanges(e),
      { op, doc: editor.children, origin: YjsEditor.origin(e) }
    ]);
  };
  e.flushLocalChanges = () => {
    assertDocumentAttachment(e.sharedRoot);
    const localChanges = YjsEditor.localChanges(e);
    LOCAL_CHANGES.delete(e);
    const txGroups = [];
    localChanges.forEach((change) => {
      const currentGroup = txGroups[txGroups.length - 1];
      if (currentGroup && currentGroup[0].origin === change.origin) {
        return currentGroup.push(change);
      }
      txGroups.push([change]);
    });
    txGroups.forEach((txGroup) => {
      assertDocumentAttachment(e.sharedRoot);
      e.sharedRoot.doc.transact(() => {
        txGroup.forEach((change) => {
          assertDocumentAttachment(e.sharedRoot);
          applySlateOp(e.sharedRoot, { children: change.doc }, change.op);
        });
      }, txGroup[0].origin);
    });
  };
  const { apply, onChange } = e;
  e.apply = (op) => {
    if (YjsEditor.connected(e) && YjsEditor.isLocal(e)) {
      YjsEditor.storeLocalChange(e, op);
    }
    apply(op);
  };
  e.onChange = () => {
    if (YjsEditor.connected(e)) {
      YjsEditor.flushLocalChanges(e);
    }
    onChange();
  };
  return e;
}

// src/plugins/withYHistory.ts
import { Transforms } from "slate";
import * as Y9 from "yjs";
var LAST_SELECTION = /* @__PURE__ */ new WeakMap();
var DEFAULT_WITHOUT_SAVING_ORIGIN = Symbol("slate-yjs-history-without-saving");
var YHistoryEditor = {
  isYHistoryEditor(value) {
    return YjsEditor.isYjsEditor(value) && value.undoManager instanceof Y9.UndoManager && typeof value.undo === "function" && typeof value.redo === "function" && "withoutSavingOrigin" in value;
  },
  canUndo(editor) {
    return editor.undoManager.undoStack.length > 0;
  },
  canRedo(editor) {
    return editor.undoManager.redoStack.length > 0;
  },
  isSaving(editor) {
    return editor.undoManager.trackedOrigins.has(YjsEditor.origin(editor));
  },
  withoutSaving(editor, fn) {
    YjsEditor.withOrigin(editor, editor.withoutSavingOrigin, fn);
  }
};
function withYHistory(editor, _a = {}) {
  var _b = _a, {
    withoutSavingOrigin = DEFAULT_WITHOUT_SAVING_ORIGIN,
    trackedOrigins = /* @__PURE__ */ new Set([editor.localOrigin])
  } = _b, options = __objRest(_b, [
    "withoutSavingOrigin",
    "trackedOrigins"
  ]);
  const e = editor;
  const undoManager = new Y9.UndoManager(e.sharedRoot, __spreadValues({
    trackedOrigins
  }, options));
  e.undoManager = undoManager;
  e.withoutSavingOrigin = withoutSavingOrigin;
  const { onChange, isLocalOrigin } = e;
  e.onChange = () => {
    onChange();
    LAST_SELECTION.set(e, e.selection && slateRangeToRelativeRange(e.sharedRoot, e, e.selection));
  };
  e.isLocalOrigin = (origin) => origin === e.withoutSavingOrigin || isLocalOrigin(origin);
  const handleStackItemAdded = ({
    stackItem
  }) => {
    stackItem.meta.set("selection", e.selection && slateRangeToRelativeRange(e.sharedRoot, e, e.selection));
    stackItem.meta.set("selectionBefore", LAST_SELECTION.get(e));
  };
  const handleStackItemUpdated = ({
    stackItem
  }) => {
    stackItem.meta.set("selection", e.selection && slateRangeToRelativeRange(e.sharedRoot, e, e.selection));
  };
  const handleStackItemPopped = ({
    stackItem,
    type
  }) => {
    const inverseStack = type === "undo" ? e.undoManager.redoStack : e.undoManager.undoStack;
    const inverseItem = inverseStack[inverseStack.length - 1];
    if (inverseItem) {
      inverseItem.meta.set("selection", stackItem.meta.get("selectionBefore"));
      inverseItem.meta.set("selectionBefore", stackItem.meta.get("selection"));
    }
    const relativeSelection = stackItem.meta.get("selectionBefore");
    if (!relativeSelection) {
      return;
    }
    const selection = relativeRangeToSlateRange(e.sharedRoot, e, relativeSelection);
    if (!selection) {
      return;
    }
    Transforms.select(e, selection);
  };
  const { connect, disconnect } = e;
  e.connect = () => {
    connect();
    e.undoManager.on("stack-item-added", handleStackItemAdded);
    e.undoManager.on("stack-item-popped", handleStackItemPopped);
    e.undoManager.on("stack-item-updated", handleStackItemUpdated);
  };
  e.disconnect = () => {
    e.undoManager.off("stack-item-added", handleStackItemAdded);
    e.undoManager.off("stack-item-popped", handleStackItemPopped);
    e.undoManager.off("stack-item-updated", handleStackItemUpdated);
    disconnect();
  };
  e.undo = () => {
    if (YjsEditor.connected(e)) {
      YjsEditor.flushLocalChanges(e);
      e.undoManager.undo();
    }
  };
  e.redo = () => {
    if (YjsEditor.connected(e)) {
      YjsEditor.flushLocalChanges(e);
      e.undoManager.redo();
    }
  };
  return e;
}

// src/plugins/withCursors.ts
import * as Y10 from "yjs";
var CURSOR_CHANGE_EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
var CursorEditor = {
  isCursorEditor(value) {
    return YjsEditor.isYjsEditor(value) && value.awareness && typeof value.cursorDataField === "string" && typeof value.selectionStateField === "string" && typeof value.sendCursorPosition === "function" && typeof value.sendCursorData === "function";
  },
  sendCursorPosition(editor, range = editor.selection) {
    editor.sendCursorPosition(range);
  },
  sendCursorData(editor, data) {
    editor.sendCursorData(data);
  },
  on(editor, event, handler) {
    var _a;
    if (event !== "change") {
      return;
    }
    const listeners = (_a = CURSOR_CHANGE_EVENT_LISTENERS.get(editor)) != null ? _a : /* @__PURE__ */ new Set();
    listeners.add(handler);
    CURSOR_CHANGE_EVENT_LISTENERS.set(editor, listeners);
  },
  off(editor, event, listener) {
    if (event !== "change") {
      return;
    }
    const listeners = CURSOR_CHANGE_EVENT_LISTENERS.get(editor);
    if (listeners) {
      listeners.delete(listener);
    }
  },
  cursorState(editor, clientId) {
    var _a;
    if (clientId === editor.awareness.clientID || !YjsEditor.connected(editor)) {
      return null;
    }
    const state = editor.awareness.getStates().get(clientId);
    if (!state) {
      return null;
    }
    return {
      relativeSelection: (_a = state[editor.selectionStateField]) != null ? _a : null,
      data: state[editor.cursorDataField],
      clientId
    };
  },
  cursorStates(editor) {
    if (!YjsEditor.connected(editor)) {
      return {};
    }
    return Object.fromEntries(Array.from(editor.awareness.getStates().entries(), ([id, state]) => {
      if (id === editor.awareness.clientID || !state) {
        return null;
      }
      return [
        id,
        {
          relativeSelection: state[editor.selectionStateField],
          data: state[editor.cursorDataField]
        }
      ];
    }).filter(Array.isArray));
  }
};
function withCursors(editor, awareness, {
  cursorStateField: selectionStateField = "selection",
  cursorDataField = "data",
  autoSend = true,
  data
} = {}) {
  const e = editor;
  e.awareness = awareness;
  e.cursorDataField = cursorDataField;
  e.selectionStateField = selectionStateField;
  e.sendCursorData = (cursorData) => {
    e.awareness.setLocalStateField(e.cursorDataField, cursorData);
  };
  e.sendCursorPosition = (range) => {
    const localState = e.awareness.getLocalState();
    const currentRange = localState == null ? void 0 : localState[selectionStateField];
    if (!range) {
      if (currentRange) {
        e.awareness.setLocalStateField(e.selectionStateField, null);
      }
      return;
    }
    const { anchor, focus } = slateRangeToRelativeRange(e.sharedRoot, e, range);
    if (!currentRange || !Y10.compareRelativePositions(anchor, currentRange) || !Y10.compareRelativePositions(focus, currentRange)) {
      e.awareness.setLocalStateField(e.selectionStateField, { anchor, focus });
    }
  };
  const awarenessChangeListener = (yEvent) => {
    const listeners = CURSOR_CHANGE_EVENT_LISTENERS.get(e);
    if (!listeners) {
      return;
    }
    const localId = e.awareness.clientID;
    const event = {
      added: yEvent.added.filter((id) => id !== localId),
      removed: yEvent.removed.filter((id) => id !== localId),
      updated: yEvent.updated.filter((id) => id !== localId)
    };
    if (event.added.length > 0 || event.removed.length > 0 || event.updated.length > 0) {
      listeners.forEach((listener) => listener(event));
    }
  };
  const { connect, disconnect } = e;
  e.connect = () => {
    connect();
    e.awareness.on("change", awarenessChangeListener);
    awarenessChangeListener({
      removed: [],
      added: Array.from(e.awareness.getStates().keys()),
      updated: []
    });
    if (autoSend) {
      if (data) {
        CursorEditor.sendCursorData(e, data);
      }
      const { onChange } = e;
      e.onChange = () => {
        onChange();
        if (YjsEditor.connected(e)) {
          CursorEditor.sendCursorPosition(e);
        }
      };
    }
  };
  e.disconnect = () => {
    e.awareness.off("change", awarenessChangeListener);
    awarenessChangeListener({
      removed: Array.from(e.awareness.getStates().keys()),
      added: [],
      updated: []
    });
    disconnect();
  };
  return e;
}
export {
  CursorEditor,
  YHistoryEditor,
  YjsEditor,
  relativePositionToSlatePoint,
  relativeRangeToSlateRange,
  slateNodesToInsertDelta,
  slatePointToRelativePosition,
  slateRangeToRelativeRange,
  withCursors,
  withYHistory,
  withYjs,
  yTextToSlateElement
};
//# sourceMappingURL=index.js.map