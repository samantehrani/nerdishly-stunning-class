(function() {
    if (document.readyState != "loading") {
        let m = new SimpleModal('mymodal');
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            let m = new SimpleModal('mymodal');
        }, false);
    }

})();