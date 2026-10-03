const sketch = require("./sketch");

function loop(dependency) {
    while (sketch.running()) {
        
        sketch.update(dependency);
        sketch.draw(dependency);
    }
}

function main() {
    const dependency = sketch.setup();
    
    loop(dependency);
    sketch.teardown();
}


main();

