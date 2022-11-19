         
    export function initialiseTheToc () {
        if(!window.jQuery){
            alert('jQuery not included!');
        }
        //Include plugin
        console.log("initialising the toc");
        $("#dinamicTOC").dynamicContentMenu({
            'theme' : "material",
            'selectors' : "h1 #TOCitem",
            'extendPage': false // do not increase page height
        });
    };