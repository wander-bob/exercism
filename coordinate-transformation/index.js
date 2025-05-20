export function translate2d(dx, dy) {
  return function (ex, ey) {
    return [dx + ex, dy + ey];
  };
}

export function scale2d(sx, sy) {
  return (tx, ty) => {
    return [sx * tx, sy * ty];
  };
}

export function composeTransform(f, g) {
  return (cx, cy) => {
    const [vx, vy] = f(cx, cy);
    return g(vx, vy);
  };
}

export function memoizeTransform(f) {
  let previousX, previousY, previousResult;
  return function (currentX, currentY) {
    if (previousX === currentX && previousY === currentY) return previousResult;
    previousX = currentX;
    previousY = currentY;
    previousResult = f(currentX, currentY);
    return previousResult;
  };
}
