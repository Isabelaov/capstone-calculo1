export function setupControls(onChangeCallback) {
  document.getElementById("planetSelector").addEventListener("change", onChangeCallback);
  document.getElementById("heightSlider").addEventListener("input", onChangeCallback);
}