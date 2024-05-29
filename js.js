function generateList(array) {
    let result = "<ul>\n";
    
    array.forEach(item => {
        result += "    <li>";
        
        if (Array.isArray(item)) {
            result += "<ul>\n";
            item.forEach(subItem => {
                result += "            <li>" + subItem + "</li>\n";
            });
            result += "        </ul>\n";
        } else {
            result += item;
        }
        
        result += "</li>\n";
    });
    
    result += "</ul>\n";
    return result;
}

// Приклад використання:
let array = [1, 2, [1.1, 1.2, 1.3], 3];
console.log(generateList(array));
