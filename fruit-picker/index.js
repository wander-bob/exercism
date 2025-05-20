import { order } from './grocer.js';
import { notify } from './notifier.js';

export function onSuccess() {
  return notify({ message: 'SUCCESS' });
}

export function onError() {
  return notify({ message: 'ERROR' });
}

export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

export function postOrder(variety, quantity) {
  return orderFromGrocer(
    { variety: variety, quantity: quantity },
    onSuccess,
    onError,
  );
}
