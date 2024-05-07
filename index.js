// Countdown and display message using setTimeout without named functions or loops

// Start the countdown from 10 to 1

let counter = document.getElementById('root');
let h1 = document.createElement('h1')
counter.appendChild(h1)
console.log(h1)
setTimeout(function() {
    h1.innerHTML = ""
    h1.innerHTML = '1';
    setTimeout(function() {
        h1.innerHTML = ""
        h1.innerHTML = '9';
        setTimeout(function() { 
            h1.innerHTML = ""
           h1.innerHTML = '8';
            setTimeout(function() {
                h1.innerHTML = ""
                h1.innerHTML = '7';
                setTimeout(function() {
                    h1.innerHTML = ""
                    h1.innerHTML = '6';
                    setTimeout(function() {
                        h1.innerHTML = ""
                        h1.innerHTML = '5';
                        setTimeout(function() {
                            h1.innerHTML = ""
                            h1.innerHTML = '4';
                            setTimeout(function() {
                                h1.innerHTML = ""
                                h1.innerHTML = '3'; 
                                setTimeout(function() {
                                    h1.innerHTML = ""
                                    h1.innerHTML = '2'; 
                                    setTimeout(function() {
                                        h1.innerHTML = ""
                                        h1.innerHTML = '1';
                                        // After countdown, display the message
                                        setTimeout(function() {
                                            h1.innerHTML = ""
                                            h1.innerHTML = 'Happy independence Day ';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
