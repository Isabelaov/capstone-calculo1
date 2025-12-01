// Formulas basicas

export function position(t, h0, v0, g) {
  return h0 + v0 * t - 0.5 * g * t ** 2;
}

export function velocity(t, v0, g) {
  return v0 - g * t;
}

export function timeToFall(h0, g) {
  return Math.sqrt((2 * h0) / g);
}

export function impactVelocity(h0, g) {
  return -Math.sqrt(2 * g * h0);
}

//  Adicionales
export function maxHeight(v0, g) {
  return (v0 ** 2) / (2 * g);
}

export function flightTime(v0, g) {
  return (2 * v0) / g;
}
