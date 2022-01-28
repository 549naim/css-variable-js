const inputs=document.querySelectorAll(".property input");
function updateValue() {
    const suffix=this.dataset.sizing||'';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    // console.log(this.name);
}

inputs.forEach(input=> input.addEventListener('change', updateValue));
inputs.forEach(input=> input.addEventListener('mousemove', updateValue));