export default function NumberInput(props) {
  const handleKeyDown = (e) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      ",",
      ".",
    ];
    if (allowedKeys.includes(e.key) || /^[0-9]$/.test(e.key)) {
      return;
    }
    e.preventDefault();
  };
  return <input type="number" onKeyDown={handleKeyDown} {...props} />;
}
