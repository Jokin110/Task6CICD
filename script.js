function createElementWithCleanup(element, className, duration) {
    element.className = className;
    document.body.appendChild(element);
    
    const removeElement = () => {
        element.remove();
    };
    
    element.addEventListener('animationend', removeElement);
    setTimeout(removeElement, duration + 100);
}

function convert() {
    // Clear previous elements
    document.querySelectorAll('.explosion, .car, .gasoline, .shockwave, .smoke').forEach(el => el.remove());

    // Screen shake
    document.body.style.transform = 'translate(0, 0)';
    setTimeout(() => {
        document.body.style.transform = 'translate(5px, -5px)';
        setTimeout(() => {
            document.body.style.transform = 'translate(-5px, 5px)';
            setTimeout(() => {
                document.body.style.transform = 'translate(0, 0)';
            }, 50);
        }, 50);
    }, 10);

    // Create explosions with smoke
    for(let i = 0; i < 8; i++) {
        const explosion = document.createElement('div');
        explosion.style.left = `${Math.random() * 100}%`;
        explosion.style.top = `${Math.random() * 90 + 5}%`; // Keep in visible area
        explosion.style.background = `radial-gradient(circle, 
            ${['#ff0000', '#ff8c00', '#ffd700'][i%3]} 20%, 
            ${['#ff4500', '#ff0000', '#ff8c00'][i%3]} 100%)`;
        createElementWithCleanup(explosion, 'explosion', 1200);

        // Add smoke
        for(let s = 0; s < 3; s++) {
            const smoke = document.createElement('div');
            smoke.style.left = explosion.style.left;
            smoke.style.top = explosion.style.top;
            smoke.style.animationDelay = `${i * 0.1}s`;
            createElementWithCleanup(smoke, 'smoke', 2000);
        }
    }

    // Create shockwave
    const shockwave = document.createElement('div');
    shockwave.style.left = '50%';
    shockwave.style.top = '50%';
    createElementWithCleanup(shockwave, 'shockwave', 1200);

    // Create cars
    const carEmojis = ['🚗', '🚕', '🚙', '🏎️', '🚒', '🚑', '🚜', '🛻'];
    carEmojis.forEach(emoji => {
        const car = document.createElement('div');
        car.textContent = emoji;
        car.style.top = `${Math.random() * 90 + 5}%`; // Keep in visible area
        car.style.fontSize = `${4 + Math.random() * 4}rem`;
        createElementWithCleanup(car, 'car', 1000);
    });

    // Create gasoline effects
    for(let i = 0; i < 12; i++) {
        const gas = document.createElement('div');
        gas.style.left = `${Math.random() * 100}%`;
        gas.style.top = `${Math.random() * 100}%`;
        gas.style.animationDelay = `${Math.random() * 0.3}s`;
        createElementWithCleanup(gas, 'gasoline', 800);
    }

    // Conversion logic
    setTimeout(() => {
        try {
            const conversionType = document.getElementById('conversionType').value;
            const input = document.getElementById('inputValue').value.trim();
            const resultDiv = document.getElementById('result');
            
            let result;
            if (conversionType === 'toRoman') {
                result = intToRoman(parseInt(input));
            } else {
                result = romanToInt(input.toUpperCase());
            }
            resultDiv.textContent = `${result}!!! 💥`;
            resultDiv.style.transform = 'scale(1.5)';
            resultDiv.classList.remove('error');
            
            setTimeout(() => {
                resultDiv.style.transform = 'scale(1)';
            }, 1000);
            
        } catch (error) {
            resultDiv.textContent = `💥 ERROR: ${error.message} 💥`;
            resultDiv.classList.add('error');
        }
    }, 1200);
}

function intToRoman(num) {
    if (!Number.isInteger(num)) return ('Please enter a valid integer');
    if (num < 1 || num > 3999) return ('Number must be between 1 and 3999');

    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let roman = '';

    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            roman += syms[i];
            num -= val[i];
        }
    }
    return roman;
}

function romanToInt(roman) {
    if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman))
        return ('Invalid Roman numeral');

    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        const next = romanMap[roman[i + 1]] || 0;
        
        if (current < next) {
            num += next - current;
            i++;
        } else {
            num += current;
        }
    }
    return num;
}
